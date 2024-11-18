import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function StakeholderFeedbackPage() {
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

      {/* Staff Input on Policy Impact Section */}
      <main className="form-container">
        <h2>Staff Input on Policy Impact</h2>
        <form>
          {/* Staff Feedback Section */}
          <h3>Staff Input on Policy Impact</h3>

          <div className="form-section">
            <label>What methods are used to collect staff feedback on the effectiveness of security policies?</label>
            <div>
              <input type="text" name="feedbackMethods" placeholder="Describe methods for collecting staff feedback" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are staff surveys or focus groups conducted to assess policy impact?</label>
            <div>
              <input type="text" name="surveyFrequency" placeholder="Describe frequency of staff surveys or focus groups" />
            </div>
          </div>

          <div className="form-section">
            <label>In what ways are staff encouraged to share their experiences with existing policies?</label>
            <div>
              <input type="text" name="staffEncouragement" placeholder="Describe how staff are encouraged to share experiences" />
            </div>
          </div>

          <div className="form-section">
            <label>How is staff feedback incorporated into the policy revision process?</label>
            <div>
              <input type="text" name="feedbackIncorporation" placeholder="Describe how feedback is incorporated into revisions" />
            </div>
          </div>

          <div className="form-section">
            <label>What follow-up actions are taken after collecting staff input to address concerns or suggestions?</label>
            <div>
              <input type="text" name="followUpActions" placeholder="Describe follow-up actions after collecting feedback" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default StakeholderFeedbackPage;
