import React from 'react';
import './PrivacyRights.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function StudentPrivacyRightsPage() {
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

      {/* Student Privacy Rights Section */}
      <main className="form-container">
        <h2>Student Privacy Rights</h2>
        <form>
          {/* Access to Educational Records Section */}
          <h3>Access to Educational Records</h3>

          <div className="form-section">
            <label>What procedures are in place for students and parents to request access to educational records?</label>
            <div>
              <input type="text" name="accessRequestProcedures" placeholder="Describe procedures for requesting access" />
            </div>
          </div>

          <div className="form-section">
            <label>How is access to educational records verified to ensure that only authorized individuals receive information?</label>
            <div>
              <input type="text" name="accessVerification" placeholder="Describe verification procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific forms or channels for submitting requests to access records?</label>
            <div>
              <input type="text" name="accessForms" placeholder="Describe forms or channels for submitting requests" />
            </div>
          </div>

          {/* Rights to Review and Amend Records Section */}
          <h3>Rights to Review and Amend Records</h3>

          <div className="form-section">
            <label>What process is available for students and parents to review and request amendments to educational records?</label>
            <div>
              <input type="text" name="amendmentProcess" placeholder="Describe process for reviewing and amending records" />
            </div>
          </div>

          <div className="form-section">
            <label>How are requests for amendments documented and processed?</label>
            <div>
              <input type="text" name="amendmentDocumentation" placeholder="Describe documentation and processing of amendment requests" />
            </div>
          </div>

          <div className="form-section">
            <label>What are the criteria for approving or denying amendment requests, and how are decisions communicated?</label>
            <div>
              <input type="text" name="amendmentCriteria" placeholder="Describe criteria for approving or denying amendment requests" />
            </div>
          </div>

          {/* Disclosure of Information Section */}
          <h3>Disclosure of Information</h3>

          <div className="form-section">
            <label>Under what circumstances can educational records be disclosed without consent, and how is this information communicated to students and parents?</label>
            <div>
              <input type="text" name="disclosureCircumstances" placeholder="Describe circumstances for disclosure without consent" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to handle requests for disclosure of educational records from third parties, such as law enforcement or other institutions?</label>
            <div>
              <input type="text" name="thirdPartyDisclosure" placeholder="Describe procedures for third-party disclosure" />
            </div>
          </div>

          <div className="form-section">
            <label>How are disclosures recorded and tracked to ensure compliance with FERPA regulations?</label>
            <div>
              <input type="text" name="disclosureTracking" placeholder="Describe procedures for recording and tracking disclosures" />
            </div>
          </div>

          {/* Confidentiality and Security Section */}
          <h3>Confidentiality and Security</h3>

          <div className="form-section">
            <label>What measures are in place to protect the confidentiality and security of educational records?</label>
            <div>
              <input type="text" name="securityMeasures" placeholder="Describe measures for protecting confidentiality and security" />
            </div>
          </div>

          <div className="form-section">
            <label>How is access to educational records controlled and monitored to prevent unauthorized access or breaches?</label>
            <div>
              <input type="text" name="accessControlMonitoring" placeholder="Describe control and monitoring of access to records" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits or assessments of data security practices related to educational records?</label>
            <div>
              <input type="text" name="dataSecurityAudits" placeholder="Describe audits or assessments for data security" />
            </div>
          </div>

          {/* Parental Access Rights Section */}
          <h3>Parental Access Rights</h3>

          <div className="form-section">
            <label>How are parents informed about their rights to access their child's educational records?</label>
            <div>
              <input type="text" name="parentalRightsInfo" placeholder="Describe how parents are informed about their rights" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are followed to grant or deny parental access requests in accordance with FERPA requirements?</label>
            <div>
              <input type="text" name="parentalAccessProcedures" placeholder="Describe procedures for granting or denying access" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any limitations on parental access, and how are these limitations communicated?</label>
            <div>
              <input type="text" name="parentalAccessLimitations" placeholder="Describe limitations on parental access" />
            </div>
          </div>

          {/* Student Consent for Release Section */}
          <h3>Student Consent for Release</h3>

          <div className="form-section">
            <label>What procedures are in place to obtain student consent for the release of educational records when required?</label>
            <div>
              <input type="text" name="studentConsentProcedures" placeholder="Describe procedures for obtaining student consent" />
            </div>
          </div>

          <div className="form-section">
            <label>How is consent documented, and what are the procedures for revoking consent?</label>
            <div>
              <input type="text" name="consentDocumentation" placeholder="Describe how consent is documented and revoked" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any exceptions to the requirement for student consent, and how are these exceptions managed?</label>
            <div>
              <input type="text" name="consentExceptions" placeholder="Describe exceptions to student consent requirements" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to staff regarding FERPA requirements and student privacy rights?</label>
            <div>
              <input type="text" name="staffTraining" placeholder="Describe staff training on FERPA and privacy rights" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness maintained among staff about the importance of protecting student privacy and handling educational records appropriately?</label>
            <div>
              <input type="text" name="awarenessMaintenance" placeholder="Describe how staff awareness is maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or guidelines available to assist staff in understanding and complying with FERPA regulations?</label>
            <div>
              <input type="text" name="resourcesGuidelines" placeholder="Describe resources or guidelines for FERPA compliance" />
            </div>
          </div>

          {/* Complaint Resolution Section */}
          <h3>Complaint Resolution</h3>

          <div className="form-section">
            <label>What process is available for students and parents to file complaints regarding violations of privacy rights or FERPA compliance issues?</label>
            <div>
              <input type="text" name="complaintProcess" placeholder="Describe the complaint process" />
            </div>
          </div>

          <div className="form-section">
            <label>How are complaints investigated, and what procedures are followed to resolve them?</label>
            <div>
              <input type="text" name="complaintInvestigation" placeholder="Describe how complaints are investigated and resolved" />
            </div>
          </div>

          <div className="form-section">
            <label>What mechanisms are in place to track and address recurring issues or concerns related to student privacy?</label>
            <div>
              <input type="text" name="recurringIssues" placeholder="Describe mechanisms for addressing recurring issues" />
            </div>
          </div>

          {/* Periodic Reviews and Updates Section */}
          <h3>Periodic Reviews and Updates</h3>

          <div className="form-section">
            <label>How often are policies and procedures related to FERPA compliance reviewed and updated?</label>
            <div>
              <input type="text" name="reviewFrequency" placeholder="Describe review frequency for policies and procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are used to ensure that updates reflect changes in regulations or best practices?</label>
            <div>
              <input type="text" name="updateProcesses" placeholder="Describe processes for ensuring updates reflect changes" />
            </div>
          </div>

          <div className="form-section">
            <label>How are changes communicated to students, parents, and staff?</label>
            <div>
              <input type="text" name="changeCommunication" placeholder="Describe how changes are communicated" />
            </div>
          </div>

          {/* Documentation and Record-Keeping Section */}
          <h3>Documentation and Record-Keeping</h3>

          <div className="form-section">
            <label>What records are maintained to document compliance with FERPA, and how are these records managed?</label>
            <div>
              <input type="text" name="ferpaComplianceRecords" placeholder="Describe records maintained for FERPA compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>How long are records related to student privacy rights and FERPA compliance retained?</label>
            <div>
              <input type="text" name="recordRetention" placeholder="Describe retention period for FERPA records" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for securely storing and disposing of records?</label>
            <div>
              <input type="text" name="secureStorageDisposal" placeholder="Describe secure storage and disposal procedures" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default StudentPrivacyRightsPage;
