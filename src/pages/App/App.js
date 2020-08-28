import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../SignupPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import EditPage from '../EditPage/EditPage';
import ShowPage from '../ShowPage/ShowPage';
import DeletePage from '../DeletePage/DeletePage';
import userService from '../../utils/userService';
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      post: {
        title: "",
        body: "",
        id: ""
      },
    }
  }
  handleSignup = () => {
    this.setState({ user: userService.getUser() })
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }
  handleLogin = () => {
    this.setState({ user: userService.getUser() })
  }
  handleUpdatePosts = (posts) => {
    this.setState({ posts })
  }
  handlePost = (posts) => {
    this.setState({
      post: {
        id: posts._id
      }
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props =>
          <LandingPage />}>
        </Route>
        <Route
          exact path="/main" render={props => (
            userService.getUser()
              ? <MainPage
                  posts={this.state.posts}
                  handleLogout={this.handleLogout}
                  handleUpdatePosts={this.handleUpdatePosts}
                  handlePost={this.handlePost}
                  // handleDelete={this.handleDelete}
              />
              : <Redirect to='/login' />
          )}>
        </Route>
        {/* Note: Please keep the EditPage route above the ShowPage route so long as the ShowPage route does not have an exact path */}
        <Route
          exact path="/posts/:id/edit" render={(props) => (
            <EditPage
              posts={this.state.posts}
              post={this.state.post}
              {...props}
            />
        )}>
        </Route>
        <Route 
          exact path="/posts/:id/delete" render={(props) => (
            <DeletePage 
              post={this.state.post}
              {...props}
            />
        )}>
        </Route>
        <Route
          exact path="/posts/:id" render={(props) => (
            <ShowPage
              posts={this.state.posts}
              handlePost={this.handlePost}
              post={this.state.post}
              {...props}
            />
        )}>
        </Route>
        <Route
          exact path="/signup" render={props =>
            <SignupPage handleSignup={this.handleSignup} {...props} />
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
