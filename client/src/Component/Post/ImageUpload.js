import React from "react";
import axios from "axios";

function ImageUpload(props, types) {
  const FileUpload = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    if (types === "post") {
      axios.post("/api/post/image/upload", formData).then((response) => {
        props.setImage(response.data.filePath);
      });
    } else {
      axios.post("/api/store/image/upload", formData).then((response) => {
        props.setImage(response.data.filePath);
      });
    }
  };

  return (
    <div>
      <input
        type="file"
        className="shadow-none"
        accept="image/*"
        onChange={(e) => FileUpload(e)}
      />
    </div>
  );
}

export default ImageUpload;
