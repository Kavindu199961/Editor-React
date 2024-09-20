import React from 'react';
import "./EmailEditor.css";

const EmailEditor= ({ formData, updateFormData, handleSave, handleDiscard }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({ [name]: type === "checkbox" ? checked : value });
  };

  return (
   
    <div className="form-editor">
      <h2>Email Edit</h2>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description..."
      />

      <div className="required-toggle">
        <label htmlFor="required">Required</label>
        <input
          type="checkbox"
          name="required"
          checked={formData.required}
          onChange={handleChange}
        />
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
};

export default EmailEditor;
