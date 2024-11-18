import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 : file encryption

function FullDiskEncryptionPage() {
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

      {/* Full Disk Encryption Section */}
      <main className="form-container">
        <h2>Full Disk Encryption</h2>

        <form>
          {/* Implementation and Coverage */}
          <h4>Implementation and Coverage</h4>

          <div className="form-section">
            <label>Is full disk encryption enabled on all company-issued devices, including laptops and desktops, without exceptions?</label>
            <div>
              <input type="text" name="fdEncryptionEnabled" placeholder="Describe how full disk encryption is applied" />
            </div>
          </div>

          <div className="form-section">
            <label>How is encryption applied to ensure that it covers all types of data, including the operating system, applications, and user files?</label>
            <div>
              <input type="text" name="fdEncryptionCoverage" placeholder="Describe how encryption covers all types of data" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to ensure that encryption is automatically enabled on newly issued or re-imaged devices?</label>
            <div>
              <input type="text" name="fdEncryptionProcedure" placeholder="Describe procedures for auto-enabling encryption" />
            </div>
          </div>

          {/* Encryption Standards and Configuration */}
          <h4>Encryption Standards and Configuration</h4>

          <div className="form-section">
            <label>What encryption standards are used (e.g., AES-256), and do they comply with industry best practices and regulatory requirements?</label>
            <div>
              <input type="text" name="fdEncryptionStandards" placeholder="Describe encryption standards used" />
            </div>
          </div>

          <div className="form-section">
            <label>Are the encryption settings configured to balance security and performance, and are there specific configurations for different types of data or device usage?</label>
            <div>
              <input type="text" name="fdEncryptionSettings" placeholder="Describe encryption settings configurations" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption keys managed, and what methods are used to ensure they are securely stored and protected?</label>
            <div>
              <input type="text" name="fdEncryptionKeys" placeholder="Describe encryption key management" />
            </div>
          </div>

          {/* User Access and Management */}
          <h4>User Access and Management</h4>

          <div className="form-section">
            <label>How is user access to encrypted devices managed, and what authentication methods are required to unlock the devices (e.g., passwords, biometrics)?</label>
            <div>
              <input type="text" name="fdUserAccess" placeholder="Describe user access and authentication methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Are users trained on the importance of full disk encryption and how to handle their credentials securely?</label>
            <div>
              <input type="text" name="fdUserTraining" placeholder="Describe user training for encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for managing encryption in cases where users forget their passwords or lose access to their accounts?</label>
            <div>
              <input type="text" name="fdPasswordManagement" placeholder="Describe password recovery procedures" />
            </div>
          </div>

          {/* Compliance and Monitoring */}
          <h4>Compliance and Monitoring</h4>

          <div className="form-section">
            <label>How is compliance with full disk encryption policies monitored and enforced across the organization?</label>
            <div>
              <input type="text" name="fdComplianceMonitoring" placeholder="Describe compliance monitoring for encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits or checks to ensure that encryption is functioning correctly on all devices and that no devices are left unencrypted?</label>
            <div>
              <input type="text" name="fdEncryptionAudits" placeholder="Describe regular audits for encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken if a device is found to be non-compliant or if encryption fails to activate properly?</label>
            <div>
              <input type="text" name="fdNonComplianceSteps" placeholder="Describe steps for non-compliance or failed encryption" />
            </div>
          </div>

          {/* Recovery and Contingency Planning */}
          <h4>Recovery and Contingency Planning</h4>

          <div className="form-section">
            <label>What recovery procedures are in place for encrypted devices in the event of hardware failure, loss, or theft?</label>
            <div>
              <input type="text" name="fdRecoveryProcedures" placeholder="Describe recovery procedures for encrypted devices" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization handle data recovery in cases where encryption might prevent access to critical information?</label>
            <div>
              <input type="text" name="fdDataRecovery" placeholder="Describe data recovery handling when encryption prevents access" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there contingency plans to ensure that data on decommissioned or repurposed devices is securely wiped and no longer accessible?</label>
            <div>
              <input type="text" name="fdDecommissioningPlans" placeholder="Describe plans for wiping data on decommissioned devices" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default FullDiskEncryptionPage;
