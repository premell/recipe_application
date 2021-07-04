import {makeAutoObservable,  makePersistable } from 'mobx-persist-store';
import { useEffect } from "react"
import {  autorun } from "mobx"

export function createMobxStore() {



	return {
		recipes: [
			{
				name: 'Meat Balls',
				categories: ['Desert', 'Vegetarian'],
				id: '1StGXR8_Z5jdHi6B-myT',
			},
			{
				name: 'Pancakes',
				categories: ['Main course'],
				id: 'V1StGXR8_Z5jdHi6B-myT',
			},
		],
		setRecipes(recipes) {
			this.recipes = recipes;
		},
		availableCategories: [
			'Vegetarian',
			'Gluten-free',
			'Dairy-free',
			'Desert',
			'Main course',
			'Breakfast',
		],
		setAvailableCategories(categories) {
			this.availableCategories = categories;
		},
		availableIngredients: ['Milk'],
		setAvailableIngredients(ingredients) {
			this.availableIngredients = ingredients;
		},
		isCurrentlyEditing: {},
		etIsCurrentlyEditing(recipe) {
			this.isCurrentlyEditing = recipe;
		},
		removeisCurrentlyEditing(recipe) {
			this.isCurrentlyEditing = {};
		},
		showEdit: false,
		setShowEdit() {
			this.showEdit = true;
		},
		setHideEdit() {
			this.showEdit = false;
		},
		currentlyLoading: false,
	};
}



export default {};
