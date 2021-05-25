import React, { Component } from 'react';
import HomePage from '../../pages/Home/HomePage';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        {/* <HomePage /> */}
        <BrowserRouter>
          <Switch>
            <Route path= '/' component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
