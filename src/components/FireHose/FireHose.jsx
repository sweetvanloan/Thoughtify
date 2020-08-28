import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';
import styles from './FireHose.module.css'

function FireHose(props) {
    return (

        <div className={styles.hoseview}>
            
            {props.posts.map((post, idx) =>
                <div key={idx}>
                    <Post
                        title={post.title}

                        // handlePost={props.post}
                        post={post}

                    />
                </div>
            )}
            <CreatePost />
        </div>
    )
}

export default FireHose