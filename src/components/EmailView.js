import React, { useState } from "react";
import EmailEditor from "./EmailEditor";
import EmailPreview from "./EmailPreview";
import "./EmailView.css";

const EmailView = () => {
  const [formData, setFormData] = useState({
    title: "Enter your email",
    description: "This will be used to contact you for the next steps.",
    required: false,
  });

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <div className="app">
      <EmailEditor formData={formData} updateFormData={updateFormData} />
      <EmailPreview formData={formData} />
    </div>
  );
};

export default EmailView;
