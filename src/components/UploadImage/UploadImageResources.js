import styled from "styled-components";

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const BoxUpload = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border: 1px dashed #799cd9;
  /* padding: 36px 48px; */
  position: relative;
  height: 450px;
  width: 450px;
  background: #fbfbff;
  border-radius: 20px;
  .image-upload {
    display: flex;
    flex-wrap: wrap;
    label {
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    }
    > input {
      display: none;
    }
  }
`;

export const ImagePreview = styled.div`
  position: relative;
  /* cursor: pointer; */
  #uploaded-image {
    height: 450px;
    width: 450px;
    object-fit: cover;
    border-radius: 20px;
  }
  .close-icon {
    background: #000;
    border-radius: 5px;
    opacity: 0.8;
    position: absolute;
    z-index: 10;
    right: 15px;
    top: 20px;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;
export const CloseButton = styled.div`
  left: calc(100% - 70px);
  top: 10px;
  width: 60px;
  height: 60px;
  position: absolute;
  background-color: red;
  border-radius: 14px;
  cursor: pointer;

  p {
    font-size: 18px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
