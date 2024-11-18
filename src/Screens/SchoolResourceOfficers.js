import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 8 Community Partnership

function SchoolResourceOfficersPage() {
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

      {/* School Resource Officers Section */}
      <main className="form-container">
        <h2>School Resource Officers (SROs)</h2>
        <form>
          {/* SRO Roles and Responsibilities Section */}
          <h3>SRO Roles and Responsibilities</h3>

          <div className="form-section">
            <label>What specific duties do School Resource Officers (SROs) perform within the school environment?</label>
            <div>
              <input type="text" name="sroDuties" placeholder="Describe the duties of SROs in the school environment" />
            </div>
          </div>

          <div className="form-section">
            <label>How do SROs collaborate with school administration and staff to enhance safety?</label>
            <div>
              <input type="text" name="sroCollaboration" placeholder="Describe SRO collaboration with staff for safety" />
            </div>
          </div>

          <div className="form-section">
            <label>What training or qualifications are required for SROs working in schools?</label>
            <div>
              <input type="text" name="sroTrainingQualifications" placeholder="Describe the training and qualifications for SROs" />
            </div>
          </div>

          <div className="form-section">
            <label>How do SROs contribute to emergency preparedness and response planning?</label>
            <div>
              <input type="text" name="sroEmergencyPreparedness" placeholder="Describe SRO involvement in emergency planning" />
            </div>
          </div>

          <div className="form-section">
            <label>In what ways do SROs engage with students to build trust and rapport within the school community?</label>
            <div>
              <input type="text" name="sroStudentEngagement" placeholder="Describe how SROs engage with students to build trust" />
            </div>
          </div>

          {/* SRO Training and Certification Section */}
          <h3>SRO Training and Certification</h3>

          <div className="form-section">
            <label>What are the core components of the training curriculum for School Resource Officers (SROs)?</label>
            <div>
              <input type="text" name="sroTrainingCurriculum" placeholder="Describe core components of SRO training curriculum" />
            </div>
          </div>

          <div className="form-section">
            <label>How often do SROs undergo training and certification updates to stay current with best practices?</label>
            <div>
              <input type="text" name="sroTrainingFrequency" placeholder="Describe how often SROs receive training updates" />
            </div>
          </div>

          <div className="form-section">
            <label>What specialized training is required for SROs in areas such as conflict resolution and mental health awareness?</label>
            <div>
              <input type="text" name="sroSpecializedTraining" placeholder="Describe specialized training required for SROs" />
            </div>
          </div>

          <div className="form-section">
            <label>How do training programs ensure that SROs are equipped to handle emergencies and critical incidents in schools?</label>
            <div>
              <input type="text" name="sroEmergencyTraining" placeholder="Describe how training prepares SROs for emergencies" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any certification programs specifically tailored for SROs, and what do they entail?</label>
            <div>
              <input type="text" name="sroCertificationPrograms" placeholder="Describe certification programs tailored for SROs" />
            </div>
          </div>

          {/* Joint Community Events Section */}
          <h3>Joint Community Events</h3>

          {/* Active Shooter Drills with Police Section */}
          <h4>Active Shooter Drills with Police</h4>

          <div className="form-section">
            <label>What are the objectives and goals of conducting active shooter drills in collaboration with law enforcement?</label>
            <div>
              <input type="text" name="activeShooterObjectives" placeholder="Describe the objectives and goals of active shooter drills" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are active shooter drills conducted, and what factors determine the schedule?</label>
            <div>
              <input type="text" name="activeShooterFrequency" placeholder="Describe how often and why drills are conducted" />
            </div>
          </div>

          <div className="form-section">
            <label>What roles do school staff and law enforcement play during these drills, and how are these roles communicated?</label>
            <div>
              <input type="text" name="activeShooterRoles" placeholder="Describe the roles of staff and law enforcement in drills" />
            </div>
          </div>

          <div className="form-section">
            <label>How are the outcomes and effectiveness of the active shooter drills evaluated after completion?</label>
            <div>
              <input type="text" name="activeShooterEvaluation" placeholder="Describe how outcomes and effectiveness are evaluated" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to address psychological impacts on students and staff participating in these drills?</label>
            <div>
              <input type="text" name="activeShooterPsychologicalSupport" placeholder="Describe measures to support mental health during drills" />
            </div>
          </div>

          {/* Emergency Response Training Section */}
          <h4>Emergency Response Training</h4>

          <div className="form-section">
            <label>What specific emergency scenarios are included in the response training exercises?</label>
            <div>
              <input type="text" name="emergencyResponseScenarios" placeholder="Describe emergency scenarios covered in training" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the training tailored to address the unique needs of the school environment?</label>
            <div>
              <input type="text" name="emergencyResponseTailoring" placeholder="Describe how training is tailored for school needs" />
            </div>
          </div>

          <div className="form-section">
            <label>What qualifications or certifications do the trainers have to conduct emergency response training?</label>
            <div>
              <input type="text" name="emergencyResponseTrainerQualifications" placeholder="Describe trainer qualifications for emergency response training" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is the emergency response training updated or revised to incorporate new protocols or lessons learned?</label>
            <div>
              <input type="text" name="emergencyResponseUpdates" placeholder="Describe how training is updated or revised" />
            </div>
          </div>

          <div className="form-section">
            <label>What feedback mechanisms are in place to assess the effectiveness of the training from both staff and participants?</label>
            <div>
              <input type="text" name="emergencyResponseFeedback" placeholder="Describe feedback mechanisms for training effectiveness" />
            </div>
          </div>

          {/* Crisis Intervention Workshops Section */}
          <h4>Crisis Intervention Workshops</h4>

          <div className="form-section">
            <label>What topics are covered in the crisis intervention workshops to prepare staff for various emergency situations?</label>
            <div>
              <input type="text" name="crisisInterventionTopics" placeholder="Describe the topics covered in crisis intervention workshops" />
            </div>
          </div>

          <div className="form-section">
            <label>Who leads the workshops, and what qualifications or experience do they have in crisis intervention?</label>
            <div>
              <input type="text" name="crisisInterventionLeaders" placeholder="Describe the qualifications of workshop leaders" />
            </div>
          </div>

          <div className="form-section">
            <label>How are participants assessed to ensure they understand and can apply the techniques learned during the workshops?</label>
            <div>
              <input type="text" name="crisisInterventionAssessment" placeholder="Describe how participants are assessed in the workshops" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there follow-up sessions or refresher courses to reinforce the skills learned in the workshops?</label>
            <div>
              <input type="text" name="crisisInterventionFollowUp" placeholder="Describe follow-up sessions or refresher courses" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback from participants collected to improve future workshops and address any gaps in training?</label>
            <div>
              <input type="text" name="crisisInterventionFeedback" placeholder="Describe how feedback is collected from participants" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default SchoolResourceOfficersPage;
