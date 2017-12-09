import React from 'react'
import NavBar from './NavBar'
import DaveName from './DaveName'

class Header extends React.Component {
	render(){
		return(
			<div className="header">
			<DaveName />
			<NavBar />
			</div>
		)
	}
}

export default Header