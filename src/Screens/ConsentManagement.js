import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6.5.1.1.2

function ConsentManagementPage() {
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

      {/* Consent Management Section */}
      <main className="form-container">
        <h2>Consent Management</h2>
        <form>
          {/* Consent Collection Methods Section */}
          <h3>Consent Collection Methods</h3>

          <div className="form-section">
            <label>What methods are used to collect consent from individuals (e.g., online forms, paper consent forms, verbal agreements)?</label>
            <div>
              <input type="text" name="consentCollectionMethods" placeholder="Describe consent collection methods" />
            </div>
          </div>

          <div className="form-section">
            <label>How is consent obtained for different types of data processing activities (e.g., marketing, data sharing, profiling)?</label>
            <div>
              <input type="text" name="consentTypes" placeholder="Describe how consent is obtained for different processing activities" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms in place to verify the authenticity of consent (e.g., email confirmation, identity verification)?</label>
            <div>
              <input type="text" name="consentVerification" placeholder="Describe mechanisms for verifying consent authenticity" />
            </div>
          </div>

          {/* Consent Records and Documentation Section */}
          <h3>Consent Records and Documentation</h3>

          <div className="form-section">
            <label>How is consent documentation maintained and stored (e.g., digital records, physical files)?</label>
            <div>
              <input type="text" name="consentDocumentationStorage" placeholder="Describe how consent documentation is stored" />
            </div>
          </div>

          <div className="form-section">
            <label>What information is recorded as part of the consent process (e.g., date of consent, scope of consent, consent method)?</label>
            <div>
              <input type="text" name="consentInformationRecorded" placeholder="Describe what information is recorded during consent process" />
            </div>
          </div>

          <div className="form-section">
            <label>How is consent documentation made accessible for auditing and compliance purposes?</label>
            <div>
              <input type="text" name="consentDocumentationAccess" placeholder="Describe how consent documentation is made accessible" />
            </div>
          </div>

          {/* Consent Renewal and Reaffirmation Section */}
          <h3>Consent Renewal and Reaffirmation</h3>

          <div className="form-section">
            <label>How often is consent reviewed and renewed to ensure it remains valid (e.g., periodic renewals, triggered by changes in processing activities)?</label>
            <div>
              <input type="text" name="consentRenewalFrequency" placeholder="Describe frequency of consent renewal" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for reaffirming consent if there are significant changes to data processing practices?</label>
            <div>
              <input type="text" name="consentReaffirmation" placeholder="Describe procedures for reaffirming consent" />
            </div>
          </div>

          <div className="form-section">
            <label>How are individuals notified about the need to renew or reaffirm their consent?</label>
            <div>
              <input type="text" name="consentNotification" placeholder="Describe how individuals are notified about consent renewal" />
            </div>
          </div>

          {/* Consent Withdrawal Procedures Section */}
          <h3>Consent Withdrawal Procedures</h3>

          <div className="form-section">
            <label>What processes are in place for individuals to withdraw their consent (e.g., opt-out options, contact methods)?</label>
            <div>
              <input type="text" name="consentWithdrawal" placeholder="Describe processes for consent withdrawal" />
            </div>
          </div>

          <div className="form-section">
            <label>How is consent withdrawal managed and recorded to ensure that data processing ceases promptly?</label>
            <div>
              <input type="text" name="withdrawalManagement" placeholder="Describe management and recording of consent withdrawal" />
            </div>
          </div>

          <div className="form-section">
            <label>Are individuals informed about the consequences of withdrawing consent (e.g., loss of access to certain services)?</label>
            <div>
              <input type="text" name="withdrawalConsequences" placeholder="Describe how individuals are informed about withdrawal consequences" />
            </div>
          </div>

          {/* Consent Management Tools and Systems Section */}
          <h3>Consent Management Tools and Systems</h3>

          <div className="form-section">
            <label>What tools or systems are used to manage consent (e.g., consent management platforms, CRM systems)?</label>
            <div>
              <input type="text" name="consentManagementTools" placeholder="Describe tools used for consent management" />
            </div>
          </div>

          <div className="form-section">
            <label>How do these tools integrate with other systems to ensure consistent application of consent policies?</label>
            <div>
              <input type="text" name="integrationWithOtherSystems" placeholder="Describe integration with other systems for consent management" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are taken to ensure the security and integrity of consent management systems?</label>
            <div>
              <input type="text" name="securityAndIntegrity" placeholder="Describe measures for security and integrity of systems" />
            </div>
          </div>

          {/* Compliance with Regulations Section */}
          <h3>Compliance with Regulations</h3>

          <div className="form-section">
            <label>How does your organization ensure compliance with relevant data protection regulations related to consent (e.g., GDPR, CCPA)?</label>
            <div>
              <input type="text" name="complianceWithRegulations" placeholder="Describe how compliance with data protection regulations is ensured" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to align consent practices with legal requirements and industry standards?</label>
            <div>
              <input type="text" name="alignWithLegalRequirements" placeholder="Describe steps to align consent practices with legal requirements" />
            </div>
          </div>

          <div className="form-section">
            <label>How are changes in regulations incorporated into consent management practices?</label>
            <div>
              <input type="text" name="regulationChanges" placeholder="Describe how changes in regulations are incorporated" />
            </div>
          </div>

          {/* Transparency and Communication Section */}
          <h3>Transparency and Communication</h3>

          <div className="form-section">
            <label>How is information about consent practices communicated to individuals (e.g., privacy notices, consent forms)?</label>
            <div>
              <input type="text" name="communicationOfConsent" placeholder="Describe how consent practices are communicated to individuals" />
            </div>
          </div>

          <div className="form-section">
            <label>Are individuals provided with clear and understandable information about what they are consenting to and their rights?</label>
            <div>
              <input type="text" name="clearInformation" placeholder="Describe how individuals are provided with information about consent" />
            </div>
          </div>

          <div className="form-section">
            <label>What methods are used to ensure that consent information is accessible and comprehensible to all individuals, including those with disabilities?</label>
            <div>
              <input type="text" name="accessibleConsentInfo" placeholder="Describe methods for accessible consent information" />
            </div>
          </div>

          {/* Data Subject Rights Section */}
          <h3>Data Subject Rights</h3>

          <div className="form-section">
            <label>How are individuals' rights related to consent protected (e.g., right to access, right to rectification)?</label>
            <div>
              <input type="text" name="dataSubjectRightsProtection" placeholder="Describe how data subject rights are protected" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for individuals to exercise their rights regarding their consent and personal data?</label>
            <div>
              <input type="text" name="rightsExerciseProcedures" placeholder="Describe procedures for individuals to exercise their rights" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with data subject rights monitored and enforced?</label>
            <div>
              <input type="text" name="dataSubjectRightsCompliance" placeholder="Describe monitoring and enforcement of data subject rights" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to staff involved in consent management (e.g., understanding consent requirements, handling consent requests)?</label>
            <div>
              <input type="text" name="staffTraining" placeholder="Describe training provided to staff" />
            </div>
          </div>

          <div className="form-section">
            <label>How is staff awareness of consent policies and procedures maintained and updated?</label>
            <div>
              <input type="text" name="staffAwareness" placeholder="Describe how staff awareness is maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources available to support staff in managing consent effectively (e.g., guidelines, templates)?</label>
            <div>
              <input type="text" name="resourcesForStaff" placeholder="Describe resources available to staff for managing consent" />
            </div>
          </div>

          {/* Audit and Review Section */}
          <h3>Audit and Review</h3>

          <div className="form-section">
            <label>How frequently are consent management practices audited to ensure compliance and effectiveness (e.g., internal audits, external reviews)?</label>
            <div>
              <input type="text" name="auditFrequency" placeholder="Describe audit frequency for consent management practices" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to assess the effectiveness of consent management practices and make improvements?</label>
            <div>
              <input type="text" name="effectivenessCriteria" placeholder="Describe criteria for assessing consent management effectiveness" />
            </div>
          </div>

          <div className="form-section">
            <label>How are audit findings and recommendations used to enhance consent management processes?</label>
            <div>
              <input type="text" name="auditFindingsUse" placeholder="Describe how audit findings are used for improvements" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('consentManagement')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ConsentManagementPage;
