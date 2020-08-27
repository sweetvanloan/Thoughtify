import React from 'react';
import styles from './Post.module.css'
import { Link } from "react-router-dom"


function Post(props) {

    console.log("PROPS in POST = ", props.title);
    console.log("PROPS IDX in POST", props.idx)
    console.log("PROPS POST in POST", props.post)
    console.log("PROPS in POST", props)
    return (

        
            <div className={styles.Post}>
                <div className={styles.card}>
                    <h4>{props.title}</h4>
                  <Link to={
                `/posts/${props.idx}`
            }>
                <button>See Post</button>
            </Link>
                </div>
            </div>
      
    )
}
export default Post;