import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6 

function PasswordExpirationPage() {
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

      {/* Password Expiration Policies Section */}
      <main className="form-container">
        <h2>Password Expiration Policies</h2>
        <form>
          {/* Policy Awareness and Implementation Section */}
          <h3>Policy Awareness and Implementation</h3>

          <div className="form-section">
            <label>Are all employees aware of the password expiration policy, including how often passwords must be changed?</label>
            <div>
              <input type="text" name="policyAwareness" placeholder="Describe awareness of expiration policy" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the password expiration policy communicated to new employees during onboarding and existing employees as policies update?</label>
            <div>
              <input type="text" name="policyCommunication" placeholder="Describe communication methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there automated reminders or notifications in place to alert employees when their passwords are nearing expiration?</label>
            <div>
              <input type="text" name="automatedReminders" placeholder="Describe automated reminders" />
            </div>
          </div>

          {/* Compliance and Enforcement Section */}
          <h3>Compliance and Enforcement</h3>

          <div className="form-section">
            <label>What mechanisms are in place to enforce password expiration policies across all organizational systems and applications?</label>
            <div>
              <input type="text" name="enforcementMechanisms" placeholder="Describe enforcement mechanisms" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there consequences for non-compliance with password expiration policies, and if so, what are they?</label>
            <div>
              <input type="text" name="nonComplianceConsequences" placeholder="Describe consequences for non-compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization monitor compliance with password expiration policies, and are there reports generated for IT or security teams?</label>
            <div>
              <input type="text" name="complianceMonitoring" placeholder="Describe monitoring and reporting mechanisms" />
            </div>
          </div>

          {/* Impact on Security Section */}
          <h3>Impact on Security</h3>

          <div className="form-section">
            <label>How does the organization assess the effectiveness of password expiration policies in reducing the risk of unauthorized access or security breaches?</label>
            <div>
              <input type="text" name="effectivenessAssessment" placeholder="Describe effectiveness assessment methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there metrics or key performance indicators (KPIs) used to evaluate the impact of regular password changes on overall cybersecurity?</label>
            <div>
              <input type="text" name="kpiEvaluation" placeholder="Describe KPIs for evaluating password expiration impact" />
            </div>
          </div>

          <div className="form-section">
            <label>Has the organization experienced any security incidents that were attributed to expired or unchanged passwords? What measures were taken in response?</label>
            <div>
              <input type="text" name="securityIncidents" placeholder="Describe security incidents and responses" />
            </div>
          </div>

          {/* User Experience and Practicality Section */}
          <h3>User Experience and Practicality</h3>

          <div className="form-section">
            <label>How do employees perceive the password expiration policy in terms of convenience and practicality? Does it lead to frequent reset requests or difficulties?</label>
            <div>
              <input type="text" name="employeePerception" placeholder="Describe employee perception of the policy" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any support mechanisms in place (e.g., IT helpdesk) to assist employees who have trouble complying with password expiration policies?</label>
            <div>
              <input type="text" name="supportMechanisms" placeholder="Describe support mechanisms for employees" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization balance the need for security through regular password changes with the potential burden on employees?</label>
            <div>
              <input type="text" name="securityVsConvenience" placeholder="Describe the balance between security and employee burden" />
            </div>
          </div>

          {/* Integration with Other Security Measures Section */}
          <h3>Integration with Other Security Measures</h3>

          <div className="form-section">
            <label>How do password expiration policies integrate with other security measures, such as multi-factor authentication (MFA) or single sign-on (SSO) systems?</label>
            <div>
              <input type="text" name="integrationWithOtherMeasures" placeholder="Describe integration with MFA or SSO" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific guidelines or recommendations for password changes when other authentication methods are in use to enhance overall security?</label>
            <div>
              <input type="text" name="guidelinesForOtherMethods" placeholder="Describe guidelines for using with other authentication methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Does the organization encourage or require additional security measures, such as MFA, when a password has expired or been recently changed?</label>
            <div>
              <input type="text" name="encouragingMFA" placeholder="Describe encouragement of MFA for expired passwords" />
            </div>
          </div>

          {/* Adaptability and Continuous Improvement Section */}
          <h3>Adaptability and Continuous Improvement</h3>

          <div className="form-section">
            <label>How often does the organization review and update its password expiration policies to align with industry best practices and emerging security threats?</label>
            <div>
              <input type="text" name="policyReviewFrequency" placeholder="Describe review frequency for expiration policy" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a process for collecting and incorporating feedback from employees on the password expiration policy to improve its effectiveness and user-friendliness?</label>
            <div>
              <input type="text" name="feedbackProcess" placeholder="Describe feedback process and improvements" />
            </div>
          </div>

          <div className="form-section">
            <label>Are adjustments to the policy made based on technological advancements or changes in the threat landscape?</label>
            <div>
              <input type="text" name="adjustmentsBasedOnTech" placeholder="Describe adjustments based on technology changes" />
            </div>
          </div>

          {/* Training and Support Section */}
          <h3>Training and Support</h3>

          <div className="form-section">
            <label>Are employees provided with training on the importance of regular password changes and how to manage them effectively?</label>
            <div>
              <input type="text" name="trainingOnPasswordChange" placeholder="Describe training provided for password changes" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization support employees in adhering to the password expiration policy, especially those with access to multiple systems?</label>
            <div>
              <input type="text" name="supportForMultipleSystems" placeholder="Describe support for employees with multiple systems" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or tools available to help employees manage their passwords more efficiently, such as password managers?</label>
            <div>
              <input type="text" name="passwordManagementTools" placeholder="Describe tools or resources available for password management" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('passwordExpiration')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default PasswordExpirationPage;
