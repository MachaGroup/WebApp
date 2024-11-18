import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 : part of device management 

function PatchManagementPage() {
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

      {/* Patch Management Section */}
      <main className="form-container">
        <h2>Patch Management</h2>

        <form>
          {/* Timeliness and Efficiency */}
          <h4>Timeliness and Efficiency</h4>

          <div className="form-section">
            <label>How quickly are patches and security updates applied to devices once they are released by vendors?</label>
            <div>
              <input type="text" name="patchApplicationSpeed" placeholder="Describe patch application speed after release" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there automated systems in place to regularly check for and deploy patches across all devices in the network?</label>
            <div>
              <input type="text" name="automatedSystems" placeholder="Describe automated patch deployment systems" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to ensure that critical patches are prioritized and installed without delay to mitigate security risks?</label>
            <div>
              <input type="text" name="criticalPatchPriority" placeholder="Describe processes for prioritizing critical patches" />
            </div>
          </div>

          {/* Coverage and Scope */}
          <h4>Coverage and Scope</h4>

          <div className="form-section">
            <label>Does the patch management strategy cover all operating systems, applications, and firmware used within the organization?</label>
            <div>
              <input type="text" name="coverageScope" placeholder="Describe patch coverage for all systems and software" />
            </div>
          </div>

          <div className="form-section">
            <label>How are third-party applications managed, and is there a comprehensive inventory to ensure all software is up-to-date?</label>
            <div>
              <input type="text" name="thirdPartyManagement" placeholder="Describe third-party software management" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms to ensure that both on-premises and remote devices receive necessary updates in a timely manner?</label>
            <div>
              <input type="text" name="remoteDeviceUpdates" placeholder="Describe mechanisms for updating remote devices" />
            </div>
          </div>

          {/* Testing and Validation */}
          <h4>Testing and Validation</h4>

          <div className="form-section">
            <label>Is there a procedure for testing patches in a controlled environment before deployment to ensure compatibility and prevent disruption of services?</label>
            <div>
              <input type="text" name="patchTestingProcedure" placeholder="Describe patch testing process" />
            </div>
          </div>

          <div className="form-section">
            <label>How are patches validated to confirm successful installation, and what steps are taken if a patch fails to apply correctly?</label>
            <div>
              <input type="text" name="patchValidation" placeholder="Describe patch validation and failure handling" />
            </div>
          </div>

          <div className="form-section">
            <label>Are rollback plans in place to revert changes if a patch causes unforeseen issues or incompatibility with existing systems?</label>
            <div>
              <input type="text" name="rollbackPlans" placeholder="Describe rollback procedures for patch issues" />
            </div>
          </div>

          {/* Compliance and Reporting */}
          <h4>Compliance and Reporting</h4>

          <div className="form-section">
            <label>How does the patch management process ensure compliance with regulatory requirements and industry standards, such as GDPR, HIPAA, or PCI-DSS?</label>
            <div>
              <input type="text" name="regulatoryCompliance" placeholder="Describe patch management compliance with standards" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there audit trails and reporting mechanisms that document patch status, including deployed, pending, and failed updates, for all devices?</label>
            <div>
              <input type="text" name="patchReporting" placeholder="Describe audit trails and reporting mechanisms for patch status" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are patch management reports reviewed, and who is responsible for ensuring that devices are fully patched and compliant?</label>
            <div>
              <input type="text" name="patchReportReview" placeholder="Describe patch management report review process" />
            </div>
          </div>

          {/* Security and Risk Management */}
          <h4>Security and Risk Management</h4>

          <div className="form-section">
            <label>What strategies are in place to prioritize patches based on the severity of vulnerabilities and the criticality of affected systems?</label>
            <div>
              <input type="text" name="patchPrioritization" placeholder="Describe strategies for prioritizing patches" />
            </div>
          </div>

          <div className="form-section">
            <label>How are patch management activities integrated into the broader cybersecurity strategy to address potential risks and minimize attack surfaces?</label>
            <div>
              <input type="text" name="patchIntegration" placeholder="Describe integration of patch management with cybersecurity strategy" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there procedures for handling out-of-band or emergency patches, particularly in response to zero-day vulnerabilities or active threats?</label>
            <div>
              <input type="text" name="emergencyPatches" placeholder="Describe procedures for emergency patches" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default PatchManagementPage;
