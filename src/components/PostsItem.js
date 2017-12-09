import React from 'react'
import { Link } from 'react-router-dom'

class PostsItem extends React.Component {
	componentWillUnmount() {}
	state = {
		posts: []
	}

	render(){
		const { post } = this.props
		return(
			<div className = "post">
			  <h3><Link to={"/posts/" + post.id}>{this.props.post.title}</Link></h3>
			</div>
		)
	}

}

export default PostsItem