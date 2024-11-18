import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 : disaster recovery planning

function BackupTestingPage() {
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

      {/* Backup Testing Section */}
      <main className="form-container">
        <h2>Backup Testing</h2>

        <form>
          {/* Frequency and Schedule of Testing */}
          <h4>Frequency and Schedule of Testing</h4>

          <div className="form-section">
            <label>How often are backup recovery drills conducted, and is the frequency sufficient to ensure preparedness and data integrity?</label>
            <div>
              <input type="text" name="backupTestingFrequency" placeholder="Describe the frequency of backup recovery drills" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific times of the year when testing is scheduled to align with organizational needs or periods of lower activity?</label>
            <div>
              <input type="text" name="backupTestingScheduling" placeholder="Describe the scheduling of backup testing" />
            </div>
          </div>

          <div className="form-section">
            <label>Does the schedule for backup testing include both planned and unplanned drills to evaluate real-time response capabilities?</label>
            <div>
              <input type="text" name="backupTestingDrills" placeholder="Describe the planned and unplanned drills for testing" />
            </div>
          </div>

          {/* Testing Procedures and Scenarios */}
          <h4>Testing Procedures and Scenarios</h4>

          <div className="form-section">
            <label>What types of scenarios are covered during backup testing to simulate various types of data loss events (e.g., cyberattacks, hardware failure, natural disasters)?</label>
            <div>
              <input type="text" name="backupTestingScenarios" placeholder="Describe types of scenarios covered during backup testing" />
            </div>
          </div>

          <div className="form-section">
            <label>Are both full-scale and partial recovery processes tested to ensure comprehensive preparedness?</label>
            <div>
              <input type="text" name="fullAndPartialRecovery" placeholder="Describe full-scale and partial recovery testing" />
            </div>
          </div>

          <div className="form-section">
            <label>How are complex scenarios, such as multi-site recoveries or cross-functional dependencies, incorporated into the testing process?</label>
            <div>
              <input type="text" name="complexScenarios" placeholder="Describe the inclusion of complex recovery scenarios" />
            </div>
          </div>

          {/* Evaluation and Documentation of Test Results */}
          <h4>Evaluation and Documentation of Test Results</h4>

          <div className="form-section">
            <label>What criteria are used to evaluate the success or failure of a backup test, including recovery time objectives (RTOs) and recovery point objectives (RPOs)?</label>
            <div>
              <input type="text" name="evaluationCriteria" placeholder="Describe criteria for evaluating backup test success" />
            </div>
          </div>

          <div className="form-section">
            <label>Are the results of each backup test thoroughly documented, including any issues encountered and the steps taken to resolve them?</label>
            <div>
              <input type="text" name="testResultsDocumentation" placeholder="Describe how backup test results are documented" />
            </div>
          </div>

          <div className="form-section">
            <label>How are lessons learned from backup testing used to improve disaster recovery plans and backup processes?</label>
            <div>
              <input type="text" name="backupTestLessons" placeholder="Describe how lessons learned improve recovery plans" />
            </div>
          </div>

          {/* Roles and Responsibilities */}
          <h4>Roles and Responsibilities</h4>

          <div className="form-section">
            <label>Who is responsible for initiating, overseeing, and evaluating backup tests within the organization?</label>
            <div>
              <input type="text" name="backupTestResponsibility" placeholder="Describe responsibility for backup tests" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clearly defined roles for each team member involved in the backup testing process, including IT staff, recovery coordinators, and external vendors?</label>
            <div>
              <input type="text" name="backupTestRoles" placeholder="Describe roles of team members in backup testing" />
            </div>
          </div>

          <div className="form-section">
            <label>How are responsibilities assigned and communicated to ensure effective coordination during a backup test?</label>
            <div>
              <input type="text" name="backupTestCoordination" placeholder="Describe how responsibilities are assigned and communicated" />
            </div>
          </div>

          {/* Continuous Improvement and Feedback Loop */}
          <h4>Continuous Improvement and Feedback Loop</h4>

          <div className="form-section">
            <label>What processes are in place to gather feedback from participants in backup tests to identify areas for improvement?</label>
            <div>
              <input type="text" name="backupTestFeedback" placeholder="Describe feedback processes for backup tests" />
            </div>
          </div>

          <div className="form-section">
            <label>How are changes to backup testing procedures or disaster recovery plans communicated to relevant stakeholders?</label>
            <div>
              <input type="text" name="backupTestChanges" placeholder="Describe how changes to procedures are communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms to regularly review and update testing strategies based on new risks, technology changes, or organizational shifts?</label>
            <div>
              <input type="text" name="testingStrategyReview" placeholder="Describe mechanisms for regularly reviewing testing strategies" />
            </div>
          </div>

          {/* Integration with Overall Disaster Recovery Plan */}
          <h4>Integration with Overall Disaster Recovery Plan</h4>

          <div className="form-section">
            <label>How does backup testing integrate with the overall disaster recovery plan, including coordination with other recovery strategies?</label>
            <div>
              <input type="text" name="backupTestIntegration" placeholder="Describe how backup testing integrates with disaster recovery plans" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific metrics or KPIs that link backup testing results with broader disaster recovery goals and objectives?</label>
            <div>
              <input type="text" name="backupTestKPIs" placeholder="Describe metrics linking backup testing with disaster recovery" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the effectiveness of the entire disaster recovery plan evaluated through the lens of backup testing outcomes?</label>
            <div>
              <input type="text" name="disasterRecoveryEvaluation" placeholder="Describe evaluation of disaster recovery plan based on backup testing" />
            </div>
          </div>

          {/* Technology and Tool Utilization */}
          <h4>Technology and Tool Utilization</h4>

          <div className="form-section">
            <label>What tools or software are used to facilitate backup testing, and are they regularly updated to support the latest backup and recovery technologies?</label>
            <div>
              <input type="text" name="backupTestTools" placeholder="Describe tools used for backup testing" />
            </div>
          </div>

          <div className="form-section">
            <label>Are automated testing tools utilized to increase the frequency and reliability of backup testing?</label>
            <div>
              <input type="text" name="automatedTestingTools" placeholder="Describe use of automated testing tools for backup" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these tools configured to simulate realistic disaster scenarios and provide accurate results?</label>
            <div>
              <input type="text" name="testingToolConfiguration" placeholder="Describe configuration of tools for realistic disaster simulation" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default BackupTestingPage;
