import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { putAccessToken, getUserLogged } from "../utils/api";
import { LocaleProvider } from "../contexts/LocaleContext";
class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authedUser: null,
            initializing: true,
            localeContext: {
                locale: localStorage.getItem("locale") || "id",
                localeToggle: () => {
                    this.setState((prevState) => {
                        const newLocale =
                            prevState.localeContext.locale === "id"
                                ? "en"
                                : "id";
                        localStorage.setItem("locale", newLocale);
                        return {
                            localeContext: {
                                ...prevState.localeContext,
                                // jika locale context sama dengan id maka ubah menjadi eng
                                locale: newLocale,
                            },
                        };
                    });
                },
            },
        };
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
                initializing: false,
            };
        });
    }
    onLogout() {
        this.setState(() => {
            return {
                authedUser: null,
            };
        });
        putAccessToken("");
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        this.setState(() => {
            return {
                authedUser: data,
            };
        });
    }

    render() {
        if (this.state.initializing) {
            return null;
        }
        if (this.state.authedUser == null) {
            return (
                <LocaleProvider value={this.state.localeContext}>
                    <div className="contact-app">
                        <header className="contact-app__header">
                            <h1>Aplikasi Kontak</h1>
                        </header>
                        <main>
                            <Routes>
                                <Route
                                    path="/*"
                                    element={
                                        <LoginPage
                                            loginSuccess={this.onLoginSuccess}
                                        />
                                    }
                                />
                                <Route
                                    path="/register"
                                    element={<RegisterPage />}
                                />
                            </Routes>
                        </main>
                    </div>
                </LocaleProvider>
            );
        }

        return (
            <LocaleProvider value={this.state.localeContext}>
                <div className="contact-app">
                    <header className="contact-app__header">
                        <h1>
                            {this.state.localeContext.locale === "id"
                                ? "Aplikasi kontak"
                                : "Contact App"}
                        </h1>
                        <Navigation
                            logout={this.onLogout}
                            name={this.state.authedUser.name}
                        />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/add" element={<AddPage />} />
                        </Routes>
                    </main>
                </div>
            </LocaleProvider>
        );
    }
}
export default ContactApp;
