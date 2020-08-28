import React from 'react';
import styles from './Post.module.css'
import { Link } from "react-router-dom"

function Post(props) {
    // console.log("PROPS in POST", props)
    return (
        <div className={styles.Post}>
            {
                props.post ?
                    <div className={styles.card}>
                        <h4>{props.title}</h4>
                        <Link to={
                            {
                                // ⚠ React Router's link tag allows for a Link element to hold state
                                pathname: `/posts/${props.post._id}`,
                                state: { post: props.post },
                            }
                        }>
                            See post
                        </Link>
                        <Link to={
                            {
                                pathname: `/posts/${props.post._id}/edit`,
                                //holding state to pass object ID to back end
                                state: { post: props.post },
                            }
                        }>
                            Edit 
                        </Link>
                        <Link 
                            to={
                                {
                                    pathname: `/posts/${props.post._id}/delete`,
                                    state: { post: props.post }
                                }
                        }>
                            Delete🚮
                        </Link>
                    </div>
                    :
                    <h4>loading...</h4>
            }
        </div>

    )
}
export default Post;