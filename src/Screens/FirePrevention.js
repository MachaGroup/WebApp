import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 8

function FirePreventionPage() {
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

      {/* Fire Prevention Programs Section */}
      <main className="form-container">
        <h2>Fire Prevention Programs</h2>
        <form>
          {/* Fire Safety Education for Students Section */}
          <h3>Fire Safety Education for Students</h3>

          <div className="form-section">
            <label>What key fire safety concepts are included in the education program for students?</label>
            <div>
              <input type="text" name="fireSafetyConcepts" placeholder="Describe key fire safety concepts for students" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are fire safety education sessions conducted throughout the academic year?</label>
            <div>
              <input type="text" name="fireSafetyFrequency" placeholder="Describe the frequency of fire safety education sessions" />
            </div>
          </div>

          <div className="form-section">
            <label>What methods are used to engage students and make the fire safety education relatable and effective?</label>
            <div>
              <input type="text" name="fireSafetyMethods" placeholder="Describe methods used to engage students in fire safety education" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there hands-on activities, such as fire drills or demonstrations, included in the program to enhance learning?</label>
            <div>
              <input type="text" name="fireSafetyActivities" placeholder="Describe hands-on activities included in the program" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the effectiveness of the fire safety education assessed, and what feedback is gathered from students and teachers?</label>
            <div>
              <input type="text" name="fireSafetyEffectiveness" placeholder="Describe how the effectiveness is assessed and feedback gathered" />
            </div>
          </div>

          {/* Fire Drills and Evacuation Planning Section */}
          <h3>Fire Drills and Evacuation Planning</h3>

          <div className="form-section">
            <label>How frequently are fire drills conducted within the school to ensure preparedness?</label>
            <div>
              <input type="text" name="fireDrillFrequency" placeholder="Describe the frequency of fire drills conducted" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for communicating evacuation plans to students and staff before a drill?</label>
            <div>
              <input type="text" name="evacuationProcedures" placeholder="Describe the communication procedures for evacuation plans" />
            </div>
          </div>

          <div className="form-section">
            <label>How are roles and responsibilities assigned during fire drills, and who oversees the execution?</label>
            <div>
              <input type="text" name="fireDrillRoles" placeholder="Describe how roles and responsibilities are assigned during drills" />
            </div>
          </div>

          <div className="form-section">
            <label>What strategies are implemented to accommodate students with disabilities during evacuation procedures?</label>
            <div>
              <input type="text" name="evacuationForDisabilities" placeholder="Describe strategies for accommodating students with disabilities during evacuations" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback collected post-drill to identify areas for improvement in the evacuation plan?</label>
            <div>
              <input type="text" name="drillFeedback" placeholder="Describe how feedback is collected post-drill" />
            </div>
          </div>

          {/* Emergency Response Coordination Section */}
          <h3>Emergency Response Coordination</h3>

          {/* Fire Department Access to School Facilities Section */}
          <h4>Fire Department Access to School Facilities</h4>

          <div className="form-section">
            <label>What protocols are in place for fire department personnel to access school grounds during emergencies?</label>
            <div>
              <input type="text" name="fireDeptAccessProtocols" placeholder="Describe protocols for fire department access during emergencies" />
            </div>
          </div>

          <div className="form-section">
            <label>How is access to the school's blueprints and layout provided to the fire department for effective emergency response?</label>
            <div>
              <input type="text" name="fireDeptBlueprintAccess" placeholder="Describe how the fire department receives blueprints/access" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there designated entry points for emergency services, and how are they communicated to staff and students?</label>
            <div>
              <input type="text" name="entryPointsForEmergencyServices" placeholder="Describe designated entry points for emergency services" />
            </div>
          </div>

          <div className="form-section">
            <label>What training do school staff receive regarding cooperating with fire department personnel during an emergency?</label>
            <div>
              <input type="text" name="staffTrainingWithFireDept" placeholder="Describe staff training on cooperation with fire department" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are joint inspections conducted with the fire department to ensure accessibility and readiness of emergency routes?</label>
            <div>
              <input type="text" name="jointInspections" placeholder="Describe frequency and process of joint inspections with fire department" />
            </div>
          </div>

          {/* Mutual Aid Agreements Section */}
          <h4>Mutual Aid Agreements</h4>

          <div className="form-section">
            <label>What specific terms are included in the mutual aid agreements with local fire departments?</label>
            <div>
              <input type="text" name="mutualAidTerms" placeholder="Describe specific terms included in mutual aid agreements" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are the mutual aid agreements reviewed and updated to reflect current needs and capabilities?</label>
            <div>
              <input type="text" name="mutualAidReviewFrequency" placeholder="Describe how often mutual aid agreements are reviewed and updated" />
            </div>
          </div>

          <div className="form-section">
            <label>What protocols are in place to activate mutual aid during a large-scale emergency?</label>
            <div>
              <input type="text" name="mutualAidActivation" placeholder="Describe the protocols to activate mutual aid during emergencies" />
            </div>
          </div>

          <div className="form-section">
            <label>How is communication facilitated between schools and fire departments during an emergency requiring mutual aid?</label>
            <div>
              <input type="text" name="mutualAidCommunication" placeholder="Describe how communication is handled during emergencies with mutual aid" />
            </div>
          </div>

          <div className="form-section">
            <label>What training or drills are conducted to ensure all parties understand the mutual aid agreement and their respective roles?</label>
            <div>
              <input type="text" name="mutualAidTraining" placeholder="Describe training or drills related to mutual aid agreements" />
            </div>
          </div>

          {/* Firefighter Training Sessions Section */}
          <h4>Firefighter Training Sessions</h4>

          <div className="form-section">
            <label>What types of training sessions are conducted for firefighters in collaboration with schools?</label>
            <div>
              <input type="text" name="firefighterTrainingTypes" placeholder="Describe types of firefighter training conducted with schools" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these training sessions tailored to address the specific needs of the school environment?</label>
            <div>
              <input type="text" name="firefighterTrainingTailored" placeholder="Describe how firefighter training is tailored for school environments" />
            </div>
          </div>

          <div className="form-section">
            <label>What qualifications and experience do trainers have to ensure effective firefighter training sessions?</label>
            <div>
              <input type="text" name="firefighterTrainerQualifications" placeholder="Describe trainer qualifications and experience" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are firefighter training sessions held, and what is the process for evaluating their effectiveness?</label>
            <div>
              <input type="text" name="firefighterTrainingFrequency" placeholder="Describe frequency and evaluation of firefighter training sessions" />
            </div>
          </div>

          <div className="form-section">
            <label>What feedback mechanisms are in place for school staff and students to share their experiences from these training sessions?</label>
            <div>
              <input type="text" name="firefighterTrainingFeedback" placeholder="Describe feedback mechanisms for firefighter training sessions" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default FirePreventionPage;
