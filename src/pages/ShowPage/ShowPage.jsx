import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
import postsService from '../../utils/postsService';

class ShowPage extends Component {

    constructor(props) {
        super(props);
        console.log("PROPS in SHOW0: ", props)
        this.state.post.handlePost(this.props)

    }

    async componentDidMount() {
        // const { id } = await useParams();
        const post = await postsService.show();
        this.props.handleUpdatePosts(post);
        console.log("PROPS in SHOWPAGE 1= ", this.props)
        // this.props.handlePost(this.props)
        console.log("PROPS in SHOWPAGE = ", this.props.title);
    }


    render() {
        return ( // {props.posts.findById((post, idx) => ....
            <div key={this.props.idx}>
                <h2>POST</h2>
                <h1>{this.props.idx.title}</h1>
                <p>{this.props.idx.body}</p>
            </div>
        )
    }
}
export default ShowPage;






// function ShowPage(props) {


//     console.log("PROPS in SHOWPAGE = ", props.title);
//     const { id } = useParams();

//     return (
//         <div>
//             <h1>POST</h1>
//             <h1>{props.idx.title}</h1>
//             <p>{props.idx.body}</p>
//         </div>
//     )
// }
// export default ShowPage;