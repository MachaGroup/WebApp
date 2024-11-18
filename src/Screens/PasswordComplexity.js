import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6

function PasswordComplexityPage() {
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

      {/* Password Complexity Requirements Section */}
      <main className="form-container">
        <h2>Password Complexity Requirements</h2>
        <form>
          {/* Policy Comprehension and Awareness Section */}
          <h3>Policy Comprehension and Awareness</h3>

          <div className="form-section">
            <label>Are all employees aware of the organization's password complexity requirements, including the minimum length and the use of special characters?</label>
            <div>
              <input type="text" name="policyAwareness" placeholder="Describe awareness of policy" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are employees reminded of the password complexity policy, and through what channels (e.g., email, training sessions, policy documents)?</label>
            <div>
              <input type="text" name="reminderFrequency" placeholder="Describe reminder frequency and channels" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there educational materials or training sessions provided to help employees understand the importance of using complex passwords?</label>
            <div>
              <input type="text" name="trainingMaterials" placeholder="Describe educational materials provided" />
            </div>
          </div>

          {/* Effectiveness and Compliance Section */}
          <h3>Effectiveness and Compliance</h3>

          <div className="form-section">
            <label>What measures are in place to enforce compliance with password complexity requirements across all systems and applications?</label>
            <div>
              <input type="text" name="enforcementMeasures" placeholder="Describe enforcement measures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with password complexity requirements monitored and reported?</label>
            <div>
              <input type="text" name="complianceMonitoring" placeholder="Describe monitoring and reporting processes" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits or checks to ensure that employees are adhering to password complexity guidelines?</label>
            <div>
              <input type="text" name="regularAudits" placeholder="Describe audit procedures" />
            </div>
          </div>

          {/* Impact on Security Section */}
          <h3>Impact on Security</h3>

          <div className="form-section">
            <label>How does the organization evaluate the effectiveness of password complexity requirements in preventing unauthorized access or breaches?</label>
            <div>
              <input type="text" name="effectivenessEvaluation" placeholder="Describe evaluation of effectiveness" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any documented incidents where weak passwords, despite the policy, led to security breaches? If so, what actions were taken to address the gaps?</label>
            <div>
              <input type="text" name="weakPasswordIncidents" placeholder="Describe any incidents and corrective actions" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently does the organization review and update its password complexity requirements to respond to emerging security threats?</label>
            <div>
              <input type="text" name="reviewFrequency" placeholder="Describe review and update frequency" />
            </div>
          </div>

          {/* User Experience and Accessibility Section */}
          <h3>User Experience and Accessibility</h3>

          <div className="form-section">
            <label>Are the password complexity requirements user-friendly, or do they lead to difficulties in remembering passwords or frequent reset requests?</label>
            <div>
              <input type="text" name="userFriendly" placeholder="Describe user-friendliness of requirements" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization balance strong password complexity with usability to avoid negative impacts on employee productivity?</label>
            <div>
              <input type="text" name="usabilityBalance" placeholder="Describe the balance between security and usability" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there guidelines or tools provided to help employees create and remember complex passwords (e.g., password managers, mnemonic techniques)?</label>
            <div>
              <input type="text" name="guidelinesAndTools" placeholder="Describe tools or guidelines provided" />
            </div>
          </div>

          {/* Integration with Other Security Measures Section */}
          <h3>Integration with Other Security Measures</h3>

          <div className="form-section">
            <label>How do password complexity requirements integrate with other security measures, such as two-factor authentication (2FA) or single sign-on (SSO)?</label>
            <div>
              <input type="text" name="integrationWithOtherMeasures" placeholder="Describe integration with other security measures" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific guidelines for password complexity when used in conjunction with other authentication methods to enhance overall security?</label>
            <div>
              <input type="text" name="guidelinesWithOtherMethods" placeholder="Describe guidelines for combined security methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Does the organization encourage or require the use of passphrases (longer sequences of words) in addition to traditional complex passwords?</label>
            <div>
              <input type="text" name="passphrasesEncouraged" placeholder="Describe encouragement or requirement of passphrases" />
            </div>
          </div>

          {/* Feedback and Continuous Improvement Section */}
          <h3>Feedback and Continuous Improvement</h3>

          <div className="form-section">
            <label>Is there a process for employees to provide feedback on the password complexity requirements, particularly if they encounter issues?</label>
            <div>
              <input type="text" name="feedbackProcess" placeholder="Describe feedback process" />
            </div>
          </div>

          <div className="form-section">
            <label>How is employee feedback used to adjust password policies to better meet security needs without creating undue burden?</label>
            <div>
              <input type="text" name="feedbackAdjustment" placeholder="Describe how feedback is used for adjustments" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there periodic reviews of the password complexity policy to ensure it remains effective against evolving cyber threats?</label>
            <div>
              <input type="text" name="policyReviews" placeholder="Describe periodic policy reviews" />
            </div>
          </div>

          {/* Training and Support Section */}
          <h3>Training and Support</h3>

          <div className="form-section">
            <label>Are employees provided with training on how to create strong, memorable passwords that meet complexity requirements?</label>
            <div>
              <input type="text" name="trainingOnPasswords" placeholder="Describe training on password creation" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the organization support employees in transitioning to more complex passwords (e.g., phased implementation, support from IT)?</label>
            <div>
              <input type="text" name="transitionSupport" placeholder="Describe support provided during transition" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources available for employees who need assistance or have questions about creating or managing complex passwords?</label>
            <div>
              <input type="text" name="resourcesForAssistance" placeholder="Describe available resources" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('passwordComplexity')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default PasswordComplexityPage;
