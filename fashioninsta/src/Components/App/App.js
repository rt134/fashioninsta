import React, { Component } from 'react';
import HomePage from '../../pages/Home/HomePage';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import './App.css';
import ShopPage from '../../pages/Shop/Shop';
import Header from '../Header/Header';
import SignInSignUp from '../../pages/signin-signup/signin-signup';
import { auth,createUserProfileDocument } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../Redux/User/User-action';
 

class App extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        try{
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot( snapShot => {
            this.props.setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }catch(err){
          console.log(err);
        }
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
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path= '/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


const mapDispatchToProps  = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
