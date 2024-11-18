import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6 

function UserBehaviorAnalyticsPage() {
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

      {/* UBA Section */}
      <main className="form-container">
        <h2>User Behavior Analytics (UBA)</h2>
        <form>
          {/* Data Collection and Analysis Section */}
          <h3>Data Collection and Analysis</h3>

          <div className="form-section">
            <label>What types of user activity data are collected and analyzed (e.g., login times, access patterns, application usage)?</label>
            <div>
              <input type="text" name="dataTypes" placeholder="Describe user activity data collected and analyzed" />
            </div>
          </div>

          <div className="form-section">
            <label>How is user behavior data collected, and are there any privacy considerations or limitations in the data collection process?</label>
            <div>
              <input type="text" name="dataCollectionMethod" placeholder="Describe data collection methods and privacy considerations" />
            </div>
          </div>

          <div className="form-section">
            <label>What methods are used to analyze user behavior data to identify deviations from normal patterns?</label>
            <div>
              <input type="text" name="analysisMethods" placeholder="Describe methods used for behavior analysis" />
            </div>
          </div>

          {/* Baseline Behavior Establishment Section */}
          <h3>Baseline Behavior Establishment</h3>

          <div className="form-section">
            <label>How are baseline behaviors for users or user groups established, and how are these baselines maintained and updated?</label>
            <div>
              <input type="text" name="baselineEstablishment" placeholder="Describe baseline establishment and maintenance process" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria or metrics are used to define normal versus anomalous behavior?</label>
            <div>
              <input type="text" name="anomalousBehaviorCriteria" placeholder="Describe criteria for defining normal vs anomalous behavior" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms in place to account for changes in user behavior due to legitimate reasons (e.g., role changes, seasonal variations)?</label>
            <div>
              <input type="text" name="behaviorChanges" placeholder="Describe mechanisms for accounting for legitimate behavior changes" />
            </div>
          </div>

          {/* Anomaly Detection Section */}
          <h3>Anomaly Detection</h3>

          <div className="form-section">
            <label>How does UBA identify deviations from established baseline behaviors, and what algorithms or techniques are used for anomaly detection?</label>
            <div>
              <input type="text" name="anomalyDetectionMethods" placeholder="Describe anomaly detection algorithms or techniques" />
            </div>
          </div>

          <div className="form-section">
            <label>What thresholds or criteria trigger alerts for anomalous behavior, and how are these thresholds set?</label>
            <div>
              <input type="text" name="alertThresholds" placeholder="Describe thresholds or criteria for triggering alerts" />
            </div>
          </div>

          <div className="form-section">
            <label>How are false positives and false negatives managed to minimize disruptions and ensure accurate detection?</label>
            <div>
              <input type="text" name="falsePositivesManagement" placeholder="Describe management of false positives and false negatives" />
            </div>
          </div>

          {/* Alerting and Response Section */}
          <h3>Alerting and Response</h3>

          <div className="form-section">
            <label>How are alerts generated for detected anomalies, and what is the process for investigating and responding to these alerts?</label>
            <div>
              <input type="text" name="alertGeneration" placeholder="Describe the alert generation and investigation process" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there predefined response protocols or escalation procedures for different types of anomalies detected by UBA?</label>
            <div>
              <input type="text" name="responseProtocols" placeholder="Describe predefined response protocols or escalation procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How are alerts prioritized and managed to ensure timely and appropriate response to potential security incidents?</label>
            <div>
              <input type="text" name="alertPrioritization" placeholder="Describe alert prioritization and management process" />
            </div>
          </div>

          {/* Integration with Other Security Systems Section */}
          <h3>Integration with Other Security Systems</h3>

          <div className="form-section">
            <label>How is UBA integrated with other security systems, such as Security Information and Event Management (SIEM) solutions or Intrusion Detection Systems (IDS)?</label>
            <div>
              <input type="text" name="ubaIntegration" placeholder="Describe integration of UBA with other security systems" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms in place to correlate UBA data with other security events or incidents for a comprehensive view of potential threats?</label>
            <div>
              <input type="text" name="dataCorrelation" placeholder="Describe UBA data correlation with other security events" />
            </div>
          </div>

          <div className="form-section">
            <label>How is information from UBA used to enhance overall security posture and incident response capabilities?</label>
            <div>
              <input type="text" name="ubaEnhancement" placeholder="Describe how UBA enhances security posture and response capabilities" />
            </div>
          </div>

          {/* Privacy and Compliance Section */}
          <h3>Privacy and Compliance</h3>

          <div className="form-section">
            <label>How does UBA ensure user privacy and comply with relevant regulations and policies (e.g., GDPR, CCPA)?</label>
            <div>
              <input type="text" name="privacyCompliance" placeholder="Describe how UBA ensures privacy and regulatory compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to anonymize or protect user data during collection and analysis?</label>
            <div>
              <input type="text" name="dataProtection" placeholder="Describe measures for anonymizing or protecting user data" />
            </div>
          </div>

          <div className="form-section">
            <label>How are users informed about the monitoring of their behavior, and how are their consent and privacy rights managed?</label>
            <div>
              <input type="text" name="userConsent" placeholder="Describe how user consent and privacy rights are managed" />
            </div>
          </div>

          {/* Effectiveness and Performance Evaluation Section */}
          <h3>Effectiveness and Performance Evaluation</h3>

          <div className="form-section">
            <label>How is the effectiveness of UBA assessed, and what metrics or benchmarks are used to evaluate its performance?</label>
            <div>
              <input type="text" name="ubaEffectiveness" placeholder="Describe metrics and benchmarks for assessing UBA effectiveness" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular reviews or assessments of UBA systems to ensure they are functioning as expected and adapting to evolving threats?</label>
            <div>
              <input type="text" name="ubaReviews" placeholder="Describe regular reviews or assessments of UBA systems" />
            </div>
          </div>

          <div className="form-section">
            <label>How are feedback and lessons learned from previous incidents incorporated into the UBA strategy to improve detection and response?</label>
            <div>
              <input type="text" name="ubaFeedback" placeholder="Describe how feedback and lessons learned are incorporated into UBA" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('ubaSolutions')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default UserBehaviorAnalyticsPage;
