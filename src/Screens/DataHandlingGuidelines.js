import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

function DataHandlingGuidelinesPage() {
  const handleButtonClick = (section) => {
    console.log(`Button clicked for: ${section}`);
    // Add logic for handling button click, e.g., open a modal or navigate
  };

  return (
    <div className="form-page">
      {/* Header Section */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>←</button> {/* Use window.history.back for navigation */}
        <h1>The MACHA Group</h1>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Data Handling Guidelines Section */}
      <main className="form-container">
        <h2>Data Handling Guidelines</h2>
        <form>
          {/* Storing and Transmitting Sensitive Data */}
          <h3>Storing and Transmitting Sensitive Data</h3>
          <div className="form-section">
            <label>What are the key steps for securely storing and transmitting sensitive data?</label>
            <div>
              <input type="text" name="secureDataStorageTransmission" placeholder="Describe steps for secure storage and transmission of sensitive data" />
            </div>
          </div>

          {/* Data Classification */}
          <h3>Data Classification Based on Sensitivity</h3>
          <div className="form-section">
            <label>How should employees classify data based on sensitivity (e.g., public, confidential, restricted)?</label>
            <div>
              <input type="text" name="dataClassification" placeholder="Describe how data should be classified based on sensitivity" />
            </div>
          </div>

          {/* Sharing Data with External Parties */}
          <h3>Sharing Data with External Parties</h3>
          <div className="form-section">
            <label>What procedures must be followed when sharing data with external parties?</label>
            <div>
              <input type="text" name="shareDataExternal" placeholder="Describe procedures for sharing data with external parties" />
            </div>
          </div>

          {/* Accidental Data Exposure or Loss */}
          <h3>Accidental Data Exposure or Loss</h3>
          <div className="form-section">
            <label>What actions should employees take in the event of accidental data exposure or loss?</label>
            <div>
              <input type="text" name="dataExposureLossActions" placeholder="Describe actions for accidental data exposure or loss" />
            </div>
          </div>

          {/* Reviewing and Updating Data Handling Policies */}
          <h3>Review and Update of Data Handling Policies</h3>
          <div className="form-section">
            <label>How often should employees review and update their understanding of data handling policies?</label>
            <div>
              <input type="text" name="policyReviewUpdateFrequency" placeholder="Describe the frequency for reviewing and updating data handling policies" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default DataHandlingGuidelinesPage;
