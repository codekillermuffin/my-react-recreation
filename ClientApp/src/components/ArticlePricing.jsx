import React from 'react';
import { connect } from 'react-redux';

const ArticlePricing = props => (
    <article>
        <h1 className="center">Get more out of 24SevenOffice with add-ons & integration</h1>
        <div className="flex-container">
            <div className="flex-item component">
                <div className="component-header">
                    <h2>Lønn</h2>
                    <h2>35,-</h2>
                </div>
                <p>Vi tilbyr en meget fleksibel og enkel
                prismodell mot regnskapsbyråer.</p>
                <br />
                <p>Priser er pr. måned</p>
            </div>
            <div className="flex-item component">
                <div className="component-header">
                    <h2>Lagring</h2>
                    <h2>449,-</h2>
                </div>
                <p>Vi tilbyr en meget fleksibel og enkel
                prismodell rettet mot
                regnskapsbyråer.</p>
                <br />
                <p>Priser er pr. account pr. måned</p>
            </div>
            <div className="flex-item component">
                <div className="component-header">
                    <h2>Telefonsupport</h2>
                    <h2>500,-</h2>
                </div>
                <p>Vi tilbyr en meget fleksibel og enkel
                prismodell mot regnskapsbyråer.
                </p>
                <br />
                <p>Priser er pr. måned</p>
            </div>
        </div>
    </article>
);

export default connect()(ArticlePricing);
