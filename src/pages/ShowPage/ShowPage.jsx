import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
import postsService from '../../utils/postsService';

class ShowPage extends Component {

    constructor(props) {
        super(props);
        console.log("Props in showpage:", props)
    }

    async componentDidMount() {
        const post = await postsService.show();
        this.props.handleUpdatePosts(post);
        console.log("PROPS in SHOWPAGE 1= ", this.props);
        this.props.handlePost(this.props)
        console.log("PROPS in SHOWPAGE = ", this.props.title);
    }


    render() {
        return (
            <div>
                <h2>POST</h2>
                <h1>{this.props.location.state.post.title}</h1>
                <p>{this.props.location.state.post.body}</p>
            </div>
        )
    }
}
export default ShowPage;
