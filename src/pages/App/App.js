import React, {Component} from 'react';
import Posts from '../../components/Posts/Posts'
import NavBar from '../../components/NavBar/NavBar'
import FireHose from '../../components/FireHose/FireHose'
import './App.css';

 class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <>
      <div className="App">
      <NavBar />
        <Posts />
      </div>
      <FireHose />
      </>
    )
  }
}

export default App;
