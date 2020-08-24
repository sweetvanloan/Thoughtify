import React, {Component} from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';

 class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
    }

    setNotes() {

    }

    handleaddNote(newNote) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote]
      })
    }

    handleUpdatePosts = (posts) => {
      this.setState ({ posts });
    }

  }

  
  render(){
    return (
      
      <div className="App">
      <MainPage addNote={this.state.addNote} 
        posts={this.state.posts}
      />
      </div>
      
      
    )
  }
}

export default App;
