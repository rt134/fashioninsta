import React, { Component } from 'react';
import HomePage from '../../pages/Home/HomePage';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
// import ShopPage from '../../pages/Shop/Shop';
import ShopPage from '../../pages/Shop/Shop';
import Header from '../Header/Header';
import SignInSignUp from '../../pages/signin-signup/signin-signup';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path= '/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
