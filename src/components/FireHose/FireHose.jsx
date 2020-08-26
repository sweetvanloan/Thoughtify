import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';


function FireHose(props) {
    // console.log("firehouse", props)
    return (
        <>
        <div>firehose</div>
        <CreatePost  />
        {/* {props.posts.map((post, idx) => 
            <div key={idx}>
                <Post title={post.title}/>
            </div>
        )} */}
        </>
    )
}

export default FireHose