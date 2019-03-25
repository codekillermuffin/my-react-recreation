import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';

const ArticleContact = props => (
    <article id="contact">
        <div className="flex-container">
            <div className="flex-item">
                <h1>Ta kontakt for et tilbud!</h1>
                <p>Fyll inn skjemaet under for å bli kontaktet av en av våre
                dyktige konsulenter for kartlegging av din bedrifts behov -
                eller om du ønsker et tilbud.
                </p>
            </div>
            <div className="flex-item">
                <ContactForm />
            </div>
        </div>
  </article>
);

export default connect()(ArticleContact);
