import React from 'react';
import styles from './Post.module.css'
function Post (props) {
    return (
        
            <div className={styles.Post}>
                <div className={styles.card}>
                    <h4>{props.title}</h4>
                </div>
            </div>
       
    )
}
export default Post;