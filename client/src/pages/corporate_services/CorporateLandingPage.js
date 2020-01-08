import React, { Component } from "react";
import {Link, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthenticationService from "../../services/authenticationService";

export default class CorporateLandingPage extends Component {

    constructor(props){
        super(props);
        this.authenticationService = new AuthenticationService();
        this.state = {email: null, password:null, authenticated: false};
    }

    handleInputChange = (event)=>{
        let key = event.target.getAttribute('name');
        let value = event.target.value;

        let state = this.state;
        state[key] = value;
        this.setState(state);
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.authenticationService.login(this.state)
        .then((response)=>{
            console.log(response);
            if(response.data.token && typeof response.data.token == "string"){
                localStorage.setItem("token", response.data.token);
                let state = this.state;
                state.authenticated = true;
                this.setState(state);
            }
            else{
                console.log('failed authe')
                toast.error("Username or password is incorrect");
            }
        });
    }

    render() {
        if(this.state.authenticated){
            return <Redirect to="/corporate/corporate-dash"/>
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
                                        <label >username</label>

                                        <input name="email" type="text" className="form-control" onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group row">
                                        <label>password</label>

                                        <input name="password" type="passowrd" className="form-control" onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-lg-12 text-center">
                                            <button className="btn btn-lg btn-success" onClick={this.onSubmit}>Sign In</button>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12 text-center">
                                            <Link to="/corporate/corporate-signup">Create an Account</Link>
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