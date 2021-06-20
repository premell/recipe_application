import React from "react"
import  {useEffect} from "react"

import DropDown from "../components/DropDown.js"

import availableCategories from "../data.js"

const CategoryFilter = ({ updateCategoryFilters }) => {

	const updateCategories = () => {
		//const categories = ["Desert","Vegetarian"]
		const categories = ["all"]
		updateCategoryFilters(categories)
	}
	useEffect(() => {

		updateCategories()

	},[])

	return(
		<DropDown updateSelected={updateCategories} possibleAlternatives={availableCategories.availableCategories} />
	)
}
export default CategoryFilter 
