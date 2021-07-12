import React from "react";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

import { recipeToAdd as recipeToAddAtom } from "../atoms";
import Instruction from "../components/Instruction/Instruction";
import UploadImage from "../components/UploadImage/UploadImage";
import { compareArrays } from "../utils/compareArrays";

import CreateNewRecipeCss from "./CreateNewRecipe.module.css";

const CreateNewRecipe = () => {
  const [newRecipe, addNewRecipe] = useState({});
  const [recipeToAdd, setRecipeToAdd] = useRecoilState(recipeToAddAtom);
  const [nameErrors, setNameErrors] = useState({
    isValid: false,
    errors: [{ message: "Cannot be empty" }],
  });

  const [imageErrors, setImageErrors] = useState({
    isValid: true,
    errors: [{ message: "" }],
  });

  const [image, setImage] = useState({});

  const instructionContainer = useRef(null);

  useEffect(() => {
    console.log("changed");
  }, [recipeToAdd]);

  useEffect(() => {
    console.log(instructionContainer.current);
  }, [instructionContainer]);

  useEffect(() => {
    const instructions = [...recipeToAdd.instructions];

    if (instructions[instructions.length - 1]?.trim() !== "")
      instructions.push("");
    else if (
      instructions[instructions.length - 1]?.trim() === "" &&
      instructions[instructions.length - 2]?.trim() === ""
    )
      instructions.pop();

    if (compareArrays(instructions, recipeToAdd.instructions)) return;
    setRecipeToAdd({
      ...recipeToAdd,
      instructions: [...instructions],
    });
  }, [recipeToAdd.instructions]);

  const handleChange = (e) => {
    console.log(e.target.type);
    setRecipeToAdd({ ...recipeToAdd, name: e.target.value });
  };

  const handleChangeTextarea = (e, index) => {
    const instructions = recipeToAdd.instructions;
    const updatedInstuctions = [...instructions];
    updatedInstuctions[index] = e.target.value;

    console.log(updatedInstuctions);
    console.log(index);

    setRecipeToAdd({
      ...recipeToAdd,
      instructions: [...updatedInstuctions],
    });
  };

  const addInstruction = (index) => {
    console.log(index);
    const instructions = recipeToAdd.instructions;
    const updatedInstuctions = [...instructions];
    updatedInstuctions.splice(index + 1, 0, "");
    if (index === instructions.length - 2) return;
    setRecipeToAdd({
      ...recipeToAdd,
      instructions: [...updatedInstuctions],
    });
    // instructionContainer.current.children[0].children[
    //   index
    // ].children[0].focus();
    instructionContainer.current.children[
      index + 1
    ].children[0].children[1].focus();
  };
  const deleteInstruction = (index) => {
    const instructions = recipeToAdd.instructions;
    const updatedInstuctions = [...instructions];

    if (updatedInstuctions.length <= 1) return;
    updatedInstuctions.splice(index, 1);

    setRecipeToAdd({
      ...recipeToAdd,
      instructions: [...updatedInstuctions],
    });
  };

  const createRecipe = () => {};

  return (
    <div className={CreateNewRecipeCss.main_container}>
      <UploadImage setImage={setImage} />
      <div className={CreateNewRecipeCss.input_container}>
        <label for="name">Name</label>
        <input
          placeholder="etc pancakes..."
          type="name"
          onChange={handleChange}
          value={recipeToAdd.name}
          className={`${!nameErrors.isValid ? CreateNewRecipeCss.error : ""}`}
        />
        {!nameErrors.isValid && (
          <p className={CreateNewRecipeCss.error_message}>
            {nameErrors.errors[0].message}
          </p>
        )}
      </div>
      <div
        ref={instructionContainer}
        className={CreateNewRecipeCss.instruction_container}
      >
        {recipeToAdd.instructions.map((instruction, index) => (
          <>
            <Instruction
              key={index}
              value={instruction}
              index={index}
              handleChangeTextarea={handleChangeTextarea}
              addInstruction={addInstruction}
              deleteInstruction={deleteInstruction}
              listLength={recipeToAdd.instructions.length}
            />
          </>
        ))}
      </div>
      <div
        onClick={createRecipe}
        className={CreateNewRecipeCss.create_recipe_btn}
      >
        Create Recipe
      </div>
    </div>
  );
};
export default CreateNewRecipe;
