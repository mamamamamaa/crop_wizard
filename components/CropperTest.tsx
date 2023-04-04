"use client";

import { createRef, FC, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];
export const CropperTest: FC = () => {
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef<ReactCropperElement>();
  const onChange = (file: File) => {
    // e.preventDefault();
    // let files;
    // if (e.dataTransfer) {
    //   files = e.dataTransfer.files;
    // } else if (e.target) {
    //   files = e.target.files;
    // }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(file);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <>
      <div>
        <FileUploader handleChange={onChange} name="file" types={fileTypes} />
        {/*<input type="file" onChange={onChange} />*/}
        {image && (
          <Cropper
            ref={cropperRef}
            style={{ height: 400, width: "500px" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
          />
        )}
      </div>

      {image && (
        <div>
          <h1>Preview</h1>
          <div
            className="img-preview"
            style={{ width: "100%", height: "300px" }}
          />
          <h1>Crop</h1>
          <button onClick={getCropData}>Crop Image</button>
          <img src={cropData} alt="cropped" />
        </div>
      )}
    </>
  );
};
