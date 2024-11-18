import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6.4.1.1

function IncidentResponseTeamPage() {
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

      {/* Incident Response Team Roles and Responsibilities Section */}
      <main className="form-container">
        <h2>Incident Response Team Roles and Responsibilities</h2>
        <form>
          {/* Role Definition Section */}
          <h3>Role Definition</h3>

          <div className="form-section">
            <label>What specific roles are defined within the incident response team (e.g., Incident Commander, Lead Analyst, Communications Coordinator)?</label>
            <div>
              <input type="text" name="roleDefinition" placeholder="Describe specific roles in the incident response team" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these roles determined and assigned based on the team's expertise and the organization's needs?</label>
            <div>
              <input type="text" name="roleAssignment" placeholder="Describe how roles are assigned based on expertise" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there clear descriptions of responsibilities for each role to ensure effective incident management?</label>
            <div>
              <input type="text" name="roleResponsibilities" placeholder="Describe clear role responsibilities for effective management" />
            </div>
          </div>

          {/* Role Training and Certification Section */}
          <h3>Role Training and Certification</h3>

          <div className="form-section">
            <label>What training or certification requirements are established for each role within the incident response team?</label>
            <div>
              <input type="text" name="roleTraining" placeholder="Describe training and certification requirements for each role" />
            </div>
          </div>

          <div className="form-section">
            <label>How is ongoing training provided to keep team members updated on the latest incident response practices and technologies?</label>
            <div>
              <input type="text" name="ongoingTraining" placeholder="Describe ongoing training process for team members" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there periodic evaluations or drills to assess the team's preparedness and proficiency in their roles?</label>
            <div>
              <input type="text" name="evaluationsDrills" placeholder="Describe evaluations and drills for team preparedness" />
            </div>
          </div>

          {/* Incident Handling Procedures Section */}
          <h3>Incident Handling Procedures</h3>

          <div className="form-section">
            <label>What procedures are outlined for each role during different phases of an incident (e.g., detection, containment, eradication, recovery)?</label>
            <div>
              <input type="text" name="incidentProcedures" placeholder="Describe procedures for each role during incident phases" />
            </div>
          </div>

          <div className="form-section">
            <label>How are roles coordinated to ensure a seamless response, including communication and decision-making processes?</label>
            <div>
              <input type="text" name="roleCoordination" placeholder="Describe coordination between roles during response" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there predefined checklists or guidelines to assist team members in fulfilling their responsibilities during an incident?</label>
            <div>
              <input type="text" name="checklistsGuidelines" placeholder="Describe predefined checklists or guidelines for team roles" />
            </div>
          </div>

          {/* Coordination and Communication Section */}
          <h3>Coordination and Communication</h3>

          <div className="form-section">
            <label>How is communication managed among team members during an incident, and what tools or systems are used (e.g., secure messaging platforms)?</label>
            <div>
              <input type="text" name="communicationTools" placeholder="Describe communication tools used among team members" />
            </div>
          </div>

          <div className="form-section">
            <label>What protocols are in place to ensure effective coordination between roles and timely information sharing?</label>
            <div>
              <input type="text" name="coordinationProtocols" placeholder="Describe protocols for role coordination and information sharing" />
            </div>
          </div>

          <div className="form-section">
            <label>How are external communications handled, including interactions with stakeholders, regulatory bodies, or the public?</label>
            <div>
              <input type="text" name="externalCommunication" placeholder="Describe handling of external communications" />
            </div>
          </div>

          {/* Role Assignment Flexibility Section */}
          <h3>Role Assignment Flexibility</h3>

          <div className="form-section">
            <label>How is flexibility incorporated into role assignments to accommodate different types or scales of incidents (e.g., overlapping roles or additional resources)?</label>
            <div>
              <input type="text" name="roleFlexibility" placeholder="Describe flexibility in role assignments for different incidents" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there backup or alternate personnel designated for key roles to ensure continuity if primary members are unavailable?</label>
            <div>
              <input type="text" name="backupPersonnel" placeholder="Describe backup or alternate personnel for key roles" />
            </div>
          </div>

          <div className="form-section">
            <label>How is role adaptation managed in response to evolving incident dynamics or changes in the organization's structure?</label>
            <div>
              <input type="text" name="roleAdaptation" placeholder="Describe role adaptation based on incident dynamics or organization changes" />
            </div>
          </div>

          {/* Role-Specific Tools and Resources Section */}
          <h3>Role-Specific Tools and Resources</h3>

          <div className="form-section">
            <label>What tools, resources, or access privileges are assigned to each role to facilitate their responsibilities during an incident?</label>
            <div>
              <input type="text" name="roleTools" placeholder="Describe tools or resources assigned to each role" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific software or hardware resources required for different roles (e.g., forensic tools, communication equipment)?</label>
            <div>
              <input type="text" name="roleResources" placeholder="Describe software/hardware resources required for roles" />
            </div>
          </div>

          <div className="form-section">
            <label>How is access to these tools and resources managed and secured to support effective incident response?</label>
            <div>
              <input type="text" name="resourceAccess" placeholder="Describe management and security of access to tools/resources" />
            </div>
          </div>

          {/* Evaluation and Improvement Section */}
          <h3>Evaluation and Improvement</h3>

          <div className="form-section">
            <label>How are the roles and responsibilities of the incident response team evaluated after an incident (e.g., debriefings, performance reviews)?</label>
            <div>
              <input type="text" name="roleEvaluation" placeholder="Describe how roles and responsibilities are evaluated post-incident" />
            </div>
          </div>

          <div className="form-section">
            <label>What feedback mechanisms are in place to gather insights from team members and improve role definitions and procedures?</label>
            <div>
              <input type="text" name="feedbackMechanisms" placeholder="Describe feedback mechanisms for improving role definitions" />
            </div>
          </div>

          <div className="form-section">
            <label>How are lessons learned from past incidents used to refine role assignments and enhance the overall effectiveness of the response team?</label>
            <div>
              <input type="text" name="lessonsLearned" placeholder="Describe how lessons learned refine role assignments" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('incidentResponseRoles')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default IncidentResponseTeamPage;
