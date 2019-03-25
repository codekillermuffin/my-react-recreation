import React from 'react';
import { connect } from 'react-redux';
import ArticleIntro from './ArticleIntro';
import ArticlePricing from './ArticlePricing';
import ArticleContact from './ArticleContact';

const Home = props => (
    <React.Fragment>
        <ArticleIntro />
        <hr />
        <ArticlePricing />
        <hr/>
        <ArticleContact />
    </React.Fragment>
);

export default connect()(Home);
