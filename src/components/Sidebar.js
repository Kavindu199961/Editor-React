import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './Sidebar.css';  
import EmailView from './EmailView';  
import View from './View';
import FormPreview from './FormPreview';

const Sidebar = () => {
  const location = useLocation();

  // Sidebar and FormPreview will only be shown on these paths
  const showSidebarAndPreview = location.pathname !== '/welcome' && location.pathname !== '/email';

  return (
    <div className="app">
      {showSidebarAndPreview && (
        <>
          <div className="sidebar">
            <h3>Steps For Edit</h3>
            <Link to="/welcome" className='btn'>
              <button>Welcome screen</button>
            </Link>
            <Link to="/email" className='btn'>
              <button>Enter your email</button>
            </Link>
          </div>
          
          {/* FormPreview displayed only when the sidebar is visible */}
          <div className="form-preview-wrapper">
            <FormPreview 
              title="Welcome to our form" 
              description="This is a description of the form" 
              buttonText="Start" 
              image={null} 
              placement="left" 
            />
          </div>
        </>
      )}
      
      <div className="content">
        <Routes>
          <Route path="/welcome" element={<View />} />
          <Route path="/email" element={<EmailView />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Sidebar />
  </Router>
);

export default App;
