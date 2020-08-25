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


export default FireHose