import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 : email encryption

function EndToEndEncryptionPage() {
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

      {/* End-to-End Encryption Section */}
      <main className="form-container">
        <h2>End-to-End Encryption</h2>

        <form>
          {/* Implementation and Usage */}
          <h4>Implementation and Usage</h4>

          <div className="form-section">
            <label>How is end-to-end encryption implemented in your communication and data storage systems, and what specific protocols or standards (e.g., PGP, S/MIME) are used?</label>
            <div>
              <input type="text" name="e2eImplementation" placeholder="Describe implementation and protocols used" />
            </div>
          </div>

          <div className="form-section">
            <label>Are all communication channels (e.g., emails, messaging apps) and data exchanges that involve sensitive information covered by end-to-end encryption?</label>
            <div>
              <input type="text" name="e2eChannels" placeholder="Describe coverage of communication channels" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for ensuring that end-to-end encryption is consistently applied across all relevant systems and applications?</label>
            <div>
              <input type="text" name="e2eProcedures" placeholder="Describe procedures for consistent encryption" />
            </div>
          </div>

          {/* Encryption Standards and Configuration */}
          <h4>Encryption Standards and Configuration</h4>

          <div className="form-section">
            <label>What encryption algorithms and key lengths are used in the end-to-end encryption process (e.g., RSA, AES), and do they meet current security standards and best practices?</label>
            <div>
              <input type="text" name="e2eAlgorithms" placeholder="Describe encryption algorithms and key lengths used" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption keys generated, managed, and exchanged, and are they handled securely to prevent unauthorized access or misuse?</label>
            <div>
              <input type="text" name="e2eKeyManagement" placeholder="Describe key generation and management" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific configurations or settings recommended for different types of data or communication to ensure optimal security?</label>
            <div>
              <input type="text" name="e2eConfigurations" placeholder="Describe configuration settings for security" />
            </div>
          </div>

          {/* Access Control and Authentication */}
          <h4>Access Control and Authentication</h4>

          <div className="form-section">
            <label>How is access control managed for encrypted communications and data, and what authentication mechanisms are used to verify the identity of participants in encrypted exchanges?</label>
            <div>
              <input type="text" name="e2eAccessControl" placeholder="Describe access control and authentication mechanisms" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures in place for securely managing and distributing encryption keys to authorized users?</label>
            <div>
              <input type="text" name="e2eKeyDistribution" placeholder="Describe key distribution procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is user access to encrypted data monitored and controlled to prevent unauthorized access?</label>
            <div>
              <input type="text" name="e2eAccessMonitoring" placeholder="Describe monitoring and control mechanisms" />
            </div>
          </div>

          {/* Compliance and Auditing */}
          <h4>Compliance and Auditing</h4>

          <div className="form-section">
            <label>How is compliance with end-to-end encryption policies monitored and enforced, and are there regular audits to ensure adherence to encryption standards?</label>
            <div>
              <input type="text" name="e2eComplianceMonitoring" placeholder="Describe compliance monitoring and audits" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there documented processes for addressing potential vulnerabilities or breaches related to encryption, and how are these issues reported and resolved?</label>
            <div>
              <input type="text" name="e2eVulnerabilities" placeholder="Describe processes for handling vulnerabilities" />
            </div>
          </div>

          <div className="form-section">
            <label>What mechanisms are in place to verify that encryption practices align with relevant legal and regulatory requirements?</label>
            <div>
              <input type="text" name="e2eRegulatoryAlignment" placeholder="Describe how encryption aligns with regulatory requirements" />
            </div>
          </div>

          {/* Training and Awareness */}
          <h4>Training and Awareness</h4>

          <div className="form-section">
            <label>Are employees and users trained on the importance of end-to-end encryption and how to properly use encryption tools and protocols?</label>
            <div>
              <input type="text" name="e2eTraining" placeholder="Describe employee training for end-to-end encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>What resources or support are available to help users understand and implement end-to-end encryption effectively?</label>
            <div>
              <input type="text" name="e2eSupport" placeholder="Describe available support resources for encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>How is ongoing training and awareness maintained to keep up with evolving encryption technologies and best practices?</label>
            <div>
              <input type="text" name="e2eOngoingTraining" placeholder="Describe ongoing encryption training and awareness" />
            </div>
          </div>

          {/* Data Recovery and Management */}
          <h4>Data Recovery and Management</h4>

          <div className="form-section">
            <label>What procedures are in place for securely recovering encrypted data in the event of loss or corruption, and how are decryption keys managed during recovery?</label>
            <div>
              <input type="text" name="e2eDataRecovery" placeholder="Describe data recovery procedures for encrypted data" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the secure disposal of old or unused encryption keys handled to prevent potential security risks?</label>
            <div>
              <input type="text" name="e2eKeyDisposal" placeholder="Describe key disposal practices" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there contingency plans for decrypting data when necessary, such as during investigations or compliance audits, and how is data integrity maintained during these processes?</label>
            <div>
              <input type="text" name="e2eContingencyPlans" placeholder="Describe contingency plans for decrypting data" />
            </div>
          </div>

          {/* Integration and Compatibility */}
          <h4>Integration and Compatibility</h4>

          <div className="form-section">
            <label>How does end-to-end encryption integrate with existing systems and applications, and are there any compatibility issues that need to be addressed?</label>
            <div>
              <input type="text" name="e2eIntegration" placeholder="Describe encryption integration with systems" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to ensure that encryption does not negatively impact system performance or user experience?</label>
            <div>
              <input type="text" name="e2ePerformance" placeholder="Describe how encryption is optimized for performance" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for testing and validating encryption solutions to ensure they work as intended in your specific environment?</label>
            <div>
              <input type="text" name="e2eTesting" placeholder="Describe testing procedures for encryption solutions" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default EndToEndEncryptionPage;
