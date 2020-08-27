import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';


function FireHose(props) {
    return (
        <div>
            <h1>Firehose view</h1>
            {props.posts.map((post, idx) =>
                <div key={idx}>
                    <Post
                        title={post.title}

                        handlePost={props.post}
                        post={post}

                    />
                </div>
            )}
            <CreatePost />
        </div>
    )
}

export default FireHose