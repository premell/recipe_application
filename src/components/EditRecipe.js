import React from "react"
import { useEffect} from "react"

import { useMobxStore } from "../MobxContext"
import {observer} from "mobx-react"
import { toJS } from "mobx"
import useState from "react-usestateref"

import "./EditRecipe.css"
import { recipes} from "../data"

import { useDetectClickOutside } from 'react-detect-click-outside';
import { flattenObject } from "../utils/flattenObject"
import { compareObjects } from "../utils/compareObjects"



const EditRecipe  = observer(() => {

	const mobxStore = useMobxStore()

	const [ updatedRecipe, setUpdatedRecipe, updatedRecipeRef] = useState({})

	useEffect(() => {
		setUpdatedRecipe(toJS(mobxStore.currentlyEdited))
		console.log("currentlyUpdated ", updatedRecipeRef.current)
	}, [mobxStore.currentlyEdited])

	const save = () => {


	}

	const closeEdit = () =>{
		const currentUpdated = updatedRecipeRef.current

		const recipeIsEmpty = Object.keys(currentUpdated).length === 0
		if(mobxStore.showEdit === false || recipeIsEmpty) return


		//console.log(currentUpdated)
		let recipeToEdit = recipes.filter(recipe => recipe.id === currentUpdated.id)
		//console.log("LENGTH ", recipeToEdit.length)

		if(compareObjects(recipeToEdit[0], currentUpdated)){
			console.log("save before exiting!")
		}else{
			setUpdatedRecipe({})
			mobxStore.removeCurrentlyEdited()
			mobxStore.setHideEdit()
		}
	}

const ref = useDetectClickOutside({ onTriggered: closeEdit});

	return(
		<>
		<div className="container" ref={ref}>
				<button className="button" onClick={closeEdit}>Close</button>
				<div className="content_container">
				<div className="input_field">{updatedRecipe.name}</div>
				<button className="button" onClick={save}>Save</button>
				</div>
		</div>
		</>
	)
})

export default EditRecipe  
