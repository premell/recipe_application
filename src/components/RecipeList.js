import React from "react"

import RecipeCard from "./RecipeCard.js"
 
const RecipeList = ({recipes}) => {
	return(
		<>
		{recipes.map((recipe,index) =>{
			return <RecipeCard key={index} recipe={recipe}/>
		})}
			</>
	)
}

export default RecipeList 
