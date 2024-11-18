import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 9 

function CrisisManagementPage() {
  const handleButtonClick = (section) => {
    console.log(`Button clicked for: ${section}`);
    // Add logic for handling button click, like opening a modal or navigating
  };

  return (
    <div className="form-page">
      {/* Header Section */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>←</button> {/* Use window.history.back for navigation */}
        <h1>The MACHA Group</h1>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Crisis Management Procedures Section */}
      <main className="form-container">
        <h2>Crisis Management Procedures</h2>
        <form>
          {/* Crisis Communication Plan Section */}
          <h3>Crisis Communication Plan</h3>

          {/* Internal Communication Protocols */}
          <h4>Internal Communication Protocols</h4>

          <div className="form-section">
            <label>What methods are used to communicate critical information to staff during a crisis (e.g., email, text alerts, PA system)?</label>
            <div>
              <input type="text" name="communicationMethods" placeholder="Describe methods for internal communication during a crisis" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the effectiveness of internal communication assessed during a crisis situation?</label>
            <div>
              <input type="text" name="internalCommunicationEffectiveness" placeholder="Describe how effectiveness is assessed" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there designated spokespersons for internal communications, and how are they selected?</label>
            <div>
              <input type="text" name="spokespersonsSelection" placeholder="Describe spokespersons and selection process" />
            </div>
          </div>

          <div className="form-section">
            <label>How is information about the crisis prioritized and disseminated to ensure all staff members are informed in a timely manner?</label>
            <div>
              <input type="text" name="informationPrioritization" placeholder="Describe prioritization and dissemination methods" />
            </div>
          </div>

          <div className="form-section">
            <label>What training do staff members receive to prepare them for communicating effectively during a crisis?</label>
            <div>
              <input type="text" name="staffTraining" placeholder="Describe staff training for crisis communication" />
            </div>
          </div>

          {/* External Communication Protocols */}
          <h4>External Communication Protocols (e.g., with parents, media)</h4>

          <div className="form-section">
            <label>What channels are utilized for communicating with parents and guardians during a crisis (e.g., phone calls, emails, social media)?</label>
            <div>
              <input type="text" name="parentCommunicationChannels" placeholder="Describe channels for communicating with parents" />
            </div>
          </div>

          <div className="form-section">
            <label>How is information shared with the media to ensure accurate reporting during a crisis situation?</label>
            <div>
              <input type="text" name="mediaCommunication" placeholder="Describe methods for sharing accurate information with the media" />
            </div>
          </div>

          <div className="form-section">
            <label>What guidelines are in place to protect student and staff privacy when communicating externally during a crisis?</label>
            <div>
              <input type="text" name="privacyGuidelines" placeholder="Describe privacy guidelines for external communications" />
            </div>
          </div>

          <div className="form-section">
            <label>How are updates regarding the crisis communicated to the community, and how frequently are these updates provided?</label>
            <div>
              <input type="text" name="communityUpdates" placeholder="Describe methods and frequency of crisis updates to the community" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for managing external communications, and what training or resources do they have to handle media inquiries effectively?</label>
            <div>
              <input type="text" name="externalCommManager" placeholder="Describe the person responsible and their resources" />
            </div>
          </div>

          {/* Continuity of Operations Plan (COOP) Section */}
          <h3>Continuity of Operations Plan (COOP)</h3>

          {/* Critical Function Identification */}
          <h4>Critical Function Identification</h4>

          <div className="form-section">
            <label>What criteria are used to determine which functions are considered critical to the operation of the school during an emergency?</label>
            <div>
              <input type="text" name="criticalFunctionCriteria" placeholder="Describe criteria for determining critical functions" />
            </div>
          </div>

          <div className="form-section">
            <label>How are essential staff and their roles identified for maintaining critical functions during a disruption?</label>
            <div>
              <input type="text" name="essentialStaffIdentification" placeholder="Describe how essential staff roles are identified" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to ensure that critical functions can be sustained during a crisis or emergency situation?</label>
            <div>
              <input type="text" name="sustainingCriticalFunctions" placeholder="Describe processes to sustain critical functions during a crisis" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are the critical functions reviewed and updated to reflect changes in school operations or community needs?</label>
            <div>
              <input type="text" name="criticalFunctionReviewFrequency" placeholder="Describe frequency of critical function reviews" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific resources allocated to support the continuity of critical functions, and how are these resources monitored and managed?</label>
            <div>
              <input type="text" name="resourceManagement" placeholder="Describe resources allocated and how they are monitored" />
            </div>
          </div>

          {/* Backup Systems and Redundancies */}
          <h4>Backup Systems and Redundancies</h4>

          <div className="form-section">
            <label>What types of backup systems are in place to ensure data integrity and availability during an emergency?</label>
            <div>
              <input type="text" name="backupSystems" placeholder="Describe backup systems for data integrity" />
            </div>
          </div>

          <div className="form-section">
            <label>How are redundancies established to maintain critical operations when primary systems fail?</label>
            <div>
              <input type="text" name="redundancySystems" placeholder="Describe redundancy systems in place for critical operations" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are followed to test and validate the effectiveness of backup systems and redundancies?</label>
            <div>
              <input type="text" name="backupTesting" placeholder="Describe testing procedures for backup systems" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are backup systems updated to reflect the latest data and operational changes?</label>
            <div>
              <input type="text" name="backupSystemUpdates" placeholder="Describe how often backup systems are updated" />
            </div>
          </div>

          <div className="form-section">
            <label>What training is provided to staff regarding the use of backup systems and understanding redundancies in place?</label>
            <div>
              <input type="text" name="staffTrainingBackup" placeholder="Describe staff training for backup systems and redundancies" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default CrisisManagementPage;
