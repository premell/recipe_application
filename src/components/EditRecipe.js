import React from "react";
import { useEffect } from "react";

import EditRecipeCss from "./EditRecipe.module.css";

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
  }, [showEdit, setUpdatedRecipe]);
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
    console.log("close");
    if (!localIsSaved && !localUnsavedWarning) {
      setUnsavedWarning(true);
      return;
    } else if (localIsSaved && localShowEdit) {
      setUpdatedRecipe({});
      setShowEdit(false);
      setCurrentlyEdited({});
    }
  };

  const ref = useDetectClickOutside({ onTriggered: closeEdit });

  const change = (e) => {
    setUpdatedRecipe({ ...localUpdatedRecipe, name: e.target.value });
  };

  return (
    <>
      <div className={EditRecipeCss.container} ref={ref}>
        <button className={EditRecipeCss.button} onClick={closeEdit}>
          Close
        </button>
        <div className={EditRecipeCss.content_container}>
          <input onChange={change} value={updatedRecipe.name} />
          <div className={EditRecipeCss.input_field}>{updatedRecipe.name}</div>
          <button className={EditRecipeCss.button} onClick={save}>
            Save
          </button>
        </div>
        <div>{updatedRecipe.name}</div>
      </div>
    </>
  );
};

export default EditRecipe;
