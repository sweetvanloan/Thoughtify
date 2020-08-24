import React from 'react'

function CreatePost(props){
    function handleChange(e){
        const {name, value} = e.target;

        setNotes((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }
   
return <div>
    <form>
        <input
        name="title"
        onChange={handleChange}
        value={post.title}
        placeholder="Title"
        />
        <textarea 
         onChange={handleChange}
         name="content"
         value={post.content}   
        />
       
    </form>
</div>
    
}

export default CreatePost