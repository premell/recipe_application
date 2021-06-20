import React from "react"
import { useState, useEffect} from "react"

import { useMobxStore } from "../MobxContext"
import {observer} from "mobx-react"
import { toJS } from "mobx"

import "./EditRecipe.css"
import { recipes} from "../data"



const EditRecipe  = observer(() => {

	const mobxStore = useMobxStore()


	const [ updatedRecipe, setUpdatedRecipe] = useState({})

	console.log("Edit recipe recipe ", recipes)

	useEffect(() => {
		console.log("in useEffect ", toJS(mobxStore.currentlyEdited))
		setUpdatedRecipe(toJS(mobxStore.currentlyEdited))
	}, [mobxStore.currentlyEdited])

	const close = () => {
		console.log("hejsan")
		const recipeToEdit = recipes.filter(recipe => recipe.id === updatedRecipe.id)

		console.log("found recipe ", recipeToEdit)
		console.log("update recipe ", updatedRecipe)
		console.log(recipeToEdit === updatedRecipe)




	}

	const save = () => {

	}


	return(
		<>
		<div className="container">
				<button className="button" onClick={close}>Close</button>
				<div className="content_container">
				<div className="input_field">{updatedRecipe.name}</div>
				<button className="button" onClick={save}>Save</button>
				</div>
		</div>
		</>
	)
})

export default EditRecipe  
