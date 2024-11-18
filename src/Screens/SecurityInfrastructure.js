import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 9 

function SecurityInfrastructurePage() {
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

      {/* Security Infrastructure Enhancement Section */}
      <main className="form-container">
        <h2>Security Infrastructure Enhancement</h2>
        <form>
          {/* Access Control Systems */}
          <h3>Access Control Systems</h3>

          <h4>Keycard Access Systems</h4>
          <div className="form-section">
            <label>What criteria are used to determine who is issued keycards for access to school facilities?</label>
            <div>
              <input type="text" name="keycardCriteria" placeholder="Describe criteria for keycard issuance" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the keycard access system monitored for unauthorized access attempts?</label>
            <div>
              <input type="text" name="keycardMonitoring" placeholder="Describe monitoring processes" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for deactivating keycards when an employee leaves the school or changes roles?</label>
            <div>
              <input type="text" name="keycardDeactivation" placeholder="Describe deactivation procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently is the keycard access system reviewed for effectiveness and potential vulnerabilities?</label>
            <div>
              <input type="text" name="keycardReview" placeholder="Describe frequency of reviews" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there contingency plans for situations where keycards fail or are lost, and how are these communicated to staff?</label>
            <div>
              <input type="text" name="keycardContingency" placeholder="Describe contingency plans" />
            </div>
          </div>

          {/* Biometric Access Control Systems */}
          <h4>Biometric Access Control Systems</h4>
          <div className="form-section">
            <label>What types of biometric data are collected (e.g., fingerprints, facial recognition) for access control?</label>
            <div>
              <input type="text" name="biometricDataTypes" placeholder="Describe types of biometric data" />
            </div>
          </div>

          <div className="form-section">
            <label>How is biometric data stored and protected to ensure privacy and compliance with regulations?</label>
            <div>
              <input type="text" name="biometricDataProtection" placeholder="Describe storage and protection measures" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for handling false rejections or errors in biometric access?</label>
            <div>
              <input type="text" name="biometricErrors" placeholder="Describe procedures for handling errors" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently is the biometric access control system evaluated for accuracy and reliability?</label>
            <div>
              <input type="text" name="biometricEvaluation" placeholder="Describe evaluation frequency" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there alternative access methods available for individuals who cannot use the biometric system?</label>
            <div>
              <input type="text" name="alternativeAccess" placeholder="Describe alternative access methods" />
            </div>
          </div>

          {/* Surveillance Systems */}
          <h3>Surveillance Systems</h3>

          <h4>CCTV Camera Installation and Monitoring</h4>
          <div className="form-section">
            <label>What criteria are used to determine the placement of CCTV cameras throughout the facility?</label>
            <div>
              <input type="text" name="cctvPlacementCriteria" placeholder="Describe placement criteria for CCTV cameras" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the footage from CCTV cameras monitored, and who is responsible for monitoring?</label>
            <div>
              <input type="text" name="cctvMonitoring" placeholder="Describe monitoring processes" />
            </div>
          </div>

          <div className="form-section">
            <label>What is the retention period for recorded footage, and how is it securely stored?</label>
            <div>
              <input type="text" name="cctvRetention" placeholder="Describe retention period and storage practices" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there policies in place regarding the access and review of recorded footage by authorized personnel?</label>
            <div>
              <input type="text" name="cctvAccessPolicy" placeholder="Describe policies for accessing CCTV footage" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is the CCTV system evaluated for effectiveness and updated as needed?</label>
            <div>
              <input type="text" name="cctvSystemEvaluation" placeholder="Describe evaluation and update frequency" />
            </div>
          </div>

          {/* Intrusion Detection Systems */}
          <h4>Intrusion Detection Systems</h4>
          <div className="form-section">
            <label>What types of intrusion detection systems are currently in place (e.g., motion sensors, glass break detectors)?</label>
            <div>
              <input type="text" name="intrusionSystemTypes" placeholder="Describe types of intrusion detection systems" />
            </div>
          </div>

          <div className="form-section">
            <label>How are alerts generated and communicated when a potential intrusion is detected?</label>
            <div>
              <input type="text" name="intrusionAlertCommunication" placeholder="Describe alert generation and communication" />
            </div>
          </div>

          <div className="form-section">
            <label>What protocols are followed in response to alerts from the intrusion detection system?</label>
            <div>
              <input type="text" name="intrusionResponseProtocol" placeholder="Describe response protocols for intrusion alerts" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are the intrusion detection systems tested for functionality and reliability?</label>
            <div>
              <input type="text" name="intrusionSystemTesting" placeholder="Describe testing frequency for intrusion detection systems" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular reviews of incidents detected by the system to assess security effectiveness and improve procedures?</label>
            <div>
              <input type="text" name="incidentReview" placeholder="Describe incident reviews and improvements" />
            </div>
          </div>

          {/* Perimeter Security Fencing */}
          <h4>Perimeter Security Fencing</h4>
          <div className="form-section">
            <label>What type of fencing is used to secure the perimeter of the property (e.g., chain link, barbed wire)?</label>
            <div>
              <input type="text" name="fencingType" placeholder="Describe type of perimeter fencing used" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is the perimeter security fencing inspected for damage or breaches?</label>
            <div>
              <input type="text" name="fencingInspection" placeholder="Describe inspection frequency and procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to enhance the effectiveness of perimeter fencing (e.g., alarms, motion sensors)?</label>
            <div>
              <input type="text" name="fencingEnhancement" placeholder="Describe measures to enhance perimeter fencing" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear protocols for addressing breaches or vulnerabilities in the perimeter security?</label>
            <div>
              <input type="text" name="fencingBreachProtocol" placeholder="Describe protocols for fencing breaches" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the design of the perimeter fencing contribute to the overall security strategy of the facility?</label>
            <div>
              <input type="text" name="fencingDesign" placeholder="Describe the contribution of fencing to security strategy" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default SecurityInfrastructurePage;
