import React from 'react';
import './BackupSchedules.css'; // Ensure correct styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6: backup solutions

function OffsiteBackupStoragePage() {
  const handleButtonClick = (section) => {
    console.log(`Button clicked for: ${section}`);
    // Add logic for handling button click, like opening a modal or navigating
  };

  return (
    <div className="form-page">
      {/* Header Section */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>←</button> {/* Go back button */}
        <h1>The MACHA Group</h1>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Offsite Backup Storage Section */}
      <main className="form-container">
        <h2>Offsite Backup Storage</h2>

        <form>
          {/* Selection and Security of Offsite Locations */}
          <h4>Selection and Security of Offsite Locations</h4>

          <div className="form-section">
            <label>What criteria are used to select offsite backup storage locations, such as cloud providers or physical sites, to ensure data security and accessibility?</label>
            <div>
              <input type="text" name="offsiteSelectionCriteria" placeholder="Describe selection criteria for offsite backup locations" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the security of the offsite backup location maintained, including physical security measures and data encryption protocols?</label>
            <div>
              <input type="text" name="offsiteSecurity" placeholder="Describe security measures for offsite backup location" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits or assessments of the offsite storage location to ensure compliance with security standards and policies?</label>
            <div>
              <input type="text" name="offsiteAudits" placeholder="Describe audits and assessments for offsite storage security" />
            </div>
          </div>

          {/* Data Transfer and Encryption */}
          <h4>Data Transfer and Encryption</h4>

          <div className="form-section">
            <label>What methods are used to securely transfer backup data to the offsite location, and are these methods protected against data interception or breaches?</label>
            <div>
              <input type="text" name="dataTransferMethods" placeholder="Describe secure data transfer methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Is the data encrypted during transfer and storage, and what encryption standards are applied (e.g., AES-256)?</label>
            <div>
              <input type="text" name="encryptionStandards" placeholder="Describe encryption during transfer and storage" />
            </div>
          </div>

          <div className="form-section">
            <label>How are encryption keys managed, and who has access to these keys to ensure data can be securely accessed when needed?</label>
            <div>
              <input type="text" name="encryptionKeyManagement" placeholder="Describe encryption key management process" />
            </div>
          </div>

          {/* Accessibility and Recovery Time Objectives (RTOs) */}
          <h4>Accessibility and Recovery Time Objectives (RTOs)</h4>

          <div className="form-section">
            <label>How quickly can data be retrieved from the offsite backup location in the event of a disaster or data loss incident?</label>
            <div>
              <input type="text" name="dataRetrievalSpeed" placeholder="Describe data retrieval process and speed" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear recovery time objectives (RTOs) established for accessing and restoring data from offsite backups?</label>
            <div>
              <input type="text" name="recoveryTimeObjectives" placeholder="Describe RTOs for offsite data recovery" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to ensure data integrity and completeness when backups are restored from offsite storage?</label>
            <div>
              <input type="text" name="dataRestorationIntegrity" placeholder="Describe procedures to ensure data integrity during restoration" />
            </div>
          </div>

          {/* Redundancy and Geographic Distribution */}
          <h4>Redundancy and Geographic Distribution</h4>

          <div className="form-section">
            <label>Is there redundancy in the offsite backup storage solutions, such as multiple cloud providers or geographically distributed storage sites, to mitigate risk?</label>
            <div>
              <input type="text" name="offsiteRedundancy" placeholder="Describe redundancy measures in offsite backup storage" />
            </div>
          </div>

          <div className="form-section">
            <label>How are backups distributed geographically to prevent data loss due to regional disasters or outages at a single location?</label>
            <div>
              <input type="text" name="geographicBackupDistribution" placeholder="Describe geographic distribution of backups" />
            </div>
          </div>

          <div className="form-section">
            <label>Are backup locations chosen to minimize latency and maximize data recovery speeds for the organization's primary operational regions?</label>
            <div>
              <input type="text" name="backupLatency" placeholder="Describe how backup locations minimize latency" />
            </div>
          </div>

          {/* Compliance and Data Sovereignty */}
          <h4>Compliance and Data Sovereignty</h4>

          <div className="form-section">
            <label>How does the offsite backup storage solution comply with legal and regulatory requirements for data protection, privacy, and data sovereignty (e.g., GDPR, HIPAA)?</label>
            <div>
              <input type="text" name="dataSovereigntyCompliance" placeholder="Describe compliance with legal and regulatory standards" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific contractual agreements in place with the cloud provider or offsite storage facility regarding data protection, access controls, and compliance standards?</label>
            <div>
              <input type="text" name="contractualAgreements" placeholder="Describe contractual agreements with cloud or offsite providers" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are taken to ensure that data stored offsite does not violate any cross-border data transfer regulations or data residency requirements?</label>
            <div>
              <input type="text" name="dataTransferRegulations" placeholder="Describe measures for compliance with cross-border data regulations" />
            </div>
          </div>

          {/* Monitoring and Reporting */}
          <h4>Monitoring and Reporting</h4>

          <div className="form-section">
            <label>What monitoring tools or systems are in place to track the status and health of offsite backups to ensure they are successfully completed and stored?</label>
            <div>
              <input type="text" name="monitoringTools" placeholder="Describe monitoring tools for offsite backups" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there automated alerts or notifications for issues related to offsite backup storage, such as failed backups or storage capacity limits?</label>
            <div>
              <input type="text" name="backupAlerts" placeholder="Describe alerts for offsite backup issues" />
            </div>
          </div>

          <div className="form-section">
            <label>How is backup performance reported, and what metrics are used to evaluate the effectiveness and reliability of offsite storage?</label>
            <div>
              <input type="text" name="backupPerformanceMetrics" placeholder="Describe backup performance and evaluation metrics" />
            </div>
          </div>

          {/* Cost Management and Scalability */}
          <h4>Cost Management and Scalability</h4>

          <div className="form-section">
            <label>How is the cost of offsite backup storage managed, and what pricing models are in place (e.g., pay-as-you-go, fixed rate)?</label>
            <div>
              <input type="text" name="backupStorageCost" placeholder="Describe cost management and pricing models for offsite storage" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there scalability options to increase storage capacity as needed, and how does this impact the cost and management of offsite backups?</label>
            <div>
              <input type="text" name="scalabilityOptions" placeholder="Describe scalability options and cost impact" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to regularly review and optimize the cost-effectiveness of offsite backup storage solutions?</label>
            <div>
              <input type="text" name="costOptimization" placeholder="Describe cost optimization measures for offsite storage" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default OffsiteBackupStoragePage;
