import React from 'react';

function Post(props){
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
       <div>
           <h1>{props.title}</h1>
           <p>{props.content}</p>
           <button onClick={handleClick}>ADD
           </button>
       </div>
    )
}

export default Post