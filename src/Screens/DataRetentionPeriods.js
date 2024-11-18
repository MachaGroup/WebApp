import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 7 

function DataRetentionPeriodsPage() {
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

      {/* Data Retention Periods Section */}
      <main className="form-container">
        <h2>Data Retention Periods</h2>
        <form>
          {/* Retention Schedule Creation Section */}
          <h3>Retention Schedule Creation</h3>

          <div className="form-section">
            <label>How are data retention schedules created and maintained?</label>
            <div>
              <input type="text" name="scheduleCreation" placeholder="Describe how retention schedules are created and maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for developing and approving the data retention schedules?</label>
            <div>
              <input type="text" name="scheduleApproval" placeholder="Describe responsibility for schedule approval" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to determine retention periods for different types of data?</label>
            <div>
              <input type="text" name="retentionCriteria" placeholder="Describe criteria for determining retention periods" />
            </div>
          </div>

          {/* Compliance with Regulations Section */}
          <h3>Compliance with Regulations</h3>

          <div className="form-section">
            <label>How does the organization ensure that data retention periods comply with relevant laws and regulations (e.g., GDPR, HIPAA)?</label>
            <div>
              <input type="text" name="regulatoryCompliance" placeholder="Describe how compliance is ensured" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific regulations or industry standards that influence data retention periods?</label>
            <div>
              <input type="text" name="influencingRegulations" placeholder="Describe influencing regulations or standards" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with legal and regulatory retention requirements monitored?</label>
            <div>
              <input type="text" name="complianceMonitoring" placeholder="Describe compliance monitoring processes" />
            </div>
          </div>

          {/* Data Categories and Retention Section */}
          <h3>Data Categories and Retention</h3>

          <div className="form-section">
            <label>How are different categories of data classified for retention purposes (e.g., personal data, financial records)?</label>
            <div>
              <input type="text" name="dataClassification" placeholder="Describe data classification for retention" />
            </div>
          </div>

          <div className="form-section">
            <label>What are the standard retention periods for each category of data?</label>
            <div>
              <input type="text" name="standardRetentionPeriods" placeholder="Describe standard retention periods for categories" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there exceptions or special considerations for certain types of data?</label>
            <div>
              <input type="text" name="exceptions" placeholder="Describe any exceptions or special considerations" />
            </div>
          </div>

          {/* Retention Period Documentation Section */}
          <h3>Retention Period Documentation</h3>

          <div className="form-section">
            <label>How are data retention periods documented and communicated to relevant stakeholders?</label>
            <div>
              <input type="text" name="documentationCommunication" placeholder="Describe how retention periods are documented and communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a centralized record of all data retention schedules and policies?</label>
            <div>
              <input type="text" name="centralizedRecord" placeholder="Describe centralized record process" />
            </div>
          </div>

          <div className="form-section">
            <label>How is documentation updated to reflect changes in retention requirements?</label>
            <div>
              <input type="text" name="documentationUpdates" placeholder="Describe process for updating documentation" />
            </div>
          </div>

          {/* Data Disposal Procedures Section */}
          <h3>Data Disposal Procedures</h3>

          <div className="form-section">
            <label>What procedures are in place for the disposal of data once retention periods have expired?</label>
            <div>
              <input type="text" name="disposalProcedures" placeholder="Describe data disposal procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is data securely destroyed or deleted to prevent unauthorized access or recovery?</label>
            <div>
              <input type="text" name="dataDestruction" placeholder="Describe secure destruction methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there guidelines for handling physical versus electronic data disposal?</label>
            <div>
              <input type="text" name="disposalGuidelines" placeholder="Describe guidelines for physical vs electronic disposal" />
            </div>
          </div>

          {/* Periodic Reviews and Updates Section */}
          <h3>Periodic Reviews and Updates</h3>

          <div className="form-section">
            <label>How often are data retention periods reviewed and updated to ensure they remain current?</label>
            <div>
              <input type="text" name="reviewFrequency" placeholder="Describe review frequency" />
            </div>
          </div>

          <div className="form-section">
            <label>What process is followed to make changes to data retention schedules?</label>
            <div>
              <input type="text" name="scheduleChangeProcess" placeholder="Describe process for making changes to schedules" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for conducting periodic reviews of data retention practices?</label>
            <div>
              <input type="text" name="reviewResponsibility" placeholder="Describe responsible party for reviews" />
            </div>
          </div>

          {/* Employee Training and Awareness Section */}
          <h3>Employee Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to employees regarding data retention policies and procedures?</label>
            <div>
              <input type="text" name="employeeTraining" placeholder="Describe employee training" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness of data retention requirements maintained among staff?</label>
            <div>
              <input type="text" name="awarenessMaintenance" placeholder="Describe how awareness is maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources available to help employees understand and comply with retention schedules?</label>
            <div>
              <input type="text" name="resourcesAvailability" placeholder="Describe available resources" />
            </div>
          </div>

          {/* Monitoring and Auditing Section */}
          <h3>Monitoring and Auditing</h3>

          <div className="form-section">
            <label>How is compliance with data retention schedules monitored and enforced?</label>
            <div>
              <input type="text" name="complianceMonitoring" placeholder="Describe compliance monitoring" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits conducted to review adherence to retention policies?</label>
            <div>
              <input type="text" name="regularAudits" placeholder="Describe audit practices" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to address any non-compliance identified during audits?</label>
            <div>
              <input type="text" name="nonComplianceSteps" placeholder="Describe steps for addressing non-compliance" />
            </div>
          </div>

          {/* Retention for Legal Holds Section */}
          <h3>Retention for Legal Holds</h3>

          <div className="form-section">
            <label>How are data retention schedules adjusted in response to legal holds or investigations?</label>
            <div>
              <input type="text" name="legalHoldAdjustments" placeholder="Describe adjustments for legal holds" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to ensure that data subject to legal holds is not disposed of?</label>
            <div>
              <input type="text" name="legalHoldProcedures" placeholder="Describe procedures for legal holds" />
            </div>
          </div>

          <div className="form-section">
            <label>How are legal holds communicated and managed within the organization?</label>
            <div>
              <input type="text" name="legalHoldCommunication" placeholder="Describe communication and management of legal holds" />
            </div>
          </div>

          {/* Data Retention Policy Communication Section */}
          <h3>Data Retention Policy Communication</h3>

          <div className="form-section">
            <label>How are data retention policies communicated to all relevant stakeholders?</label>
            <div>
              <input type="text" name="policyCommunication" placeholder="Describe how policies are communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear procedures for updating stakeholders on changes to retention schedules?</label>
            <div>
              <input type="text" name="policyUpdateProcedures" placeholder="Describe procedures for updating stakeholders" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback from stakeholders incorporated into data retention policy updates?</label>
            <div>
              <input type="text" name="feedbackIncorporation" placeholder="Describe feedback incorporation process" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default DataRetentionPeriodsPage;
