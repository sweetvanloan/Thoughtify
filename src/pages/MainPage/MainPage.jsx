import React, { Component } from 'react';
import FireHose from '../../components/FireHose/FireHose';
import Posts from '../../components/Posts/Posts'
import NavBar from '../../components/NavBar/NavBar'
import postsService from '../../utils/postsService';


class MainPage extends Component() {
    
    async componentDidMount(){
        const posts = await postsService.index();
        this.props.handleUpdatePosts(posts);
    }

        render(){
            <>
            <NavBar />
            <PersonalView />
            <FireHose  posts={props.posts}/>
             </>
        }
   
}

export default MainPage