import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7 

function DataAccessControlsPage() {
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

      {/* Data Access Controls Section */}
      <main className="form-container">
        <h2>Data Access Controls</h2>
        <form>
          {/* Access Control Policies Section */}
          <h3>Access Control Policies</h3>

          <div className="form-section">
            <label>What policies are in place to define who can access sensitive data and under what conditions?</label>
            <div>
              <input type="text" name="accessControlPolicies" placeholder="Describe access control policies" />
            </div>
          </div>

          <div className="form-section">
            <label>How are access control policies communicated to and enforced among staff?</label>
            <div>
              <input type="text" name="policyCommunication" placeholder="Describe how policies are communicated and enforced" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for updating access control policies to reflect changes in organizational needs or regulations?</label>
            <div>
              <input type="text" name="policyUpdates" placeholder="Describe procedures for updating policies" />
            </div>
          </div>

          {/* Role-Based Access Control (RBAC) Section */}
          <h3>Role-Based Access Control (RBAC)</h3>

          <div className="form-section">
            <label>How are roles defined within the organization, and what criteria determine role-based access permissions?</label>
            <div>
              <input type="text" name="roleDefinition" placeholder="Describe role definitions and criteria" />
            </div>
          </div>

          <div className="form-section">
            <label>How are roles assigned to individuals, and how is access to sensitive data managed based on these roles?</label>
            <div>
              <input type="text" name="roleAssignment" placeholder="Describe role assignments and data access management" />
            </div>
          </div>

          <div className="form-section">
            <label>Are role definitions reviewed and updated periodically to ensure they reflect current job responsibilities?</label>
            <div>
              <input type="text" name="roleReview" placeholder="Describe role definition review process" />
            </div>
          </div>

          {/* Access Approval Processes Section */}
          <h3>Access Approval Processes</h3>

          <div className="form-section">
            <label>What processes are in place for granting, modifying, or revoking access to sensitive data?</label>
            <div>
              <input type="text" name="accessApprovalProcesses" placeholder="Describe access approval processes" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for approving access requests, and how is the approval process documented?</label>
            <div>
              <input type="text" name="approvalResponsibility" placeholder="Describe responsibility and documentation for access approval" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms for auditing and reviewing access approvals to ensure compliance with access control policies?</label>
            <div>
              <input type="text" name="accessAudit" placeholder="Describe mechanisms for auditing access approvals" />
            </div>
          </div>

          {/* Authentication and Authorization Section */}
          <h3>Authentication and Authorization</h3>

          <div className="form-section">
            <label>What methods are used to authenticate users before granting access to sensitive data (e.g., passwords, multi-factor authentication)?</label>
            <div>
              <input type="text" name="authenticationMethods" placeholder="Describe authentication methods" />
            </div>
          </div>

          <div className="form-section">
            <label>How is authorization managed to ensure that users only access data that is necessary for their role?</label>
            <div>
              <input type="text" name="authorizationManagement" placeholder="Describe authorization management process" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for handling authentication and authorization failures or issues?</label>
            <div>
              <input type="text" name="authFailureProcedures" placeholder="Describe procedures for handling authentication failures" />
            </div>
          </div>

          {/* Access Logging and Monitoring Section */}
          <h3>Access Logging and Monitoring</h3>

          <div className="form-section">
            <label>How is access to sensitive data logged, and what information is captured in access logs?</label>
            <div>
              <input type="text" name="accessLogging" placeholder="Describe how access is logged and information captured" />
            </div>
          </div>

          <div className="form-section">
            <label>What monitoring mechanisms are in place to detect and respond to unauthorized access attempts or anomalies?</label>
            <div>
              <input type="text" name="monitoringMechanisms" placeholder="Describe monitoring mechanisms for unauthorized access" />
            </div>
          </div>

          <div className="form-section">
            <label>How are access logs reviewed and analyzed to identify potential security incidents or policy violations?</label>
            <div>
              <input type="text" name="accessLogReview" placeholder="Describe review and analysis of access logs" />
            </div>
          </div>

          {/* Data Access Reviews Section */}
          <h3>Data Access Reviews</h3>

          <div className="form-section">
            <label>How frequently are access rights reviewed to ensure they are still appropriate for each user's role?</label>
            <div>
              <input type="text" name="accessReviewFrequency" placeholder="Describe frequency of access rights reviews" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are used to validate that access permissions are aligned with current job responsibilities?</label>
            <div>
              <input type="text" name="accessValidation" placeholder="Describe process for validating access permissions" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for handling discrepancies or issues identified during access reviews?</label>
            <div>
              <input type="text" name="accessReviewIssues" placeholder="Describe procedures for handling discrepancies" />
            </div>
          </div>

          {/* Least Privilege Principle Section */}
          <h3>Least Privilege Principle</h3>

          <div className="form-section">
            <label>How is the principle of least privilege applied to limit access to sensitive data to only those who need it?</label>
            <div>
              <input type="text" name="leastPrivilege" placeholder="Describe application of least privilege" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to ensure that access permissions are regularly reviewed and adjusted based on changing roles?</label>
            <div>
              <input type="text" name="accessAdjustment" placeholder="Describe processes for adjusting access based on roles" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there safeguards to prevent the accumulation of excessive access rights over time?</label>
            <div>
              <input type="text" name="excessiveAccessSafeguards" placeholder="Describe safeguards to prevent excessive access rights" />
            </div>
          </div>

          {/* Access Control for External Parties Section */}
          <h3>Access Control for External Parties</h3>

          <div className="form-section">
            <label>How is access to sensitive data managed for external parties, such as contractors or vendors?</label>
            <div>
              <input type="text" name="externalAccessManagement" placeholder="Describe external access management" />
            </div>
          </div>

          <div className="form-section">
            <label>What controls are in place to ensure that external parties adhere to the organization's access policies?</label>
            <div>
              <input type="text" name="externalAccessControls" placeholder="Describe controls for external parties' access" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there agreements or contracts in place to govern access to sensitive data by external parties?</label>
            <div>
              <input type="text" name="externalAccessAgreements" placeholder="Describe agreements for external access" />
            </div>
          </div>

          {/* Incident Response for Access Violations Section */}
          <h3>Incident Response for Access Violations</h3>

          <div className="form-section">
            <label>What procedures are followed when unauthorized access to sensitive data is detected?</label>
            <div>
              <input type="text" name="accessViolationResponse" placeholder="Describe procedures for unauthorized access" />
            </div>
          </div>

          <div className="form-section">
            <label>How are incidents involving access control breaches reported, investigated, and resolved?</label>
            <div>
              <input type="text" name="breachReporting" placeholder="Describe breach reporting and resolution process" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms for documenting and addressing lessons learned from access violations?</label>
            <div>
              <input type="text" name="lessonsLearned" placeholder="Describe mechanisms for documenting lessons learned" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to employees regarding data access controls and policies?</label>
            <div>
              <input type="text" name="accessControlTraining" placeholder="Describe training provided to employees" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness of access control best practices maintained among staff?</label>
            <div>
              <input type="text" name="awarenessMaintenance" placeholder="Describe how awareness is maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or guidelines available to assist employees in understanding and adhering to access control requirements?</label>
            <div>
              <input type="text" name="accessControlResources" placeholder="Describe resources or guidelines for employees" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default DataAccessControlsPage;
