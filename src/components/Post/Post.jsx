import React from 'react';
import styles from './Post.module.css'
function Post (props) {
    return (
        <div>
            <h4>{props.title}</h4>
        </div>
    )
}
export default Post;