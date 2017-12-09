import React, { Component } from 'react';
import './App.css';
import FormContainer from './components/FormContainer'
import Header from './components/Header'
import homeImage from './components/homeImage'
import PostsContainer from './components/PostsContainer'
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
    
    return (
        <div className="App">
        <div><Header/></div>
        <Route exact path="/" render={homeImage}/>
        <Route path="/posts" render={(props) => <PostsContainer {...props} /> } /> 
        <Route path="/write" render={FormContainer} />
        </div>
    );
  }
}

export default App;
