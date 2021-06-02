import React from 'react';
import './signin-signup.scss';
import SignIn from '../../Components/Signin/Signin' 
import SignUp from '../../Components/Signup/Sign-up';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
  
  export default SignInAndSignUpPage;