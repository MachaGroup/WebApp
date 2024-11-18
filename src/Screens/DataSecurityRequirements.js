import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function DataSecurityRequirementsPage() {
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

      {/* Data Security Requirements Section */}
      <main className="form-container">
        <h2>Data Security Requirements</h2>
        <form>
          {/* Data Encryption Section */}
          <h3>Data Encryption</h3>

          <div className="form-section">
            <label>What types of encryption are used to protect student data both at rest and in transit?</label>
            <div>
              <input type="text" name="encryptionTypes" placeholder="Describe encryption methods for data at rest and in transit" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption standards selected and implemented to ensure they meet current security best practices?</label>
            <div>
              <input type="text" name="encryptionStandards" placeholder="Describe how encryption standards are selected and implemented" />
            </div>
          </div>

          <div className="form-section">
            <label>What is the process for managing and updating encryption keys?</label>
            <div>
              <input type="text" name="encryptionKeyManagement" placeholder="Describe encryption key management process" />
            </div>
          </div>

          {/* Access Control Section */}
          <h3>Access Control</h3>

          <div className="form-section">
            <label>What access control measures are in place to restrict access to student data to authorized personnel only?</label>
            <div>
              <input type="text" name="accessControlMeasures" placeholder="Describe access control measures" />
            </div>
          </div>

          <div className="form-section">
            <label>How are access permissions managed and reviewed to ensure that only those with a legitimate need have access to sensitive data?</label>
            <div>
              <input type="text" name="accessPermissionsManagement" placeholder="Describe management and review of access permissions" />
            </div>
          </div>

          <div className="form-section">
            <label>What authentication methods are used to verify the identity of individuals accessing student data?</label>
            <div>
              <input type="text" name="authenticationMethods" placeholder="Describe authentication methods" />
            </div>
          </div>

          {/* Data Backup and Recovery Section */}
          <h3>Data Backup and Recovery</h3>

          <div className="form-section">
            <label>What are the procedures for backing up student data, and how frequently are backups performed?</label>
            <div>
              <input type="text" name="backupProcedures" placeholder="Describe data backup procedures and frequency" />
            </div>
          </div>

          <div className="form-section">
            <label>How are backup files secured to prevent unauthorized access or data breaches?</label>
            <div>
              <input type="text" name="backupSecurity" placeholder="Describe security measures for backup files" />
            </div>
          </div>

          <div className="form-section">
            <label>What is the process for testing data recovery from backups to ensure that data can be restored effectively in the event of a loss?</label>
            <div>
              <input type="text" name="dataRecoveryProcess" placeholder="Describe process for testing data recovery" />
            </div>
          </div>

          {/* Network Security Section */}
          <h3>Network Security</h3>

          <div className="form-section">
            <label>What network security measures are in place to protect student data from unauthorized access and cyberattacks?</label>
            <div>
              <input type="text" name="networkSecurityMeasures" placeholder="Describe network security measures" />
            </div>
          </div>

          <div className="form-section">
            <label>How are firewalls, intrusion detection systems, and other network security tools configured to safeguard data?</label>
            <div>
              <input type="text" name="networkSecurityTools" placeholder="Describe configuration of network security tools" />
            </div>
          </div>

          <div className="form-section">
            <label>What protocols are followed to monitor and respond to potential network security threats?</label>
            <div>
              <input type="text" name="networkThreatMonitoring" placeholder="Describe protocols for monitoring and responding to network threats" />
            </div>
          </div>

          {/* Physical Security Section */}
          <h3>Physical Security</h3>

          <div className="form-section">
            <label>What physical security measures are in place to protect servers, computers, and other devices storing student data?</label>
            <div>
              <input type="text" name="physicalSecurityMeasures" placeholder="Describe physical security measures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is access to physical locations where data is stored or processed controlled and monitored?</label>
            <div>
              <input type="text" name="physicalAccessControl" placeholder="Describe access control for physical locations" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are followed to secure data during maintenance or when equipment is being replaced?</label>
            <div>
              <input type="text" name="dataSecurityDuringMaintenance" placeholder="Describe procedures for securing data during maintenance" />
            </div>
          </div>

          {/* Data Handling and Transmission Section */}
          <h3>Data Handling and Transmission</h3>

          <div className="form-section">
            <label>How is student data securely transmitted between systems and organizations, such as during data exchanges or remote access?</label>
            <div>
              <input type="text" name="dataTransmissionSecurity" placeholder="Describe secure transmission of student data" />
            </div>
          </div>

          <div className="form-section">
            <label>What protocols are used to ensure secure data handling during data entry, processing, and storage?</label>
            <div>
              <input type="text" name="secureDataHandlingProtocols" placeholder="Describe protocols for secure data handling" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there guidelines for securely disposing of or decommissioning hardware and media containing student data?</label>
            <div>
              <input type="text" name="hardwareDisposalGuidelines" placeholder="Describe guidelines for hardware and media disposal" />
            </div>
          </div>

          {/* Compliance and Auditing Section */}
          <h3>Compliance and Auditing</h3>

          <div className="form-section">
            <label>How does the organization ensure compliance with data security regulations and standards, such as FERPA, GDPR, or other relevant laws?</label>
            <div>
              <input type="text" name="complianceRegulations" placeholder="Describe compliance with data security regulations" />
            </div>
          </div>

          <div className="form-section">
            <label>What auditing practices are in place to regularly review and assess data security measures?</label>
            <div>
              <input type="text" name="auditPractices" placeholder="Describe auditing practices for data security" />
            </div>
          </div>

          <div className="form-section">
            <label>How are audit findings addressed, and what corrective actions are taken to resolve identified issues?</label>
            <div>
              <input type="text" name="auditFindings" placeholder="Describe how audit findings are addressed and resolved" />
            </div>
          </div>

          {/* Incident Response Section */}
          <h3>Incident Response</h3>

          <div className="form-section">
            <label>What procedures are in place for responding to data breaches or security incidents involving student data?</label>
            <div>
              <input type="text" name="incidentResponseProcedures" placeholder="Describe procedures for responding to data breaches" />
            </div>
          </div>

          <div className="form-section">
            <label>How are incidents reported, investigated, and documented to ensure timely and effective resolution?</label>
            <div>
              <input type="text" name="incidentReporting" placeholder="Describe incident reporting and investigation procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to notify affected individuals and regulatory authorities in the event of a data breach?</label>
            <div>
              <input type="text" name="breachNotification" placeholder="Describe steps for notifying affected individuals and authorities" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to staff regarding data security best practices and their responsibilities in protecting student data?</label>
            <div>
              <input type="text" name="securityTraining" placeholder="Describe data security training for staff" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness maintained among staff about emerging threats and security updates?</label>
            <div>
              <input type="text" name="securityAwareness" placeholder="Describe how security awareness is maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or guidelines available to assist staff in understanding and implementing data security measures?</label>
            <div>
              <input type="text" name="securityResources" placeholder="Describe available resources or guidelines" />
            </div>
          </div>

          {/* Policy and Procedure Documentation Section */}
          <h3>Policy and Procedure Documentation</h3>

          <div className="form-section">
            <label>What policies and procedures are in place to govern data security practices related to student data?</label>
            <div>
              <input type="text" name="dataSecurityPolicies" placeholder="Describe policies governing data security" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these policies documented, and how often are they reviewed and updated?</label>
            <div>
              <input type="text" name="policyDocumentation" placeholder="Describe documentation and review process for policies" />
            </div>
          </div>

          <div className="form-section">
            <label>How are changes to data security policies communicated to staff and other stakeholders?</label>
            <div>
              <input type="text" name="policyChangeCommunication" placeholder="Describe communication of policy changes" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default DataSecurityRequirementsPage;
