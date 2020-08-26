import React, { Component } from 'react'
import postsService from '../../utils/postsService'
class CreatePost extends Component{
    state={
        title: '',
        body: '',
    }
    handleChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault(); console.log("yoo this is handleSubmit")
        await postsService.create(this.state);
    }
    render() {
        return(
            <>
            <h3>create a post</h3>
            <form onSubmit={this.handleSubmit}>

                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    name='title' 
                    placeholder='name your post'
                />
                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    name='body' 
                    placeholder="What's on your mind? How do you feel?"
                />
                <button>add post</button>

            </form>
            </>
        )
    }
}

export default CreatePost