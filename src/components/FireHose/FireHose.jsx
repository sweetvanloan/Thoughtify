import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';


function FireHose(props) {
    // console.log("firehouse", props)
    return (
        <div>
            <h1>Firehose view</h1>
            {props.posts.map((post, idx) =>
                <div key={idx}>
                    <Post
                        title={post.title}
                        idx={post._id}
                    />
                </div>
            )}
            <CreatePost />
        </div>
    )
}

export default FireHose