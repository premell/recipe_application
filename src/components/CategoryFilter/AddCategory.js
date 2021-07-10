import React from "react";
import MultiSelect from "react-multi-select-component";
import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { availableCategories as availableCategoriesAtom } from "../../atoms";

let options = [];
const AddCategory = ({ recipe, setUpdatedRecipeMethod }) => {
  const [availableCategories, setAvailableCategories] = useRecoilState(
    availableCategoriesAtom
  );
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const selectedOptions = [];
    recipe.categories.map((category) => {
      selectedOptions.push({ label: category, value: category });
    });
    console.log(selectedOptions);
    setSelected(selectedOptions);
  }, []);

  useEffect(() => {
    options = availableCategories;
  }, [availableCategories]);

  useEffect(() => {
    console.log(selected);
    const newCategories = [];
    Object.keys(selected).forEach((category) => {
      console.log(selected[category].value);
      newCategories.push(selected[category].value);
    });
    console.log(newCategories);
    setUpdatedRecipeMethod({ ...recipe, categories: newCategories });
  }, [selected]);

  return (
    <>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      <div>Add</div>
    </>
  );
};
export default AddCategory;
