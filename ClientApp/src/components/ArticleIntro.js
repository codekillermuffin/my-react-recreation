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
    return attributes.map(line =>
        <li>
            <div className="square bg-primary-color" />
            <p>{ line }</p>
        </li>
    )
}

const ArticleIntro = props => (
    <article>
        <div className="flex-container">
            <div className="flex-item half">
                <h1>Priser for bedrifter</h1>
                <b>Din bedrift betaler per bruker per måned</b>
                <p>
                    Fyll i skjerma fhjskdh fisuyd fiusbnd itoe. gkdfjhgkd weirug
                    srtyuv  aui weyu  wfoiu. fwiuefbn wfuey  fspoi. gfjh
                    igeurhb ogeriuh iguben, eiurghi gfiuybeir. tigeurh wygedu fieughi
                    fhie gruni one
                </p>
            </div>
            <div className="flex-item half">
                <div className="component">
                    <h2>24SevenOffice Start</h2>
                    <h1 className="text-primary-color">649,-</h1>
                    <small className="text-primary-color">Per måned fakturert årlig</small>
                    <ul className="attributes">{ renderArray() }</ul>
                    <div className="flex-container">
                        <div className="flex-item">
                            <a href="#Contact" class="btn btn-primary" role="button" aria-pressed="true">Primary link</a>
                        </div>
                        <div className="flex-item">
                            <a href="#contact" class="btn btn-primary" role="button" aria-pressed="true">Primary link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
);

export default connect()(ArticleIntro);
