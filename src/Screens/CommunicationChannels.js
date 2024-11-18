import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6.4.2.1.2

function CommunicationChannelsPage() {
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

      {/* Communication Channels and Protocols Section */}
      <main className="form-container">
        <h2>Communication Channels and Protocols</h2>
        <form>
          {/* Channel Selection Section */}
          <h3>Channel Selection</h3>

          <div className="form-section">
            <label>What communication channels are designated for incident response (e.g., secure email, encrypted messaging apps, dedicated phone lines)?</label>
            <div>
              <input type="text" name="channelSelection" placeholder="Describe designated communication channels" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these channels selected to ensure they meet the security and confidentiality requirements for incident communication?</label>
            <div>
              <input type="text" name="channelSelectionCriteria" placeholder="Describe the criteria for selecting communication channels" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there alternative channels identified in case primary ones become unavailable or compromised?</label>
            <div>
              <input type="text" name="alternativeChannels" placeholder="Describe alternative communication channels" />
            </div>
          </div>

          {/* Communication Protocols Section */}
          <h3>Communication Protocols</h3>

          <div className="form-section">
            <label>What protocols are established for internal communication within the incident response team (e.g., message formats, frequency of updates)?</label>
            <div>
              <input type="text" name="internalCommunicationProtocols" placeholder="Describe internal communication protocols" />
            </div>
          </div>

          <div className="form-section">
            <label>How is sensitive information handled and protected during communication to prevent unauthorized access or leakage?</label>
            <div>
              <input type="text" name="sensitiveInfoProtection" placeholder="Describe protection measures for sensitive information" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there predefined procedures for escalating communication based on the severity or urgency of the incident?</label>
            <div>
              <input type="text" name="communicationEscalation" placeholder="Describe communication escalation procedures" />
            </div>
          </div>

          {/* Incident Reporting Section */}
          <h3>Incident Reporting</h3>

          <div className="form-section">
            <label>How are incidents reported within the organization (e.g., initial notification, status updates)?</label>
            <div>
              <input type="text" name="incidentReporting" placeholder="Describe how incidents are reported within the organization" />
            </div>
          </div>

          <div className="form-section">
            <label>What information is required in incident reports to ensure clarity and completeness (e.g., incident description, impact assessment, response actions)?</label>
            <div>
              <input type="text" name="incidentReportInfo" placeholder="Describe required information in incident reports" />
            </div>
          </div>

          <div className="form-section">
            <label>How are reports documented and stored for future reference or compliance purposes?</label>
            <div>
              <input type="text" name="reportDocumentation" placeholder="Describe how reports are documented and stored" />
            </div>
          </div>

          {/* External Communication Section */}
          <h3>External Communication</h3>

          <div className="form-section">
            <label>What guidelines are in place for communicating with external parties, including stakeholders, customers, regulatory bodies, and the public?</label>
            <div>
              <input type="text" name="externalCommunicationGuidelines" placeholder="Describe guidelines for external communication" />
            </div>
          </div>

          <div className="form-section">
            <label>How is consistency and accuracy maintained in external communications to ensure the organization’s message is clear and unified?</label>
            <div>
              <input type="text" name="externalCommunicationAccuracy" placeholder="Describe how accuracy is maintained in external communication" />
            </div>
          </div>

          <div className="form-section">
            <label>What protocols are followed to manage media inquiries or public statements during an incident?</label>
            <div>
              <input type="text" name="mediaProtocols" placeholder="Describe protocols for managing media inquiries" />
            </div>
          </div>

          {/* Response Coordination Section */}
          <h3>Response Coordination</h3>

          <div className="form-section">
            <label>How is coordination managed between team members and other departments or external entities during an incident?</label>
            <div>
              <input type="text" name="coordinationManagement" placeholder="Describe coordination between team members and external entities" />
            </div>
          </div>

          <div className="form-section">
            <label>What tools or systems are used to facilitate real-time communication and collaboration among response team members?</label>
            <div>
              <input type="text" name="collaborationTools" placeholder="Describe tools used for real-time communication and collaboration" />
            </div>
          </div>

          <div className="form-section">
            <label>How are communication responsibilities divided among team members to avoid duplication or gaps in information sharing?</label>
            <div>
              <input type="text" name="communicationResponsibilities" placeholder="Describe division of communication responsibilities" />
            </div>
          </div>

          {/* Information Security Section */}
          <h3>Information Security</h3>

          <div className="form-section">
            <label>How are communication channels secured to prevent interception or tampering during an incident (e.g., encryption, access controls)?</label>
            <div>
              <input type="text" name="channelSecurity" placeholder="Describe security measures for communication channels" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are taken to protect communication devices and systems used by the incident response team?</label>
            <div>
              <input type="text" name="deviceProtection" placeholder="Describe measures to protect communication devices" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the integrity of communicated information ensured, and how are potential security breaches addressed?</label>
            <div>
              <input type="text" name="communicationIntegrity" placeholder="Describe how information integrity is maintained" />
            </div>
          </div>

          {/* Training and Drills Section */}
          <h3>Training and Drills</h3>

          <div className="form-section">
            <label>How is training provided to team members on the use of communication channels and adherence to protocols?</label>
            <div>
              <input type="text" name="trainingOnCommunication" placeholder="Describe training for team members on communication protocols" />
            </div>
          </div>

          <div className="form-section">
            <label>Are regular drills conducted to practice communication procedures and identify areas for improvement?</label>
            <div>
              <input type="text" name="communicationDrills" placeholder="Describe regular communication drills" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback from drills and real incidents used to refine communication practices and protocols?</label>
            <div>
              <input type="text" name="drillFeedback" placeholder="Describe how feedback is used to refine communication practices" />
            </div>
          </div>

          {/* Post-Incident Review Section */}
          <h3>Post-Incident Review</h3>

          <div className="form-section">
            <label>How is the effectiveness of communication channels and protocols evaluated after an incident (e.g., debriefings, performance reviews)?</label>
            <div>
              <input type="text" name="communicationEvaluation" placeholder="Describe evaluation of communication channels post-incident" />
            </div>
          </div>

          <div className="form-section">
            <label>What feedback is collected from team members regarding communication challenges and successes?</label>
            <div>
              <input type="text" name="communicationFeedback" placeholder="Describe feedback collected post-incident" />
            </div>
          </div>

          <div className="form-section">
            <label>How are lessons learned from communication during incidents used to enhance future response efforts?</label>
            <div>
              <input type="text" name="communicationLessons" placeholder="Describe how lessons learned improve future communications" />
            </div>
          </div>

          {/* Documentation and Reporting Section */}
          <h3>Documentation and Reporting</h3>

          <div className="form-section">
            <label>What documentation is required for communication during an incident (e.g., logs, message archives)?</label>
            <div>
              <input type="text" name="communicationDocumentation" placeholder="Describe required communication documentation" />
            </div>
          </div>

          <div className="form-section">
            <label>How are communication records maintained and reviewed for accuracy and completeness?</label>
            <div>
              <input type="text" name="communicationRecords" placeholder="Describe how communication records are maintained and reviewed" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for archiving and analyzing communication records after an incident?</label>
            <div>
              <input type="text" name="communicationArchiving" placeholder="Describe procedures for archiving communication records" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('communicationChannelsProtocols')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CommunicationChannelsPage;
