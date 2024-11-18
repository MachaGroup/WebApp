import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6 

function BiometricAuthenticationPage() {
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

      {/* Biometric Authentication Section */}
      <main className="form-container">
        <h2>Biometric Authentication</h2>
        <form>
          {/* Implementation and Coverage Section */}
          <h3>Implementation and Coverage</h3>

          <div className="form-section">
            <label>What percentage of systems and applications within the organization utilize biometric authentication (e.g., fingerprint, facial recognition)?</label>
            <div>
              <input type="text" name="biometricPercentage" placeholder="Describe percentage of systems with biometric authentication" />
            </div>
          </div>

          <div className="form-section">
            <label>Are biometric authentication methods deployed across all critical access points, such as secure facilities or sensitive data systems?</label>
            <div>
              <input type="text" name="criticalAccessBiometric" placeholder="Describe deployment across critical access points" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the adoption of biometric authentication monitored, and what steps are taken to ensure comprehensive implementation?</label>
            <div>
              <input type="text" name="adoptionMonitoring" placeholder="Describe monitoring and steps for adoption" />
            </div>
          </div>

          {/* Security and Accuracy Section */}
          <h3>Security and Accuracy</h3>

          <div className="form-section">
            <label>How does the organization assess the accuracy and reliability of the biometric authentication methods used (e.g., false acceptance rates, false rejection rates)?</label>
            <div>
              <input type="text" name="biometricAccuracy" placeholder="Describe accuracy assessment methods for biometric authentication" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any documented incidents of unauthorized access despite the use of biometric authentication? If so, how were they addressed?</label>
            <div>
              <input type="text" name="biometricIncidents" placeholder="Describe incidents of unauthorized access despite 2FA" />
            </div>
          </div>

          <div className="form-section">
            <label>How are biometric data and authentication processes protected from potential security threats, such as spoofing or hacking?</label>
            <div>
              <input type="text" name="biometricSecurityProtection" placeholder="Describe security measures for biometric data" />
            </div>
          </div>

          {/* User Experience and Accessibility Section */}
          <h3>User Experience and Accessibility</h3>

          <div className="form-section">
            <label>How do users perceive the ease of use and convenience of the biometric authentication methods currently in place?</label>
            <div>
              <input type="text" name="userExperienceBiometric" placeholder="Describe user experience with biometric methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any reported challenges or issues faced by users when enrolling their biometric data or using the authentication systems (e.g., issues with fingerprint recognition)?</label>
            <div>
              <input type="text" name="biometricChallenges" placeholder="Describe challenges in biometric authentication" />
            </div>
          </div>

          <div className="form-section">
            <label>What accommodations are made for users who may have difficulty with biometric authentication, such as those with physical disabilities or who have non-standard biometric characteristics?</label>
            <div>
              <input type="text" name="accommodationsForBiometric" placeholder="Describe accommodations for users with biometric difficulties" />
            </div>
          </div>

          {/* Privacy and Data Protection Section */}
          <h3>Privacy and Data Protection</h3>

          <div className="form-section">
            <label>How does the organization ensure the privacy and protection of biometric data collected from users, including compliance with relevant data protection regulations (e.g., GDPR, CCPA)?</label>
            <div>
              <input type="text" name="biometricDataProtection" placeholder="Describe privacy and protection measures for biometric data" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to secure biometric data from unauthorized access or breaches, and how is this data stored and processed?</label>
            <div>
              <input type="text" name="biometricDataSecurity" placeholder="Describe measures to secure biometric data" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear policies and procedures for handling biometric data, including data retention, access controls, and data destruction?</label>
            <div>
              <input type="text" name="biometricDataPolicies" placeholder="Describe policies for handling biometric data" />
            </div>
          </div>

          {/* Backup and Recovery Options Section */}
          <h3>Backup and Recovery Options</h3>

          <div className="form-section">
            <label>What backup or recovery options are available if users are unable to use their biometric authentication method (e.g., due to injury or malfunction)?</label>
            <div>
              <input type="text" name="biometricBackupOptions" placeholder="Describe backup options for biometric authentication" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization handle scenarios where biometric authentication fails or is not accessible, and what alternative methods are provided?</label>
            <div>
              <input type="text" name="biometricFailureHandling" placeholder="Describe handling of biometric authentication failure" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there guidelines for securely managing and storing backup authentication methods to prevent unauthorized access?</label>
            <div>
              <input type="text" name="backupAuthenticationGuidelines" placeholder="Describe guidelines for managing backup authentication" />
            </div>
          </div>

          {/* Integration and Compatibility Section */}
          <h3>Integration and Compatibility</h3>

          <div className="form-section">
            <label>How well does the biometric authentication system integrate with other security measures and authentication methods in place (e.g., multi-factor authentication)?</label>
            <div>
              <input type="text" name="biometricIntegration" placeholder="Describe integration with other security measures" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any compatibility issues with specific devices, operating systems, or applications that could impact the effectiveness of biometric authentication?</label>
            <div>
              <input type="text" name="biometricCompatibility" placeholder="Describe compatibility issues for biometric authentication" />
            </div>
          </div>

          <div className="form-section">
            <label>Does the organization have plans to enhance or expand its biometric authentication capabilities to include newer technologies or improve existing methods?</label>
            <div>
              <input type="text" name="futurePlansBiometric" placeholder="Describe future plans for biometric authentication" />
            </div>
          </div>

          {/* Policy and Compliance Section */}
          <h3>Policy and Compliance</h3>

          <div className="form-section">
            <label>Are there documented policies and guidelines outlining the use and management of biometric authentication, including any exceptions or specific use cases?</label>
            <div>
              <input type="text" name="biometricPolicies" placeholder="Describe policies for biometric authentication" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure compliance with biometric authentication policies, especially for remote workers or external partners?</label>
            <div>
              <input type="text" name="biometricCompliance" placeholder="Describe compliance with biometric authentication" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits or reviews to ensure that biometric authentication practices remain in line with industry standards and regulations?</label>
            <div>
              <input type="text" name="auditAndReviewBiometric" placeholder="Describe audits and reviews for biometric authentication" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('biometricAuthentication')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default BiometricAuthenticationPage;
