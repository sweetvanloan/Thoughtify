import React from 'react';
import styles from './Post.module.css'
import { Link } from "react-router-dom"


function Post(props) {

    console.log("PROPS in POST = ", props.title);

    return (
        <div>
            <h4>{props.title}</h4>
            <Link to={
                `/post/${props.idx}`
            }>
                <button>See Post</button>
            </Link>
        </div>
    )
}
export default Post;