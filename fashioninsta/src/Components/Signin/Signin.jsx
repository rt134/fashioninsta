import React, { Component } from 'react';
import './signin.scss';
import FormInput from '../Form-input/Form-input'
import CustomButton from '../Custom-button/Custom-button'
import { signInWithGoogle } from '../../firebase/firebase';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email : '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]:value});
    }

    render(){
        return (
            <div className='sign-in'>
                <h2> I already have an Account </h2>
                <span>Sign in with your email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email'
                    type='email' 
                    handleChange={this.handleChange} 
                    label='email' 
                    value={this.state.email} required 
                    />
                    
                    <FormInput name='password' 
                    type='password' 
                    handleChange={this.handleChange} 
                    label="password" 
                    value={this.state.password} required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;