import React, { Component } from 'react';
import HomePage from '../../pages/Home/HomePage';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import ShopPage from '../../pages/Shop/Shop';
import Header from '../Header/Header';
import SignInSignUp from '../../pages/signin-signup/signin-signup';
import { auth } from '../../firebase/firebase';


class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user });
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
