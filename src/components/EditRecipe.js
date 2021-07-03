import React from "react";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";

import EditRecipeCss from "./EditRecipe.module.css";
import EditableCategories from "./EditableCategories";

import { useDetectClickOutside } from "react-detect-click-outside";
import { compareObjects } from "../utils/compareObjects";

import { useRecoilState } from "recoil";
import {
  updatedRecipe as updatedRecipeAtom,
  unsavedWarning as unsavedWarningAtom,
  editSaved as editSavedAtom,
  recipes as recipesAtom,
  showEdit as showEditAtom,
  currentlyEdited as currentlyEditedAtom,
} from "../atoms";

let localShowEdit;
let localIsSaved;
let localUnsavedWarning;
let localUpdatedRecipe;

const EditRecipe = () => {
  const [currentlyEdited, setCurrentlyEdited] =
    useRecoilState(currentlyEditedAtom);
  const [showEdit, setShowEdit] = useRecoilState(showEditAtom);
  const [recipes, setRecipes] = useRecoilState(recipesAtom);
  const [editSaved, setEditSaved] = useRecoilState(editSavedAtom);
  const [unsavedWarning, setUnsavedWarning] =
    useRecoilState(unsavedWarningAtom);
  const [updatedRecipe, setUpdatedRecipe] = useRecoilState(updatedRecipeAtom);

  useEffect(() => {
    setUpdatedRecipe(currentlyEdited);
  }, [currentlyEdited]);

  useEffect(() => {
    localShowEdit = showEdit;
  }, [showEdit, updatedRecipe]);
  useEffect(() => {
    localIsSaved = editSaved;
  }, [editSaved]);
  useEffect(() => {
    localUnsavedWarning = unsavedWarning;
  }, [unsavedWarning]);

  useEffect(() => {
    localUpdatedRecipe = updatedRecipe;
    let savedRecipe = recipes.filter(
      (recipe) => recipe.id === updatedRecipe.id
    );
    if (compareObjects(updatedRecipe, savedRecipe[0])) setEditSaved(true);
    else setEditSaved(false);
  }, [updatedRecipe, recipes]);

  const save = () => {
    const allUpdatedRecipes = recipes.map((recipe) =>
      recipe.id === localUpdatedRecipe.id ? localUpdatedRecipe : recipe
    );
    setRecipes(allUpdatedRecipes, [setEditSaved]);
  };

  const closeEdit = (e) => {
    if (!localIsSaved && !localUnsavedWarning) {
      console.log("Save before exiting");
      setUnsavedWarning(true);
      return;
    } else if (localIsSaved && localShowEdit) {
      setUpdatedRecipe({
        name: "",
        img: "",
        rating: 0,
        categories: [],
        id: "",
      });
      setShowEdit(false);
      setCurrentlyEdited({
        name: "",
        img: "",
        rating: 0,
        categories: [],
        id: "",
      });
    }
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const ref = useDetectClickOutside({ onTriggered: closeEdit });

  const handleChange = (e) => {
    setUpdatedRecipe({ ...localUpdatedRecipe, name: e.target.value });
  };

  console.log("updatedRecipe:", updatedRecipe);

  if (updatedRecipe.img === "") {
    return <></>;
  } else {
    return (
      <div className={EditRecipeCss.outside_container}>
        <div className={EditRecipeCss.container} ref={ref}>
          <div className={EditRecipeCss.close_btn} onClick={closeEdit}>
            Close
          </div>
          <img
            className={EditRecipeCss.img}
            src={require(`../images/${updatedRecipe.img}`).default}
          />
          <div className={EditRecipeCss.head_container}>
            <input
              className={EditRecipeCss.name_input_field}
              onChange={handleChange}
              value={updatedRecipe.name}
            />
            <ReactStars
              count={5}
              value={updatedRecipe.rating}
              onChange={ratingChanged}
              size={50}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              edit={true}
            />
          </div>
          <div className={EditRecipeCss.main_container}>
            <EditableCategories categories={updatedRecipe.categories} />
            <div className={EditRecipeCss.save_btn} onClick={save}>
              Save
            </div>
            <div>{updatedRecipe.name}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default EditRecipe;
