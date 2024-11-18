import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 

function FirewallPoliciesPage() {
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

      {/* Firewall Policies Section */}
      <main className="form-container">
        <h2>Firewall Policies</h2>
        <form>
          {/* Policy Definition and Scope */}
          <h3>Policy Definition and Scope</h3>

          <div className="form-section">
            <label>What criteria are used to define the firewall policies, and how do these criteria align with the organization's overall security objectives and regulatory requirements?</label>
            <div>
              <input type="text" name="policyDefinitionCriteria" placeholder="Describe criteria for defining firewall policies" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific policies in place for different types of network traffic (e.g., inbound, outbound, internal), and how are these tailored to the needs of various departments or user groups?</label>
            <div>
              <input type="text" name="trafficPolicy" placeholder="Describe policies for different types of network traffic" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are firewall policies reviewed and updated to ensure they remain effective against new threats and comply with evolving security standards?</label>
            <div>
              <input type="text" name="policyReviewFrequency" placeholder="Describe review frequency for firewall policies" />
            </div>
          </div>

          {/* Implementation and Configuration */}
          <h3>Implementation and Configuration</h3>

          <div className="form-section">
            <label>What procedures are followed to implement firewall policies, and how are these policies tested for effectiveness and security before going live?</label>
            <div>
              <input type="text" name="policyImplementationProcedures" placeholder="Describe procedures for implementing firewall policies" />
            </div>
          </div>

          <div className="form-section">
            <label>How are exceptions to standard firewall policies handled (e.g., temporary access needs, special cases), and what controls are in place to minimize risks associated with such exceptions?</label>
            <div>
              <input type="text" name="policyExceptionsHandling" placeholder="Describe exception handling and controls" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there automated tools or scripts used to manage and deploy firewall policies across different devices and network segments, and how are these tools maintained?</label>
            <div>
              <input type="text" name="automationTools" placeholder="Describe automated tools for policy deployment and management" />
            </div>
          </div>

          {/* Monitoring and Incident Response */}
          <h3>Monitoring and Incident Response</h3>

          <div className="form-section">
            <label>How is firewall activity monitored to detect and respond to unauthorized access attempts or breaches, and what metrics are used to gauge the effectiveness of firewall policies?</label>
            <div>
              <input type="text" name="firewallMonitoring" placeholder="Describe firewall activity monitoring and metrics" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there defined procedures for responding to incidents where firewall policies fail to prevent unauthorized access, including root cause analysis and policy adjustments?</label>
            <div>
              <input type="text" name="incidentResponseProcedures" placeholder="Describe incident response and policy adjustments" />
            </div>
          </div>

          <div className="form-section">
            <label>What logging and auditing mechanisms are in place to track changes to firewall policies and access attempts, and how are these logs reviewed for signs of potential threats?</label>
            <div>
              <input type="text" name="loggingAndAuditing" placeholder="Describe logging and auditing mechanisms for firewall policies" />
            </div>
          </div>

          {/* Training and Awareness */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training programs are provided to IT staff responsible for managing and configuring firewall policies, and how is their knowledge kept current with evolving security practices?</label>
            <div>
              <input type="text" name="itTrainingPrograms" placeholder="Describe training for IT staff managing firewall policies" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear documentation and guidelines available on how to apply and modify firewall policies, and how frequently is this information reviewed for accuracy?</label>
            <div>
              <input type="text" name="policyDocumentation" placeholder="Describe documentation for applying and modifying policies" />
            </div>
          </div>

          <div className="form-section">
            <label>How is awareness of firewall policy importance communicated across the organization, particularly to those whose activities may impact network security?</label>
            <div>
              <input type="text" name="awarenessCommunication" placeholder="Describe how firewall policy importance is communicated" />
            </div>
          </div>

          {/* Compliance and Best Practices */}
          <h3>Compliance and Best Practices</h3>

          <div className="form-section">
            <label>Are firewall policies aligned with industry best practices and compliance requirements (e.g., PCI-DSS, HIPAA, GDPR), and how is compliance verified?</label>
            <div>
              <input type="text" name="policyCompliance" placeholder="Describe how firewall policies align with compliance requirements" />
            </div>
          </div>

          <div className="form-section">
            <label>How are policies adapted to account for changes in network architecture, such as the addition of new devices or the implementation of cloud services?</label>
            <div>
              <input type="text" name="policyAdaptation" placeholder="Describe how firewall policies adapt to network changes" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a process for benchmarking firewall policies against peer organizations or security standards to ensure continuous improvement and adoption of best practices?</label>
            <div>
              <input type="text" name="benchmarkingProcess" placeholder="Describe process for benchmarking firewall policies" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default FirewallPoliciesPage;
