import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 : email encryption

function SecureEmailGatewaysPage() {
  const handleButtonClick = (section) => {
    console.log(`Button clicked for: ${section}`);
    // Add logic for handling button click, like opening a modal or navigating
  };

  return (
    <div className="form-page">
      {/* Header Section */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>←</button> {/* Go back button */}
        <h1>The MACHA Group</h1>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Secure Email Gateways Section */}
      <main className="form-container">
        <h2>Secure Email Gateways</h2>

        <form>
          {/* Implementation and Coverage */}
          <h4>Implementation and Coverage</h4>

          <div className="form-section">
            <label>How is file-level encryption implemented for sensitive files and folders, and are specific policies defined for which files require encryption?</label>
            <div>
              <input type="text" name="segImplementation" placeholder="Describe how file-level encryption is implemented" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures in place to ensure that file-level encryption is consistently applied across all relevant types of data and across various storage locations (e.g., local drives, cloud storage)?</label>
            <div>
              <input type="text" name="segConsistency" placeholder="Describe procedures for consistent encryption application" />
            </div>
          </div>

          <div className="form-section">
            <label>What tools or software are used for file-level encryption, and how are they integrated into existing workflows?</label>
            <div>
              <input type="text" name="segTools" placeholder="Describe tools used for file-level encryption" />
            </div>
          </div>

          {/* Encryption Standards and Configuration */}
          <h4>Encryption Standards and Configuration</h4>

          <div className="form-section">
            <label>What encryption standards are used for file-level encryption (e.g., AES-256), and do they meet industry best practices and regulatory requirements?</label>
            <div>
              <input type="text" name="segStandards" placeholder="Describe encryption standards used for email encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption settings configured, and are there guidelines for determining the level of encryption required based on the sensitivity of the data?</label>
            <div>
              <input type="text" name="segSettings" placeholder="Describe how encryption settings are configured" />
            </div>
          </div>

          <div className="form-section">
            <label>Are encryption keys managed securely, and how are they distributed and protected to prevent unauthorized access?</label>
            <div>
              <input type="text" name="segKeyManagement" placeholder="Describe encryption key management practices" />
            </div>
          </div>

          {/* Access Controls and Permissions */}
          <h4>Access Controls and Permissions</h4>

          <div className="form-section">
            <label>How are access controls managed for encrypted files and folders, and what authentication mechanisms are in place to ensure only authorized users can access encrypted data?</label>
            <div>
              <input type="text" name="segAccessControls" placeholder="Describe access control for encrypted email" />
            </div>
          </div>

          <div className="form-section">
            <label>Are permissions regularly reviewed and updated to reflect changes in user roles or employment status?</label>
            <div>
              <input type="text" name="segPermissionsReview" placeholder="Describe how permissions are reviewed" />
            </div>
          </div>

          <div className="form-section">
            <label>How is encryption access controlled in shared environments, such as collaborative workspaces or cloud storage, where multiple users may need access?</label>
            <div>
              <input type="text" name="segSharedAccess" placeholder="Describe access control in shared environments" />
            </div>
          </div>

          {/* Compliance and Monitoring */}
          <h4>Compliance and Monitoring</h4>

          <div className="form-section">
            <label>How is compliance with file-level encryption policies monitored and enforced within the organization?</label>
            <div>
              <input type="text" name="segComplianceMonitoring" placeholder="Describe monitoring of file-level encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits or checks to ensure that file-level encryption is applied consistently and that no sensitive files are left unencrypted?</label>
            <div>
              <input type="text" name="segAudits" placeholder="Describe audits for file-level encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>What mechanisms are in place for detecting and addressing any unauthorized access or encryption failures?</label>
            <div>
              <input type="text" name="segAccessDetection" placeholder="Describe how unauthorized access is detected" />
            </div>
          </div>

          {/* Recovery and Management */}
          <h4>Recovery and Management</h4>

          <div className="form-section">
            <label>What procedures are in place for recovering encrypted files in the event of data loss or corruption, and how is data recovery managed while maintaining encryption?</label>
            <div>
              <input type="text" name="segRecovery" placeholder="Describe recovery procedures for encrypted files" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption keys and passwords managed for file-level encryption, and what steps are taken to ensure they are protected against loss or compromise?</label>
            <div>
              <input type="text" name="segKeyManagementRecovery" placeholder="Describe key management during recovery" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there contingency plans for handling situations where files need to be decrypted, such as during legal investigations or audits, and how is data security maintained during these processes?</label>
            <div>
              <input type="text" name="segContingencyPlans" placeholder="Describe contingency plans for decryption" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default SecureEmailGatewaysPage;
