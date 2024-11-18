import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6.5.1.2.1

function StudentDataPrivacyPage() {
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

      {/* Student Data Privacy Policies Section */}
      <main className="form-container">
        <h2>Student Data Privacy Policies</h2>
        <form>
          {/* Policy Development and Scope Section */}
          <h3>Policy Development and Scope</h3>

          <div className="form-section">
            <label>What policies are in place to ensure the privacy and security of student data (e.g., data protection policies, FERPA compliance policies)?</label>
            <div>
              <input type="text" name="privacySecurityPolicies" placeholder="Describe privacy and security policies" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these policies developed and reviewed to align with FERPA requirements and other relevant regulations?</label>
            <div>
              <input type="text" name="policyDevelopmentReview" placeholder="Describe how policies are developed and reviewed" />
            </div>
          </div>

          <div className="form-section">
            <label>What is the scope of the privacy policies in terms of the types of data covered (e.g., educational records, personal information)?</label>
            <div>
              <input type="text" name="scopeOfPolicies" placeholder="Describe scope of privacy policies" />
            </div>
          </div>

          {/* Data Access and Permissions Section */}
          <h3>Data Access and Permissions</h3>

          <div className="form-section">
            <label>Who has access to student data within the organization (e.g., administrators, teachers, support staff), and how is access controlled?</label>
            <div>
              <input type="text" name="accessControl" placeholder="Describe access control for student data" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to manage and review access permissions to ensure that only authorized personnel can view or handle student data?</label>
            <div>
              <input type="text" name="permissionsManagement" placeholder="Describe procedures for managing and reviewing access permissions" />
            </div>
          </div>

          <div className="form-section">
            <label>How are permissions documented and updated, particularly when staff roles or responsibilities change?</label>
            <div>
              <input type="text" name="permissionsDocumentation" placeholder="Describe how permissions are documented and updated" />
            </div>
          </div>

          {/* Data Sharing and Disclosure Section */}
          <h3>Data Sharing and Disclosure</h3>

          <div className="form-section">
            <label>Under what circumstances can student data be shared or disclosed to third parties (e.g., parents, other educational institutions, law enforcement)?</label>
            <div>
              <input type="text" name="dataSharingDisclosure" placeholder="Describe circumstances for data sharing and disclosure" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are followed to obtain consent before sharing student data, and how is consent recorded?</label>
            <div>
              <input type="text" name="dataConsentProcedures" placeholder="Describe procedures for obtaining consent before data sharing" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure that third parties comply with FERPA requirements when handling student data?</label>
            <div>
              <input type="text" name="thirdPartyCompliance" placeholder="Describe how third-party compliance is ensured" />
            </div>
          </div>

          {/* Data Security Measures Section */}
          <h3>Data Security Measures</h3>

          <div className="form-section">
            <label>What security measures are implemented to protect student data from unauthorized access, breaches, or loss (e.g., encryption, access controls)?</label>
            <div>
              <input type="text" name="securityMeasures" placeholder="Describe security measures for protecting student data" />
            </div>
          </div>

          <div className="form-section">
            <label>How are physical and electronic data storage methods secured to prevent unauthorized access or data breaches?</label>
            <div>
              <input type="text" name="dataStorageSecurity" placeholder="Describe physical and electronic data storage security" />
            </div>
          </div>

          <div className="form-section">
            <label>What is the process for regularly reviewing and updating data security measures?</label>
            <div>
              <input type="text" name="securityReviewProcess" placeholder="Describe process for reviewing and updating security measures" />
            </div>
          </div>

          {/* Data Retention and Disposal Section */}
          <h3>Data Retention and Disposal</h3>

          <div className="form-section">
            <label>How long is student data retained, and what criteria are used to determine retention periods (e.g., educational record retention policies)?</label>
            <div>
              <input type="text" name="dataRetentionCriteria" placeholder="Describe data retention criteria and periods" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for the secure disposal of student data that is no longer needed (e.g., shredding physical documents, securely deleting digital files)?</label>
            <div>
              <input type="text" name="dataDisposalProcedures" placeholder="Describe procedures for secure data disposal" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with data retention and disposal policies monitored and enforced?</label>
            <div>
              <input type="text" name="complianceMonitoring" placeholder="Describe compliance monitoring for data retention and disposal" />
            </div>
          </div>

          {/* Parental and Student Rights Section */}
          <h3>Parental and Student Rights</h3>

          <div className="form-section">
            <label>How are students and parents informed about their rights under FERPA, including the right to access and amend educational records?</label>
            <div>
              <input type="text" name="ferpaRightsInformation" placeholder="Describe how FERPA rights are communicated to students and parents" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for handling requests from parents or students to access or correct their records?</label>
            <div>
              <input type="text" name="recordsAccessCorrection" placeholder="Describe procedures for handling access or correction requests" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the organization ensuring that individuals are aware of and can exercise their rights under FERPA?</label>
            <div>
              <input type="text" name="ferpaRightsExercise" placeholder="Describe how individuals can exercise their FERPA rights" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to staff regarding FERPA compliance and student data privacy (e.g., regular training sessions, informational resources)?</label>
            <div>
              <input type="text" name="staffTrainingFERPA" placeholder="Describe training provided to staff on FERPA compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>How is staff awareness of FERPA requirements maintained and updated?</label>
            <div>
              <input type="text" name="staffAwarenessFERPA" placeholder="Describe how staff awareness of FERPA is maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific training programs for new staff members or those in roles with access to student data?</label>
            <div>
              <input type="text" name="newStaffTraining" placeholder="Describe training for new staff members" />
            </div>
          </div>

          {/* Incident Response and Reporting Section */}
          <h3>Incident Response and Reporting</h3>

          <div className="form-section">
            <label>What procedures are in place for responding to and reporting data breaches or privacy incidents involving student data?</label>
            <div>
              <input type="text" name="incidentResponse" placeholder="Describe procedures for responding to data breaches or privacy incidents" />
            </div>
          </div>

          <div className="form-section">
            <label>How are incidents documented and investigated, and what actions are taken to address and mitigate the impact?</label>
            <div>
              <input type="text" name="incidentDocumentation" placeholder="Describe how incidents are documented and investigated" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the organization prepared to notify affected individuals and regulatory authorities if required?</label>
            <div>
              <input type="text" name="incidentNotification" placeholder="Describe how the organization notifies affected individuals and authorities" />
            </div>
          </div>

          {/* Policy Enforcement and Audits Section */}
          <h3>Policy Enforcement and Audits</h3>

          <div className="form-section">
            <label>How is compliance with student data privacy policies monitored and enforced within the organization?</label>
            <div>
              <input type="text" name="policyEnforcement" placeholder="Describe how compliance with privacy policies is enforced" />
            </div>
          </div>

          <div className="form-section">
            <label>What audit processes are in place to assess the effectiveness of privacy policies and procedures?</label>
            <div>
              <input type="text" name="auditProcesses" placeholder="Describe audit processes for privacy policies" />
            </div>
          </div>

          <div className="form-section">
            <label>How are audit findings used to improve and update privacy practices?</label>
            <div>
              <input type="text" name="auditFindings" placeholder="Describe how audit findings are used to improve privacy practices" />
            </div>
          </div>

          {/* Policy Review and Updates Section */}
          <h3>Policy Review and Updates</h3>

          <div className="form-section">
            <label>How frequently are student data privacy policies reviewed and updated to reflect changes in regulations or organizational practices?</label>
            <div>
              <input type="text" name="policyReviewFrequency" placeholder="Describe frequency of policy review and updates" />
            </div>
          </div>

          <div className="form-section">
            <label>What process is followed to ensure that updates to policies are communicated to relevant stakeholders?</label>
            <div>
              <input type="text" name="policyUpdateProcess" placeholder="Describe process for communicating policy updates" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization incorporate feedback and lessons learned into policy revisions?</label>
            <div>
              <input type="text" name="policyFeedbackIncorporation" placeholder="Describe how feedback and lessons are incorporated into policy revisions" />
            </div>
          </div>

        </form>
      </main>
    </div>
  );
}

export default StudentDataPrivacyPage;
