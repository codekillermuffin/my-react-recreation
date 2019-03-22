import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <React.Fragment>
        <nav className="flex-container top-header">
            <div className="flex-item">
                <p>Contact support</p>
            </div>
        </nav>
        <nav className="flex-container bottom-header">
            <div className="flex-item">
                <div className="flex-logo">
                    <div className="shape bg-primary-color" />
                    <p className="text-primary-color">24SevenOffice</p>
                </div>
            </div>
            <div className="flex-item">
                <a href="#contact" className="btn bg-primary-color text-light" role="button" aria-disabled="true">Prøv Gratis</a>
                <a href="#contact" className="btn btn-secondary disabled" role="button" aria-disabled="true">
                    <b className="text-dark">Login</b>
                </a>
            </div>
        </nav>
    </React.Fragment>
);
