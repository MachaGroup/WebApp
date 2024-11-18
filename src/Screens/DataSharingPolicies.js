import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function DataSharingPoliciesPage() {
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

      {/* Data Sharing Policies Section */}
      <main className="form-container">
        <h2>Data Sharing Policies</h2>
        <form>
          {/* Approval and Authorization Section */}
          <h3>Approval and Authorization</h3>

          <div className="form-section">
            <label>What is the process for approving data sharing requests with third parties?</label>
            <div>
              <input type="text" name="approvalProcess" placeholder="Describe approval process" />
            </div>
          </div>

          <div className="form-section">
            <label>Who has the authority to authorize data sharing agreements or contracts?</label>
            <div>
              <input type="text" name="authorizationAuthority" placeholder="Describe who authorizes sharing" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific criteria that must be met before data sharing is approved?</label>
            <div>
              <input type="text" name="approvalCriteria" placeholder="Describe approval criteria" />
            </div>
          </div>

          {/* Data Sharing Agreements Section */}
          <h3>Data Sharing Agreements</h3>

          <div className="form-section">
            <label>What are the key components of data sharing agreements with third parties (e.g., terms, conditions, data protection clauses)?</label>
            <div>
              <input type="text" name="agreementComponents" placeholder="Describe key components" />
            </div>
          </div>

          <div className="form-section">
            <label>How are data sharing agreements documented and maintained?</label>
            <div>
              <input type="text" name="agreementDocumentation" placeholder="Describe documentation process" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there standard templates or guidelines used for drafting data sharing agreements?</label>
            <div>
              <input type="text" name="agreementTemplates" placeholder="Describe standard templates" />
            </div>
          </div>

          {/* Data Security Measures Section */}
          <h3>Data Security Measures</h3>

          <div className="form-section">
            <label>What security measures are required for data shared with third parties (e.g., encryption, secure transmission)?</label>
            <div>
              <input type="text" name="securityMeasures" placeholder="Describe security measures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is data security ensured during the transfer and handling by third parties?</label>
            <div>
              <input type="text" name="securityDuringTransfer" placeholder="Describe security during transfer" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific requirements for third parties regarding data protection and security controls?</label>
            <div>
              <input type="text" name="thirdPartySecurity" placeholder="Describe third-party security requirements" />
            </div>
          </div>

          {/* Compliance with Regulations Section */}
          <h3>Compliance with Regulations</h3>

          <div className="form-section">
            <label>How does the organization ensure that data sharing complies with relevant regulations and legal requirements (e.g., GDPR, CCPA)?</label>
            <div>
              <input type="text" name="regulatoryCompliance" placeholder="Describe regulatory compliance process" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to verify that third parties comply with data protection regulations?</label>
            <div>
              <input type="text" name="thirdPartyComplianceVerification" placeholder="Describe compliance verification process" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular reviews or audits to ensure compliance with data sharing policies?</label>
            <div>
              <input type="text" name="regularAudits" placeholder="Describe audit process" />
            </div>
          </div>

          {/* Data Use and Restrictions Section */}
          <h3>Data Use and Restrictions</h3>

          <div className="form-section">
            <label>What restrictions are placed on the use of shared data by third parties (e.g., limitations on data usage or further sharing)?</label>
            <div>
              <input type="text" name="useRestrictions" placeholder="Describe restrictions on use" />
            </div>
          </div>

          <div className="form-section">
            <label>How is it ensured that third parties adhere to these restrictions?</label>
            <div>
              <input type="text" name="adherenceToRestrictions" placeholder="Describe adherence enforcement" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms in place to monitor and enforce compliance with data use restrictions?</label>
            <div>
              <input type="text" name="monitoringCompliance" placeholder="Describe monitoring mechanisms" />
            </div>
          </div>

          {/* Data Retention and Disposal Section */}
          <h3>Data Retention and Disposal</h3>

          <div className="form-section">
            <label>What guidelines are in place for the retention and disposal of data shared with third parties?</label>
            <div>
              <input type="text" name="retentionDisposalGuidelines" placeholder="Describe retention and disposal guidelines" />
            </div>
          </div>

          <div className="form-section">
            <label>How is data securely disposed of or returned once the purpose of sharing has been fulfilled?</label>
            <div>
              <input type="text" name="dataDisposalReturn" placeholder="Describe data disposal process" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for verifying that third parties follow proper data disposal practices?</label>
            <div>
              <input type="text" name="thirdPartyDisposalVerification" placeholder="Describe verification process" />
            </div>
          </div>

          {/* Incident Response and Breach Notification Section */}
          <h3>Incident Response and Breach Notification</h3>

          <div className="form-section">
            <label>What procedures are followed in the event of a data breach involving shared data?</label>
            <div>
              <input type="text" name="breachProcedures" placeholder="Describe breach procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How are third parties required to report data breaches or security incidents?</label>
            <div>
              <input type="text" name="thirdPartyBreachReporting" placeholder="Describe breach reporting requirements" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to address and mitigate the impact of breaches involving shared data?</label>
            <div>
              <input type="text" name="breachMitigationSteps" placeholder="Describe breach mitigation steps" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to employees regarding data sharing policies and procedures?</label>
            <div>
              <input type="text" name="trainingPrograms" placeholder="Describe training programs" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness of data sharing guidelines maintained among staff involved in data sharing?</label>
            <div>
              <input type="text" name="awarenessPrograms" placeholder="Describe awareness programs" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or guidelines available to help employees understand and comply with data sharing policies?</label>
            <div>
              <input type="text" name="resourcesGuidelines" placeholder="Describe available resources" />
            </div>
          </div>

          {/* Monitoring and Auditing Section */}
          <h3>Monitoring and Auditing</h3>

          <div className="form-section">
            <label>How is compliance with data sharing policies monitored and enforced?</label>
            <div>
              <input type="text" name="monitoringCompliance" placeholder="Describe monitoring and enforcement" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits conducted to review data sharing practices and agreements?</label>
            <div>
              <input type="text" name="auditProcess" placeholder="Describe audit process" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to address any non-compliance identified during audits?</label>
            <div>
              <input type="text" name="nonComplianceProcess" placeholder="Describe non-compliance processes" />
            </div>
          </div>

          {/* Policy Review and Updates Section */}
          <h3>Policy Review and Updates</h3>

          <div className="form-section">
            <label>How frequently are data sharing policies reviewed and updated to reflect changes in regulations or organizational needs?</label>
            <div>
              <input type="text" name="policyReviewFrequency" placeholder="Describe review frequency" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for reviewing and updating the data sharing policies?</label>
            <div>
              <input type="text" name="policyReviewResponsibility" placeholder="Describe responsible parties" />
            </div>
          </div>

          <div className="form-section">
            <label>How are updates to data sharing policies communicated to relevant stakeholders?</label>
            <div>
              <input type="text" name="policyUpdateCommunication" placeholder="Describe update communication" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default DataSharingPoliciesPage;
