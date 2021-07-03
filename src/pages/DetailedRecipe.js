import React from "react";

import { useRecoilState } from "recoil";
import { recipes as recipesAtom } from "../atoms";

import { useParams, Link } from "react-router-dom";

import { useEffect } from "react";

let name;
let categories;
const DetailedRecipe = () => {
  const { id } = useParams();

  const [recipes, setRecipes] = useRecoilState(recipesAtom);
  useEffect(() => {
    const chosenRecipe = recipes.filter((recipe) => recipe.id === id);
    name = chosenRecipe[0].name;
  });
  return (
    <div>
      <Link to="/">GO BACK TO HOME</Link>
      <h1>{name}</h1>
    </div>
  );
};

export default DetailedRecipe;
