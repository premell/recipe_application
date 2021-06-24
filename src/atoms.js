import {atom } from "recoil"
import { recoilPersist} from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const currentlyEdited = atom({
  key:"currentlyEdited",
  default:{}
})

export const showEdit = atom({
	key:"showEdit",
	default: false,
})

export const currentlyLoading = atom({
	key:"currentlyLoading",
	default: false,
})

export const recipes = atom({
	key:"recipes",
	default:[
	{
		name:"Meat Balls",
		categories:[
			"Desert",
			"Vegetarian"
		],
		id:"1StGXR8_Z5jdHi6B-myT"
	},
	{
		name: "Pancakes",
		categories:[
			"Main course"
		],
		id:"V1StGXR8_Z5jdHi6B-myT"
	},
	{
		name: "Hamburgare",
		categories:[
			"Main course"
		],
		id:"asdf1StGXR8_Z5jdHi6B-myT"
	}
]
,effects_UNSTABLE: [persistAtom],
})

export const availableCategories = atom({
	key:"availableCategories",
	default:[
	"Vegetarian",
	"Gluten-free",
	"Dairy-free",
	"Desert",
	"Main course",
	"Breakfast"
	]
,effects_UNSTABLE: [persistAtom],
})

export const availableIngredients = atom({
key:"availableIngredients",
defautl:[
	"Milk"
	]
,effects_UNSTABLE: [persistAtom],
})

export const editSaved = atom({
	key:"editSaved", 
	default: true,
})
export const unsavedWarning= atom({
	key:"unsavedWarning", 
	default: false,
})
export const updatedRecipe= atom({
	key:"updatedRecipe", 
	default: {},
})
export const recipeToAdd= atom({
	key:"recipeToAdd", 
	default: {
		name:"",
		id: "",
		categories:[
			""
		],



		},
})
