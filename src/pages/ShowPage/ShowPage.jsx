import React, { Component } from 'react';
import postsService from '../../utils/postsService';

class ShowPage extends Component {

    constructor(props) {
        super(props);
        console.log("Props in showpage:", props)
    }

    async componentDidMount() {
        const post = await postsService.show();
        this.props.handleUpdatePosts(post);
        this.props.handlePost(this.props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.location.state.post.title}</h1>
                <p>{this.props.location.state.post.body}</p>
                <br />
                <a href="/">
                    <button>Return Home</button>
                </a>
                <a href="/main">
                    <button>Return to Main</button>
                </a>
            </div>
        )
    }
}
export default ShowPage;
