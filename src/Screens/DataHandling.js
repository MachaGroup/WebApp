import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function DataHandlingPage() {
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

      {/* Data Handling Section */}
      <main className="form-container">
        <h2>Data Handling</h2>
        <form>
          {/* Data Classification Section */}
          <h3>Data Classification</h3>
          
          <div className="form-section">
            <label>What criteria are used to classify data into different categories (e.g., sensitive, confidential, public)?</label>
            <div>
              <input type="text" name="classificationCriteria" placeholder="Describe classification criteria" />
            </div>
          </div>

          <div className="form-section">
            <label>How are data classification levels defined and documented?</label>
            <div>
              <input type="text" name="classificationLevels" placeholder="Describe classification levels" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific guidelines for determining the sensitivity of data based on its content, context, and intended use?</label>
            <div>
              <input type="text" name="sensitivityGuidelines" placeholder="Describe sensitivity guidelines" />
            </div>
          </div>

          {/* Data Labeling and Marking Section */}
          <h3>Data Labeling and Marking</h3>
          
          <div className="form-section">
            <label>What procedures are in place for labeling and marking data according to its classification level?</label>
            <div>
              <input type="text" name="labelingProcedures" placeholder="Describe labeling procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is data labeling implemented across various data storage and communication platforms?</label>
            <div>
              <input type="text" name="dataLabelingImplementation" placeholder="Describe data labeling implementation" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there standardized labels or markings used to clearly indicate data classification levels?</label>
            <div>
              <input type="text" name="standardizedLabels" placeholder="Describe standardized labels" />
            </div>
          </div>

          {/* Access Controls Section */}
          <h3>Access Controls</h3>
          
          <div className="form-section">
            <label>How are access controls implemented based on data classification levels (e.g., restricting access to sensitive data)?</label>
            <div>
              <input type="text" name="accessControls" placeholder="Describe access controls" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to ensure that only authorized personnel have access to classified data?</label>
            <div>
              <input type="text" name="authorizedAccessMeasures" placeholder="Describe measures for authorized access" />
            </div>
          </div>

          <div className="form-section">
            <label>How are access permissions managed and reviewed for different classification levels?</label>
            <div>
              <input type="text" name="accessPermissionsReview" placeholder="Describe permissions review process" />
            </div>
          </div>

          {/* Data Handling Procedures Section */}
          <h3>Data Handling Procedures</h3>
          
          <div className="form-section">
            <label>What procedures are followed for handling and processing data based on its classification level (e.g., encryption for sensitive data)?</label>
            <div>
              <input type="text" name="handlingProcedures" placeholder="Describe handling procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific protocols for storing, transmitting, and disposing of classified data?</label>
            <div>
              <input type="text" name="dataProtocols" placeholder="Describe data protocols" />
            </div>
          </div>

          <div className="form-section">
            <label>How are data handling procedures communicated to and followed by employees?</label>
            <div>
              <input type="text" name="communicationProcedures" placeholder="Describe communication of procedures" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>
          
          <div className="form-section">
            <label>What training programs are provided to employees regarding data classification and handling practices?</label>
            <div>
              <input type="text" name="trainingPrograms" placeholder="Describe training programs" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness of data classification policies maintained among staff members?</label>
            <div>
              <input type="text" name="awarenessPrograms" placeholder="Describe awareness programs" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or guidelines available to assist employees in understanding and applying data classification procedures?</label>
            <div>
              <input type="text" name="resourcesGuidelines" placeholder="Describe available resources" />
            </div>
          </div>

          {/* Data Protection Measures Section */}
          <h3>Data Protection Measures</h3>
          
          <div className="form-section">
            <label>What measures are in place to protect data based on its classification level (e.g., physical security for sensitive data)?</label>
            <div>
              <input type="text" name="dataProtectionMeasures" placeholder="Describe data protection measures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is sensitive data protected from unauthorized access or exposure?</label>
            <div>
              <input type="text" name="sensitiveDataProtection" placeholder="Describe sensitive data protection" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific security controls implemented for different data classification levels?</label>
            <div>
              <input type="text" name="securityControls" placeholder="Describe security controls" />
            </div>
          </div>

          {/* Compliance and Auditing Section */}
          <h3>Compliance and Auditing</h3>
          
          <div className="form-section">
            <label>How is compliance with data classification policies monitored and enforced?</label>
            <div>
              <input type="text" name="complianceMonitoring" placeholder="Describe compliance monitoring" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits conducted to ensure proper classification and handling of data?</label>
            <div>
              <input type="text" name="regularAudits" placeholder="Describe audit process" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to address non-compliance with data classification policies?</label>
            <div>
              <input type="text" name="nonComplianceProcesses" placeholder="Describe non-compliance processes" />
            </div>
          </div>

          {/* Data Sharing and Transfer Section */}
          <h3>Data Sharing and Transfer</h3>
          
          <div className="form-section">
            <label>What guidelines are followed for sharing or transferring data between different classification levels (e.g., secure methods for transferring sensitive data)?</label>
            <div>
              <input type="text" name="dataSharingGuidelines" placeholder="Describe data sharing guidelines" />
            </div>
          </div>

          <div className="form-section">
            <label>How is data sharing controlled and monitored to prevent unauthorized access?</label>
            <div>
              <input type="text" name="dataSharingControl" placeholder="Describe data sharing control" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there protocols for documenting and tracking data transfers?</label>
            <div>
              <input type="text" name="dataTransferProtocols" placeholder="Describe data transfer protocols" />
            </div>
          </div>

          {/* Policy Review and Updates Section */}
          <h3>Policy Review and Updates</h3>
          
          <div className="form-section">
            <label>How frequently are data classification policies reviewed and updated to reflect changes in regulations or organizational needs?</label>
            <div>
              <input type="text" name="policyReviewFrequency" placeholder="Describe review frequency" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for reviewing and updating the data classification policies?</label>
            <div>
              <input type="text" name="policyReviewResponsibility" placeholder="Describe responsible parties" />
            </div>
          </div>

          <div className="form-section">
            <label>How are updates to data classification policies communicated to relevant stakeholders?</label>
            <div>
              <input type="text" name="policyUpdateCommunication" placeholder="Describe update communication" />
            </div>
          </div>

          {/* Incident Management Section */}
          <h3>Incident Management</h3>
          
          <div className="form-section">
            <label>What procedures are followed in the event of a data breach or exposure involving classified data?</label>
            <div>
              <input type="text" name="breachProcedures" placeholder="Describe breach procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How are incidents involving misclassification or mishandling of data managed and investigated?</label>
            <div>
              <input type="text" name="incidentManagement" placeholder="Describe incident management" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to mitigate the impact of data breaches and prevent future occurrences?</label>
            <div>
              <input type="text" name="breachImpactMitigation" placeholder="Describe breach mitigation steps" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default DataHandlingPage;
