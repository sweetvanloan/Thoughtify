import React, { Component } from 'react';
import postsService from '../../utils/postsService';

class ShowPage extends Component {

    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const post = await postsService.show();
        this.props.handleUpdatePosts(post);
    }
    render() {
        return (
            <div key={this.props.idx}>
                <h1>{this.props.location.state.post.title}</h1>
                <p>{this.props.location.state.post.body}</p>
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