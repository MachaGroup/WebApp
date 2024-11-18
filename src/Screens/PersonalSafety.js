import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 9 

function PersonalSafetyPage() {
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

      {/* Personal Safety Education Section */}
      <main className="form-container">
        <h2>Personal Safety Education</h2>
        <form>
          {/* Stranger Danger Awareness */}
          <h3>Stranger Danger Awareness</h3>

          <div className="form-section">
            <label>What programs or materials are used to teach students about stranger danger?</label>
            <div>
              <input type="text" name="strangerDangerPrograms" placeholder="Describe programs or materials used" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are stranger danger awareness lessons incorporated into the curriculum?</label>
            <div>
              <input type="text" name="strangerDangerFrequency" placeholder="Describe how often lessons are given" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any role-playing exercises or simulations included in the training for real-life scenarios?</label>
            <div>
              <input type="text" name="rolePlayingExercises" placeholder="Describe role-playing or simulations used" />
            </div>
          </div>

          <div className="form-section">
            <label>How do teachers assess student understanding of stranger danger concepts after the training?</label>
            <div>
              <input type="text" name="strangerDangerAssessment" placeholder="Describe assessment methods for understanding" />
            </div>
          </div>

          <div className="form-section">
            <label>What resources are provided to parents to reinforce stranger danger awareness at home?</label>
            <div>
              <input type="text" name="parentResources" placeholder="Describe resources provided to parents" />
            </div>
          </div>

          {/* Emergency Response Drills for Students */}
          <h3>Emergency Response Drills for Students</h3>

          {/* Fire Drills */}
          <h4>Fire Drills</h4>

          <div className="form-section">
            <label>How often are fire drills conducted throughout the school year?</label>
            <div>
              <input type="text" name="fireDrillFrequency" placeholder="Describe frequency of fire drills" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to ensure that all students and staff can evacuate the building quickly and safely during a fire drill?</label>
            <div>
              <input type="text" name="evacuationProcedures" placeholder="Describe procedures for safe evacuation" />
            </div>
          </div>

          <div className="form-section">
            <label>How is student participation in fire drills tracked and assessed for compliance?</label>
            <div>
              <input type="text" name="fireDrillTracking" placeholder="Describe tracking and assessment of participation" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there accommodations for students with disabilities during fire drills, and how are those addressed?</label>
            <div>
              <input type="text" name="disabilityAccommodations" placeholder="Describe accommodations for students with disabilities" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback collected after fire drills to improve future drill procedures?</label>
            <div>
              <input type="text" name="fireDrillFeedback" placeholder="Describe methods for collecting feedback post-drills" />
            </div>
          </div>

          {/* Lockdown Drills */}
          <h4>Lockdown Drills</h4>

          <div className="form-section">
            <label>How frequently are lockdown drills conducted in the school?</label>
            <div>
              <input type="text" name="lockdownDrillFrequency" placeholder="Describe frequency of lockdown drills" />
            </div>
          </div>

          <div className="form-section">
            <label>What are the specific procedures students and staff must follow during a lockdown drill?</label>
            <div>
              <input type="text" name="lockdownProcedures" placeholder="Describe specific procedures for lockdown drills" />
            </div>
          </div>

          <div className="form-section">
            <label>How are the outcomes of lockdown drills evaluated, and what changes are made based on that evaluation?</label>
            <div>
              <input type="text" name="lockdownDrillEvaluation" placeholder="Describe evaluation of lockdown drill outcomes" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the school communicate the lockdown procedures to students, especially new students or those with special needs?</label>
            <div>
              <input type="text" name="lockdownCommunication" placeholder="Describe how lockdown procedures are communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms in place for students and parents to provide feedback on the effectiveness of the lockdown drills?</label>
            <div>
              <input type="text" name="lockdownDrillFeedback" placeholder="Describe feedback mechanisms for lockdown drills" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default PersonalSafetyPage;
