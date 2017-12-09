import React from 'react'
import PostsList from './PostsList'
import PostDetails from './PostDetails'
import { fetchPosts } from '../actions/posts' // addBook, removeBook, 
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class PostsContainer extends React.Component {


	componentDidMount() {
	  this.props.fetchPosts()
	}

	// state = {
	// 	posts: this.props.posts
	// }


	render(){
		console.log(this.props)
		return(
			<div className = 'post-container'>
			
			<Route exact path="/posts" render={(props) => <PostsList posts={this.props.posts} {...props} />}/>

            <Route path="/posts/:id" render={(routeProps) => {
                	
                    const id = routeProps.match.params.id
                    console.log(id)
                    const post = this.props.posts.filter((post) => {
                    	 return post.id === parseInt(id)
 
                  }) 
                  return <PostDetails post={post[0]} {...routeProps} />
              }} />
			</div>
		)
	}

}

function mapStateToProps(state) {
  console.log(state)
  return {
    posts: state.posts.list,
    isFetching: state.posts.isFetching
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
  	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)