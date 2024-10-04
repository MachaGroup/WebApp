import React from 'react';
import './FormInputPage.css'; // CSS file for styling

function FormPage() {
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
        <h1>The MACHA Group</h1>
        <img src="/path-to-your-logo/logo.png" alt="Logo" className="logo" />
      </header>

      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button">← Back</button>
      </div>

      {/* Form Section */}
      <main className="form-container">
        <h2>Create a Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Form Buttons */}
          {['Windows Section', 'Walls Section', 'Classroom Section', 'Hallway Section (Placeholder)', 'Hallway Section (Placeholder)', 'Hallway Section (Placeholder)', 'Hallway Section (Placeholder)'].map((section, index) => (
            <div key={index} className="form-section">
              <label>{section}</label>
              <button type="button" className="form-button" onClick={() => handleButtonClick(section)}>
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
