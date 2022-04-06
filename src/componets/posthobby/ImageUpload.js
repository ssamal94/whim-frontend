import React from "react";
import "../../assets/styles/scss/style.scss";

function ImageUpload(props) {
  return (
    <>
      <div id="uploadArea" className="upload-area">
        <div className="upload-area__header">
          <h3 className="upload-area__title">Cover image</h3>
          <p className="upload-area__paragraph">
            Tip: When choosing your thumbnail, choose an image that shows a
            person making eye contact with the viewer. This subtle visual cue
            draws people in and makes them feel more connected.
          </p>
        </div>

        <div id="dropZoon" className="upload-area__drop-zoon drop-zoon">
          <span className="drop-zoon__icon">
            <i className="bx bxs-file-image"></i>
          </span>
          <p className="drop-zoon__paragraph">
            Drop your file here or Click to browse
          </p>
          <span id="loadingText" className="drop-zoon__loading-text">
            Please Wait
          </span>
          <img
            src=""
            alt="Preview Image"
            id="previewImage"
            className="drop-zoon__preview-image"
            draggable="false"
          />
          <input
            type="file"
            id="fileInput"
            className="drop-zoon__file-input"
            accept="image/*"
          />
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
