import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6

function PhishingAwarenessPage() {
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

      {/* Phishing Awareness Section */}
      <main className="form-container">
        <h2>Phishing Awareness</h2>
        <form>
          {/* Phishing Simulation Exercises Section */}
          <h3>Phishing Simulation Exercises</h3>

          <div className="form-section">
            <label>How often are phishing simulation exercises conducted to test user vigilance?</label>
            <div>
              <input type="text" name="simulationFrequency" placeholder="Describe how often phishing simulation exercises are conducted" />
            </div>
          </div>

          <div className="form-section">
            <label>What types of phishing tactics (e.g., email, SMS) are included in the simulations?</label>
            <div>
              <input type="text" name="phishingTactics" placeholder="Describe phishing tactics used in the simulations" />
            </div>
          </div>

          <div className="form-section">
            <label>How are employees informed of their performance in these exercises (e.g., feedback, follow-up training)?</label>
            <div>
              <input type="text" name="performanceFeedback" placeholder="Describe how performance is communicated to employees" />
            </div>
          </div>

          <div className="form-section">
            <label>What corrective actions or additional training are required for employees who fall for simulated phishing attempts?</label>
            <div>
              <input type="text" name="correctiveActions" placeholder="Describe corrective actions or additional training for those who fall for phishing attempts" />
            </div>
          </div>

          <div className="form-section">
            <label>Are results from phishing exercises tracked to identify trends and improve the program?</label>
            <div>
              <input type="text" name="trackingResults" placeholder="Describe how phishing exercise results are tracked and used for improvement" />
            </div>
          </div>

          {/* Simulated Phishing Campaigns Section */}
          <h3>Simulated Phishing Campaigns (e.g., testing user responses)</h3>

          <div className="form-section">
            <label>How are simulated phishing campaigns designed to reflect realistic phishing threats and tactics?</label>
            <div>
              <input type="text" name="campaignDesign" placeholder="Describe how campaigns reflect realistic threats" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to select the timing, frequency, and targets of these simulated phishing campaigns?</label>
            <div>
              <input type="text" name="campaignCriteria" placeholder="Describe the criteria for timing, frequency, and targets" />
            </div>
          </div>

          <div className="form-section">
            <label>Are the simulated phishing emails varied in difficulty to test different levels of user awareness and susceptibility?</label>
            <div>
              <input type="text" name="emailDifficulty" placeholder="Describe how email difficulty is varied" />
            </div>
          </div>

          <div className="form-section">
            <label>How are user responses to simulated phishing attempts tracked and analyzed to identify trends and common vulnerabilities?</label>
            <div>
              <input type="text" name="userTracking" placeholder="Describe how user responses are tracked and analyzed" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there an immediate feedback mechanism in place to inform users whether they have successfully identified a phishing attempt or fallen for the simulation?</label>
            <div>
              <input type="text" name="immediateFeedback" placeholder="Describe immediate feedback mechanism" />
            </div>
          </div>

          <div className="form-section">
            <label>How is user feedback incorporated into improving the design and effectiveness of future simulated phishing campaigns?</label>
            <div>
              <input type="text" name="feedbackIncorporation" placeholder="Describe how user feedback is used" />
            </div>
          </div>

          <div className="form-section">
            <label>Are users provided with training or resources after a simulated phishing campaign to help them better identify phishing attempts in the future?</label>
            <div>
              <input type="text" name="trainingResources" placeholder="Describe post-campaign training or resources" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is phishing awareness training updated to reflect the latest phishing tactics and trends?</label>
            <div>
              <input type="text" name="trainingUpdateFrequency" placeholder="Describe the update frequency of phishing awareness training" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a follow-up process to ensure that users who fail the simulation receive additional training or support?</label>
            <div>
              <input type="text" name="followUpProcess" placeholder="Describe the follow-up process for users who fail the simulation" />
            </div>
          </div>

          {/* Performance Metrics and Reporting Section */}
          <h3>Performance Metrics and Reporting</h3>

          <div className="form-section">
            <label>What metrics are used to evaluate the effectiveness of simulated phishing campaigns (e.g., click rates, reporting rates, repeat offenders)?</label>
            <div>
              <input type="text" name="phishingMetrics" placeholder="Describe metrics used to evaluate phishing campaigns" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these metrics reported to stakeholders, and are they used to inform cybersecurity policies and procedures?</label>
            <div>
              <input type="text" name="metricsReporting" placeholder="Describe how metrics are reported to stakeholders" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a process for benchmarking these metrics against industry standards or previous campaign results to measure improvement over time?</label>
            <div>
              <input type="text" name="metricsBenchmarking" placeholder="Describe the process for benchmarking phishing metrics" />
            </div>
          </div>

          {/* Continuous Improvement and Adaptation Section */}
          <h3>Continuous Improvement and Adaptation</h3>

          <div className="form-section">
            <label>How are the results of simulated phishing campaigns used to continuously improve phishing awareness and training programs?</label>
            <div>
              <input type="text" name="campaignResultsUse" placeholder="Describe how results are used to improve programs" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular reviews and updates to the simulation content to adapt to new phishing techniques and emerging threats?</label>
            <div>
              <input type="text" name="contentUpdates" placeholder="Describe the process for reviewing and updating simulation content" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure that the simulated phishing campaigns remain challenging and engaging for users to prevent complacency?</label>
            <div>
              <input type="text" name="engagementStrategies" placeholder="Describe strategies to keep campaigns engaging" />
            </div>
          </div>

          {/* Coordination with IT and Security Teams Section */}
          <h3>Coordination with IT and Security Teams</h3>

          <div className="form-section">
            <label>How are the IT and security teams involved in the planning and execution of simulated phishing campaigns?</label>
            <div>
              <input type="text" name="ITinvolvement" placeholder="Describe IT and security teams' involvement" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a process for these teams to analyze data from simulations to identify potential security gaps or areas for improvement?</label>
            <div>
              <input type="text" name="dataAnalysisProcess" placeholder="Describe the data analysis process" />
            </div>
          </div>

          <div className="form-section">
            <label>How does coordination with these teams enhance the overall effectiveness of the phishing simulation program?</label>
            <div>
              <input type="text" name="coordinationEffectiveness" placeholder="Describe how coordination enhances program effectiveness" />
            </div>
          </div>

          {/* Impact on Overall Security Posture Section */}
          <h3>Impact on Overall Security Posture</h3>

          <div className="form-section">
            <label>How do simulated phishing campaigns contribute to the organization’s broader cybersecurity strategy?</label>
            <div>
              <input type="text" name="cybersecurityStrategyImpact" placeholder="Describe the impact on broader cybersecurity strategy" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there measures in place to assess the impact of these campaigns on reducing real-world phishing incidents?</label>
            <div>
              <input type="text" name="realWorldImpact" placeholder="Describe measures to assess real-world impact" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the success of the phishing simulation program linked to other user awareness and cybersecurity initiatives within the organization?</label>
            <div>
              <input type="text" name="programSuccessLinkage" placeholder="Describe how phishing simulation success is linked to other initiatives" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default PhishingAwarenessPage;
