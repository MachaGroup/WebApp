import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 9 CONTINUOUS IMPROVEMENT - SAFETY AND SECURITY

function SafetyRiskAssessmentPage() {
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

      {/* Safety Risk Assessment Section */}
      <main className="form-container">
        <h2>Safety Risk Assessment</h2>
        <form>
          {/* Hazard Identification Section */}
          <h3>Hazard Identification</h3>

          {/* Physical Hazards Assessment */}
          <h4>Physical Hazards Assessment</h4>

          <div className="form-section">
            <label>Has a Physical Hazards assessment been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="physicalHazardAssessment" placeholder="Enter date of last physical hazard assessment" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to identify physical hazards within the school environment?</label>
            <div>
              <input type="text" name="physicalHazardCriteria" placeholder="Describe criteria for identifying physical hazards" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is the physical hazards assessment conducted?</label>
            <div>
              <input type="text" name="physicalHazardFrequency" placeholder="Enter frequency of physical hazard assessment" />
            </div>
          </div>

          <div className="form-section">
            <label>What tools or methods are utilized to assess physical hazards?</label>
            <div>
              <input type="text" name="physicalHazardTools" placeholder="Describe tools or methods used for assessment" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any known physical hazards present in the school's vicinity?</label>
            <div>
              <input type="text" name="knownPhysicalHazards" placeholder="Describe any known physical hazards in the vicinity" />
            </div>
          </div>

          <div className="form-section">
            <label>How are the results of the physical hazards assessment communicated to staff and stakeholders?</label>
            <div>
              <input type="text" name="physicalHazardCommunication" placeholder="Describe communication methods for assessment results" />
            </div>
          </div>

          {/* Environmental Hazards Assessment */}
          <h4>Environmental Hazards Assessment</h4>

          <div className="form-section">
            <label>Has an Environmental Hazards assessment been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="environmentalHazardAssessment" placeholder="Enter date of last environmental hazard assessment" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to identify potential environmental hazards in the school's vicinity?</label>
            <div>
              <input type="text" name="environmentalHazardCriteria" placeholder="Describe criteria for identifying environmental hazards" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is the assessment of environmental hazards conducted at the school?</label>
            <div>
              <input type="text" name="environmentalHazardFrequency" placeholder="Enter frequency of environmental hazard assessment" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any known environmental hazards present in the school's vicinity, such as chemical spills or pollution sources?</label>
            <div>
              <input type="text" name="knownEnvironmentalHazards" placeholder="Describe any known environmental hazards" />
            </div>
          </div>

          <div className="form-section">
            <label>What protocols are in place to address identified environmental hazards, and how are they communicated to the school community?</label>
            <div>
              <input type="text" name="environmentalHazardProtocols" placeholder="Describe protocols for addressing environmental hazards" />
            </div>
          </div>

          {/* Risk Analysis Section */}
          <h3>Risk Analysis</h3>

          {/* Likelihood and Impact Assessment */}
          <h4>Likelihood and Impact Assessment</h4>

          <div className="form-section">
            <label>Has a Likelihood and Impact assessment been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="likelihoodImpactAssessment" placeholder="Enter date of last likelihood and impact assessment" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to determine the likelihood of various safety risks occurring at the school?</label>
            <div>
              <input type="text" name="likelihoodCriteria" placeholder="Describe criteria for determining likelihood of risks" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the potential impact of identified risks evaluated in terms of severity and consequences for students and staff?</label>
            <div>
              <input type="text" name="impactEvaluation" placeholder="Describe how the impact of risks is evaluated" />
            </div>
          </div>

          <div className="form-section">
            <label>Are historical data and incident reports considered in the assessment of likelihood and impact?</label>
            <div>
              <input type="text" name="historicalDataConsidered" placeholder="Describe how historical data and incidents are used" />
            </div>
          </div>

          <div className="form-section">
            <label>How frequently is the likelihood and impact assessment updated to reflect new information or changes in circumstances?</label>
            <div>
              <input type="text" name="assessmentUpdateFrequency" placeholder="Enter frequency for updating likelihood and impact assessments" />
            </div>
          </div>

          <div className="form-section">
            <label>What methods are used to communicate the findings of the likelihood and impact assessment to stakeholders, including parents and staff?</label>
            <div>
              <input type="text" name="likelihoodImpactCommunication" placeholder="Describe communication methods for assessment findings" />
            </div>
          </div>

          {/* Vulnerability Assessment */}
          <h4>Vulnerability Assessment</h4>

          <div className="form-section">
            <label>Has a vulnerability assessment been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="vulnerabilityAssessment" placeholder="Enter date of last vulnerability assessment" />
            </div>
          </div>

          <div className="form-section">
            <label>What processes are in place to identify vulnerabilities within the school’s physical infrastructure and safety protocols?</label>
            <div>
              <input type="text" name="vulnerabilityIdentification" placeholder="Describe processes for identifying vulnerabilities" />
            </div>
          </div>

          <div className="form-section">
            <label>How are potential vulnerabilities related to staffing, training, or emergency preparedness evaluated?</label>
            <div>
              <input type="text" name="staffingTrainingEvaluation" placeholder="Describe evaluation of vulnerabilities related to staffing and training" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to prioritize identified vulnerabilities for remediation or improvement?</label>
            <div>
              <input type="text" name="vulnerabilityPrioritization" placeholder="Describe criteria for prioritizing vulnerabilities" />
            </div>
          </div>

          <div className="form-section">
            <label>Are input and feedback from staff, students, and community members included in the vulnerability assessment process?</label>
            <div>
              <input type="text" name="vulnerabilityFeedback" placeholder="Describe how feedback is included in vulnerability assessments" />
            </div>
          </div>

          {/* Security Threat Assessment Section */}
          <h3>Security Threat Assessment</h3>

          {/* External Threats */}
          <h4>External Threats (e.g., intruders)</h4>

          <div className="form-section">
            <label>Has an External Threat assessment been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="externalThreatAssessment" placeholder="Enter date of last external threat assessment" />
            </div>
          </div>

          {/* Internal Threats */}
          <h4>Internal Threats (e.g., unauthorized access)</h4>

          <div className="form-section">
            <label>Has an Internal Threat assessment been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="internalThreatAssessment" placeholder="Enter date of last internal threat assessment" />
            </div>
          </div>

          {/* Security Vulnerability Assessment Section */}
          <h3>Security Vulnerability Assessment</h3>

          {/* Perimeter Security Evaluation */}
          <h4>Perimeter Security Evaluation</h4>

          <div className="form-section">
            <label>Has a Perimeter Security Evaluation been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="perimeterSecurityEvaluation" placeholder="Enter date of last perimeter security evaluation" />
            </div>
          </div>

          {/* Access Control Systems Assessment */}
          <h4>Access Control Systems Assessment</h4>

          <div className="form-section">
            <label>Has an Access Control Systems assessment been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="accessControlSystemsAssessment" placeholder="Enter date of last access control systems assessment" />
            </div>
          </div>

          {/* Cybersecurity Vulnerability Assessment */}
          <h4>Cybersecurity Vulnerability Assessment</h4>

          <div className="form-section">
            <label>Has a Cybersecurity Vulnerability assessment been conducted? If so, when was it last performed?</label>
            <div>
              <input type="text" name="cybersecurityAssessment" placeholder="Enter date of last cybersecurity vulnerability assessment" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default SafetyRiskAssessmentPage;
