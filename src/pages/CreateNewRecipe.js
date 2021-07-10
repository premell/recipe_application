import React from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  Layout,
  Container,
  BoxUpload,
  ImagePreview,
} from "../components/UploadImage/UploadImage.js";
import { v4 as uuid } from "uuid";

import FolderIcon from "../assets/folder_icon_transparent.png";
import { recipeToAdd as recipeToAddAtom } from "../atoms";
import Instruction from "../components/Instruction/Instruction";
import Loading from "../components/Loading/Loading";
import { compareArrays } from "../utils/compareArrays";

import CreateNewRecipeCss from "./CreateNewRecipe.module.css";

const CreateNewRecipe = () => {
  const [newRecipe, addNewRecipe] = useState({});
  const [recipeToAdd, setRecipeToAdd] = useRecoilState(recipeToAddAtom);
  const [imageToAdd, setImageToAdd] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

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
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImageToAdd(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
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
      <Layout>
        <Container>
          <h2>Upload your image</h2>
          <p>Upload with preview 😁</p>

          <BoxUpload>
            <div className="image-upload">
              {!isUploaded ? (
                <>
                  <label htmlFor="upload-input">
                    <img
                      src={FolderIcon}
                      draggable={"false"}
                      alt="placeholder"
                      style={{ width: 100, height: 100 }}
                    />
                    <p style={{ color: "#444" }}>Click to upload image</p>
                  </label>

                  <input
                    id="upload-input"
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                    onChange={handleImageChange}
                  />
                </>
              ) : (
                <ImagePreview>
                  <img
                    className="close-icon"
                    alt="CloseIcon"
                    onClick={() => {
                      setIsUploaded(false);
                      setImageToAdd(null);
                    }}
                  />
                  {typeFile.includes("video") ? (
                    <video
                      id="uploaded-image"
                      src={imageToAdd}
                      draggable={false}
                      controls
                      autoPlay
                      alt="uploaded-img"
                    />
                  ) : (
                    <img
                      id="uploaded-image"
                      src={imageToAdd}
                      draggable={false}
                      alt="uploaded-img"
                    />
                  )}
                </ImagePreview>
              )}
            </div>
          </BoxUpload>

          {isUploaded ? <h2>Type is {typeFile}</h2> : null}

          <h3>Source Code:</h3>
          <a
            href="https://github.com/kingaspx/ImagePreview-React"
            rel="noreferrer"
            target={"_blank"}
            style={{ marginTop: -10 }}
          >
            Available on <b>Github</b>
          </a>

          <h3>By Kingaspx</h3>
        </Container>
      </Layout>
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
              isSecondLastItem={index === recipeToAdd.instructions.length - 2}
              isLastItem={index === recipeToAdd.instructions.length - 1}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default CreateNewRecipe;
