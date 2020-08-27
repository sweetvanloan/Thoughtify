import React from 'react';
import styles from './Post.module.css'
import { Link } from "react-router-dom"


function Post(props) {

    // console.log("PROPS.title in POST = ", props.title);
    // console.log("PROPS.idx IDX in POST", props.idx)
    // console.log("PROPS.post POST in POST", props.post)
    // console.log("PROPS in POST", props)

    // const newPost = props.post

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
                    {/* <button onClick={
                        (e) => {
                            props.handlePost(e, newPost)
                        }
                    }>See Post</button> */}
                </Link>
            </div>
        </div>

    )
}
export default Post;