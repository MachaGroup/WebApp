import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 : part of device management 

function DeviceEncryptionPage() {
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

      {/* Device Encryption Section */}
      <main className="form-container">
        <h2>Device Encryption</h2>

        <form>
          {/* Encryption Standards and Protocols */}
          <h4>Encryption Standards and Protocols</h4>

          <div className="form-section">
            <label>What encryption algorithms and protocols are used to secure data on laptops, and do they meet industry standards (e.g., AES-256)?</label>
            <div>
              <input type="text" name="encryptionAlgorithms" placeholder="Describe encryption algorithms and protocols used" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific policies that dictate the minimum encryption standards required for different types of data stored on laptops?</label>
            <div>
              <input type="text" name="encryptionPolicies" placeholder="Describe policies for minimum encryption standards" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption keys managed, stored, and rotated to ensure they remain secure and uncompromised?</label>
            <div>
              <input type="text" name="encryptionKeyManagement" placeholder="Describe encryption key management process" />
            </div>
          </div>

          {/* Implementation and Coverage */}
          <h4>Implementation and Coverage</h4>

          <div className="form-section">
            <label>Is encryption automatically enabled on all laptops, or does it require manual activation by the user?</label>
            <div>
              <input type="text" name="encryptionActivation" placeholder="Describe how encryption is enabled on laptops" />
            </div>
          </div>

          <div className="form-section">
            <label>Are all storage devices on the laptops, including external drives and USB devices, encrypted by default?</label>
            <div>
              <input type="text" name="storageEncryption" placeholder="Describe encryption for external drives and USBs" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to ensure that encryption is uniformly applied across all devices, including new and reissued laptops?</label>
            <div>
              <input type="text" name="encryptionConsistency" placeholder="Describe processes for uniform encryption" />
            </div>
          </div>

          {/* User Awareness and Training */}
          <h4>User Awareness and Training</h4>

          <div className="form-section">
            <label>Are users trained on the importance of device encryption and instructed on how to verify that their devices are properly encrypted?</label>
            <div>
              <input type="text" name="userTraining" placeholder="Describe user training on encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>How are users informed about best practices for handling encrypted devices, such as maintaining strong passwords and avoiding unauthorized software installations?</label>
            <div>
              <input type="text" name="bestPractices" placeholder="Describe user education on best practices for encrypted devices" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there periodic refreshers or updates provided to ensure ongoing user compliance and awareness regarding encryption policies?</label>
            <div>
              <input type="text" name="refresherTraining" placeholder="Describe periodic training or updates on encryption" />
            </div>
          </div>

          {/* Compliance and Monitoring */}
          <h4>Compliance and Monitoring</h4>

          <div className="form-section">
            <label>How is compliance with device encryption policies monitored and enforced across the organization?</label>
            <div>
              <input type="text" name="complianceMonitoring" placeholder="Describe compliance monitoring for encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there tools or systems in place to regularly audit devices to confirm that encryption is enabled and functioning correctly?</label>
            <div>
              <input type="text" name="encryptionAuditing" placeholder="Describe tools for auditing encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken if a device is found to be non-compliant or if encryption is accidentally or deliberately disabled?</label>
            <div>
              <input type="text" name="nonComplianceSteps" placeholder="Describe steps for handling non-compliance or disabled encryption" />
            </div>
          </div>

          {/* Data Recovery and Contingency Planning */}
          <h4>Data Recovery and Contingency Planning</h4>

          <div className="form-section">
            <label>What procedures are in place for data recovery in the event of a lost or damaged device that is encrypted?</label>
            <div>
              <input type="text" name="dataRecovery" placeholder="Describe procedures for data recovery from encrypted devices" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization handle encryption in cases where devices are decommissioned or repurposed to ensure that sensitive data is not accessible?</label>
            <div>
              <input type="text" name="decommissioningEncryption" placeholder="Describe encryption handling during device decommissioning" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there contingency plans to access encrypted data in cases where users forget their passwords or lose access to encryption keys?</label>
            <div>
              <input type="text" name="contingencyPlans" placeholder="Describe contingency plans for forgotten passwords or lost keys" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default DeviceEncryptionPage;
