import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import creditCardImg from '../assets/img/undraw_Credit_card_3ed6.svg';
import onlineTransactions from '../assets/img/undraw_online_transactions_02ka.svg';
import percentages from '../assets/img/undraw_percentages_0rur.svg';
import dataReport from '../assets/img/undraw_data_report_bi6l.svg';

export default class LandingPage extends Component {

    render() {
        return (
            <div>
                <header>
                    <div className="nav-outer-container">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg fixed-top">
                                <a className="navbar-brand" href="/">
                                    Concept Credit Bureau
                </a>
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#nav-content">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div id="nav-content" className="collapse navbar-collapse">
                                    <ul className="navbar-nav my-2">
                                        <li className="nav-item"><Link to="/consumer" className="nav-link">Consumer Services</Link></li>
                                        <li className="nav-item"><Link to="/corporate" className="nav-link">Corporate Services</Link></li>
                                        <li className="nav-item"><Link to="/staff" className="nav-link">Staff</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>

                <main className="site-main">
                    <section className="what-we-do">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h1>
                                        <span>We</span>
                                        <span>help</span>
                                        <span>You unlock the credit market</span>
                                    </h1>
                                </div>
                                <div className="col-6">
                                    <img src={creditCardImg} className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-we-do-it">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>
                                        <span>How do we do this?</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <img src={onlineTransactions} className="img-fluid" alt=""/>
                                </div>
                                <div className="col-6">
                                    <h2>
                                        Credit providers send us information about you
                        </h2>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>
                                        We aggregate this data and create your credit profile
                        </h2>
                                </div>
                                <div className="col-6">
                                    <img src={percentages} className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <img src={dataReport} className="img-fluid" alt=""/>
                                </div>
                                <div className="col-6">
                                    <h2>
                                        We then perform analysis on your profile and make recommendations on your credit worthiness
                        </h2>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h3>
                                        <span>Concept</span>
                                        <span>Credit Bureau</span>
                                    </h3>
                                </div>
                                <div className="col-md-4">
                                    <h3>
                                        Services
                        </h3>
                                    <ul className="list-unstyled">
                                        <li><a href="/">Consumer Services</a></li>
                                        <li><a href="/">Corporate Services</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h6>Community</h6>
                                    <ul className="list-unstyled">
                                        <li><a href="/">Forum</a></li>
                                        <li><a href="/">Knowledgebase</a></li>
                                        <li><a href="/">Hire an Expert</a></li>
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        )
    }
}