import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function PolicyEvaluationCriteriaPage() {
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

      {/* Policy Evaluation Criteria Section */}
      <main className="form-container">
        <h2>Policy Evaluation Criteria - Compliance with Regulations</h2>
        <form>
          {/* Compliance with Regulations Section */}
          <h3>Compliance with Regulations</h3>

          <div className="form-section">
            <label>How often are policies reviewed to ensure they align with changing regulations?</label>
            <div>
              <input type="text" name="policyReviewFrequency" placeholder="Describe how often policies are reviewed for regulatory compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>What regulatory frameworks (e.g., GDPR, FERPA, HIPAA) are used as benchmarks for compliance?</label>
            <div>
              <input type="text" name="regulatoryFrameworks" placeholder="List the regulatory frameworks used for policy compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>How are regulatory updates communicated to policy reviewers and stakeholders?</label>
            <div>
              <input type="text" name="regulatoryUpdateCommunication" placeholder="Describe how regulatory updates are communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>What tools or methods are used to monitor and assess compliance gaps in policies?</label>
            <div>
              <input type="text" name="complianceAssessmentTools" placeholder="Describe tools or methods for assessing compliance gaps" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization handle non-compliance identified during policy evaluations?</label>
            <div>
              <input type="text" name="nonComplianceHandling" placeholder="Describe how non-compliance is handled during policy evaluations" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default PolicyEvaluationCriteriaPage;
