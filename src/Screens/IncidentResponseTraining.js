import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

//section 7

function IncidentResponseTrainingPage() {
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

      {/* Incident Response Training Section */}
      <main className="form-container">
        <h2>Incident Response Training</h2>
        <form>
          {/* Recognizing Security Incidents Section */}
          <h3>Recognizing Security Incidents</h3>

          <div className="form-section">
            <label>What are common signs of a potential security incident (e.g., phishing attempts, unusual network activity)?</label>
            <div>
              <input type="text" name="securityIncidentSigns" placeholder="Describe signs of potential security incidents" />
            </div>
          </div>

          <div className="form-section">
            <label>How can employees distinguish between false alarms and legitimate security threats?</label>
            <div>
              <input type="text" name="distinguishFalseAlarms" placeholder="Describe how employees can distinguish between false alarms and real threats" />
            </div>
          </div>

          <div className="form-section">
            <label>What types of incidents (e.g., malware infections, unauthorized access) should be reported immediately?</label>
            <div>
              <input type="text" name="reportableIncidents" placeholder="Describe types of incidents that should be reported immediately" />
            </div>
          </div>

          <div className="form-section">
            <label>How should employees respond if they suspect a data breach or compromise?</label>
            <div>
              <input type="text" name="responseToBreach" placeholder="Describe response process for suspected data breaches or compromises" />
            </div>
          </div>

          <div className="form-section">
            <label>What tools or systems are available to help employees monitor and report potential security issues?</label>
            <div>
              <input type="text" name="securityMonitoringTools" placeholder="Describe tools or systems for monitoring and reporting security issues" />
            </div>
          </div>

          {/* Incident Reporting Procedures Section */}
          <h3>Incident Reporting Procedures</h3>

          <div className="form-section">
            <label>What are the steps for reporting a security incident (e.g., whom to contact, what information to provide)?</label>
            <div>
              <input type="text" name="incidentReportingSteps" placeholder="Describe steps for reporting a security incident" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific timeframes for reporting incidents, and what are the consequences of delayed reporting?</label>
            <div>
              <input type="text" name="reportingTimeframes" placeholder="Describe timeframes and consequences for delayed reporting" />
            </div>
          </div>

          <div className="form-section">
            <label>What channels are available for reporting (e.g., hotline, email, incident management system)?</label>
            <div>
              <input type="text" name="reportingChannels" placeholder="Describe channels for reporting incidents" />
            </div>
          </div>

          <div className="form-section">
            <label>How is anonymity handled in the reporting process, if an employee prefers to remain anonymous?</label>
            <div>
              <input type="text" name="anonymityHandling" placeholder="Describe anonymity handling in the reporting process" />
            </div>
          </div>

          <div className="form-section">
            <label>What follow-up actions can employees expect after reporting an incident (e.g., investigation, status updates)?</label>
            <div>
              <input type="text" name="followUpActions" placeholder="Describe follow-up actions after reporting an incident" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default IncidentResponseTrainingPage;
