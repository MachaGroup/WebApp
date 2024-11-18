import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7 

function MultiFactorAuthenticationPage() {
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

      {/* Multi-Factor Authentication (MFA) Section */}
      <main className="form-container">
        <h2>Multi-Factor Authentication (MFA)</h2>
        <form>
          {/* MFA Awareness Section */}
          <h3>MFA Awareness</h3>

          <div className="form-section">
            <label>What types of authentication factors are used in MFA (e.g., SMS codes, biometrics, authenticator apps)?</label>
            <div>
              <input type="text" name="authenticationFactors" placeholder="Describe types of authentication factors used in MFA" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the importance of MFA communicated to users to prevent unauthorized access?</label>
            <div>
              <input type="text" name="mfaImportanceCommunication" placeholder="Describe how MFA importance is communicated to users" />
            </div>
          </div>

          <div className="form-section">
            <label>What challenges do users face when enabling MFA, and how can these be addressed?</label>
            <div>
              <input type="text" name="mfaChallenges" placeholder="Describe challenges users face when enabling MFA and solutions" />
            </div>
          </div>

          <div className="form-section">
            <label>In what situations is MFA mandatory, and how is it enforced within the organization?</label>
            <div>
              <input type="text" name="mfaMandatoryEnforcement" placeholder="Describe situations where MFA is mandatory and enforcement methods" />
            </div>
          </div>

          <div className="form-section">
            <label>How are backup methods (e.g., recovery codes) provided in case primary authentication methods fail?</label>
            <div>
              <input type="text" name="backupMethods" placeholder="Describe backup methods in case primary MFA fails" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default MultiFactorAuthenticationPage;
