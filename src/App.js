import React, { Component } from 'react';
import './App.css';
import FormContainer from './components/FormContainer'
import Header from './components/Header'
import homeImage from './components/homeImage'
import PostsContainer from './components/PostsContainer'
import Profile from './components/Profile'
// import { fetchPosts } from './services/fetchPosts'
// import { withRouter} from 'react-router'
import { Route, Redirect} from "react-router-dom";

class App extends Component {
  // state = {
  //   posts:[]
  // }
  // componentDidMount() {
  //   console.log("COMPONENTDIDMOUNTING - APP")
  //   fetchPosts()
  //     .then((json) => {
  //       this.setState({ posts: json})
  //     })
  // }
  render() {
    // the header below on lines 28/29 is an experiment...need css too
    
    return (
        <div className="App">
        <header className="App-header">
        </header>
        <div><Header/></div>
        <Route exact path="/" render={homeImage}/>
        <Route path="/posts" render={(props) => <PostsContainer {...props} /> } /> 
        <Route path="/write" render={FormContainer} />
        <Route path="/me" render={Profile} />
        </div>
    );
  }
}

export default App;
