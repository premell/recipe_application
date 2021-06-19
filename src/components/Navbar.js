import React from "react"
import {Link } from "react-router-dom"



const Navbar = () => {

	return(
		<nav>
			<div>
				<Link to="/">Home
				</Link>
				<Link to="/add_recipe">Add Recipe
				</Link>
				<Link to="/generate_list">Generate List
				</Link>

			</div>
		</nav>
	)


}


export default Navbar
