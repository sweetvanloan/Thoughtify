import React, {Component} from 'react';
import postsService from '../../utils/postsService';
import {Link} from 'react-router-dom';
class DeletePage extends Component {
    handleDelete = async (e) => {
        
        // e.preventDefault();
        await postsService.delete(this.props.location.state.post._id);
        this.props.history.push('/main');
    }
    render() {
        return(
            <div>
            <h3>are you sure you want to delete your post?</h3>
            {/* <button onClick={this.handleDelete}>Yes, I'm sure</button> */}
            <Link onClick={this.handleDelete} to='/main'>Yes, I'm sure</Link>
            <Link to='/main'>No, go back</Link>
            </div>
        )
    }
}
export default DeletePage;