import React from 'react'
import ProfileText from './ProfileText'
const Profile = (props) => {

	  return(
	  	<div className="profile-container">
	  	  <div className="profile-list">
		  	  <img className="profile-pic" src={require('./Head_Shot.jpeg')}/>
		  	  <h3>About Me</h3>
		  	  <ProfileText/>
	  	  </div>
	  	</div>
	  )

}

export default Profile