import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';



function ShowPage(props) {

    console.log("PROPS in SHOWPAGE = ", props.title);
    const { id } = useParams();


    return (
        <div>
            <h1>POST</h1>
            <h1>{props.idx.title}</h1>
            <p>{props.idx.body}</p>
        </div>
    )
}
export default ShowPage;


// class ShowPage extends Component {

//     async componentDidMount() {
//         const { id } = await useParams();
//         this.props.handlePost(this.props)
//         console.log("PROPS in SHOWPAGE = ", this.props.title);
//     }

//     const { id } = await useParams();

// render() {
//     return (
//         <div>
//             <h2>POST</h2>
//             <h1>{this.props.idx.title}</h1>
//             <p>{this.props.idx.body}</p>
//         </div>
//     )
// }
// }
// export default ShowPage;