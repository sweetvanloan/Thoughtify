import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';
import styles from './FireHose.module.css'

function FireHose(props) {
    // console.log("firehouse", props)
    return (
        <div className={styles.hoseview}>
        

        {props.posts.map((post, idx) => 
            <div key={idx}>
                <Post 
                    title={post.title}
                />
            </div>
        )}
        <CreatePost />
        </div>
    )
}

export default FireHose