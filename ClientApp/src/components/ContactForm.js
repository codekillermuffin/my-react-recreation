import React from 'react';
import { connect } from 'react-redux';

const ContactForm = props => (
    <form action="/">
        <div className="form-group">
            <label for="email">Email address:</label>
            <input type="email" className="form-control" id="email"/>
        </div>
        <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd"/>
        </div>
        <div className="checkbox">
            <label>
                <input type="checkbox"/> Remember me
            </label>
        </div>
        <button type="submit" className="btn bg-primary-color text-light">Submit</button>
    </form>

);

export default connect()(ContactForm);
