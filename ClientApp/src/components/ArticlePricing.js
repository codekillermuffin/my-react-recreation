import React from 'react';
import { connect } from 'react-redux';

const ArticlePricing = props => (
    <article>
        <h1 className="center">Get more out of 24SevenOffice with add-ons & integration</h1>
        <div className="flex-container">
            <div className="flex-item component">
                <div className="component-header">
                    <h2>title</h2>
                    <h2>20,-</h2>
                </div>
                <p>voi fiusb fwiube efyiuobf edffwe</p>
                <p>voi fiusb fwiube efyiuobf edffwe</p>
            </div>
            <div className="flex-item component">
                <div className="component-header">
                    <h2>title</h2>
                    <h2>20,-</h2>
                </div>
                <p>voi fiusb fwiube efyiuobf edffwe</p>
                <p>voi fiusb fwiube efyiuobf edffwe</p>
            </div>
            <div className="flex-item component">
                <div className="component-header">
                    <h2>title</h2>
                    <h2>20,-</h2>
                </div>
                <p>voi fiusb fwiube efyiuobf edffwe</p>
                <p>voi fiusb fwiube efyiuobf edffwe</p>
            </div>
        </div>
    </article>
);

export default connect()(ArticlePricing);
