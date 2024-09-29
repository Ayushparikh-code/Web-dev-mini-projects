import React from "react";
import { Link, Rout } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { FiHome, FiPlusCircle, FiLogOut } from "react-icons/fi";
function Navigation({ logout, name }) {
    return (
        <LocaleConsumer>
            {({ locale, localeToggle }) => {
                return (
                    <nav className="navigation">
                        <ul>
                            <li>
                                <button onClick={localeToggle}>
                                    {locale === "id" ? "en" : "id"}
                                </button>
                            </li>
                            <li>
                                <Link to="/">
                                    <FiHome />
                                </Link>
                            </li>
                            <li>
                                <Link to="/add">
                                    <FiPlusCircle />
                                </Link>
                            </li>
                            <li>
                                <button onClick={logout}>
                                    {name}
                                    <FiLogOut />
                                </button>
                            </li>
                        </ul>
                    </nav>
                );
            }}
        </LocaleConsumer>
    );
}
Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};
export default Navigation;
