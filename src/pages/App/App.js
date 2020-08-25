import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import userService from '../../utils/userService';

import LandingPage from '../LandingPage/LandingPage';
import MainPage from '../MainPage/MainPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

 class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      user: userService.getUser()
    }
  }
    handleLogout = () => {
      userService.logout();
      this.setState({user: null});
    }

    handleSignup = () => {
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
              <MainPage handleLogout={this.handleLogout}/> 
              : <Redirect to='/login'/>
            )}
          ></Route>
          <Route 
            exact path="/signup" render={props => 
            <SignupPage handleSignup={this.handleSignup}/>
          }></Route>
          <Route exact path="/login" render={props => 
            <LoginPage handleLogin={this.handleLogin} />
          }>  
          </Route>
        </Switch>
      )
    }
  
}

export default App;
