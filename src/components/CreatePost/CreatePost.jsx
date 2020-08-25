import React from 'react'


function CreatePost(props) {
    

    return <div>
        <form>
            <input
                name="title"
                placeholder="Title"
            />
            <textarea
                name="content"
            />

        </form>
    </div>

}

export default CreatePost