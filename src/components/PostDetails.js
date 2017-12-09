import React from 'react'

class PostDetails extends React.Component {
    
  render() {
  	console.log(this.props)

    return (
      
      <div className="postDetails">
        <h2 className="title">{this.props.post.title}</h2>
        <p className="body">{this.props.post.body}</p>
      </div>

    )
  }
}
export default PostDetails