import React, {Component} from 'react';
import postsService from '../../utils/postsService';
class EditPage extends Component {
    state ={
        title: '',
        body: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        await postsService.update(this.state, this.props.location.state.post._id);
        this.props.history.push('/main')
    }
    render() {
        return(
            <>
            <h3>edit your post</h3>
            <form
                onSubmit={this.handleSubmit}
            >
                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    name='title' 
                    placeholder={'title'}
                />
                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    name='body' 
                    placeholder={'body'}
                />
                <button>update post</button>
            </form>
            </>
        )
    }
}   
export default EditPage;