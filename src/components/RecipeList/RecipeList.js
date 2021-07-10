import React from "react";

import RecipeCard from "./RecipeCard";
import RecipeListCss from "./RecipeList.module.css";

const RecipeList = ({ recipes }) => {
  return (
    <>
      <div className={`${RecipeListCss.recipe_container}`}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeList;
