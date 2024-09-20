import React, { useState } from 'react';
import './FormEditor.css';

function FormEditor({ title, setTitle, description, setDescription, buttonText, setButtonText, image, setImage, placement, setPlacement, handleSave, handleDiscard }) {
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="form-editor">
      <h2>Welcome Screen Edit</h2>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter form title"
      />

      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter form description"
      />

      <label>Button Text</label>
      <input
        type="text"
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
        placeholder="Button text"
      />

      <label>Upload Image</label>
      <input type="file" onChange={handleImageUpload} />
      {image && (
        <div className="image-preview">
          <img src={image} alt="Uploaded" />
          <button onClick={() => setImage(null)}>Remove Image</button>
        </div>
      )}

      <label>Placement</label>
      <div className="placement-toggle">
        <button
          className={placement === 'left' ? 'active' : ''}
          onClick={() => setPlacement('left')}
        >
          Left
        </button>
        <button
          className={placement === 'center' ? 'active' : ''}
          onClick={() => setPlacement('center')}
        >
          Center
        </button>
      </div>

      <div className="actions">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="discard-btn" onClick={handleDiscard}>
          Discard
        </button>
      </div>
    </div>
  );
}

export default FormEditor;
