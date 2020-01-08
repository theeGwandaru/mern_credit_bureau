import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import CorporateNavbar from '../../components/CorporateNavbar';
import CorporateSidebar from '../../components/CorporateSidebar';


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

export default class CorporateDashboard extends Component {

    render() {
        return (
            <div>
                <CorporateNavbar/>
                <main className="site-main">
                    <div className="container-fluid">
                       <CorporateSidebar />

                        <div className="content">
                            <section>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h6>Total Insitutions</h6>
                                                </div>
                                                34
                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h6>Credit Checks today</h6>
                                                </div>
                                                34
                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h6>Credit Checks this week</h6>
                                                </div>
                                                34
                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h6>Credit Checks this month</h6>
                                                </div>
                                                34
                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h6>Revenue Today</h6>
                                                </div>
                                                34
                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h6>Revenue this month</h6>
                                                </div>
                                                34
                                </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h5>Record Loading Speed</h5>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div>
                                                    <Line ref="chart" data={data} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h5>Api Response Time</h5>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div>
                                                <Line ref="chart" data={data} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                                {/* - Number of institutions
                                - Number of users currently online
                                - Number of credit profiles
                                - Number of retail consumer profiles
                                - Number of business consumer profiles
                                - Growth of credit profiles over time
                                - Account types pie chart
                                - Account status pie chart
                                -
                              */}
            </div>

                    </div>
                </main>
            </div>
        );
    }
}