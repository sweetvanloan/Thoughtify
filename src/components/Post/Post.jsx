import React from 'react';
import styles from './Post.module.css'
import { Link } from "react-router-dom"


function Post(props) {

    return (


        <div className={styles.Post}>
            <div className={styles.card}>
                <h4>{props.title}</h4>
                <Link to={
                    {
                        pathname: `/posts/${props.post._id}`,
                        state: { post: props.post }
                    }
                }> See Post
                </Link>
            </div>
        </div>

    )
}
export default Post;