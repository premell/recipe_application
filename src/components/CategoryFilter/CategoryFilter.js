import React from "react";
import { useEffect } from "react";

import DropDown from "../Shared/DropDown.js";

import { useRecoilState } from "recoil";
import { availableCategories as availableCategoriesAtom } from "../../atoms";

const CategoryFilter = ({ updateCategoryFilters }) => {
  const [availableCategories, setAvailableCategories] = useRecoilState(
    availableCategoriesAtom
  );

  const updateCategories = () => {
    const categories = ["all"];
    updateCategoryFilters([...categories]);
  };
  useEffect(() => {
    updateCategories();
  }, []);

  return (
    <DropDown
      updateSelected={updateCategories}
      possibleAlternatives={availableCategories}
    />
  );
};
export default CategoryFilter;
