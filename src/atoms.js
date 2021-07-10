import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

export const isCurrentlyEditing = atom({
  key: "isCurrentlyEditing",
  default: {
    name: "",
    img: "",
    rating: 0,
    categories: [],
    id: "",
  },
});

export const showEdit = atom({
  key: "showEdit",
  default: false,
});

export const currentlyLoading = atom({
  key: "currentlyLoading",
  default: false,
});

export const recipes = atom({
  key: "recipes",
  default: [
    {
      name: "Meat Balls",
      img: "2MGIxF.jpg",
      rating: 3.5,
      categories: ["Desert", "Vegetarian"],
      id: "1StGXR8_Z5jdHi6B-myT",
    },
    {
      name: "Pancakes",
      img: "2MGIxF.jpg",
      rating: 3.5,
      categories: ["Main course"],
      id: "V1StGXR8_Z5jdHi6B-myT",
    },
    {
      name: "Hamburgare",
      img: "2MGIxF.jpg",
      rating: 3.5,
      categories: ["Main course"],
      id: "asdf1StGXR8_Z5jdHi6B-myT",
    },
    {
      name: "Meat Balls",
      img: "2MGIxF.jpg",
      rating: 3.5,
      categories: ["Desert", "Vegetarian"],
      id: "1StGXR8_Z5jdHi6B-myT",
    },
    {
      name: "Meat Balls",
      img: "2MGIxF.jpg",
      rating: 3.5,
      categories: ["Desert", "Vegetarian"],
      id: "1StGXR8_Z5jdHi6B-myT",
    },
    {
      name: "Meat Balls",
      img: "2MGIxF.jpg",
      rating: 3.5,
      categories: ["Desert", "Vegetarian"],
      id: "1StGXR8_Z5jdHi6B-myT",
    },
    {
      name: "Meat Balls",
      img: "2MGIxF.jpg",
      rating: 3.5,
      categories: ["Desert", "Vegetarian"],
      id: "1StGXR8_Z5jdHi6B-myT",
    },
    {
      name: "Meat Balls",
      img: "2MGIxF.jpg",
      rating: 3.5,
      categories: ["Desert", "Vegetarian"],
      id: "1StGXR8_Z5jdHi6B-myT",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const availableCategories = atom({
  key: "availableCategories",
  default: [
    { label: "Vegetarian", value: "Vegetarian" },
    { label: "Gluten-free", value: "Gluten-free" },
    { label: "Dairy-free", value: "Dairy-free" },
    { label: "Desert", value: "Desert" },
    { label: "Main course", value: "Main course" },
    { label: "Breakfast", value: "Breakfast" },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const availableIngredients = atom({
  key: "availableIngredients",
  defautl: ["Milk"],
  effects_UNSTABLE: [persistAtom],
});

export const editSaved = atom({
  key: "editSaved",
  default: true,
});
export const unsavedWarning = atom({
  key: "unsavedWarning",
  default: false,
});
export const updatedRecipe = atom({
  key: "updatedRecipe",
  default: {
    name: "",
    img: "",
    rating: 0,
    categories: [""],
    id: "",
  },
});

export const recipeToAdd = atom({
  key: "recipeToAdd",
  default: {
    name: "",
    img: "",
    rating: 0,
    categories: [""],
    instructions: ["hejsan", "vadå då", ""],
    id: "",
  },
});
