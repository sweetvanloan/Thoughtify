import React from 'react';
import styles from './PersonalView.module.css'
import Post from '../Post/Post'
import postsService from '../../utils/postsService';

function PersonalView(props){
   

    return (
       <div className={styles.PersonalView}>
        <h1>Personal View</h1>
        {/* {props.posts.map((post, idx) => 
            <div key={idx}>
                <Post className={styles.post}
                    title={post.title}
                />
            </div>
        )} */}
       </div>
    )
}

export default PersonalView