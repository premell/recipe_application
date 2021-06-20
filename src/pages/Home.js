import React from "react"
import {useState, useEffect } from "react"
import { observer } from "mobx-react"

import RecipeList from "../components/RecipeList"
import CategoryFilter from "../components/CategoryFilter"
import RarityFilter from "../components/RarityFilter"
import IngredientFilter from "../components/IngredientFilter"
import EditRecipe from "../components/EditRecipe"


import { useMobxStore } from "../MobxContext"
import { recipes, availableIngredients, availableRarity, availableCategories  } from "../data"


const Home = observer(() => {

	const [filteredRecipes, setFilteredRecipes] = useState([])
	const [categoryFilters, setCategoryFilters] = useState(['none'])
	const [rarityFilters, setRarityFilters] = useState(['none'])
	const [ingredientFilters, setIngredientFilters] = useState(['none'])

	const mobxStore = useMobxStore()

	console.log(recipes)

	useEffect(() => {
		console.log("in Home ", mobxStore.showEdit)
	},[mobxStore.showEdit])


	useEffect(() => {
		setFilteredRecipes(recipes)
	}, [recipes])

	useEffect(() => {
		let recipesToFilter = recipes

		categoryFilters.forEach((category,index) => {
			recipesToFilter = recipesToFilter.filter(recipe => recipe.categories.includes(category))
		})
		rarityFilters.forEach((category,index) => {
			recipesToFilter = recipesToFilter.filter(recipe => recipe.categories.includes(category))
		})
		ingredientFilters.forEach((category,index) => {
			recipesToFilter = recipesToFilter.filter(recipe => recipe.categories.includes(category))
		})

		setFilteredRecipes(recipesToFilter)
	
	}, [categoryFilters, rarityFilters, ingredientFilters])


	const updateCategoryFilters = (categories) => {
    console.log("categories ",  categories)
		setCategoryFilters(categories)
	}

	const updateRarityFilters= (rarities) => {
		setRarityFilters(...rarities)
	}

	const updateIngredientsFilters = (ingredients) => {
		setIngredientFilters(...ingredients)
	}

	return(
		<>
			<div style={{display : `${mobxStore.showEdit ? 'block' : "none" }`}} className={`${mobxStore.showEdit ? 'hejsan':'hidden'}`}>
				<EditRecipe/>
			</div>
			<CategoryFilter updateCategoryFilters={updateCategoryFilters}/>
			<RarityFilter updateRarityFilters={updateRarityFilters}/>
			<IngredientFilter updateIngredientsFilters={updateIngredientsFilters}/>
			<RecipeList recipes={filteredRecipes}/>
		</>
	)
})

export default Home 
