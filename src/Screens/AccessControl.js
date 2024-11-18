import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 

function AccessControlPage() {
  const handleButtonClick = (section) => {
    console.log(`Button clicked for: ${section}`);
    // Add logic for handling button click, like opening a modal or navigating
  };

  return (
    <div className="form-page">
      {/* Header Section */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>←</button> {/* Go back button */}
        <h1>The MACHA Group</h1>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Access Control Lists Section */}
      <main className="form-container">
        <h2>Access Control Lists (ACLs)</h2>
        <form>
          {/* Definition and Purpose */}
          <h3>Definition and Purpose</h3>

          <div className="form-section">
            <label>What criteria are used to define Access Control Lists (ACLs) within the firewall, and how are these criteria determined based on the organization's security policy?</label>
            <div>
              <input type="text" name="aclDefinitionCriteria" placeholder="Describe ACL definition criteria based on security policy" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the firewall utilize ACLs to differentiate between authorized and unauthorized network traffic, and what are the default settings for incoming and outgoing traffic?</label>
            <div>
              <input type="text" name="aclTrafficDifferentiation" placeholder="Describe how ACLs differentiate network traffic" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific guidelines or protocols in place for creating and updating ACLs to ensure they are aligned with the latest security standards and organizational needs?</label>
            <div>
              <input type="text" name="aclGuidelines" placeholder="Describe guidelines for creating and updating ACLs" />
            </div>
          </div>

          {/* Configuration and Implementation */}
          <h3>Configuration and Implementation</h3>

          <div className="form-section">
            <label>How frequently are ACLs reviewed and updated to reflect changes in network architecture, user roles, or emerging security threats?</label>
            <div>
              <input type="text" name="aclReviewFrequency" placeholder="Describe review frequency for ACLs" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to test and validate the effectiveness of ACL configurations before they are implemented in a live environment?</label>
            <div>
              <input type="text" name="aclTestingProcess" placeholder="Describe testing process for ACLs" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there automated tools or systems in place to assist with the management and deployment of ACLs across multiple firewall devices within the organization?</label>
            <div>
              <input type="text" name="aclAutomationTools" placeholder="Describe automated tools for ACL management" />
            </div>
          </div>

          {/* Monitoring and Auditing */}
          <h3>Monitoring and Auditing</h3>

          <div className="form-section">
            <label>How is the network traffic monitored to ensure ACLs are functioning as intended, and what metrics are used to evaluate their effectiveness?</label>
            <div>
              <input type="text" name="aclTrafficMonitoring" placeholder="Describe monitoring and metrics for ACLs" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular audits conducted on ACLs to identify any misconfigurations, redundant rules, or outdated entries that could potentially expose the network to risk?</label>
            <div>
              <input type="text" name="aclAudits" placeholder="Describe ACL audit process" />
            </div>
          </div>

          <div className="form-section">
            <label>How are incidents involving unauthorized access or ACL breaches documented, and what corrective actions are taken to prevent similar occurrences in the future?</label>
            <div>
              <input type="text" name="aclBreachDocumentation" placeholder="Describe documentation and corrective actions for ACL breaches" />
            </div>
          </div>

          {/* Training and Awareness */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training programs are provided to IT staff to ensure they have the knowledge and skills necessary to configure and manage ACLs effectively?</label>
            <div>
              <input type="text" name="aclTrainingPrograms" placeholder="Describe training for ACL management" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear documentation and guidelines available for staff responsible for maintaining ACLs, and how is this information kept up-to-date?</label>
            <div>
              <input type="text" name="aclDocumentation" placeholder="Describe ACL documentation and maintenance guidelines" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness about the importance of proper ACL management promoted across the organization, especially among those who have access to critical network resources?</label>
            <div>
              <input type="text" name="aclAwareness" placeholder="Describe awareness programs for ACL management" />
            </div>
          </div>

          {/* Adaptability and Scalability */}
          <h3>Adaptability and Scalability</h3>

          <div className="form-section">
            <label>How do ACLs adapt to accommodate new devices, applications, or users added to the network, and is there a process for dynamically updating ACLs in response to these changes?</label>
            <div>
              <input type="text" name="aclAdaptability" placeholder="Describe how ACLs adapt to changes in the network" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there strategies in place to scale ACL configurations in larger, more complex network environments without compromising security or performance?</label>
            <div>
              <input type="text" name="aclScalability" placeholder="Describe strategies for scaling ACLs in large networks" />
            </div>
          </div>

          <div className="form-section">
            <label>How are ACLs integrated with other network security measures, such as intrusion detection systems (IDS) or security information and event management (SIEM) systems, to provide a comprehensive security posture?</label>
            <div>
              <input type="text" name="aclIntegration" placeholder="Describe how ACLs integrate with other security measures" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default AccessControlPage;
