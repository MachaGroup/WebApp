import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function PasswordSecurityPage() {
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

      {/* Password Security Section */}
      <main className="form-container">
        <h2>Password Security</h2>
        <form>
          {/* Strong Password Guidelines Section */}
          <h3>Strong Password Guidelines</h3>

          <div className="form-section">
            <label>What criteria define a strong password (e.g., length, special characters, case sensitivity)?</label>
            <div>
              <input type="text" name="strongPasswordCriteria" placeholder="Describe the criteria for a strong password" />
            </div>
          </div>

          <div className="form-section">
            <label>How are employees educated on the risks of reusing passwords across multiple platforms?</label>
            <div>
              <input type="text" name="passwordReuseEducation" placeholder="Describe how employees are educated about password reuse risks" />
            </div>
          </div>

          <div className="form-section">
            <label>Are users encouraged to use passphrases, and how do they differ from traditional passwords?</label>
            <div>
              <input type="text" name="passphraseEncouragement" placeholder="Describe passphrase usage and its advantages over traditional passwords" />
            </div>
          </div>

          <div className="form-section">
            <label>What tools or services (e.g., password managers) are recommended for securely storing passwords?</label>
            <div>
              <input type="text" name="passwordStorageTools" placeholder="Describe recommended tools for securely storing passwords" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are employees required to update their passwords, and what strategies ensure compliance?</label>
            <div>
              <input type="text" name="passwordUpdateFrequency" placeholder="Describe password update frequency and compliance strategies" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default PasswordSecurityPage;
