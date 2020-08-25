import React, { Component } from 'react';
import FireHose from '../../components/FireHose/FireHose';
import PersonalView from '../../components/PersonalView/PersonalView'
import NavBar from '../../components/NavBar/NavBar'
import postsService from '../../utils/postsService';


class MainPage extends Component {
    
    async componentDidMount(){
        const posts = await postsService.index();
        this.props.handleUpdatePosts(posts);
    }

        render(props){
            return <>
            <NavBar />
            <PersonalView />
            <FireHose  />

             </>
        }
   
}

export default MainPage