import React, { Component } from 'react'
import postsService from '../../utils/postsService'
import Fab from "@material-ui/core/Fab";
import styles from './CreatePost.module.css'
import AddIcon from '@material-ui/icons/Add'

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
            <div className={styles.card}>
            {/* <h3>create a post</h3> */}
            <form className={styles.create}
            onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    name='title' 
                    placeholder='name your post'
                />
                <textarea 
                    onChange={this.handleChange} 
                    type="text" 
                    name='body' 
                    placeholder="What's on your mind? How do you feel?"
                />
               <Fab onSubmit={this.handleSubmit}>
                   <AddIcon />
               </Fab>
            </form>
            </div>
        )
    }
}

export default CreatePost