import React, { Component } from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';

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
              <MainPage handleLogout={this.handleLogout}/> 
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
