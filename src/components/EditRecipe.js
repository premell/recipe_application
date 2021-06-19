import React from "react"
import { useState, useEffect} from "react"

import { useMobxStore } from "../MobxContext"

const EditRecipe  = ({recipe}) => {

	const mobxStore = useMobxStore()

	const [ updatedRecipe, setUpdatedRecipe] = useState({})


	useEffect(() => {
		setUpdatedRecipe(mobxStore.currentlyEdited)
	}, [])


	return(
		<>
			<div>{updatedRecipe.name}</div>
			<div>edit recipe</div>
		</>
	)
}

export default EditRecipe  
