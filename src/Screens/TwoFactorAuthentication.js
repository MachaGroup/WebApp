import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6 

function TwoFactorAuthenticationPage() {
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

      {/* Two-Factor Authentication Section */}
      <main className="form-container">
        <h2>Two-Factor Authentication (2FA)</h2>
        <form>
          {/* Implementation and Adoption Section */}
          <h3>Implementation and Adoption</h3>

          <div className="form-section">
            <label>What percentage of employees and users have successfully enrolled in the two-factor authentication (2FA) system?</label>
            <div>
              <input type="text" name="enrollmentPercentage" placeholder="Describe enrollment percentage" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific systems or applications within the organization that require mandatory 2FA? If so, which ones?</label>
            <div>
              <input type="text" name="mandatory2FASystems" placeholder="Describe mandatory 2FA systems" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the 2FA requirement communicated to all employees, and what steps are taken to ensure full compliance?</label>
            <div>
              <input type="text" name="communication2FA" placeholder="Describe communication methods for 2FA" />
            </div>
          </div>

          {/* Security and Effectiveness Section */}
          <h3>Security and Effectiveness</h3>

          <div className="form-section">
            <label>How does the organization evaluate the effectiveness of 2FA in preventing unauthorized access or reducing the risk of security breaches?</label>
            <div>
              <input type="text" name="2FAEffectivenessEvaluation" placeholder="Describe evaluation methods for 2FA effectiveness" />
            </div>
          </div>

          <div className="form-section">
            <label>Have there been any documented incidents of attempted unauthorized access that were thwarted by 2FA?</label>
            <div>
              <input type="text" name="2FAIncidents" placeholder="Describe incidents thwarted by 2FA" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any known vulnerabilities or security risks associated with the current 2FA methods (e.g., SIM swapping for SMS codes)?</label>
            <div>
              <input type="text" name="2FAVulnerabilities" placeholder="Describe known vulnerabilities" />
            </div>
          </div>

          {/* User Experience and Usability Section */}
          <h3>User Experience and Usability</h3>

          <div className="form-section">
            <label>How do employees and users perceive the ease of use and convenience of the 2FA methods currently implemented (e.g., SMS codes, authenticator apps)?</label>
            <div>
              <input type="text" name="userExperience2FA" placeholder="Describe user perceptions of 2FA methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any reported issues or challenges faced by users when setting up or using 2FA, such as difficulties with receiving SMS codes or using authenticator apps?</label>
            <div>
              <input type="text" name="2FAChallenges" placeholder="Describe challenges faced by users" />
            </div>
          </div>

          <div className="form-section">
            <label>What support or resources are available to assist users who experience problems with 2FA, such as a helpdesk or detailed guides?</label>
            <div>
              <input type="text" name="supportResources" placeholder="Describe support resources for 2FA" />
            </div>
          </div>

          {/* Backup and Recovery Options Section */}
          <h3>Backup and Recovery Options</h3>

          <div className="form-section">
            <label>What backup or recovery options are available if an employee or user loses access to their primary 2FA method (e.g., loses their phone or changes their number)?</label>
            <div>
              <input type="text" name="backupRecoveryOptions" placeholder="Describe backup or recovery options" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there guidelines for securely storing backup codes or recovery information to prevent misuse or unauthorized access?</label>
            <div>
              <input type="text" name="backupCodeStorage" placeholder="Describe guidelines for storing backup codes securely" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization handle 2FA reset requests to ensure security while accommodating legitimate user needs?</label>
            <div>
              <input type="text" name="2FAResetRequests" placeholder="Describe handling of 2FA reset requests" />
            </div>
          </div>

          {/* Integration and Compatibility Section */}
          <h3>Integration and Compatibility</h3>

          <div className="form-section">
            <label>How well does the 2FA system integrate with other security measures and authentication methods in place, such as single sign-on (SSO)?</label>
            <div>
              <input type="text" name="2FAIntegration" placeholder="Describe integration with other security measures" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any compatibility issues with specific devices, operating systems, or applications that could affect the functionality of 2FA?</label>
            <div>
              <input type="text" name="2FACompatibility" placeholder="Describe compatibility issues with 2FA" />
            </div>
          </div>

          <div className="form-section">
            <label>Does the organization have plans to expand or modify the 2FA implementation to include newer or more secure authentication methods?</label>
            <div>
              <input type="text" name="futurePlans2FA" placeholder="Describe future plans for 2FA implementation" />
            </div>
          </div>

          {/* Policy and Compliance Section */}
          <h3>Policy and Compliance</h3>

          <div className="form-section">
            <label>Are there documented policies and guidelines outlining when and how 2FA should be used, including any exceptions or alternative methods allowed?</label>
            <div>
              <input type="text" name="2FAPolicies" placeholder="Describe 2FA policies and guidelines" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure ongoing compliance with 2FA policies, particularly for remote workers or external partners?</label>
            <div>
              <input type="text" name="complianceWith2FA" placeholder="Describe compliance with 2FA for remote workers" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits or reviews to ensure that 2FA settings and policies remain up-to-date and in line with industry standards?</label>
            <div>
              <input type="text" name="auditAndReview2FA" placeholder="Describe audits and reviews for 2FA" />
            </div>
          </div>

          {/* Continuous Improvement and Feedback Section */}
          <h3>Continuous Improvement and Feedback</h3>

          <div className="form-section">
            <label>How often does the organization review and update its 2FA methods to incorporate new technologies or respond to emerging threats?</label>
            <div>
              <input type="text" name="reviewFrequency2FA" placeholder="Describe review frequency for 2FA methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a process for collecting feedback from users on their experience with 2FA, and how is this feedback used to make improvements?</label>
            <div>
              <input type="text" name="feedbackProcess2FA" placeholder="Describe feedback process for 2FA" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any planned upgrades or changes to the 2FA system in response to recent security developments or user feedback?</label>
            <div>
              <input type="text" name="upgradesTo2FA" placeholder="Describe planned upgrades for 2FA" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('twoFactorAuthentication')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default TwoFactorAuthenticationPage;
