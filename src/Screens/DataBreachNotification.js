import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6.5.1.2.2 

function DataBreachNotificationPage() {
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

      {/* Data Breach Notification Procedures Section */}
      <main className="form-container">
        <h2>Data Breach Notification Procedures</h2>
        <form>
          {/* Notification Triggers Section */}
          <h3>Notification Triggers</h3>

          <div className="form-section">
            <label>What criteria are used to determine if a data breach has occurred and requires notification (e.g., unauthorized access, loss of data)?</label>
            <div>
              <input type="text" name="breachCriteria" placeholder="Describe criteria for determining data breach" />
            </div>
          </div>

          <div className="form-section">
            <label>How are potential data breaches assessed to confirm their validity and severity?</label>
            <div>
              <input type="text" name="breachAssessment" placeholder="Describe assessment process for breach validity and severity" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for making the determination that a data breach has occurred?</label>
            <div>
              <input type="text" name="breachResponsibility" placeholder="Describe who determines if a breach has occurred" />
            </div>
          </div>

          {/* Notification Timeliness Section */}
          <h3>Notification Timeliness</h3>

          <div className="form-section">
            <label>What is the timeframe for notifying affected individuals after a data breach is identified (e.g., within 72 hours, immediately)?</label>
            <div>
              <input type="text" name="notificationTimeframe" placeholder="Describe timeframe for notifying affected individuals" />
            </div>
          </div>

          <div className="form-section">
            <label>How is this timeframe determined and communicated within the organization?</label>
            <div>
              <input type="text" name="timeframeCommunication" placeholder="Describe how notification timeframe is communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there processes in place to ensure that notifications are sent promptly and accurately?</label>
            <div>
              <input type="text" name="notificationProcesses" placeholder="Describe processes for ensuring timely and accurate notifications" />
            </div>
          </div>

          {/* Notification Content Section */}
          <h3>Notification Content</h3>

          <div className="form-section">
            <label>What information is included in breach notification letters or messages (e.g., nature of the breach, types of data affected, potential impacts)?</label>
            <div>
              <input type="text" name="notificationContent" placeholder="Describe information included in breach notifications" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the notification content tailored to ensure clarity and understanding for affected individuals?</label>
            <div>
              <input type="text" name="contentTailoring" placeholder="Describe how notification content is tailored for clarity" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there templates or guidelines used to ensure consistency in notifications?</label>
            <div>
              <input type="text" name="notificationTemplates" placeholder="Describe templates or guidelines for consistency" />
            </div>
          </div>

          {/* Affected Parties Section */}
          <h3>Affected Parties</h3>

          <div className="form-section">
            <label>Who must be notified in the event of a data breach (e.g., individuals whose data was compromised, regulatory authorities)?</label>
            <div>
              <input type="text" name="affectedParties" placeholder="Describe who must be notified in case of a breach" />
            </div>
          </div>

          <div className="form-section">
            <label>How are notification lists maintained and updated to ensure that all affected parties are contacted?</label>
            <div>
              <input type="text" name="notificationLists" placeholder="Describe how notification lists are maintained and updated" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are followed to handle notifications for individuals who may be difficult to reach?</label>
            <div>
              <input type="text" name="difficultToReach" placeholder="Describe procedures for notifying difficult-to-reach individuals" />
            </div>
          </div>

          {/* Regulatory Compliance Section */}
          <h3>Regulatory Compliance</h3>

          <div className="form-section">
            <label>What regulatory requirements govern data breach notifications (e.g., GDPR, CCPA, FERPA), and how does the organization ensure compliance?</label>
            <div>
              <input type="text" name="regulatoryRequirements" placeholder="Describe regulatory requirements for data breach notifications" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the organization prepared to meet specific notification requirements set forth by different regulations?</label>
            <div>
              <input type="text" name="notificationPreparation" placeholder="Describe preparedness to meet notification requirements" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures in place for reporting breaches to regulatory authorities, and what information must be included in such reports?</label>
            <div>
              <input type="text" name="breachReporting" placeholder="Describe procedures for breach reporting to regulatory authorities" />
            </div>
          </div>

          {/* Communication Channels Section */}
          <h3>Communication Channels</h3>

          <div className="form-section">
            <label>What methods are used to notify affected individuals (e.g., email, postal mail, phone calls)?</label>
            <div>
              <input type="text" name="notificationMethods" placeholder="Describe methods for notifying affected individuals" />
            </div>
          </div>

          <div className="form-section">
            <label>How are communication channels chosen based on the nature and severity of the breach?</label>
            <div>
              <input type="text" name="communicationChannelChoice" placeholder="Describe how communication channels are chosen" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there backup communication methods in case primary channels are unavailable or ineffective?</label>
            <div>
              <input type="text" name="backupMethods" placeholder="Describe backup communication methods" />
            </div>
          </div>

          {/* Support and Guidance Section */}
          <h3>Support and Guidance</h3>

          <div className="form-section">
            <label>What support is provided to individuals affected by a data breach (e.g., credit monitoring, identity theft protection)?</label>
            <div>
              <input type="text" name="supportProvided" placeholder="Describe support provided to affected individuals" />
            </div>
          </div>

          <div className="form-section">
            <label>How is information about available resources and support services communicated to affected individuals?</label>
            <div>
              <input type="text" name="supportCommunication" placeholder="Describe how support services are communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for addressing questions and concerns from affected individuals?</label>
            <div>
              <input type="text" name="questionsConcerns" placeholder="Describe procedures for addressing questions from affected individuals" />
            </div>
          </div>

          {/* Internal Notification and Reporting Section */}
          <h3>Internal Notification and Reporting</h3>

          <div className="form-section">
            <label>How are internal stakeholders notified about the data breach (e.g., senior management, IT department)?</label>
            <div>
              <input type="text" name="internalNotification" placeholder="Describe internal notification process" />
            </div>
          </div>

          <div className="form-section">
            <label>What internal reporting procedures are followed to ensure that all relevant parties are informed and involved in the response?</label>
            <div>
              <input type="text" name="internalReporting" placeholder="Describe internal reporting procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is information about the breach documented and shared within the organization?</label>
            <div>
              <input type="text" name="breachDocumentation" placeholder="Describe documentation and sharing process for breach information" />
            </div>
          </div>

          {/* Post-Breach Review and Improvement Section */}
          <h3>Post-Breach Review and Improvement</h3>

          <div className="form-section">
            <label>What processes are in place to review and analyze the breach and notification process after an incident?</label>
            <div>
              <input type="text" name="postBreachReview" placeholder="Describe post-breach review processes" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback from the breach notification process used to improve procedures and policies?</label>
            <div>
              <input type="text" name="feedbackUsage" placeholder="Describe how feedback is used for improvements" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms for updating notification procedures based on lessons learned from previous breaches?</label>
            <div>
              <input type="text" name="updateMechanisms" placeholder="Describe mechanisms for updating procedures" />
            </div>
          </div>

          {/* Legal and Public Relations Section */}
          <h3>Legal and Public Relations</h3>

          <div className="form-section">
            <label>What legal considerations are taken into account when preparing breach notifications (e.g., potential legal liabilities, compliance issues)?</label>
            <div>
              <input type="text" name="legalConsiderations" placeholder="Describe legal considerations for breach notifications" />
            </div>
          </div>

          <div className="form-section">
            <label>How is public relations managed to address the breach and maintain trust with affected individuals and stakeholders?</label>
            <div>
              <input type="text" name="publicRelationsManagement" placeholder="Describe how public relations are managed" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there guidelines for handling media inquiries and public statements related to the breach?</label>
            <div>
              <input type="text" name="mediaGuidelines" placeholder="Describe guidelines for handling media inquiries" />
            </div>
          </div>

        </form>
      </main>
    </div>
  );
}

export default DataBreachNotificationPage;
