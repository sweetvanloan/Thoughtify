import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import userService from '../../utils/userService'

class LoginPage extends Component {

state = {
    username: '',
    password: ''
};

handleChange =(e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await userService.login(this.state);

        this.props.handleLogin();
        this.props.history.push('/');
    } catch (err) {
        alert("Invalid Credentials!!!")
    }
}

    render() {
        return (
                <div className="LoginPage">
                    <header className="header-footer">Log In</header>
                    <form className="form-horizontal" onSubmit={this.handleSubmit} >
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input type="text" className="form-control" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="password" onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12 text-center">
                          <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                          <Link to='/'>Cancel</Link>
                        </div>
                      </div>
                    </form>
                  </div>
        );
    }

}

export default LoginPage