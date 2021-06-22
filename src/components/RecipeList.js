import React from "react"

import RecipeCard from "./RecipeCard"
 
const RecipeList = ({recipes}) => {
	return(
		<>
		{recipes.map((recipe) =>{
			return <RecipeCard key={recipe.id} recipe={recipe}/>
		})}
			</>
	)
}

export default RecipeList 
