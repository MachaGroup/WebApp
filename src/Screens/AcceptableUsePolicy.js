import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7 

function AcceptanceUsePolicyPage() {
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

      {/* Acceptable Use Policy (AUP) Training Section */}
      <main className="form-container">
        <h2>Acceptable Use Policy (AUP) Training</h2>
        <form>
          {/* Restricted Activities Section */}
          <h3>Restricted Activities</h3>
          <div className="form-section">
            <label>What activities are restricted under the Acceptable Use Policy (AUP)?</label>
            <div>
              <input type="text" name="restrictedActivities" placeholder="Describe restricted activities under AUP" />
            </div>
          </div>

          {/* Personal Device Usage Section */}
          <h3>Personal Device Usage in the Workplace</h3>
          <div className="form-section">
            <label>How should employees handle personal device usage in the workplace (e.g., BYOD policies)?</label>
            <div>
              <input type="text" name="personalDeviceUsage" placeholder="Describe BYOD policies or handling personal device usage" />
            </div>
          </div>

          {/* Consequences of Violating AUP Section */}
          <h3>Consequences of Violating the AUP</h3>
          <div className="form-section">
            <label>What are the consequences of violating the AUP?</label>
            <div>
              <input type="text" name="violationConsequences" placeholder="Describe consequences for violating AUP" />
            </div>
          </div>

          {/* Reporting AUP Violations Section */}
          <h3>Reporting AUP Violations</h3>
          <div className="form-section">
            <label>How can employees report potential AUP violations or issues?</label>
            <div>
              <input type="text" name="reportingAUPViolations" placeholder="Describe how employees can report AUP violations" />
            </div>
          </div>

          {/* AUP Training Completion Section */}
          <h3>AUP Training Requirements</h3>
          <div className="form-section">
            <label>When and how are employees required to complete AUP training?</label>
            <div>
              <input type="text" name="aupTrainingCompletion" placeholder="Describe when and how employees complete AUP training" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default AcceptanceUsePolicyPage;
