import React from "react";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";

import { useRecoilState } from "recoil";
import {
  showEdit as showEditAtom,
  currentlyEdited as currentlyEditedAtom,
  editSaved as editSavedAtom,
} from "../atoms";

import RecipeListCss from "./RecipeList.module.css";

const RecipeCard = ({ recipe }) => {
  const [currentlyEdited, setCurrentlyEdited] =
    useRecoilState(currentlyEditedAtom);
  const [showEdit, setShowEdit] = useRecoilState(showEditAtom);
  const [editSaved, setEditSaved] = useRecoilState(editSavedAtom);
  console.log(`../images/${recipe.img}`);

  const setEdited = () => {
    if (!editSaved && showEdit) return;
    setShowEdit(true);
    setCurrentlyEdited(recipe);
  };

  const goToDetails = () => {};

  return (
    <div className={`${RecipeListCss.recipe_card}`}>
      <img src={require(`../images/${recipe.img}`).default} />
      <div className={RecipeListCss.card_desc}>
        <p>hejsan</p>
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
