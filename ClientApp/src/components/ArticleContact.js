import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';

const ArticleContact = props => (
    <article id="contact">
        <div className="flex-container">
            <div className="flex-item half">
                <h1>Ta kontakt for et tilbud!</h1>
                <p>Fyll in skjerma fhjskdh fisuyd fiusbnd itoeurn. tigeurh wygedu fieughi fhie gruni o9ne e</p>
            </div>
            <div className="flex-item half">
                <div className="component">
                    <ContactForm />
                </div>
            </div>
        </div>
  </article>
);

export default connect()(ArticleContact);
