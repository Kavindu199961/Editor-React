import React, { useState } from 'react';
import FormEditor from './FormEditor';
import FormPreview from './FormPreview';
import './View.css';

function View() {
  const [title, setTitle] = useState('Welcome to our form');
  const [description, setDescription] = useState('This is a description of the form');
  const [buttonText, setButtonText] = useState('Start');
  const [image, setImage] = useState(null);
  const [placement, setPlacement] = useState('center'); 

  const handleSave = () => {
    console.log("Form Saved:", { title, description, buttonText, image, placement });
  };


  const handleDiscard = () => {
    setTitle('');
    setDescription('');
    setButtonText('');
    setImage(null);
    setPlacement('center');
  };

  return (
    <div className="app">
      
      <FormEditor
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        buttonText={buttonText}
        setButtonText={setButtonText}
        image={image}
        setImage={setImage}
        placement={placement}
        setPlacement={setPlacement}
        handleSave={handleSave}
        handleDiscard={handleDiscard}
      />

      
      <FormPreview
        title={title}
        description={description}
        buttonText={buttonText}
        image={image}
        placement={placement}
      />
    </div>
  );
}

export default View;
