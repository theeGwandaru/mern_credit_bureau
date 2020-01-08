import React, { Component } from 'react';
import CorporateNavbar from '../../components/CorporateNavbar';
import CorporateSidebar from '../../components/CorporateSidebar';

export default class DataSubmissionPage extends Component {

    render() {
        return (
            <div>
                <CorporateNavbar />
                <main className="site-main">
                    <CorporateSidebar />
                    <div className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">

                                    <div className="card-body">
                                        <div className="card-title">
                                            <h5 className="text-center">Credit Data Submission</h5>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">File</label>
                                                        <input type="file" className="form-control-file" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="button" className="btn btn-lg btn-primary" value="submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h5 className="text-center">Past Submissions</h5>
                                        </div>
                                        <table id="submission-files-table" className="table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>File Name</th>
                                                    <th>Submission Date</th>
                                                    <th>Submitter</th>
                                                    <th>Number of records</th>
                                                    <th>Process Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>222221</td>
                                                    <td>CRBBMF20191229001</td>
                                                    <td>20191222</td>
                                                    <td>John Doe</td>
                                                    <td>1.5M</td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{width: "75%"}}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>222221</td>
                                                    <td>CRBBMF20191229001</td>
                                                    <td>20191222</td>
                                                    <td>John Doe</td>
                                                    <td>1.5M</td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{width: "75%"}}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>222221</td>
                                                    <td>CRBBMF20191229001</td>
                                                    <td>20191222</td>
                                                    <td>John Doe</td>
                                                    <td>1.5M</td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{width: "75%"}}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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