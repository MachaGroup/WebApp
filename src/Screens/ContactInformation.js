import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6

function ContactInformationPage() {
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

      {/* Contact Information Section */}
      <main className="form-container">
        <h2>Contact Information for IT Support</h2>
        <form>
          {/* Accessibility of Contact Information Section */}
          <h3>Accessibility of Contact Information</h3>

          <div className="form-section">
            <label>Is the IT support contact information readily accessible to all employees, including those working remotely or in different time zones?</label>
            <div>
              <input type="text" name="contactAccessibility" placeholder="Describe accessibility for all employees" />
            </div>
          </div>

          <div className="form-section">
            <label>Are multiple communication channels provided for employees to contact IT support (e.g., phone, email, chat)?</label>
            <div>
              <input type="text" name="communicationChannels" placeholder="Describe the available communication channels" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently is the contact information reviewed and updated to ensure accuracy and availability?</label>
            <div>
              <input type="text" name="contactReviewFrequency" placeholder="Describe frequency of updates and reviews" />
            </div>
          </div>

          {/* Clarity and Visibility Section */}
          <h3>Clarity and Visibility</h3>

          <div className="form-section">
            <label>Is the contact information for IT support prominently displayed in key areas, such as the company intranet, employee handbooks, or near workstations?</label>
            <div>
              <input type="text" name="contactVisibility" placeholder="Describe the visibility of IT support contact information" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear instructions provided on when and how to contact IT support for different types of cybersecurity incidents or technical issues?</label>
            <div>
              <input type="text" name="contactInstructions" placeholder="Describe instructions for contacting IT support" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure that employees understand the role and responsibilities of IT support regarding incident reporting and response?</label>
            <div>
              <input type="text" name="itSupportRole" placeholder="Describe how employees understand IT support roles" />
            </div>
          </div>

          {/* Response Time and Effectiveness Section */}
          <h3>Response Time and Effectiveness</h3>

          <div className="form-section">
            <label>What are the expected response times for IT support when contacted regarding cybersecurity incidents or technical issues?</label>
            <div>
              <input type="text" name="responseTimes" placeholder="Describe expected response times" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the effectiveness of IT support in resolving issues and providing guidance measured and evaluated?</label>
            <div>
              <input type="text" name="effectivenessEvaluation" placeholder="Describe how effectiveness is measured" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there escalation procedures in place if the initial IT support contact is unable to resolve an issue promptly?</label>
            <div>
              <input type="text" name="escalationProcedures" placeholder="Describe escalation procedures for unresolved issues" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>Are employees regularly reminded of the importance of knowing how to contact IT support and when to do so in the event of a cybersecurity threat?</label>
            <div>
              <input type="text" name="remindersAndImportance" placeholder="Describe reminders and importance" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there training provided to employees on what information to provide when contacting IT support to facilitate a quicker response?</label>
            <div>
              <input type="text" name="trainingOnInformation" placeholder="Describe training on what information to provide" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure that new employees are aware of IT support contact information and procedures as part of their onboarding process?</label>
            <div>
              <input type="text" name="onboardingITSupport" placeholder="Describe how new employees are informed" />
            </div>
          </div>

          {/* Integration with Security Policies Section */}
          <h3>Integration with Security Policies</h3>

          <div className="form-section">
            <label>How is the contact information for IT support integrated into broader cybersecurity policies and procedures, such as incident response plans?</label>
            <div>
              <input type="text" name="integrationWithPolicies" placeholder="Describe integration with cybersecurity policies" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific guidelines for IT support on how to handle different types of cybersecurity incidents and communicate with employees?</label>
            <div>
              <input type="text" name="itSupportGuidelines" placeholder="Describe guidelines for IT support handling incidents" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization use feedback from IT support interactions to refine and improve cybersecurity policies and contact procedures?</label>
            <div>
              <input type="text" name="feedbackAndImprovement" placeholder="Describe how feedback is used for improvement" />
            </div>
          </div>

          {/* Availability and Continuity Section */}
          <h3>Availability and Continuity</h3>

          <div className="form-section">
            <label>Is IT support available 24/7 for cybersecurity incidents, or are there specific hours of operation?</label>
            <div>
              <input type="text" name="itSupportHours" placeholder="Describe IT support availability and hours" />
            </div>
          </div>

          <div className="form-section">
            <label>What provisions are in place for after-hours or emergency support, particularly during critical incidents or cybersecurity threats?</label>
            <div>
              <input type="text" name="emergencySupport" placeholder="Describe provisions for after-hours support" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure continuity of IT support services during holidays, weekends, or in the event of a large-scale incident?</label>
            <div>
              <input type="text" name="supportContinuity" placeholder="Describe continuity plans for IT support" />
            </div>
          </div>

          {/* Feedback and Improvement Section */}
          <h3>Feedback and Improvement</h3>

          <div className="form-section">
            <label>Are employees encouraged to provide feedback on their experiences with IT support, and how is this feedback used to improve services?</label>
            <div>
              <input type="text" name="feedbackEncouragement" placeholder="Describe how feedback is encouraged and used" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular reviews or audits of IT support contact procedures to identify areas for enhancement?</label>
            <div>
              <input type="text" name="reviewsAndAudits" placeholder="Describe regular reviews or audits of procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization ensure that IT support is adequately staffed and trained to handle the volume and variety of cybersecurity incidents reported by employees?</label>
            <div>
              <input type="text" name="staffingAndTraining" placeholder="Describe how IT support is staffed and trained" />
            </div>
          </div>

          {/* Communication Strategy Section */}
          <h3>Communication Strategy</h3>

          <div className="form-section">
            <label>How frequently does the organization communicate changes or updates to IT support contact information to employees?</label>
            <div>
              <input type="text" name="communicationFrequency" placeholder="Describe how frequently updates are communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there emergency communication strategies in place if IT support contact information changes suddenly (e.g., during a cyber incident)?</label>
            <div>
              <input type="text" name="emergencyCommunication" placeholder="Describe emergency communication strategies" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization reinforce the importance of maintaining updated contact information in all communication materials?</label>
            <div>
              <input type="text" name="importanceOfUpdates" placeholder="Describe how the importance is reinforced" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('contactInformation')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ContactInformationPage;
