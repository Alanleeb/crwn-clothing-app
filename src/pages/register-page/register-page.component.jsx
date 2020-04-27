import React, { Component } from 'react';

import './register-page.styles.scss';


import Register from '../../components/register/register.component';

class RegisterPage extends Component {

    render() {
        return(
            <div className="register-page">
                <Register />
            </div>
        )
    }
}

export default RegisterPage;