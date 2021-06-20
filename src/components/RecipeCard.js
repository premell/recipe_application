import React from "react"
import {Link } from "react-router-dom"

import { useMobxStore } from "../MobxContext"

const RecipeCard = ({recipe}) => {

	const mobxStore = useMobxStore()

	const setEdited = () => {
		mobxStore.setShowEdit()
		mobxStore.setCurrentlyEdited(recipe)
	}

	const goToDetails = () => {
				


	}

	return(
		<>
			<Link to={`/recipe/${recipe.id}`}>
				details
				</Link>
		<div onClick={goToDetails}>
		{recipe.name}
		</div>
		<button onClick={setEdited}>Edit</button>

		</>
	)
}

export default RecipeCard 
