import React from "react"

import { useRecoilState } from 'recoil';

import {recipes as recipesAtom} from "../atoms"

import { useParams, Link } from "react-router-dom"

import {useEffect} from "react"


const DetailedRecipe = () => {
	const { id } = useParams()

	const [recipes, setRecipes] = useRecoilState(recipesAtom)
	useEffect(() => {
		const recipe = recipes.filter(recipe => recipe.id === id)
		let { name, categories } = recipe[0]
	})
	return(
		<div>
		</div>
	)
}

export default DetailedRecipe 
