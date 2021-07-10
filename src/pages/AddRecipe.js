import React from "react";

import { useState, useEffect } from "react";

import Loading from "../components/Loading/Loading";
import { useRecoilState } from "recoil";
import { recipeToAdd as recipeToAddAtom } from "../atoms";

const AddRecipe = () => {
  const [newRecipe, addNewRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [recipeToAdd, setRecipeToAdd] = useRecoilState(recipeToAddAtom);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    console.log(e.target.type);
    setRecipeToAdd({ ...recipeToAdd, name: e.target.value });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <input type="id" onChange={handleChange} value={recipeToAdd.id} />
      <input type="name" onChange={handleChange} value={recipeToAdd.name} />
    </div>
  );
};

export default AddRecipe;
