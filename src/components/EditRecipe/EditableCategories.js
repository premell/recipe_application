import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import EditableCategoriesCss from "./EditableCategoriesCss.module.css";
import AddCategory from "../CategoryFilter/AddCategory";

import { updatedRecipe as updatedRecipeAtom } from "../../atoms";

const EditableCategories = () => {
  const [updatedRecipe, setUpdatedRecipe] = useRecoilState(updatedRecipeAtom);

  useEffect(() => {
    console.log(updatedRecipe);
  }, [updatedRecipe]);

  const updateRecipeFromSelector = (recipe) => {
    console.log(recipe);
    setUpdatedRecipe({ ...recipe });
  };

  return (
    <>
      <AddCategory
        recipe={updatedRecipe}
        setUpdatedRecipeMethod={updateRecipeFromSelector}
      />
      <div className={EditableCategoriesCss.main_container}>
        {updatedRecipe.categories.map((category) => {
          return (
            <div key={category} className={EditableCategoriesCss.item}>
              <div>{category}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default EditableCategories;
