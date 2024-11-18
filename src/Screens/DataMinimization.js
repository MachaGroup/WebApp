import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7

function DataMinimizationPage() {
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

      {/* Data Minimization Section */}
      <main className="form-container">
        <h2>Data Minimization</h2>
        <form>
          {/* Data Collection Practices Section */}
          <h3>Data Collection Practices</h3>

          <div className="form-section">
            <label>What criteria are used to determine the necessity of data collected from individuals?</label>
            <div>
              <input type="text" name="dataNecessityCriteria" placeholder="Describe criteria for data necessity" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures in place to review and justify the data collection requirements for various purposes?</label>
            <div>
              <input type="text" name="dataReviewProcedures" placeholder="Describe review procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is it ensured that only the minimum amount of data required is collected?</label>
            <div>
              <input type="text" name="dataMinimization" placeholder="Describe data minimization process" />
            </div>
          </div>

          {/* Purpose Limitation Section */}
          <h3>Purpose Limitation</h3>

          <div className="form-section">
            <label>How are the purposes for data collection clearly defined and documented?</label>
            <div>
              <input type="text" name="purposeDefinition" placeholder="Describe how purposes are defined" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms to ensure that data is collected solely for the purposes specified and no other?</label>
            <div>
              <input type="text" name="purposeEnforcement" placeholder="Describe mechanisms to enforce purpose limitation" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to review and update the purposes for data collection as needed?</label>
            <div>
              <input type="text" name="purposeReview" placeholder="Describe procedures for purpose review and update" />
            </div>
          </div>

          {/* Data Access and Use Section */}
          <h3>Data Access and Use</h3>

          <div className="form-section">
            <label>Who has access to the data collected, and how is access limited to only those with a legitimate need?</label>
            <div>
              <input type="text" name="dataAccess" placeholder="Describe access controls" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the use of data restricted to the purposes for which it was collected?</label>
            <div>
              <input type="text" name="dataUseRestriction" placeholder="Describe data use restrictions" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there policies to prevent unauthorized or unnecessary use of data?</label>
            <div>
              <input type="text" name="unauthorizedUsePolicy" placeholder="Describe policy to prevent unauthorized use" />
            </div>
          </div>

          {/* Data Retention Section */}
          <h3>Data Retention</h3>

          <div className="form-section">
            <label>What guidelines are in place for determining the retention periods for different types of data?</label>
            <div>
              <input type="text" name="retentionGuidelines" placeholder="Describe data retention guidelines" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with data retention policies monitored and enforced?</label>
            <div>
              <input type="text" name="retentionCompliance" placeholder="Describe retention compliance monitoring" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are followed to securely dispose of or anonymize data once the retention period expires?</label>
            <div>
              <input type="text" name="disposalProcedure" placeholder="Describe data disposal or anonymization procedure" />
            </div>
          </div>

          {/* Review and Auditing Section */}
          <h3>Review and Auditing</h3>

          <div className="form-section">
            <label>How often are data collection practices reviewed to ensure compliance with data minimization principles?</label>
            <div>
              <input type="text" name="reviewFrequency" placeholder="Describe review frequency" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits conducted to assess whether data minimization is being effectively implemented?</label>
            <div>
              <input type="text" name="regularAudits" placeholder="Describe auditing practices" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to address any findings from reviews or audits related to data minimization?</label>
            <div>
              <input type="text" name="auditFindings" placeholder="Describe steps for addressing audit findings" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to staff on data minimization practices and policies?</label>
            <div>
              <input type="text" name="trainingPrograms" placeholder="Describe staff training programs" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness maintained among employees regarding the importance of collecting only necessary data?</label>
            <div>
              <input type="text" name="awarenessPrograms" placeholder="Describe awareness programs" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or guidelines available to help employees understand and apply data minimization principles?</label>
            <div>
              <input type="text" name="resourcesGuidelines" placeholder="Describe available resources" />
            </div>
          </div>

          {/* Data Collection Justification Section */}
          <h3>Data Collection Justification</h3>

          <div className="form-section">
            <label>Are there documented justifications for why specific types of data are collected?</label>
            <div>
              <input type="text" name="dataJustification" placeholder="Describe data collection justifications" />
            </div>
          </div>

          <div className="form-section">
            <label>How is it ensured that any changes in data collection practices are properly justified and documented?</label>
            <div>
              <input type="text" name="practiceChangesJustification" placeholder="Describe changes justification process" />
            </div>
          </div>

          <div className="form-section">
            <label>What process is in place for reviewing and approving new data collection initiatives?</label>
            <div>
              <input type="text" name="newCollectionInitiatives" placeholder="Describe review and approval process" />
            </div>
          </div>

          {/* Third-Party Data Collection Section */}
          <h3>Third-Party Data Collection</h3>

          <div className="form-section">
            <label>How is data minimization enforced when collecting data through third parties or external vendors?</label>
            <div>
              <input type="text" name="thirdPartyMinimization" placeholder="Describe third-party data minimization enforcement" />
            </div>
          </div>

          <div className="form-section">
            <label>What contractual or procedural safeguards are in place to ensure third parties adhere to data minimization principles?</label>
            <div>
              <input type="text" name="thirdPartySafeguards" placeholder="Describe safeguards with third parties" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with data minimization monitored for third-party data collection practices?</label>
            <div>
              <input type="text" name="thirdPartyMonitoring" placeholder="Describe third-party compliance monitoring" />
            </div>
          </div>

          {/* User Consent and Transparency Section */}
          <h3>User Consent and Transparency</h3>

          <div className="form-section">
            <label>How is user consent obtained for data collection, and how is it ensured that users are informed about the data being collected?</label>
            <div>
              <input type="text" name="userConsent" placeholder="Describe user consent process" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear and transparent privacy notices provided to individuals regarding the data collection practices?</label>
            <div>
              <input type="text" name="privacyNotices" placeholder="Describe privacy notices" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to address user inquiries or concerns about data collection?</label>
            <div>
              <input type="text" name="userInquiries" placeholder="Describe user inquiry procedures" />
            </div>
          </div>

          {/* Policy Review and Updates Section */}
          <h3>Policy Review and Updates</h3>

          <div className="form-section">
            <label>How frequently are data minimization policies reviewed and updated to reflect changes in regulations or organizational practices?</label>
            <div>
              <input type="text" name="policyReviewFrequency" placeholder="Describe policy review frequency" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for reviewing and updating data minimization policies?</label>
            <div>
              <input type="text" name="policyReviewResponsibility" placeholder="Describe responsible parties" />
            </div>
          </div>

          <div className="form-section">
            <label>How are updates to data minimization policies communicated to relevant stakeholders?</label>
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

export default DataMinimizationPage;
