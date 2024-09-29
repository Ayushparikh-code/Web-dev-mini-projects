import PropTypes from "prop-types";
import { login } from "../utils/api";
import React from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
        if (!error) {
            loginSuccess(data);
        }
    }
    return (
        <section className="login-page">
            <h2>Silakan masuk untuk melanjutkan ...</h2>
            <LoginInput login={onLogin} />
            <p>
                Belum punya akun?
                <Link to={"/register"}>Daftar disini</Link>
            </p>
        </section>
    );
}
LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
