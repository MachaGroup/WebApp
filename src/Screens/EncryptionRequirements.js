import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7 

function EncryptionRequirementsPage() {
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

      {/* Encryption Requirements Section */}
      <main className="form-container">
        <h2>Encryption Requirements</h2>
        <form>
          {/* Encryption Standards Section */}
          <h3>Encryption Standards</h3>

          <div className="form-section">
            <label>What encryption standards or algorithms are required for protecting sensitive data (e.g., AES-256, RSA)?</label>
            <div>
              <input type="text" name="encryptionStandards" placeholder="Describe encryption standards required" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption standards selected and updated to address emerging security threats?</label>
            <div>
              <input type="text" name="encryptionSelection" placeholder="Describe how standards are selected and updated" />
            </div>
          </div>

          <div className="form-section">
            <label>Are encryption standards documented and communicated to relevant stakeholders?</label>
            <div>
              <input type="text" name="encryptionDocumentation" placeholder="Describe documentation and communication process" />
            </div>
          </div>

          {/* Data Classification Section */}
          <h3>Data Classification</h3>

          <div className="form-section">
            <label>How is sensitive data identified and classified to determine the appropriate encryption measures?</label>
            <div>
              <input type="text" name="dataIdentification" placeholder="Describe data identification and classification" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to define what constitutes sensitive data within the organization?</label>
            <div>
              <input type="text" name="sensitiveDataCriteria" placeholder="Describe criteria for sensitive data" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are data classifications reviewed and updated?</label>
            <div>
              <input type="text" name="classificationReview" placeholder="Describe frequency of classification reviews" />
            </div>
          </div>

          {/* Encryption Implementation Section */}
          <h3>Encryption Implementation</h3>

          <div className="form-section">
            <label>What methods or tools are used to apply encryption to sensitive data (e.g., software, hardware)?</label>
            <div>
              <input type="text" name="encryptionMethods" placeholder="Describe methods and tools used for encryption" />
            </div>
          </div>

          <div className="form-section">
            <label>How is encryption integrated into data storage, transmission, and processing systems?</label>
            <div>
              <input type="text" name="encryptionIntegration" placeholder="Describe encryption integration into systems" />
            </div>
          </div>

          <div className="form-section">
            <label>Are encryption practices consistent across different types of sensitive data and systems?</label>
            <div>
              <input type="text" name="encryptionConsistency" placeholder="Describe consistency in encryption practices" />
            </div>
          </div>

          {/* Key Management Section */}
          <h3>Key Management</h3>

          <div className="form-section">
            <label>What procedures are in place for generating, distributing, storing, and managing encryption keys?</label>
            <div>
              <input type="text" name="keyManagement" placeholder="Describe procedures for key management" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption keys protected from unauthorized access or compromise?</label>
            <div>
              <input type="text" name="keyProtection" placeholder="Describe encryption key protection measures" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are followed for key rotation, expiration, and revocation?</label>
            <div>
              <input type="text" name="keyRotation" placeholder="Describe key rotation and revocation processes" />
            </div>
          </div>

          {/* Compliance and Regulatory Requirements Section */}
          <h3>Compliance and Regulatory Requirements</h3>

          <div className="form-section">
            <label>How does the organization's encryption approach comply with relevant regulations and standards (e.g., GDPR, HIPAA)?</label>
            <div>
              <input type="text" name="regulatoryCompliance" placeholder="Describe compliance with regulations" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific regulatory requirements that impact encryption practices, and how are they addressed?</label>
            <div>
              <input type="text" name="regulatoryImpact" placeholder="Describe regulatory impact on encryption practices" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to ensure ongoing compliance with encryption-related regulations?</label>
            <div>
              <input type="text" name="ongoingCompliance" placeholder="Describe measures for ensuring ongoing compliance" />
            </div>
          </div>

          {/* Encryption for Data in Transit Section */}
          <h3>Encryption for Data in Transit</h3>

          <div className="form-section">
            <label>What encryption protocols are used for securing data transmitted over networks (e.g., TLS, HTTPS)?</label>
            <div>
              <input type="text" name="dataInTransitEncryption" placeholder="Describe encryption protocols for data in transit" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the integrity and confidentiality of data in transit ensured through encryption?</label>
            <div>
              <input type="text" name="dataIntegrityTransit" placeholder="Describe how integrity and confidentiality are ensured" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there policies and procedures for validating the effectiveness of encryption for data in transit?</label>
            <div>
              <input type="text" name="validationPolicies" placeholder="Describe validation policies for data in transit" />
            </div>
          </div>

          {/* Encryption for Data at Rest Section */}
          <h3>Encryption for Data at Rest</h3>

          <div className="form-section">
            <label>How is sensitive data encrypted when stored on physical media, such as hard drives and backup tapes?</label>
            <div>
              <input type="text" name="dataAtRestPhysical" placeholder="Describe encryption for data at rest on physical media" />
            </div>
          </div>

          <div className="form-section">
            <label>What encryption techniques are used for cloud storage and other remote data repositories?</label>
            <div>
              <input type="text" name="cloudStorageEncryption" placeholder="Describe encryption techniques for cloud storage" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there safeguards to protect encrypted data from unauthorized access or physical theft?</label>
            <div>
              <input type="text" name="dataSafeguards" placeholder="Describe safeguards for encrypted data" />
            </div>
          </div>

          {/* Access Controls Section */}
          <h3>Access Controls</h3>

          <div className="form-section">
            <label>What access controls are in place to ensure that only authorized personnel can manage and use encryption keys?</label>
            <div>
              <input type="text" name="accessControls" placeholder="Describe access controls for encryption keys" />
            </div>
          </div>

          <div className="form-section">
            <label>How are access permissions reviewed and updated to reflect changes in personnel or roles?</label>
            <div>
              <input type="text" name="permissionsReview" placeholder="Describe review and update of access permissions" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there logging and monitoring mechanisms to track access to encryption keys and sensitive data?</label>
            <div>
              <input type="text" name="monitoringMechanisms" placeholder="Describe logging and monitoring mechanisms" />
            </div>
          </div>

          {/* Encryption Testing and Validation Section */}
          <h3>Encryption Testing and Validation</h3>

          <div className="form-section">
            <label>How is the effectiveness of encryption measures tested and validated?</label>
            <div>
              <input type="text" name="encryptionTesting" placeholder="Describe testing and validation of encryption measures" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular security assessments or audits to evaluate the implementation of encryption?</label>
            <div>
              <input type="text" name="securityAssessments" placeholder="Describe security assessments or audits" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to address any vulnerabilities or issues identified during testing?</label>
            <div>
              <input type="text" name="vulnerabilityAddressing" placeholder="Describe processes for addressing vulnerabilities" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to employees regarding encryption practices and data protection?</label>
            <div>
              <input type="text" name="encryptionTraining" placeholder="Describe training provided to employees" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness of encryption requirements and best practices maintained among staff?</label>
            <div>
              <input type="text" name="encryptionAwareness" placeholder="Describe how encryption awareness is maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or guidelines available to assist employees in understanding and implementing encryption?</label>
            <div>
              <input type="text" name="encryptionResources" placeholder="Describe available resources or guidelines" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default EncryptionRequirementsPage;
