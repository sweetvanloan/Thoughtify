import React, { Component } from 'react';
import postsService from '../../utils/postsService';
import styles from './ShowPage.module.css'
import { Fab } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import BackspaceIcon from '@material-ui/icons/Backspace';

class ShowPage extends Component {

    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const post = await postsService.show();
        this.props.handleUpdatePosts(post);

        this.props.handlePost(this.props)
    }

    render() {
        return (
            <div className={styles.flex}>
                <div className={styles.ShowPage}
                    key={this.props.idx}>
                        <h3>{this.props.location.state.post.title}</h3>
                        <p>{this.props.location.state.post.body}</p>
                        <br />
                        {/* <a href="/"> */}
                        <Fab>
                        <a href="/"> <HomeIcon /></a>
                        </Fab>
                        
                        {/* </a> */}
                        {/* <a href="/main"> */}
                        <Fab>
                        <a href="/main"><BackspaceIcon /></a>
                        </Fab>
                        
                </div>
            </div>
        )
    }
}
export default ShowPage;
