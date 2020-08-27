import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';
import styles from './FireHose.module.css'

function FireHose(props) {
    // console.log("firehouse", props)
    return (
       
        <div className={styles.hoseview}>
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