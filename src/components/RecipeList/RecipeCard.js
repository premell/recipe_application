import React from "react";

import { useEffect } from "react";

import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import {
  showEdit as showEditAtom,
  isCurrentlyEditing as isCurrentlyEditingAtom,
  editSaved as editSavedAtom,
  updatedRecipe as updatedRecipeAtom,
} from "../../atoms";

import RecipeListCss from "./RecipeList.module.css";

const RecipeCard = ({ recipe }) => {
  const [isCurrentlyEditing, setIsCurrentlyEditing] = useRecoilState(
    isCurrentlyEditingAtom
  );
  const [showEdit, setShowEdit] = useRecoilState(showEditAtom);
  const [editSaved, setEditSaved] = useRecoilState(editSavedAtom);

  const [updatedRecipe, setUpdatedRecipe] = useRecoilState(updatedRecipeAtom);

  const setEdited = () => {
    if (!editSaved && showEdit) return;
    setShowEdit(true);
    console.log(recipe);
    setUpdatedRecipe({ ...recipe });
  };

  return (
    <div className={`${RecipeListCss.recipe_card}`}>
      <div className={RecipeListCss.image_container}>
        <a href={`recipe/${recipe.id}`}>
          <div className={RecipeListCss.gray_overlay}>
            <p>Open</p>
          </div>
          <img src={require(`../../images/${recipe.img}`).default} />
        </a>
      </div>
      <span className={RecipeListCss.name}>{recipe.name}</span>
    </div>
  );
};

export default RecipeCard;
{
  /* <Link to={`/recipe/${recipe.id}`}>details</Link> */
}
{
  /* <div onClick={goToDetails}>{recipe.name}</div> */
}
{
  /* <div></div> */
}
{
  /* <button onClick={setEdited}>Edit</button> */
}
