import React from 'react';
import './signin-signup.scss';
import SignIn from '../../Components/Signin/Signin' 
import SignUp from '../../Components/Signup/Sign-up';


const SignInSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <div className='signIn'><SignIn /></div>
            <div className='signUp'><SignUp /></div>
        </div>
    );
}

export default SignInSignUp; 