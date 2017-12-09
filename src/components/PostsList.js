import React from 'react'
import PostsItem from './PostsItem'

const PostsList = props => {
	console.log(props)
	const postItems = props.posts.map((post, i) => {
		return <PostsItem key={i} post={post} />
	})
	return (
		<div className = "post-list">{postItems}</div>
	)
}

export default PostsList