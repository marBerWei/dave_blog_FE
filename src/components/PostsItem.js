import React from 'react'
import { Link } from 'react-router-dom'

class PostsItem extends React.Component {

	parseBody = (titleBody) => {
	  if(titleBody){
		return titleBody.slice(0,50) + '...'
	  } else {
		return "no content"
	  }
	}

	componentWillUnmount() {}
	state = {
		posts: []
	}

	render(){
		const { post } = this.props
		const lowercase = this.props.post.title.toUpperCase()
		const titleBody = this.parseBody(this.props.post.body)
		return(
			<Link to={"/posts/" + post.id} style={{ textDecoration: 'none' }}><div className = "post-item">
			  <img className="post-image" src={require('./marketing.jpeg')}/>
			  <div className = "post-title">
			    <div className="post-title">{lowercase}</div>
			    <div className="body">{titleBody}</div>
			  </div>
			</div>
			</Link>
		)
	}

}

export default PostsItem