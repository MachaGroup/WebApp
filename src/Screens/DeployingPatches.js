import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6.4.2.2.2

function DeployingPatchesPage() {
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

      {/* Deploying Patches Section */}
      <main className="form-container">
        <h2>Deploying Patches</h2>
        <form>
          {/* Patch Identification Section */}
          <h3>Patch Identification</h3>

          <div className="form-section">
            <label>How are security patches identified and prioritized for deployment (e.g., based on vulnerability severity, threat intelligence)?</label>
            <div>
              <input type="text" name="patchIdentification" placeholder="Describe patch identification and prioritization process" />
            </div>
          </div>

          <div className="form-section">
            <label>What sources are used to stay informed about available patches and updates (e.g., vendor notifications, security advisories)?</label>
            <div>
              <input type="text" name="patchSources" placeholder="Describe sources for patch information" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific criteria for determining which patches are critical and need immediate attention?</label>
            <div>
              <input type="text" name="criticalPatches" placeholder="Describe criteria for critical patches" />
            </div>
          </div>

          {/* Patch Deployment Process Section */}
          <h3>Patch Deployment Process</h3>

          <div className="form-section">
            <label>What procedures are followed for deploying patches across different systems and applications (e.g., automated tools, manual installation)?</label>
            <div>
              <input type="text" name="deploymentProcedures" placeholder="Describe patch deployment procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the patch deployment process managed to ensure minimal disruption to operations (e.g., scheduling during off-hours, testing)?</label>
            <div>
              <input type="text" name="deploymentManagement" placeholder="Describe how deployment process minimizes disruption" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there predefined steps for rolling out patches to production environments and handling any potential conflicts or issues?</label>
            <div>
              <input type="text" name="deploymentSteps" placeholder="Describe predefined steps for patch deployment" />
            </div>
          </div>

          {/* Testing and Validation Section */}
          <h3>Testing and Validation</h3>

          <div className="form-section">
            <label>What testing is conducted to validate that patches do not negatively impact system functionality or performance (e.g., staging environment testing)?</label>
            <div>
              <input type="text" name="testingValidation" placeholder="Describe testing for patch validation" />
            </div>
          </div>

          <div className="form-section">
            <label>How are potential risks associated with patch deployment assessed and mitigated before applying patches to live systems?</label>
            <div>
              <input type="text" name="riskAssessment" placeholder="Describe risk assessment before patch deployment" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for verifying that patches have been successfully applied and are functioning as intended?</label>
            <div>
              <input type="text" name="patchVerification" placeholder="Describe patch verification procedures" />
            </div>
          </div>

          {/* Patch Documentation Section */}
          <h3>Patch Documentation</h3>

          <div className="form-section">
            <label>How is the patch management process documented, including details on applied patches, affected systems, and deployment schedules?</label>
            <div>
              <input type="text" name="patchManagementDocumentation" placeholder="Describe documentation for patch management process" />
            </div>
          </div>

          <div className="form-section">
            <label>What information is included in documentation to track patch history and compliance (e.g., patch release notes, deployment logs)?</label>
            <div>
              <input type="text" name="patchHistory" placeholder="Describe patch history tracking" />
            </div>
          </div>

          <div className="form-section">
            <label>How is documentation used for auditing and reviewing the effectiveness of patch management practices?</label>
            <div>
              <input type="text" name="patchAudit" placeholder="Describe patch auditing and effectiveness review" />
            </div>
          </div>

          {/* Compliance and Reporting Section */}
          <h3>Compliance and Reporting</h3>

          <div className="form-section">
            <label>What reporting mechanisms are in place to track the status of patch deployments and ensure compliance with internal policies and regulatory requirements?</label>
            <div>
              <input type="text" name="reportingMechanisms" placeholder="Describe reporting mechanisms for patch compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>How are reports generated and reviewed to identify any gaps or delays in patch management?</label>
            <div>
              <input type="text" name="gapIdentification" placeholder="Describe report generation and review process" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there established procedures for reporting and addressing any issues or failures encountered during patch deployment?</label>
            <div>
              <input type="text" name="deploymentIssues" placeholder="Describe procedures for handling deployment issues" />
            </div>
          </div>

          {/* Patch Management Tools Section */}
          <h3>Patch Management Tools</h3>

          <div className="form-section">
            <label>What tools or software are used to automate and manage the patching process (e.g., patch management systems, configuration management tools)?</label>
            <div>
              <input type="text" name="patchManagementTools" placeholder="Describe tools used for patch management" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these tools configured and maintained to ensure they are effective in managing and deploying patches?</label>
            <div>
              <input type="text" name="toolMaintenance" placeholder="Describe tool maintenance and configuration" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any integration requirements with existing IT infrastructure and security systems?</label>
            <div>
              <input type="text" name="integrationRequirements" placeholder="Describe integration with IT infrastructure" />
            </div>
          </div>

          {/* Patch Rollback Procedures Section */}
          <h3>Patch Rollback Procedures</h3>

          <div className="form-section">
            <label>What procedures are in place for rolling back patches if they cause issues or do not function as expected (e.g., restoring from backups, uninstalling patches)?</label>
            <div>
              <input type="text" name="rollbackProcedures" placeholder="Describe patch rollback procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the decision made to roll back a patch, and what criteria are used to assess the need for rollback?</label>
            <div>
              <input type="text" name="rollbackDecision" placeholder="Describe criteria for rolling back a patch" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are followed to communicate and address any issues caused by patch rollbacks?</label>
            <div>
              <input type="text" name="rollbackCommunication" placeholder="Describe communication process for rollback issues" />
            </div>
          </div>

          {/* Patch Management Policy Section */}
          <h3>Patch Management Policy</h3>

          <div className="form-section">
            <label>What policies are established to govern the patch management process (e.g., patch frequency, roles and responsibilities)?</label>
            <div>
              <input type="text" name="patchPolicies" placeholder="Describe patch management policies" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these policies communicated to relevant stakeholders, and how is compliance enforced?</label>
            <div>
              <input type="text" name="policyCommunication" placeholder="Describe communication of patch policies" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there periodic reviews of the patch management policy to ensure it remains effective and up-to-date?</label>
            <div>
              <input type="text" name="policyReviews" placeholder="Describe periodic reviews of patch management policy" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to IT staff and relevant personnel on patch management procedures and best practices?</label>
            <div>
              <input type="text" name="trainingProvided" placeholder="Describe training provided on patch management" />
            </div>
          </div>

          <div className="form-section">
            <label>How is staff awareness of the importance of patch management and its role in cybersecurity ensured?</label>
            <div>
              <input type="text" name="staffAwareness" placeholder="Describe staff awareness of patch management" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular updates or refresher training sessions to keep staff informed about new patch management tools or techniques?</label>
            <div>
              <input type="text" name="refresherTraining" placeholder="Describe refresher training on patch management" />
            </div>
          </div>

          {/* Incident Response Integration Section */}
          <h3>Incident Response Integration</h3>

          <div className="form-section">
            <label>How is patch management integrated with the overall incident response process (e.g., addressing vulnerabilities identified during incidents)?</label>
            <div>
              <input type="text" name="incidentResponseIntegration" placeholder="Describe patch management integration with incident response" />
            </div>
          </div>

          <div className="form-section">
            <label>What role does patch management play in the incident response and recovery phases?</label>
            <div>
              <input type="text" name="patchRoleInResponse" placeholder="Describe role of patch management in incident response" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there protocols for quickly deploying patches in response to identified security incidents or vulnerabilities?</label>
            <div>
              <input type="text" name="patchDeploymentProtocols" placeholder="Describe protocols for deploying patches during incidents" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('deployingPatches')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default DeployingPatchesPage;
