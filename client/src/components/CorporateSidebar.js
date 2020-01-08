import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class CorporateSidebar extends Component{


    render(){
        return (
            <div className="sidebar">
            <Link to="/corporate/data-submission">Data Submission</Link>
            <Link to="/corporate/credit-check">Credit Check</Link>
            <Link to="/corporate/corporate-dash">Credit Dashboard</Link>
            <Link to="/corporate/credit-query">Credit Query</Link>
        </div>
        );
    }
}