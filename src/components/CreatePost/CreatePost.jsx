import React, { Component } from 'react'
import postsService from '../../utils/postsService'
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add'
import styles from './CreatePost.module.css'

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
        this.props.history.push('/main');
    }
    render() {
        return(
            <div className={styles.card}>
            {/* <h3>create a post</h3> */}
            <form onSubmit={this.handleSubmit} className={styles.create}
            >
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
                <button>+</button>
               {/* <Fab>
                   <AddIcon />
               </Fab> */}
            </form>
            </div>
        )
    }
}

export default CreatePost