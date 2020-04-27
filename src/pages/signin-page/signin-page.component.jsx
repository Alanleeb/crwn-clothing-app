import React, { Component } from 'react';

import './signin-page.styles.scss';

import SignIn from '../../components/signin/signin.components';

class SigninPage extends Component {

    render() {
        return(
            <div className="sign-in-page">
                <SignIn />
            </div>
        )
    }
}

export default SigninPage;