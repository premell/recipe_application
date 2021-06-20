import React from "react"

import { useMobxStore } from "../MobxContext"

const RecipeCard = ({recipe}) => {

	const mobxStore = useMobxStore()

	const setEdited = () => {
		console.log("clicked")
		mobxStore.setShowEdit()
		mobxStore.setCurrentlyEdited(recipe)
		console.log("recipe in recipecard ", recipe)
	}

	return(
		<>

		<div>
		{recipe.name}
		</div>
		<button onClick={setEdited}>Edit</button>

		</>
	)
}

export default RecipeCard 
