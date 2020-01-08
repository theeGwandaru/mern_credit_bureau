import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class StaffLoginPage extends Component {

    render() {
        return (
            <main class="site-main">
                <div class="container">
                    <div class="row">
                        <div class="wrapper">
                            <div class="form-container">
                                <form class="form">
                                    <div class="form-group row">
                                        <label >username</label>

                                        <input type="text" class="form-control" />
                                    </div>

                                    <div class="form-group row">
                                        <label>password</label>

                                        <input type="passowrd" class="form-control" />
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-lg-12 text-center">
                                            <Link to="/corporate/corporate-dash" class="btn btn-lg btn-success">Sign In</Link>
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