import React from 'react';

import CreatePost from '../CreatePost/CreatePost';
import Post from '../PersonalView/PersonalView'


function FireHose(props){
    return (
    <>
        {this.state.posts.map((post, idx) => 
        <>
            <div key={idx}>{post}</div>
        </>
        )}
        <CreatePost />
        <Post />
    </>
    )
}

// function FireHose(props) {
//     return <div>
//         FireHose VIEW
//         {this.state.posts.map((post, idx) => {
//         <div key={idx}>{post}</div>
//     })}
//         <CreatePost />
//         <Post />
//     </div>
// }


export default FireHose