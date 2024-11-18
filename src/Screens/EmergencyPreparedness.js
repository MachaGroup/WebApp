import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// secction 9 

function EmergencyPreparednessPage() {
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

      {/* Emergency Preparedness Planning Section */}
      <main className="form-container">
        <h2>Emergency Preparedness Planning</h2>
        <form>
          {/* Emergency Response Plan Development Section */}
          <h3>Emergency Response Plan Development</h3>

          {/* Incident Command Structure */}
          <h4>Incident Command Structure</h4>

          <div className="form-section">
            <label>What specific roles and responsibilities are assigned to each member of the Emergency Response Team?</label>
            <div>
              <input type="text" name="rolesResponsibilities" placeholder="Describe roles and responsibilities of team members" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the Emergency Response Team structured to ensure effective communication during an incident?</label>
            <div>
              <input type="text" name="responseTeamStructure" placeholder="Describe the communication structure of the team" />
            </div>
          </div>

          <div className="form-section">
            <label>What training and qualifications are required for members of the Emergency Response Team?</label>
            <div>
              <input type="text" name="teamTrainingQualifications" placeholder="Describe required training and qualifications" />
            </div>
          </div>

          <div className="form-section">
            <label>How often does the Emergency Response Team participate in drills or training exercises to practice their roles?</label>
            <div>
              <input type="text" name="drillFrequency" placeholder="Enter frequency of drills or training exercises" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear protocols for how the Emergency Response Team interacts with external agencies during an emergency? If so, what are they?</label>
            <div>
              <input type="text" name="externalAgencyProtocols" placeholder="Describe protocols for interacting with external agencies" />
            </div>
          </div>

          {/* Communication Protocols */}
          <h4>Communication Protocols</h4>

          <div className="form-section">
            <label>What communication methods are established for the Emergency Response Team during an incident?</label>
            <div>
              <input type="text" name="communicationMethods" placeholder="Describe communication methods used during an incident" />
            </div>
          </div>

          <div className="form-section">
            <label>How are emergency notifications disseminated to staff, students, and parents in a crisis situation?</label>
            <div>
              <input type="text" name="notificationMethods" placeholder="Describe notification methods for staff, students, and parents" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to ensure accurate and timely communication with external agencies (e.g., police, fire department)?</label>
            <div>
              <input type="text" name="externalAgencyCommunication" placeholder="Describe procedures for communicating with external agencies" />
            </div>
          </div>

          <div className="form-section">
            <label>How is information about the incident documented and shared with relevant stakeholders after an emergency?</label>
            <div>
              <input type="text" name="incidentDocumentation" placeholder="Describe how incident information is documented and shared" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there backup communication systems in place if primary methods fail? If so, what are they?</label>
            <div>
              <input type="text" name="backupCommunicationSystems" placeholder="Describe backup communication systems" />
            </div>
          </div>

          {/* Scenario-Based Planning Section */}
          <h3>Scenario-Based Planning</h3>

          {/* Tabletop Exercises */}
          <h4>Tabletop Exercises</h4>

          <div className="form-section">
            <label>What scenarios are typically used during tabletop exercises to evaluate emergency response plans?</label>
            <div>
              <input type="text" name="tabletopScenarios" placeholder="Describe typical scenarios used in tabletop exercises" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are tabletop exercises conducted to ensure preparedness for various emergencies?</label>
            <div>
              <input type="text" name="tabletopFrequency" placeholder="Enter frequency of tabletop exercises" />
            </div>
          </div>

          <div className="form-section">
            <label>Who participates in these tabletop exercises, and what roles do they assume during the scenarios?</label>
            <div>
              <input type="text" name="tabletopParticipants" placeholder="Describe who participates and their roles during tabletop exercises" />
            </div>
          </div>

          <div className="form-section">
            <label>How are the outcomes of the tabletop exercises documented and used to improve emergency response plans?</label>
            <div>
              <input type="text" name="tabletopOutcomes" placeholder="Describe how outcomes are documented and used for improvements" />
            </div>
          </div>

          <div className="form-section">
            <label>What feedback mechanisms are in place to gather insights from participants after each tabletop exercise?</label>
            <div>
              <input type="text" name="feedbackMechanisms" placeholder="Describe feedback mechanisms for tabletop exercises" />
            </div>
          </div>

          {/* Simulated Emergency Drills */}
          <h4>Simulated Emergency Drills</h4>

          <div className="form-section">
            <label>What types of emergencies are simulated during the drills (e.g., fire, active shooter, natural disasters)?</label>
            <div>
              <input type="text" name="emergencyTypes" placeholder="Describe types of emergencies simulated during drills" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are simulated emergency drills conducted to ensure staff and student preparedness?</label>
            <div>
              <input type="text" name="drillFrequencySimulated" placeholder="Enter frequency of simulated emergency drills" />
            </div>
          </div>

          <div className="form-section">
            <label>What roles do staff and students play during these drills, and how is their participation evaluated?</label>
            <div>
              <input type="text" name="staffStudentRoles" placeholder="Describe roles of staff and students during drills" />
            </div>
          </div>

          <div className="form-section">
            <label>How are the results of the simulated drills analyzed to identify areas for improvement in emergency response?</label>
            <div>
              <input type="text" name="drillResultsAnalysis" placeholder="Describe how drill results are analyzed for improvements" />
            </div>
          </div>

          <div className="form-section">
            <label>What changes or updates have been made to emergency plans as a result of insights gained from previous drills?</label>
            <div>
              <input type="text" name="planUpdates" placeholder="Describe any changes made to emergency plans based on drills" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default EmergencyPreparednessPage;
