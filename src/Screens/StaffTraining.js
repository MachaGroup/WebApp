import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path based on your project structure

// section 9

function StaffTrainingPage() {
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

      {/* Staff Training Programs Section */}
      <main className="form-container">
        <h2>Staff Training Programs</h2>
        <form>
          {/* Safety Procedures Training */}
          <h3>Safety Procedures Training</h3>

          {/* Safety and Security Training */}
          <h4>Safety and Security Training</h4>

          <div className="form-section">
            <label>What training programs are available for staff to understand safety and security protocols during emergencies?</label>
            <div>
              <input type="text" name="trainingPrograms" placeholder="Describe the safety and security training programs" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are safety and security training sessions conducted for employees and stakeholders?</label>
            <div>
              <input type="text" name="trainingFrequency" placeholder="Describe the frequency of training sessions" />
            </div>
          </div>

          <div className="form-section">
            <label>What methods are used to assess the effectiveness of safety and security training programs?</label>
            <div>
              <input type="text" name="trainingAssessmentMethods" placeholder="Describe the methods for assessing training effectiveness" />
            </div>
          </div>

          <div className="form-section">
            <label>How is training tailored to meet the specific needs of different roles within the organization?</label>
            <div>
              <input type="text" name="trainingCustomization" placeholder="Describe how training is customized for different roles" />
            </div>
          </div>

          <div className="form-section">
            <label>What resources are provided to staff for ongoing education about safety and security best practices?</label>
            <div>
              <input type="text" name="ongoingEducationResources" placeholder="Describe resources for ongoing education on safety and security" />
            </div>
          </div>

          {/* Fire Safety Training */}
          <h4>Fire Safety Training</h4>

          <div className="form-section">
            <label>What specific topics are covered in the fire safety training program for staff?</label>
            <div>
              <input type="text" name="fireSafetyTopics" placeholder="Describe topics covered in fire safety training" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is fire safety training conducted for employees?</label>
            <div>
              <input type="text" name="fireSafetyFrequency" placeholder="Describe how often fire safety training is conducted" />
            </div>
          </div>

          <div className="form-section">
            <label>What methods are used to evaluate staff understanding and retention of fire safety protocols?</label>
            <div>
              <input type="text" name="fireSafetyEvaluation" placeholder="Describe methods for evaluating fire safety understanding" />
            </div>
          </div>

          <div className="form-section">
            <label>Are fire drills incorporated into the training program, and if so, how frequently are they held?</label>
            <div>
              <input type="text" name="fireDrillsFrequency" placeholder="Describe frequency of fire drills" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the training adjusted based on feedback from participants or after incidents?</label>
            <div>
              <input type="text" name="fireSafetyFeedback" placeholder="Describe adjustments to training based on feedback" />
            </div>
          </div>

          {/* Evacuation Procedures Training */}
          <h4>Evacuation Procedures Training</h4>

          <div className="form-section">
            <label>What are the key components included in the evacuation procedures training for staff?</label>
            <div>
              <input type="text" name="evacuationComponents" placeholder="Describe key components of evacuation training" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the effectiveness of the evacuation procedures assessed after training sessions?</label>
            <div>
              <input type="text" name="evacuationEffectiveness" placeholder="Describe how effectiveness is assessed post-training" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific evacuation routes and assembly points that staff are trained to use, and how are these communicated?</label>
            <div>
              <input type="text" name="evacuationRoutes" placeholder="Describe evacuation routes and communication" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is the evacuation procedures training updated or reviewed for relevance and compliance?</label>
            <div>
              <input type="text" name="evacuationTrainingReview" placeholder="Describe frequency of review and updates to evacuation training" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to accommodate individuals with disabilities during evacuation procedures?</label>
            <div>
              <input type="text" name="disabilityAccommodations" placeholder="Describe measures for individuals with disabilities during evacuation" />
            </div>
          </div>

          {/* Security Awareness Training */}
          <h4>Security Awareness Training</h4>

          {/* Identifying Suspicious Behavior */}
          <h5>Identifying Suspicious Behavior</h5>

          <div className="form-section">
            <label>What specific behaviors are staff trained to recognize as suspicious in the school environment?</label>
            <div>
              <input type="text" name="suspiciousBehavior" placeholder="Describe behaviors considered suspicious in the school" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the training for identifying suspicious behavior conducted (e.g., workshops, online modules)?</label>
            <div>
              <input type="text" name="suspiciousBehaviorTrainingMethod" placeholder="Describe methods for training to identify suspicious behavior" />
            </div>
          </div>

          <div className="form-section">
            <label>What resources or tools are provided to staff for reporting suspicious behavior?</label>
            <div>
              <input type="text" name="reportingResources" placeholder="Describe resources for reporting suspicious behavior" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is the training on identifying suspicious behavior reviewed or updated to reflect current security concerns?</label>
            <div>
              <input type="text" name="suspiciousBehaviorTrainingReview" placeholder="Describe review/update frequency for suspicious behavior training" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there real-life scenarios or examples included in the training to help staff better understand suspicious behavior?</label>
            <div>
              <input type="text" name="realLifeScenarios" placeholder="Describe inclusion of real-life scenarios in training" />
            </div>
          </div>

          {/* Response to Security Threats */}
          <h5>Response to Security Threats</h5>

          <div className="form-section">
            <label>What procedures are in place for staff to follow when a security threat is identified?</label>
            <div>
              <input type="text" name="securityThreatProcedures" placeholder="Describe procedures for responding to a security threat" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently are response protocols for security threats reviewed and practiced?</label>
            <div>
              <input type="text" name="responseProtocolReview" placeholder="Describe frequency of response protocol reviews" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there designated personnel responsible for coordinating the response to security threats, and how are they trained?</label>
            <div>
              <input type="text" name="securityPersonnelTraining" placeholder="Describe personnel and their training for handling security threats" />
            </div>
          </div>

          <div className="form-section">
            <label>What communication methods are used to alert staff and students during a security threat?</label>
            <div>
              <input type="text" name="alertCommunicationMethods" placeholder="Describe communication methods for alerting staff and students" />
            </div>
          </div>

          <div className="form-section">
            <label>How does the school evaluate the effectiveness of its response to past security threats?</label>
            <div>
              <input type="text" name="responseEvaluation" placeholder="Describe how past responses to security threats are evaluated" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default StaffTrainingPage;
