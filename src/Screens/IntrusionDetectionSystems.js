import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6 

function IntrusionDetectionSystemsPage() {
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

      {/* IDS Section */}
      <main className="form-container">
        <h2>Intrusion Detection Systems (IDS)</h2>
        <form>
          {/* System Deployment and Configuration Section */}
          <h3>System Deployment and Configuration</h3>

          <div className="form-section">
            <label>How are IDS solutions deployed across the network (e.g., inline, passive, distributed) and what areas or segments do they cover?</label>
            <div>
              <input type="text" name="idsDeployment" placeholder="Describe IDS deployment across network" />
            </div>
          </div>

          <div className="form-section">
            <label>What are the key configuration settings for the IDS, and how are they tuned to match the organization’s security requirements?</label>
            <div>
              <input type="text" name="idsConfiguration" placeholder="Describe key IDS configuration settings" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any known limitations or blind spots in the IDS deployment that need to be addressed?</label>
            <div>
              <input type="text" name="idsLimitations" placeholder="Describe known IDS limitations or blind spots" />
            </div>
          </div>

          {/* Detection Capabilities Section */}
          <h3>Detection Capabilities</h3>

          <div className="form-section">
            <label>What types of intrusions and attacks does the IDS aim to detect (e.g., network-based attacks, host-based attacks, zero-day exploits)?</label>
            <div>
              <input type="text" name="intrusionTypes" placeholder="Describe types of intrusions IDS aims to detect" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the IDS differentiate between legitimate and malicious activities to minimize false positives and false negatives?</label>
            <div>
              <input type="text" name="activityDifferentiation" placeholder="Describe IDS method to minimize false positives" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific signatures, heuristics, or anomaly detection methods used to identify potential threats?</label>
            <div>
              <input type="text" name="detectionMethods" placeholder="Describe IDS detection methods (signatures, heuristics, anomaly)" />
            </div>
          </div>

          {/* Real-time Monitoring and Alerting Section */}
          <h3>Real-time Monitoring and Alerting</h3>

          <div className="form-section">
            <label>Does the IDS provide real-time monitoring of network and system activities to identify suspicious or malicious behavior?</label>
            <div>
              <input type="text" name="realTimeMonitoring" placeholder="Describe real-time monitoring capabilities" />
            </div>
          </div>

          <div className="form-section">
            <label>How are alerts generated and managed, and what processes are in place to ensure timely response to detected threats?</label>
            <div>
              <input type="text" name="alertManagement" placeholder="Describe alert generation and response process" />
            </div>
          </div>

          <div className="form-section">
            <label>What is the procedure for escalating alerts to the appropriate response teams or individuals?</label>
            <div>
              <input type="text" name="alertEscalation" placeholder="Describe alert escalation procedure" />
            </div>
          </div>

          {/* Incident Response Integration Section */}
          <h3>Incident Response Integration</h3>

          <div className="form-section">
            <label>How is the IDS integrated with incident response processes and tools, such as Security Information and Event Management (SIEM) systems or ticketing systems?</label>
            <div>
              <input type="text" name="incidentResponseIntegration" placeholder="Describe IDS integration with incident response tools" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there predefined incident response protocols for handling alerts and incidents detected by the IDS?</label>
            <div>
              <input type="text" name="incidentProtocols" placeholder="Describe predefined incident response protocols" />
            </div>
          </div>

          <div className="form-section">
            <label>How are the effectiveness and accuracy of the IDS in supporting incident response efforts evaluated?</label>
            <div>
              <input type="text" name="incidentEvaluation" placeholder="Describe how IDS effectiveness is evaluated in response" />
            </div>
          </div>

          {/* Data Logging and Analysis Section */}
          <h3>Data Logging and Analysis</h3>

          <div className="form-section">
            <label>What types of data and logs are collected by the IDS, and how are they stored and managed?</label>
            <div>
              <input type="text" name="idsLogs" placeholder="Describe types of logs collected by IDS and how they are stored" />
            </div>
          </div>

          <div className="form-section">
            <label>How are IDS logs analyzed to identify trends, patterns, or recurring issues related to security incidents?</label>
            <div>
              <input type="text" name="logAnalysis" placeholder="Describe how IDS logs are analyzed" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there tools or processes in place to correlate IDS data with other security logs or events?</label>
            <div>
              <input type="text" name="dataCorrelation" placeholder="Describe tools or processes for correlating IDS data" />
            </div>
          </div>

          {/* System Maintenance and Updates Section */}
          <h3>System Maintenance and Updates</h3>

          <div className="form-section">
            <label>What is the process for updating and maintaining IDS signatures, rules, and configurations to stay current with emerging threats?</label>
            <div>
              <input type="text" name="idsUpdates" placeholder="Describe IDS update and maintenance process" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are system updates and patches applied to the IDS, and how is the impact on system performance and security assessed?</label>
            <div>
              <input type="text" name="systemPatches" placeholder="Describe update and patching schedule for IDS" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for testing and validating updates to ensure they do not disrupt normal operations?</label>
            <div>
              <input type="text" name="updateValidation" placeholder="Describe procedures for testing updates to IDS" />
            </div>
          </div>

          {/* Performance and Effectiveness Evaluation Section */}
          <h3>Performance and Effectiveness Evaluation</h3>

          <div className="form-section">
            <label>How is the performance of the IDS monitored, and are there metrics or benchmarks used to assess its effectiveness?</label>
            <div>
              <input type="text" name="idsPerformance" placeholder="Describe IDS performance monitoring and effectiveness metrics" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there periodic reviews or assessments conducted to evaluate the IDS’s ability to detect and respond to threats?</label>
            <div>
              <input type="text" name="idsReviews" placeholder="Describe periodic reviews and assessments for IDS" />
            </div>
          </div>

          <div className="form-section">
            <label>How are feedback and lessons learned from past incidents incorporated into the IDS configuration and deployment strategy?</label>
            <div>
              <input type="text" name="feedbackIncorporation" placeholder="Describe feedback process for IDS improvements" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('idsSolutions')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default IntrusionDetectionSystemsPage;
