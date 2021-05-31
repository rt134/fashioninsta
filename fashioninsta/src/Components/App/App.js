import React, { Component } from 'react';
import HomePage from '../../pages/Home/HomePage';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import ShopPage from '../../pages/Shop/Shop';
import Header from '../Header/Header';
import SignInSignUp from '../../pages/signin-signup/signin-signup';
import { auth,createUserProfileDocument } from '../../firebase/firebase';


class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser : user });
      // createUserProfileDocument(user);

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          this.setState ({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({
          currentUser : userAuth
        })
      }
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
            <Route exact path= '/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
