import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useRecoilState } from "recoil";

import {
  unsavedWarning as unsavedWarningAtom,
  updatedRecipe as updatedRecipeAtom,
  recipes as recipesAtom,
  showEdit as showEditAtom,
  isCurrentlyEditing as isCurrentlyEditingAtom,
} from "../../atoms";

const UnsavedWarning = () => {
  const [updatedRecipe, setUpdatedRecipe] = useRecoilState(updatedRecipeAtom);
  const [isCurrentlyEditing, setIsCurrentlyEditing] = useRecoilState(
    isCurrentlyEditingAtom
  );
  const [showEdit, setShowEdit] = useRecoilState(showEditAtom);
  const [recipes, setRecipes] = useRecoilState(recipesAtom);
  const [unsavedWarning, setUnsavedWarning] =
    useRecoilState(unsavedWarningAtom);

  const closeWarning = () => {
    //setUnsavedWarning(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeWarning });

  const saveChanges = () => {
    const allUpdatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(allUpdatedRecipes);
    setUpdatedRecipe({
      name: "",
      img: "",
      rating: 0,
      categories: [""],
      id: "",
    });
    setShowEdit(false);
    setUnsavedWarning(false);
  };

  const discardChanges = () => {
    setUpdatedRecipe({
      name: "",
      img: "",
      rating: 0,
      categories: [""],
      id: "",
    });
    setShowEdit(false);
    setUnsavedWarning(false);
  };

  return (
    <div ref={ref}>
      <button onClick={saveChanges}>Save</button>
      <button onClick={discardChanges}>Discard changes</button>
    </div>
  );
};

export default UnsavedWarning;
