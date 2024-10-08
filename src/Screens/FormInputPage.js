import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './FormInputPage.css'; // CSS file for styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

function FormPage() {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleBack = () => {
    navigate(-1);  // Navigate back to the previous page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    // Add logic for handling form submission
  };

  const handleButtonClick = (section) => {
    console.log(`Button clicked for: ${section}`);
    // Add logic for handling button click, e.g., open a modal or navigate
  };

  return (
    <div className="form-page">
      {/* Header Section */}
      <header className="header">
        <button className="back-button" onClick={handleBack}>←</button>
        <h1>The MACHA Group</h1>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Form Section */}
      <main className="form-container">
        <h2>Create a Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Form Buttons */}
          {[
            'Windows Section',
            'Walls Section',
            'Classroom Section',
            'Hallway Section (Placeholder)',
            'Hallway Section (Placeholder)',
            'Hallway Section (Placeholder)',
            'Hallway Section (Placeholder)'
          ].map((section, index) => (
            <div key={index} className="form-section">
              <label>{section}</label>
              <button
                type="button"
                className="form-button"
                onClick={() => handleButtonClick(section)}
              >
                Enter Here
              </button>
            </div>
          ))}

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default FormPage;