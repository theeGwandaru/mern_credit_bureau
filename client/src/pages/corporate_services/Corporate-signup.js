import React, { Component } from "react";

import InstitutionService from '../../services/institutionService';

export default class CorporateSignUpPage extends Component {

    constructor() {
        super();
        this.state = { institution: {}}
        this.institutionService = new InstitutionService();
    }

    handleInputChange = (event) => {
        let key = event.target.getAttribute('name');
        let value = event.target.value;
        let institution = this.state.institution;
        institution[key] = value;
        this.setState({institution});

        console.log(this.state);
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.institutionService.createInstitution(this.state.institution)
            .then((response) => {
                console.log(response);
            });
    }
    render() {
        return (
            <div className="container">
                <br />  <p className="text-center"></p>
                <hr></hr>
                <div className="card bg-light">
                    <div className="card-body mx-auto" style={{ maxWidth: "300px" }}>
                        <h4 className="card-title text-center">Create Account</h4>
                    </div>
                    <form className="inline-form">


                        <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                            <label className="col-sm-2 col-form-label">Organization Name</label>
                            <div className="col-sm-10">
                                <input name="name" type="text" className="form-control" onChange={this.handleInputChange}/>
                            </div>
                        </div>

                        <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                            <label className="col-sm-2 col-form-label">Registration Number</label>
                            <div className="col-sm-10">
                                <input name="registrationNumber" type="text" className="form-control" onChange={this.handleInputChange}/>
                            </div>
                        </div>

                        <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                            <label className="col-sm-2 col-form-label">Email Address</label>
                            <div className="col-sm-10">
                                <input name="insitutionEmail" type="text" className="form-control" onChange={this.handleInputChange}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                                    <label className="col-sm-2 col-form-label">P.O Box</label>
                                    <div className="col-sm-10">
                                        <input name="postalNumber" type="text" className="form-control" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                                    <label className="col-sm-2 col-form-label">Code</label>
                                    <div className="col-sm-10">
                                        <input name="postalCode" type="text" className="form-control" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                                    <label className="col-sm-2 col-form-label">Country</label>
                                    <div className="col-sm-10">
                                        <input name="postalCountry" type="text" className="form-control" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                                    <label className="col-sm-2 col-form-label">City / Town</label>
                                    <div className="col-sm-10">
                                        <input name="postalTown" type="text" className="form-control" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                                    <label className="col-sm-2 col-form-label">Admin Surname</label>
                                    <div className="col-sm-10">
                                        <input name="surname" type="text" className="form-control" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                                    <label className="col-sm-2 col-form-label">Admin Other Names</label>
                                    <div className="col-sm-10">
                                        <input name="otherNames" type="text" className="form-control" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                                    <label className="col-sm-2 col-form-label">Admin Email Address</label>
                                    <div className="col-sm-10">
                                        <input name="email" type="text" className="form-control" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                <button className="btn btn-lg btn-success" onClick={this.onSubmit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}