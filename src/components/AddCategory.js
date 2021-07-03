import React from "react";
import MultiSelect from "react-multi-select-component";
import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { availableCategories as availableCategoriesAtom } from "../atoms";

let options = [];
const AddCategory = () => {
  const [availableCategories, setAvailableCategories] = useRecoilState(
    availableCategoriesAtom
  );
  useEffect(() => {
    options = availableCategories;
  }, [availableCategories]);

  const [selected, setSelected] = useState([]);

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
