import React from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { recipeToAdd as recipeToAddAtom } from "../atoms";
import Instruction from "../components/Instruction/Instruction";
import { compareArrays } from "../utils/compareArrays";
import UploadImage from "../components/UploadImage/UploadImage";

import CreateNewRecipeCss from "./CreateNewRecipe.module.css";

const CreateNewRecipe = () => {
  const [newRecipe, addNewRecipe] = useState({});
  const [recipeToAdd, setRecipeToAdd] = useRecoilState(recipeToAddAtom);

  useEffect(() => {
    const instructions = [...recipeToAdd.instructions];

    if (instructions[instructions.length - 1] !== "") instructions.push("");
    else if (
      instructions[instructions.length - 1] === "" &&
      instructions[instructions.length - 2] === ""
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
    const instructions = recipeToAdd.instructions;
    const updatedInstuctions = [...instructions];
    updatedInstuctions.splice(index + 1, 0, "");
    if (index === instructions.length - 2) return;
    setRecipeToAdd({
      ...recipeToAdd,
      instructions: [...updatedInstuctions],
    });
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

  return (
    <div className={CreateNewRecipeCss.main_container}>
      <UploadImage />
      <label for="name">Name</label>
      <input
        placeholder="etc pancakes..."
        type="name"
        onChange={handleChange}
        value={recipeToAdd.name}
      />
      <div className={CreateNewRecipeCss.instruction_container}>
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
    </div>
  );
};

export default CreateNewRecipe;
