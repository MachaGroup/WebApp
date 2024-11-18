import React from 'react';
import './BackupSchedules.css'; // Ensure correct styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6: backup solutions

function RegularBackupSchedulesPage() {
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

      {/* Backup Schedules Section */}
      <main className="form-container">
        <h2>Regular Backup Schedules</h2>

        <form>
          {/* Frequency and Coverage */}
          <h4>Frequency and Coverage</h4>

          <div className="form-section">
            <label>What is the frequency of your backup schedules (e.g., daily, weekly), and does it align with the criticality of the data being backed up?</label>
            <div>
              <input type="text" name="backupFrequency" placeholder="Describe backup frequency and alignment with data criticality" />
            </div>
          </div>

          <div className="form-section">
            <label>Are all critical data and systems included in the backup schedule, and are there specific types of data (e.g., databases, configuration files) that are prioritized?</label>
            <div>
              <input type="text" name="backupCoverage" placeholder="Describe coverage and prioritized data types" />
            </div>
          </div>

          <div className="form-section">
            <label>How are backup schedules adjusted for different types of data, such as high-frequency transactional data versus less frequently updated data?</label>
            <div>
              <input type="text" name="backupAdjustments" placeholder="Describe adjustments for different data types" />
            </div>
          </div>

          {/* Backup Procedures */}
          <h4>Backup Procedures</h4>

          <div className="form-section">
            <label>What procedures are followed to ensure that backups are performed reliably and consistently according to the established schedule?</label>
            <div>
              <input type="text" name="backupProcedures" placeholder="Describe backup procedures and reliability" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there automated systems in place to handle backups, and how are manual backups managed and verified?</label>
            <div>
              <input type="text" name="automatedBackup" placeholder="Describe automated backup systems and manual verification" />
            </div>
          </div>

          <div className="form-section">
            <label>How is backup integrity validated, and what steps are taken if a backup fails or encounters errors during the process?</label>
            <div>
              <input type="text" name="backupIntegrity" placeholder="Describe backup integrity validation and error handling" />
            </div>
          </div>

          {/* Storage and Retention */}
          <h4>Storage and Retention</h4>

          <div className="form-section">
            <label>How is backup data stored, and what storage solutions are used (e.g., cloud storage, on-premises storage, off-site storage)?</label>
            <div>
              <input type="text" name="backupStorage" placeholder="Describe storage solutions used for backups" />
            </div>
          </div>

          <div className="form-section">
            <label>What are the retention policies for backup data, and how long is backup data kept before being archived or deleted?</label>
            <div>
              <input type="text" name="backupRetention" placeholder="Describe retention policies and timeframes" />
            </div>
          </div>

          <div className="form-section">
            <label>Are backup storage solutions secure and protected from unauthorized access or tampering?</label>
            <div>
              <input type="text" name="backupSecurity" placeholder="Describe security measures for backup storage" />
            </div>
          </div>

          {/* Monitoring and Alerts */}
          <h4>Monitoring and Alerts</h4>

          <div className="form-section">
            <label>What monitoring systems are in place to track the status of backups and ensure that they are completed as scheduled?</label>
            <div>
              <input type="text" name="backupMonitoring" placeholder="Describe backup monitoring systems and status tracking" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there alert mechanisms to notify administrators of backup failures, delays, or issues, and how are these alerts handled?</label>
            <div>
              <input type="text" name="backupAlerts" placeholder="Describe alert mechanisms and response handling" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the performance of backup processes monitored to ensure that they do not negatively impact system performance or operations?</label>
            <div>
              <input type="text" name="backupPerformance" placeholder="Describe performance monitoring of backup processes" />
            </div>
          </div>

          {/* Testing and Verification */}
          <h4>Testing and Verification</h4>

          <div className="form-section">
            <label>How frequently are backup restoration tests conducted to ensure that backup data can be successfully restored when needed?</label>
            <div>
              <input type="text" name="backupTestsFrequency" placeholder="Describe frequency of backup restoration tests" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to verify the completeness and accuracy of backups, and how are discrepancies addressed?</label>
            <div>
              <input type="text" name="backupVerification" placeholder="Describe procedures for verifying backup completeness" />
            </div>
          </div>

          <div className="form-section">
            <label>Are backup tests documented and reviewed, and what is the process for updating backup procedures based on test results?</label>
            <div>
              <input type="text" name="backupTestDocumentation" placeholder="Describe documentation and review process for backup tests" />
            </div>
          </div>

          {/* Compliance and Documentation */}
          <h4>Compliance and Documentation</h4>

          <div className="form-section">
            <label>How does your backup schedule comply with relevant regulatory and industry standards for data protection and retention?</label>
            <div>
              <input type="text" name="backupCompliance" placeholder="Describe compliance with data protection standards" />
            </div>
          </div>

          <div className="form-section">
            <label>Are backup procedures and schedules documented, and is there a clear process for updating documentation as needed?</label>
            <div>
              <input type="text" name="backupDocumentation" placeholder="Describe documentation process for backup schedules" />
            </div>
          </div>

          <div className="form-section">
            <label>What audits or reviews are conducted to ensure compliance with backup policies and procedures?</label>
            <div>
              <input type="text" name="backupAudits" placeholder="Describe audits and reviews for backup compliance" />
            </div>
          </div>

          {/* Disaster Recovery Integration */}
          <h4>Disaster Recovery Integration</h4>

          <div className="form-section">
            <label>How are backup schedules integrated into the overall disaster recovery plan, and what role do they play in ensuring business continuity?</label>
            <div>
              <input type="text" name="backupDisasterRecovery" placeholder="Describe backup integration into disaster recovery plan" />
            </div>
          </div>

          <div className="form-section">
            <label>What are the procedures for initiating recovery from backups during a disaster or major incident, and how is recovery prioritized?</label>
            <div>
              <input type="text" name="backupRecoveryProcedures" placeholder="Describe procedures for initiating recovery" />
            </div>
          </div>

          <div className="form-section">
            <label>Are backup and recovery processes tested together to ensure that they function effectively as part of the disaster recovery plan?</label>
            <div>
              <input type="text" name="backupRecoveryTesting" placeholder="Describe testing for backup and recovery processes" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default RegularBackupSchedulesPage;
