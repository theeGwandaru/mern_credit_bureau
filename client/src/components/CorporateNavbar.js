import React, {Component} from 'react';

export default class CorporateNavbar extends Component {

    render(){
        return (
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
                                    <ul className="navbar-nav my-2 ml-auto">
                                        <li className="nav-item"><a href="/" className="nav-link">Sign Out</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
        )
    }
}