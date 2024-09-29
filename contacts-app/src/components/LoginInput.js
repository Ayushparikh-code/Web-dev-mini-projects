import PropTypes from "prop-types";
import React, { Component } from "react";

class LoginInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onEmailChangeHandler(e) {
        this.setState(() => {
            return {
                email: e.target.value,
            };
        });
    }
    onPasswordChangeHandler(e) {
        this.setState(() => {
            return {
                password: e.target.value,
            };
        });
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.login({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="login-input">
                <input
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onEmailChangeHandler}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onPasswordChangeHandler}
                />
                <button>Masuk</button>
            </form>
        );
    }
}
LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};
export default LoginInput;
