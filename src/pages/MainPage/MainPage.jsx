import React, { Component } from 'react';
import FireHose from '../../components/FireHose/FireHose';
import PersonalView from '../../components/PersonalView/PersonalView'
import NavBar from '../../components/NavBar/NavBar'
import postsService from '../../utils/postsService';
import {Route, Link} from 'react-router-dom';
class MainPage extends Component {
    async componentDidMount() {
        const posts = await postsService.index();
        this.props.handleUpdatePosts(posts);
    }
    render() {
        return (
            <>
                <h1>Thoughtify</h1>
                    <NavBar 
                        handleLogout={this.props.handleLogout} 
                    />
                    <PersonalView />
                    <FireHose 
                        posts={this.props.posts} 
                        handlePost={this.props.handlePost}
                    />
            </>
        )
    }
}
export default MainPage