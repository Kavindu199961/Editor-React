import React from "react";
import "./EmailPreview.css";

const Preview = ({ formData }) => {
  return (
    <div className="form-preview">
      <h1>{formData.title}</h1>
      <p>{formData.description}</p>
      <input
        type="text"
        placeholder="Type here..."
        className="preview-input"
        required={formData.required}
      />
    </div>
  );
};

export default Preview;
