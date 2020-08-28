import React, { Component } from 'react';
import FireHose from '../../components/FireHose/FireHose';
import PersonalView from '../../components/PersonalView/PersonalView'
import NavBar from '../../components/NavBar/NavBar'
import postsService from '../../utils/postsService';
import { Route, Link } from 'react-router-dom';
import styles from './MainPage.module.css'
class MainPage extends Component {
  async componentDidMount() {
    const posts = await postsService.index();
    this.props.handleUpdatePosts(posts);
  }
  render() {
    return (
      <div className={styles.container}>
        <h1 >Thoughtify</h1>
        <NavBar className={styles.NavBar} handleLogout={this.props.handleLogout} />
        <div className={styles.PersonalView}><PersonalView />
        </div>
        <div>
          <FireHose className={styles.FireHose}
            posts={this.props.posts}
            handlePost={this.props.handlePost}
            // handleDelete={this.props.handleDelete}
          />
        </div>
      </div >
    )
  }
}
export default MainPage