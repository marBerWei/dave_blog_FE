import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
      	<NavLink activeClassName="active" className="item" to="/consulting">Consulting</NavLink>
        <NavLink activeClassName="active" className="item" to="/posts">Blog</NavLink>
        <NavLink activeClassName="active" className="item" to="/me">About Me</NavLink>
        <NavLink activeClassName="active" className="item" to="/contact">Contact</NavLink>
      </div>
    )
  }
}


export default NavBar