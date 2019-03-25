import React from 'react';
import { connect } from 'react-redux';

function renderArray() {
    const attributes = ["Regnskap",
        "Prosjekstyring",
        "CRM",
        "Faktura og ordre",
        "Timeregistrering",
        "Godkjenning",
        "Reiseregning og kjørebok"
    ];
    return attributes.map((line, index) =>
        index < 3 ? (
            <li key={index}>
                <p>✓</p>
                <p>{ line }</p>
                <p>✓</p>

            </li>
        ) : (
            <li key={index}>
                <p>✓</p>
                <p>{ line }</p>
            </li>
        )
    )
}

const ArticleIntro = props => (
    <article>
        <div className="flex-container">
            <div className="flex-item vertical-center">
                <h1>Priser for bedrifter</h1>
                <b>Din bedrift betaler per bruker per måned</b>
                <b>Forutsigbart og enkelt</b>
                <br />
                <p>
                    Alle selskaper må minimum ha en «Start»-bruker,
                    som også er brukeradmin. Detetter kan du velge
                    pakker og enkeltmoduler - og knytte disse til ansatte
                    i selskapet. Mobilversjonen av systemet følger
                    brukerens tilganger på desktop.
                </p>
            </div>
            <div className="flex-item art-bg">
                <div className="component intro-card">
                    <h2>24SevenOffice</h2>
                    <h2>Start</h2>
                    <div className="flex-container  price-container text-primary-color">
                        <h1 className="flex-item">649,-</h1>
                        <div className="flex-item">
                            <small>Per måned</small>
                            <small>fakturert årlig</small>
                        </div>
                    </div>
                    <ul className="attributes">{ renderArray() }</ul>
                    <div className="flex-container button-container">
                        <div className="flex-item">
                            <a href="#collapse2" className="btn bg-primary-color text-light" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapse2">
                                Prøv gratis
                            </a>
                    </div>
                        <div className="flex-item">
                            <a href="#contact" className="btn bg-secondary-color text-light" role="button" aria-pressed="true">
                                Få tilbud
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="collapse" id="collapse2">
            <div className="blue">
            </div>
        </div>
    </article>
);

export default connect()(ArticleIntro);
