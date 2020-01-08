import React, { Component } from 'react';
import CorporateNavbar from '../../components/CorporateNavbar';
import CorporateSidebar from '../../components/CorporateSidebar';

export default class CreditCheckPage extends Component {

    render() {
        return (
            <div>
                <CorporateNavbar/>
                <main class="site-main">
                    <div class="container-fluid">
                        <CorporateSidebar />

                        <div class="content">
                            <div class="row">
                                <div class="col-12  mx-auto">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="card-title">
                                                <h5 class="text-center">Search Parameters</h5>
                                            </div>
                                            <form>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">National Id</label>
                                                            <div class="col-sm-10">
                                                                <input class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Passport Number</label>
                                                            <div class="col-sm-10">
                                                                <input class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-12 text-center">
                                                                <input type="button" class="btn btn-lg btn-primary"
                                                                    value="submit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-4">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="card-title">
                                                <h5>Search Results</h5>
                                            </div>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>id</th>
                                                        <th>Names</th>
                                                        <th>National id</th>
                                                        <th>Passport</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="clickable-row" style={{cursor: "pointer"}} onclick="window.location='./credit-profile.html'">
                                                        <td>12313213d</td>
                                                        <td>John Dow</td>
                                                        <td>54343267</td>
                                                        <td>A45678664</td>

                                                    </tr>
                                                    <tr class="clickable-row" style={{cursor: "pointer"}} onclick="window.location='./credit-profile.html'">
                                                        <td>12313213d</td>
                                                        <td>John Dow</td>
                                                        <td>54343267</td>
                                                        <td>A45678664</td>

                                                    </tr>
                                                    <tr class="clickable-row" style={{cursor: "pointer"}} onclick="window.location='./credit-profile.html'">
                                                        <td>12313213d</td>
                                                        <td>John Dow</td>
                                                        <td>54343267</td>
                                                        <td>A45678664</td>

                                                    </tr>
                                                    <tr class="clickable-row" style={{cursor: "pointer"}} onclick="window.location='./credit-profile.html'">
                                                        <td>12313213d</td>
                                                        <td>John Dow</td>
                                                        <td>54343267</td>
                                                        <td>A45678664</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}