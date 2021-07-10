import React from "react";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";

import EditRecipeCss from "./EditRecipe.module.css";
import EditableCategories from "./EditableCategories";

import { useDetectClickOutside } from "react-detect-click-outside";
import { compareObjects } from "../../utils/compareObjects";

import { useRecoilState } from "recoil";
import {
  updatedRecipe as updatedRecipeAtom,
  unsavedWarning as unsavedWarningAtom,
  editSaved as editSavedAtom,
  recipes as recipesAtom,
  showEdit as showEditAtom,
} from "../../atoms";

let localShowEdit;
let localIsSaved;
let localUnsavedWarning;

const EditRecipe = () => {
  const [showEdit, setShowEdit] = useRecoilState(showEditAtom);
  const [recipes, setRecipes] = useRecoilState(recipesAtom);
  const [editSaved, setEditSaved] = useRecoilState(editSavedAtom);
  const [unsavedWarning, setUnsavedWarning] =
    useRecoilState(unsavedWarningAtom);
  const [updatedRecipe, setUpdatedRecipe] = useRecoilState(updatedRecipeAtom);

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
    console.log(updatedRecipe);
  }, [updatedRecipe]);
  useEffect(() => {
    let savedRecipe = recipes.filter(
      (recipe) => recipe.id === updatedRecipe.id
    );
    if (compareObjects(updatedRecipe, savedRecipe[0])) setEditSaved(true);
    else setEditSaved(false);
  }, [updatedRecipe, recipes]);

  const save = (updatedRecipe, recipes) => {
    const allUpdatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(allUpdatedRecipes);
    setEditSaved(true);
  };

  const closeEdit = () => {
    if (!localIsSaved && !localUnsavedWarning) {
      console.log("Save before exiting");
      setUnsavedWarning(true);
      return;
    } else if (localIsSaved && localShowEdit) {
      setUpdatedRecipe({
        name: "",
        img: "",
        rating: 0,
        categories: [""],
        id: "",
      });
      setShowEdit(false);
    }
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const ref = useDetectClickOutside({ onTriggered: closeEdit });

  const handleChange = (e, updatedRecipe) => {
    setUpdatedRecipe({ ...updatedRecipe, name: e.target.value });
  };

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
            src={require(`../../images/${updatedRecipe.img}`).default}
          />
          <div className={EditRecipeCss.head_container}>
            <input
              className={EditRecipeCss.name_input_field}
              onChange={(e) => handleChange(e, updatedRecipe)}
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
            <EditableCategories />
            <div
              className={EditRecipeCss.save_btn}
              onClick={() => save(updatedRecipe, recipes)}
            >
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
