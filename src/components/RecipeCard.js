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
} from "../atoms";

import RecipeListCss from "./RecipeList.module.css";

const RecipeCard = ({ recipe }) => {
  const [isCurrentlyEditing, setIsCurrentlyEditing] =
    useRecoilState(isCurrentlyEditingAtom);
  const [showEdit, setShowEdit] = useRecoilState(showEditAtom);
  const [editSaved, setEditSaved] = useRecoilState(editSavedAtom);

  const [updatedRecipe, setUpdatedRecipe] = useRecoilState(updatedRecipeAtom)

  const setEdited = () => {
    if (!editSaved && showEdit) return;
    setShowEdit(true);
    console.log(recipe)
    setUpdatedRecipe({...recipe});
  };

  return (
    <div className={`${RecipeListCss.recipe_card}`}>
      <img src={require(`../images/${recipe.img}`).default} />
      <div className={RecipeListCss.card_desc}>
        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>

        <ReactStars
          count={5}
          value={recipe.rating}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          edit={false}
        />
        <div onClick={setEdited} className={RecipeListCss.edit_btn}>
          Edit Recipe
        </div>
      </div>
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
