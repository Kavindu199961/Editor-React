import React from 'react';
import './FormPreview.css';

function FormPreview({ title, description, buttonText, image, placement }) {
  return (
    <div className="form-preview" style={{ textAlign: placement }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
      {image && <img src={image} alt="Uploaded Preview" className="preview-image" />}
    </div>
  );
}

export default FormPreview;
