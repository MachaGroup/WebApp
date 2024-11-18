import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling

// section 7

function PersonalDeviceUsagePage() {
  const navigate = useNavigate();  // Initialize useNavigate hook for navigation

  // Function to handle back button
  const handleBack = () => {
    navigate(-1);  // Navigates to the previous page
  };

  return (
    <div className="form-page">
      <header className="header">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>←</button> {/* Back button at the top */}
        <h1>Personal Device Usage</h1>
      </header>

      <main className="form-container">
        <form>
          {/* Policy Scope and Guidelines */}
          <h2>Policy Scope and Guidelines:</h2>
          <div className="form-section">
            <label>What guidelines are established for the use of personal devices (e.g., smartphones, tablets, laptops) on the network?</label>
            <div>
              <input type="text" name="guidelines" placeholder="Describe policies" />
            </div>
          </div>
         
          <div className="form-section">
            <label>Are there specific requirements for the type and security of personal devices that can connect to the network?</label>
            <div>
              <input type="text" name="deviceRequirements" placeholder="Define restrictions" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the policy define acceptable and unacceptable uses of personal devices within the organizational environment?</label>
            <div>
              <input type="text" name="acceptableUse" placeholder="Define policies" />
            </div>
          </div>

          {/* Device Registration and Management */}
          <h2>Device Registration and Management:</h2>
          <div className="form-section">
            <label>What procedures are in place for registering personal devices with the organization (e.g., device registration forms)? </label>
            <div>
              <input type="text" name="deviceRegistrationProcedures" placeholder="Describe procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the management and tracking of personal devices handled within the network?</label>
            <div>
              <input type="text" name="deviceManagement" placeholder="Describe management" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific protocols for ensuring that personal devices meet the organization's security standards before being granted access?</label>
            <div>
              <input type="text" name="securityProtocols" placeholder="Describe protocols" />
            </div>
          </div>
   
          {/* Security Measures */}
          <h2>Security Measures:</h2>
          <div className="form-section">
            <label>What security measures are required for personal devices to access the network (e.g., antivirus software, encryption)?</label>
            <div>
              <input type="text" name="securityMeasures" placeholder="Describe security" />
            </div>
          </div>

          <div className="form-section">
            <label>How are security updates and patches managed for personal devices connecting to the network?</label>
            <div>
              <input type="text" name="securityUpdates" placeholder="Describe security updates" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific requirements for personal devices regarding passwords or multi-factor authentication?</label>
            <div>
              <input type="text" name="passwordRequirements" placeholder="Describe requirements" />
            </div>
          </div>

          {/* Network Access Controls */}
          <h2>Network Access Controls:</h2>
          <div className="form-section">
            <label>How is network access controlled for personal devices (e.g., network segmentation, VPN requirements)?</label>
            <div>
              <input type="text" name="networkAccess" placeholder="Describe network access" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there restrictions on the types of network resources that personal devices can access?</label>
            <div>
              <input type="text" name="resourceAccessRestrictions" placeholder="Describe restrictions" />
            </div>
          </div>

          <div className="form-section">
            <label>What monitoring tools are used to ensure that personal devices do not pose a security risk to the network?</label>
            <div>
              <input type="text" name="monitoringTools" placeholder="Describe tools" />
            </div>
          </div>

          {/* User Responsibilities and Compliance */}
          <h2>User Responsibilities and Compliance:</h2>
          <div className="form-section">
            <label>What responsibilities do users have regarding the use of their personal devices (e.g., reporting lost or stolen devices)?</label>
            <div>
              <input type="text" name="userResponsibilities" placeholder="Describe responsibilities" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with the personal device usage policy ensured and enforced?</label>
            <div>
              <input type="text" name="complianceEnforcement" placeholder="Describe compliance enforcement" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear consequences for non-compliance with the policy?</label>
            <div>
              <input type="text" name="nonComplianceConsequences" placeholder="Describe consequences" />
            </div>
          </div>

          {/* Privacy and Data Protection */}
          <h2>Privacy and Data Protection:</h2>
          <div className="form-section">
            <label>How does the policy address the privacy of data on personal devices used within the organization?</label>
            <div>
              <input type="text" name="dataPrivacyPolicy" placeholder="Describe policy" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are taken to protect organizational data on personal devices (e.g., remote wipe capabilities)?</label>
            <div>
              <input type="text" name="dataProtectionMeasures" placeholder="Describe measures" />
            </div>
          </div>

          <div className="form-section">
            <label>How are user data and privacy balanced with security requirements?</label>
            <div>
              <input type="text" name="userDataSecurityBalance" placeholder="Describe balance" />
            </div>
          </div>

          {/* Policy Exceptions and Approvals */}
          <h2>Policy Exceptions and Approvals:</h2>
          <div className="form-section">
            <label>What processes are in place for requesting exceptions to the personal device usage policy (e.g., special permissions for specific devices)?</label>
            <div>
              <input type="text" name="exceptionRequestProcess" placeholder="Describe processes" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is authorized to review and approve exceptions to the policy?</label>
            <div>
              <input type="text" name="authorizedReviewers" placeholder="Describe authorized users" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there documented procedures for handling and documenting policy exceptions?</label>
            <div>
              <input type="text" name="exceptionDocumentationProcedures" placeholder="Describe procedures" />
            </div>
          </div>

          {/* Incident Response and Management */}
          <h2>Incident Response and Management:</h2>
          <div className="form-section">
            <label>What are the procedures for responding to incidents involving personal devices (e.g., lost or stolen devices)?</label>
            <div>
              <input type="text" name="incidentResponseProcedures" placeholder="Describe response procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the data on lost or stolen devices managed to prevent unauthorized access?</label>
            <div>
              <input type="text" name="lostDeviceDataManagement" placeholder="Describe management procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken when a personal device is found to pose a security risk?</label>
            <div>
              <input type="text" name="securityRiskDeviceManagement" placeholder="Describe steps taken" />
            </div>
          </div>

          {/* Training and Awareness */}
          <h2>Training and Awareness:</h2>
          <div className="form-section">
            <label>What training is provided to employees regarding personal device usage and security?</label>
            <div>
              <input type="text" name="deviceSecurityTraining" placeholder="Describe training" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization promote awareness of the risks associated with personal devices?</label>
            <div>
              <input type="text" name="deviceRiskAwareness" placeholder="Describe awareness methods" />
            </div>
          </div>

          <div className="form-section">
            <label>How is ongoing training and awareness about personal device usage maintained?</label>
            <div>
              <input type="text" name="ongoingTrainingAwareness" placeholder="Describe ongoing methods" />
            </div>
          </div>

          {/* Review and Updates */}
          <h2>Review and Updates:</h2>
          <div className="form-section">
            <label>How often is the personal device usage policy reviewed and updated?</label>
            <div>
              <input type="text" name="policyReviewFrequency" placeholder="Describe review frequency" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for reviewing and updating the policy?</label>
            <div>
              <input type="text" name="policyReviewResponsibility" placeholder="Describe responsible individuals" />
            </div>
          </div>

          <div className="form-section">
            <label>How are changes to the policy communicated to employees?</label>
            <div>
              <input type="text" name="policyChangeCommunication" placeholder="Describe communication methods" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default PersonalDeviceUsagePage;
