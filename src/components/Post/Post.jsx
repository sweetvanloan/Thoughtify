import React from 'react';
import styles from './Post.module.css';
import {Link} from 'react-router-dom';
function Post (props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <button>
                <Link to='/'>
                    see post
                </Link>
            </button>
        </div>
    )
}
export default Post;