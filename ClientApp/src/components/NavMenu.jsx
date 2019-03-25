import React from 'react';

export default props => (
    <React.Fragment>
        <nav className="flex-container top-header">
            <div className="flex-item">
                    <p>Contact support</p>
                </div>
            <div className="flex-item">
                <a href="#collapse1" className="downarrow" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse1">
                    <img src="https://img.icons8.com/metro/26/000000/chevron-down.png" alt="dropdown icon"/>
                </a>
            </div>
        </nav>
        <div className="collapse" id="collapse1">
            <div className="blue">
            </div>
        </div>

        <nav className="flex-container bottom-header">
            <div className="flex-item">
                <div className="flex-logo">
                    <div className="shape bg-primary-color" />
                    <p className="text-primary-color">24SevenOffice</p>
                </div>
            </div>
            <div className="flex-item">
                <a href="#contact" className="btn bg-primary-color text-light" role="button" aria-disabled="true">Prøv Gratis</a>
                <a href="#contact" className="btn btn-secondary" role="button" aria-disabled="true">
                    <b className="text-dark">Login</b>
                </a>
            </div>
        </nav>
    </React.Fragment>
);
