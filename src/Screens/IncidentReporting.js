import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location


// section 6

function IncidentReportingPage() {
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

      {/* Incident Reporting Section */}
      <main className="form-container">
        <h2>Incident Reporting</h2>
        <form>
          {/* Reporting Mechanisms and Accessibility Section */}
          <h3>Reporting Mechanisms and Accessibility</h3>

          <div className="form-section">
            <label>What channels are available for employees to report suspicious emails or potential phishing attempts (e.g., email, dedicated reporting tool, phone line)?</label>
            <div>
              <input type="text" name="reportingChannels" placeholder="Describe available reporting channels" />
            </div>
          </div>

          <div className="form-section">
            <label>Are these reporting mechanisms easily accessible and user-friendly for all employees, regardless of their technical expertise?</label>
            <div>
              <input type="text" name="userFriendlyReporting" placeholder="Describe the accessibility of reporting mechanisms" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a clear process outlined for what information employees should include when reporting suspicious emails?</label>
            <div>
              <input type="text" name="reportingProcess" placeholder="Describe the reporting process" />
            </div>
          </div>

          {/* Training and Awareness on Reporting Section */}
          <h3>Training and Awareness on Reporting</h3>

          <div className="form-section">
            <label>Are employees regularly trained on how to recognize suspicious emails and the importance of promptly reporting them?</label>
            <div>
              <input type="text" name="reportingTraining" placeholder="Describe training and awareness programs" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are employees reminded of the reporting procedures, and is there ongoing communication to reinforce these practices?</label>
            <div>
              <input type="text" name="reportingReminders" placeholder="Describe reminders and ongoing communication" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there examples or case studies used in training to illustrate successful reporting and its impact on preventing security breaches?</label>
            <div>
              <input type="text" name="caseStudies" placeholder="Describe examples or case studies used in training" />
            </div>
          </div>

          {/* Response and Follow-Up Section */}
          <h3>Response and Follow-Up</h3>

          <div className="form-section">
            <label>What is the process for handling reports of suspicious emails once they are submitted? Who is responsible for investigating these reports?</label>
            <div>
              <input type="text" name="reportHandling" placeholder="Describe the process for handling reports" />
            </div>
          </div>

          <div className="form-section">
            <label>How quickly are reported incidents reviewed and addressed by the security team, and is this turnaround time communicated to employees?</label>
            <div>
              <input type="text" name="reportTurnaround" placeholder="Describe incident review and response time" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there feedback provided to employees who report suspicious emails, such as acknowledgment of the report and information on any actions taken?</label>
            <div>
              <input type="text" name="feedbackProvided" placeholder="Describe feedback provided to employees" />
            </div>
          </div>

          {/* Effectiveness and Improvement Section */}
          <h3>Effectiveness and Improvement</h3>

          <div className="form-section">
            <label>How is the effectiveness of the incident reporting process measured (e.g., number of reports, accuracy of reports, prevention of phishing attacks)?</label>
            <div>
              <input type="text" name="effectivenessMeasurement" placeholder="Describe how effectiveness is measured" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular reviews or audits of the reporting process to identify areas for improvement and ensure it remains effective?</label>
            <div>
              <input type="text" name="reportingReviews" placeholder="Describe reviews or audits of reporting process" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization encourage employees to report incidents without fear of reprisal or judgment?</label>
            <div>
              <input type="text" name="encouragementForReporting" placeholder="Describe how employees are encouraged to report" />
            </div>
          </div>

          {/* Integration with Broader Security Practices Section */}
          <h3>Integration with Broader Security Practices</h3>

          <div className="form-section">
            <label>How is the incident reporting process integrated with other security measures, such as threat intelligence sharing and security incident response?</label>
            <div>
              <input type="text" name="securityIntegration" placeholder="Describe integration with other security practices" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there established protocols for escalating reported incidents to higher-level security teams or external authorities if needed?</label>
            <div>
              <input type="text" name="escalationProtocols" placeholder="Describe escalation protocols for incidents" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization use data from reported incidents to enhance overall cybersecurity strategies and awareness efforts?</label>
            <div>
              <input type="text" name="dataUsage" placeholder="Describe data usage from reported incidents" />
            </div>
          </div>

          {/* Encouraging a Reporting Culture Section */}
          <h3>Encouraging a Reporting Culture</h3>

          <div className="form-section">
            <label>Are there initiatives in place to promote a culture of proactive reporting and cybersecurity vigilance among employees?</label>
            <div>
              <input type="text" name="reportingCulture" placeholder="Describe initiatives for promoting reporting culture" />
            </div>
          </div>

          <div className="form-section">
            <label>Does the organization recognize or reward employees for identifying and reporting potential security threats?</label>
            <div>
              <input type="text" name="rewardsForReporting" placeholder="Describe recognition or rewards for reporting threats" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the importance of incident reporting emphasized within the organization's overall cybersecurity training and awareness programs?</label>
            <div>
              <input type="text" name="reportingImportance" placeholder="Describe emphasis on incident reporting in training" />
            </div>
          </div>

          {/* Technology and Automation Section */}
          <h3>Technology and Automation</h3>

          <div className="form-section">
            <label>Are there automated systems in place to assist in the reporting and initial analysis of suspicious emails (e.g., phishing detection tools)?</label>
            <div>
              <input type="text" name="automationTools" placeholder="Describe automated systems or tools" />
            </div>
          </div>

          <div className="form-section">
            <label>How does technology aid in streamlining the reporting process and reducing the burden on employees?</label>
            <div>
              <input type="text" name="technologyAids" placeholder="Describe how technology aids in reporting" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there plans to enhance reporting capabilities with new technologies or integrations to improve detection and response times?</label>
            <div>
              <input type="text" name="enhancementPlans" placeholder="Describe plans for enhancing reporting capabilities" />
            </div>
          </div>

          {/* Communication and Feedback Section */}
          <h3>Communication and Feedback</h3>

          <div className="form-section">
            <label>Is there a clear communication strategy to inform employees about the outcomes of their reports and the importance of their role in cybersecurity?</label>
            <div>
              <input type="text" name="communicationStrategy" placeholder="Describe communication strategy" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there opportunities for employees to provide feedback on the reporting process and suggest improvements?</label>
            <div>
              <input type="text" name="feedbackOpportunities" placeholder="Describe opportunities for feedback" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure transparency in its handling of reported incidents, while maintaining necessary confidentiality and security?</label>
            <div>
              <input type="text" name="incidentTransparency" placeholder="Describe transparency and confidentiality" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('incidentReporting')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default IncidentReportingPage;
