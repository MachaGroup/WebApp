import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// secition 7

function PolicyRevisionPage() {
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

      {/* Policy Revision Section */}
      <main className="form-container">
        <h2>Policy Revision</h2>
        <form>
          {/* Policy Revision Approval Workflow Section */}
          <h3>Policy Revision Approval Workflow</h3>

          <div className="form-section">
            <label>What are the steps involved in the policy revision approval process?</label>
            <div>
              <input type="text" name="revisionApprovalSteps" placeholder="Describe the steps involved in the approval process" />
            </div>
          </div>

          <div className="form-section">
            <label>Who are the key stakeholders involved in approving policy revisions?</label>
            <div>
              <input type="text" name="approvalStakeholders" placeholder="Describe the key stakeholders involved in policy revisions" />
            </div>
          </div>

          <div className="form-section">
            <label>How are revisions communicated to all affected parties once approved?</label>
            <div>
              <input type="text" name="revisionCommunication" placeholder="Describe how revisions are communicated to stakeholders" />
            </div>
          </div>

          <div className="form-section">
            <label>What timelines are established for reviewing and approving proposed policy changes?</label>
            <div>
              <input type="text" name="revisionTimelines" placeholder="Describe the timelines for reviewing and approving revisions" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the effectiveness of the policy revision process evaluated after implementation?</label>
            <div>
              <input type="text" name="revisionEffectivenessEvaluation" placeholder="Describe how effectiveness is evaluated" />
            </div>
          </div>

          {/* Documentation of Policy Changes Section */}
          <h3>Documentation of Policy Changes</h3>

          <div className="form-section">
            <label>What format is used for documenting changes made to policies?</label>
            <div>
              <input type="text" name="documentFormat" placeholder="Describe the format used for documenting changes" />
            </div>
          </div>

          <div className="form-section">
            <label>How are the reasons for each policy change recorded?</label>
            <div>
              <input type="text" name="reasonDocumentation" placeholder="Describe how reasons for changes are documented" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for maintaining the documentation of policy changes?</label>
            <div>
              <input type="text" name="documentationResponsibility" placeholder="Describe the person or team responsible for maintaining documentation" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the historical record of policy changes accessible to stakeholders?</label>
            <div>
              <input type="text" name="historicalRecordAccess" placeholder="Describe how the historical record of policy changes is accessed" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to ensure that documentation is up-to-date and accurate?</label>
            <div>
              <input type="text" name="documentationUpdateProcedure" placeholder="Describe procedures for keeping documentation up-to-date" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default PolicyRevisionPage;
