import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

import userService from '../../utils/userService';
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }

    handleSignup = () => {
      console.log()
      this.setState({user: userService.getUser()})
    }

    handleLogin = () => {
      this.setState({user: userService.getUser()})
    }
    render() {
      return (
        <Switch>
          <Route exact path="/" render={props => 
            <LandingPage />}>
          </Route>
          <Route 
            exact path="/main" render={props => (
              userService.getUser() ? 
              <MainPage posts={this.state.posts} handleLogout={this.handleLogout}/> 
              : <Redirect to='/login'/>
            )}
          ></Route>
          <Route 
            exact path="/signup" render={props => 
            <SignupPage handleSignup={this.handleSignup} {...props}/>
          }></Route>
          <Route exact path="/login" render={props => 
            <LoginPage handleLogin={this.handleLogin} {...props} />
          }>  
          </Route>
        </Switch>
      )
    }
  
}





export default App;
