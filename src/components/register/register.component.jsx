import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './register.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '', userName: '', confirmPassword: ''})
    }

    handleChange = (e) => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I Dont have an account</h2>
                <span>Register here</span>
                <p>Already have an account? <Link to="/signin">Sign in</Link></p>


                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="userName" 
                    type="text" 
                    value={this.state.userName} 
                    handleChange={this.handleChange}
                    label="user name"
                    required />
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="password"
                    required />
                    <FormInput 
                    name="confirm password" 
                    type="password" 
                    value={this.state.confirmPassword}
                    handleChange={this.handleChange}
                    label="confirm password"
                    required />

                    <CustomButton type="submit">Register</CustomButton>
                </form>
            </div>
        )
    }
}

export default Register;