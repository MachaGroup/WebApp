import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function EffectivenessAddressingSecurityPage() {
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

      {/* Effectiveness in Addressing Security Risks Section */}
      <main className="form-container">
        <h2>Effectiveness in Addressing Security Risks</h2>
        <form>
          {/* Effectiveness Section */}
          <h3>Effectiveness in Addressing Security Risks</h3>

          <div className="form-section">
            <label>How is the effectiveness of current policies in mitigating security risks measured?</label>
            <div>
              <input type="text" name="effectivenessMeasurement" placeholder="Describe how policy effectiveness is measured" />
            </div>
          </div>

          <div className="form-section">
            <label>What metrics or indicators are used to evaluate the success of security policies?</label>
            <div>
              <input type="text" name="successMetrics" placeholder="Describe metrics or indicators used to evaluate success" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are security incidents reviewed to inform policy updates and improvements?</label>
            <div>
              <input type="text" name="incidentReviewFrequency" placeholder="Describe the frequency of security incident reviews" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place for stakeholders to provide feedback on the effectiveness of policies?</label>
            <div>
              <input type="text" name="feedbackProcesses" placeholder="Describe processes for stakeholder feedback on policies" />
            </div>
          </div>

          <div className="form-section">
            <label>How are lessons learned from security incidents integrated into policy revisions?</label>
            <div>
              <input type="text" name="lessonsLearnedIntegration" placeholder="Describe how lessons from incidents are integrated into policy revisions" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default EffectivenessAddressingSecurityPage;
