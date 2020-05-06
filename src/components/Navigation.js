import React from 'react';
import {FaUser} from "react-icons/fa";

// The above library is used for the user icon displayed in navigation

const Navbar = props =>{
	return(
		<div className="navbar">
			<div className="align-item">
				<FaUser/><br/>{props.username}
			</div>
		</div>
	);
}

export default Navbar;