import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6.4.2.2.1

function IsolationProceduresPage() {
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

      {/* Isolation Procedures Section */}
      <main className="form-container">
        <h2>Isolation Procedures</h2>
        <form>
          {/* Isolation Strategy Section */}
          <h3>Isolation Strategy</h3>

          <div className="form-section">
            <label>What criteria are used to determine which systems or components should be isolated during an incident (e.g., severity, type of threat)?</label>
            <div>
              <input type="text" name="isolationCriteria" placeholder="Describe criteria for isolation decision" />
            </div>
          </div>

          <div className="form-section">
            <label>How are decisions made regarding the scope and extent of isolation to balance containment with operational impact?</label>
            <div>
              <input type="text" name="isolationDecision" placeholder="Describe decision-making process for isolation" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there predefined protocols for isolating different types of systems (e.g., network devices, servers, endpoints)?</label>
            <div>
              <input type="text" name="isolationProtocols" placeholder="Describe predefined protocols for isolation" />
            </div>
          </div>

          {/* Isolation Methods Section */}
          <h3>Isolation Methods</h3>

          <div className="form-section">
            <label>What specific methods or technologies are employed to isolate affected systems (e.g., network segmentation, disabling network interfaces)?</label>
            <div>
              <input type="text" name="isolationMethods" placeholder="Describe methods and technologies used" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these methods implemented to ensure effective containment while minimizing disruption to unaffected systems?</label>
            <div>
              <input type="text" name="methodImplementation" placeholder="Describe implementation of isolation methods" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there automated tools or processes in place to assist with isolation, and how are they managed?</label>
            <div>
              <input type="text" name="automatedTools" placeholder="Describe automated tools for isolation" />
            </div>
          </div>

          {/* Communication During Isolation Section */}
          <h3>Communication During Isolation</h3>

          <div className="form-section">
            <label>How is communication managed between the incident response team and other stakeholders during the isolation process (e.g., IT staff, management)?</label>
            <div>
              <input type="text" name="communicationDuringIsolation" placeholder="Describe communication during isolation" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are followed to ensure that isolation actions are documented and communicated clearly?</label>
            <div>
              <input type="text" name="documentationProcedures" placeholder="Describe documentation procedures during isolation" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there established channels for reporting the status of isolation and any issues encountered?</label>
            <div>
              <input type="text" name="reportingChannels" placeholder="Describe channels for reporting isolation status" />
            </div>
          </div>

          {/* Isolation Verification Section */}
          <h3>Isolation Verification</h3>

          <div className="form-section">
            <label>How is it verified that affected systems have been successfully isolated and are no longer communicating with the rest of the network?</label>
            <div>
              <input type="text" name="isolationVerification" placeholder="Describe verification methods for isolation" />
            </div>
          </div>

          <div className="form-section">
            <label>What methods are used to test and confirm the effectiveness of the isolation procedures (e.g., network traffic monitoring, system scans)?</label>
            <div>
              <input type="text" name="testingMethods" placeholder="Describe methods for testing isolation effectiveness" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific criteria or benchmarks for determining the success of isolation efforts?</label>
            <div>
              <input type="text" name="isolationBenchmarks" placeholder="Describe criteria for determining success of isolation" />
            </div>
          </div>

          {/* Impact Assessment Section */}
          <h3>Impact Assessment</h3>

          <div className="form-section">
            <label>How is the impact of isolation on business operations assessed (e.g., operational downtime, disruption to services)?</label>
            <div>
              <input type="text" name="impactAssessment" placeholder="Describe impact assessment methods" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are taken to minimize the impact on critical business functions while ensuring effective containment?</label>
            <div>
              <input type="text" name="minimizingImpact" placeholder="Describe measures to minimize operational impact" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there contingency plans in place to address any significant operational issues caused by isolation?</label>
            <div>
              <input type="text" name="contingencyPlans" placeholder="Describe contingency plans for operational issues" />
            </div>
          </div>

          {/* Recovery and Reconnection Section */}
          <h3>Recovery and Reconnection</h3>

          <div className="form-section">
            <label>What procedures are followed for the recovery and reconnection of isolated systems once the threat has been mitigated (e.g., system cleaning, patching)?</label>
            <div>
              <input type="text" name="recoveryProcedures" placeholder="Describe procedures for system recovery and reconnection" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the integrity of systems verified before they are reconnected to the network (e.g., thorough scans, verification checks)?</label>
            <div>
              <input type="text" name="systemIntegrityVerification" placeholder="Describe verification methods for system integrity" />
            </div>
          </div>

          <div className="form-section">
            <label>What protocols are in place to ensure that reconnection does not reintroduce the threat into the environment?</label>
            <div>
              <input type="text" name="reconnectionProtocols" placeholder="Describe protocols to prevent reintroduction of threats" />
            </div>
          </div>

          {/* Documentation and Reporting Section */}
          <h3>Documentation and Reporting</h3>

          <div className="form-section">
            <label>How are isolation actions documented, including details on the systems affected, methods used, and any issues encountered?</label>
            <div>
              <input type="text" name="isolationDocumentation" placeholder="Describe documentation for isolation actions" />
            </div>
          </div>

          <div className="form-section">
            <label>What reporting requirements are established for documenting the isolation process and its outcomes?</label>
            <div>
              <input type="text" name="isolationReporting" placeholder="Describe reporting requirements for isolation" />
            </div>
          </div>

          <div className="form-section">
            <label>How is this documentation used to review and improve isolation procedures for future incidents?</label>
            <div>
              <input type="text" name="reviewAndImprovement" placeholder="Describe use of documentation for future improvements" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('isolationProcedures')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default IsolationProceduresPage;
