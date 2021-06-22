import React from "react"
import {useState, useEffect } from "react"

import RecipeList from "../components/RecipeList"
import CategoryFilter from "../components/CategoryFilter"
import RarityFilter from "../components/RarityFilter"
import IngredientFilter from "../components/IngredientFilter"
import EditRecipe from "../components/EditRecipe"
import UnsavedWarning from "../components/UnsavedWarning"

import {useRecoilState } from "recoil"
import {editSaved as editSavedAtom, unsavedWarning as unsavedWarningAtom, recipes as recipesAtom, showEdit as showEditAtom, currentlyEdited as currentlyEditedAtom} from "../atoms"

const Home = () => {

	const [filteredRecipes, setFilteredRecipes] = useState([])
	const [categoryFilters, setCategoryFilters] = useState(['all'])
	const [ingredientFilters, setIngredientFilters] = useState(['all'])

	const [ currentlyEdited, setCurrentlyEdited] = useRecoilState(currentlyEditedAtom)
	const [ showEdit, setShowEdit] = useRecoilState(showEditAtom)
	const [ recipes, setRecipes] = useRecoilState(recipesAtom)

	const [editSaved, setEditSaved] = useRecoilState(editSavedAtom);
	const [unsavedWarning, setUnsavedWarning] =useRecoilState(unsavedWarningAtom);
 
	useEffect(() => {
		setFilteredRecipes(recipes)
	}, [recipes])

	useEffect(() => {
		let recipesToFilter = recipes

		if(!categoryFilters.includes("all")){
		categoryFilters.forEach((category) => {
			recipesToFilter = recipesToFilter.filter(recipe => recipe.categories.includes(category))
		})

		}
		if(!ingredientFilters.includes("all")){
		ingredientFilters.forEach((ingredient) => {
			recipesToFilter = recipesToFilter.filter(recipe => recipe.categories.includes(ingredient))
		})
			}

		setFilteredRecipes(recipesToFilter)

	}, [categoryFilters,  ingredientFilters])

	const updateCategoryFilters = (categories) => {
		setCategoryFilters(categories)
	}

	const updateIngredientsFilters = (ingredients) => {
		setIngredientFilters(...ingredients)
	}

	return(
		<>
			<div style={{display : `${unsavedWarning? 'block' : "none" }`}}>
				<UnsavedWarning/>
			</div> 
			<div style={{display : `${showEdit ? 'block' : "none" }`}}>
				<EditRecipe/>
			</div>
			<CategoryFilter updateCategoryFilters={updateCategoryFilters}/>
			<IngredientFilter updateIngredientsFilters={updateIngredientsFilters}/>
			<RecipeList recipes={filteredRecipes}/>
		</>
	)
}

export default Home 
