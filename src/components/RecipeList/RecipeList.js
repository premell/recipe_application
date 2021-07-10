import React from "react";

import RecipeListCss from "./RecipeList.module.css";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <>
      <div className={`${RecipeListCss.recipe_container}`}>
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </>
  );
};

export default RecipeList;
