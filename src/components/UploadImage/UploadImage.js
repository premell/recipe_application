import React from "react";
import { useState } from "react";
import FolderIcon from "../../assets/folder_icon_transparent.png";
import {
  BoxUpload,
  CloseButton,
  ImagePreview,
  Layout,
} from "./UploadImageResources.js";

const UploadImage = () => {
  const [imageToAdd, setImageToAdd] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
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

  return (
    <Layout>
      <BoxUpload>
        <div className="image-upload">
          {!isUploaded ? (
            <>
              <label htmlFor="upload-input">
                <img
                  src={FolderIcon}
                  draggable={"false"}
                  alt="placeholder"
                  style={{ width: 120, height: 120, marginLeft: 55.5 }}
                />
                <p style={{ color: "#444" }}>Click to upload image</p>
              </label>

              <input
                id="upload-input"
                type="file"
                accept=".jpg,.jpeg,,.png"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <ImagePreview>
              <CloseButton
                onClick={() => {
                  setIsUploaded(false);
                  setImageToAdd(null);
                }}
              >
                <p>&times;</p>
              </CloseButton>
              <img
                id="uploaded-image"
                src={imageToAdd}
                draggable={false}
                alt="uploaded-img"
              />
            </ImagePreview>
          )}
        </div>
      </BoxUpload>
    </Layout>
  );
};

export default UploadImage;
