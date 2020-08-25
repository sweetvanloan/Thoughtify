import React, { Component } from 'react';
import FireHose from '../../components/FireHose/FireHose';
import PersonalView from '../../components/PersonalView/PersonalView'
import NavBar from '../../components/NavBar/NavBar'
import postsService from '../../utils/postsService';
import {Route, Link} from 'react-router-dom';


class MainPage extends Component {
    
    async componentDidMount(){
        const posts = await postsService.index();
        this.props.handleUpdatePosts(posts);
    }

        render(props){
            return (<>
            <div>yooooooooo</div>
            {/* <NavBar />
            <PersonalView /> */}
            <FireHose posts={props.posts} />

             </>
            )
        }
   
}

export default MainPage