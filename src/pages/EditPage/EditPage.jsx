import React, {Component} from 'react';
import postsService from '../../utils/postsService';
import styles from './EditPage.module.css'
import EditIcon from '@material-ui/icons/Edit';
import Fab from "@material-ui/core/Fab";

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
        this.props.history.push('/main');
    }
    render() {
        return(
            <div className={styles.EditPage}> 
                <div className={styles.edit}>
                    <p>Edit</p>
                    <form className={styles.form}
                        onSubmit={this.handleSubmit}
                    >
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name='title' 
                            placeholder={'Title'}
                        />
                        <textarea
                            onChange={this.handleChange} 
                            type="text" 
                            name='body' 
                            placeholder={'Content'}
                        />
                        {/* <button>update post</button> */}
                        <Fab>
                            <EditIcon />
                        </Fab>
                    </form>
                </div>
            </div>
        )
    }
}   
export default EditPage;