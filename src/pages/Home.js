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
	const [categoryFilters, setCategoryFilters] = useState(['all'])
	const [rarityFilters, setRarityFilters] = useState(['all'])
	const [ingredientFilters, setIngredientFilters] = useState(['all'])

	const mobxStore = useMobxStore()


	useEffect(() => {
	},[mobxStore.showEdit])


	useEffect(() => {
		setFilteredRecipes(recipes)
	}, [recipes])

	useEffect(() => {
		let recipesToFilter = recipes

		if(!categoryFilters.includes("all")){
		categoryFilters.forEach((category,index) => {
			recipesToFilter = recipesToFilter.filter(recipe => recipe.categories.includes(category))
		})

		}
		if(!categoryFilters.includes("all")){

		rarityFilters.forEach((rarity,index) => {
			recipesToFilter = recipesToFilter.filter(recipe => recipe.categories.includes(rarity))
		})
		}
		if(!categoryFilters.includes("all")){
		ingredientFilters.forEach((ingredient,index) => {
			recipesToFilter = recipesToFilter.filter(recipe => recipe.categories.includes(ingredient))
		})
			}

		setFilteredRecipes(recipesToFilter)
	
	}, [categoryFilters, rarityFilters, ingredientFilters])


	const updateCategoryFilters = (categories) => {
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
