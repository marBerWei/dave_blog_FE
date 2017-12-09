import React from 'react'
import NavBar from './NavBar'
import PostsContainer from './PostsContainer'

class RootPage extends React.Component {
	state = {
		posts: []
	}

	render(){
		return(
		<div>
			<NavBar/>
		</div>
		)
	}

}

export default RootPage