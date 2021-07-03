import React from "react";

import EditableCategoriesCss from "./EditableCategoriesCss.module.css";
import AddCategory from "./AddCategory";

const EditableCategories = ({ categories }) => {
  return (
    <div className={EditableCategoriesCss.main_container}>
      {categories.map((category) => {
        return (
          <div className={EditableCategoriesCss.item}>
            <div>{category}</div>
            <div>Delete</div>
          </div>
        );
      })}
            <AddCategory />
    </div>
  );
};
export default EditableCategories;
