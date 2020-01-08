import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticationService from '../services/authenticationService';
import { Redirect } from 'react-router-dom';

export default class SetPasswordPage extends Component {

    constructor(props) {
        super(props);
        this.state = { user: {}, password: null, confirmPassword: null, passwordResetSuccess: false };
        this.authenticationService = new AuthenticationService();
    }

    componentDidMount() {
        const { token } = this.props.match.params;
        this.authenticationService.getUserByToken(token)
            .then((response) => {
                let user = response.data;
                this.setState({ user: user });
            });

    }

    handleInputChange = (event) => {
        let key = event.target.getAttribute('name');
        let value = event.target.value;
        let state = this.state;
        state[key] = value;
        this.setState(state);
    }

    onSubmit = (event) => {
        event.preventDefault();

        let user = this.state.user;
        user.password = this.state.password;
        this.authenticationService.setPassword(user)
            .then((response) => {
                this.setState({ passwordResetSuccess: true });
            });
    }

    render() {
        if (this.state.passwordResetSuccess) {
            return <Redirect to="/corporate" />
        }
        return (
            <main className="site-main">
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="wrapper">
                            <div className="form-container">
                                <form className="form">
                                    <div className="form-group row">
                                        <label>Surname</label>
                                        <input name="password" type="text" className="form-control" readOnly value={this.state.user.surname || ''} />
                                    </div>
                                    <div className="form-group row">
                                        <label>Other Names</label>
                                        <input name="password" type="text" className="form-control" readOnly value={this.state.user.otherNames || ''} />
                                    </div>
                                    <div className="form-group row">
                                        <label >password</label>

                                        <input name="password" type="text" className="form-control" onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group row">
                                        <label>confirm password</label>

                                        <input name="confirmPassword" type="passowrd" className="form-control" onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-lg-12 text-center">
                                            <button className="btn btn-lg btn-success" onClick={this.onSubmit}>Sign In</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}