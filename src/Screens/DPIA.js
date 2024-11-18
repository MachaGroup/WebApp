import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 6.5.1.1.1 

function DPIAPage() {
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

      {/* Data Protection Impact Assessment Section */}
      <main className="form-container">
        <h2>Data Protection Impact Assessments (DPIA)</h2>
        <form>
          {/* Assessment Process Section */}
          <h3>Assessment Process</h3>

          <div className="form-section">
            <label>What is the process for conducting Data Protection Impact Assessments (DPIAs) within your organization (e.g., step-by-step methodology)?</label>
            <div>
              <input type="text" name="assessmentProcess" placeholder="Describe DPIA assessment process" />
            </div>
          </div>

          <div className="form-section">
            <label>Who is responsible for initiating and overseeing DPIAs (e.g., Data Protection Officer, compliance team)?</label>
            <div>
              <input type="text" name="responsibilityForDPIA" placeholder="Describe responsible parties for DPIA" />
            </div>
          </div>

          <div className="form-section">
            <label>How are the results of a DPIA documented and communicated to relevant stakeholders?</label>
            <div>
              <input type="text" name="documentationAndCommunication" placeholder="Describe documentation and communication process for DPIA results" />
            </div>
          </div>

          {/* Risk Identification and Evaluation Section */}
          <h3>Risk Identification and Evaluation</h3>

          <div className="form-section">
            <label>How does your organization identify and assess risks associated with personal data processing activities (e.g., risk assessment frameworks, threat modeling)?</label>
            <div>
              <input type="text" name="riskIdentification" placeholder="Describe risk identification process for DPIA" />
            </div>
          </div>

          <div className="form-section">
            <label>What criteria are used to evaluate the potential impact of these risks on individuals' privacy and data protection (e.g., severity of impact, likelihood of occurrence)?</label>
            <div>
              <input type="text" name="riskEvaluationCriteria" placeholder="Describe criteria for evaluating risk impact" />
            </div>
          </div>

          <div className="form-section">
            <label>How are risk mitigation strategies developed and implemented based on the DPIA findings?</label>
            <div>
              <input type="text" name="riskMitigation" placeholder="Describe risk mitigation strategies" />
            </div>
          </div>

          {/* Stakeholder Consultation Section */}
          <h3>Stakeholder Consultation</h3>

          <div className="form-section">
            <label>How are stakeholders involved in the DPIA process (e.g., consultation with affected individuals, engagement with legal or compliance experts)?</label>
            <div>
              <input type="text" name="stakeholderInvolvement" placeholder="Describe stakeholder involvement in DPIA" />
            </div>
          </div>

          <div className="form-section">
            <label>What methods are used to gather feedback from stakeholders and incorporate it into the DPIA findings (e.g., surveys, interviews)?</label>
            <div>
              <input type="text" name="stakeholderFeedback" placeholder="Describe methods for gathering stakeholder feedback" />
            </div>
          </div>

          <div className="form-section">
            <label>How are stakeholders informed about the outcomes of the DPIA and any actions taken as a result?</label>
            <div>
              <input type="text" name="stakeholderOutcomes" placeholder="Describe how stakeholders are informed of DPIA outcomes" />
            </div>
          </div>

          {/* Integration with Project Planning Section */}
          <h3>Integration with Project Planning</h3>

          <div className="form-section">
            <label>How are DPIAs integrated into the project planning and development lifecycle (e.g., early identification of data protection requirements, incorporation into project milestones)?</label>
            <div>
              <input type="text" name="dpiaIntegration" placeholder="Describe DPIA integration into project planning" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to ensure that DPIA recommendations are addressed during the implementation of new projects or systems?</label>
            <div>
              <input type="text" name="recommendationsAddressed" placeholder="Describe how DPIA recommendations are addressed in projects" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with DPIA recommendations monitored and enforced throughout the project lifecycle?</label>
            <div>
              <input type="text" name="dpiaCompliance" placeholder="Describe how DPIA compliance is monitored" />
            </div>
          </div>

          {/* Documentation and Record-Keeping Section */}
          <h3>Documentation and Record-Keeping</h3>

          <div className="form-section">
            <label>What documentation is required for a DPIA, and how is it maintained (e.g., assessment reports, risk mitigation plans)?</label>
            <div>
              <input type="text" name="dpiadocumentation" placeholder="Describe required documentation for DPIA" />
            </div>
          </div>

          <div className="form-section">
            <label>How are DPIA records stored and protected to ensure they are accessible and secure (e.g., digital records, physical storage)?</label>
            <div>
              <input type="text" name="dpiARecordsProtection" placeholder="Describe how DPIA records are stored and protected" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place for reviewing and updating DPIA documentation as needed?</label>
            <div>
              <input type="text" name="documentationReview" placeholder="Describe procedures for reviewing DPIA documentation" />
            </div>
          </div>

          {/* Review and Monitoring Section */}
          <h3>Review and Monitoring</h3>

          <div className="form-section">
            <label>How often are DPIAs reviewed and updated to reflect changes in data processing activities or regulatory requirements (e.g., annual reviews, periodic audits)?</label>
            <div>
              <input type="text" name="dpiAReview" placeholder="Describe how often DPIAs are reviewed" />
            </div>
          </div>

          <div className="form-section">
            <label>What mechanisms are in place to monitor the effectiveness of DPIA measures and their impact on data protection (e.g., performance metrics, feedback loops)?</label>
            <div>
              <input type="text" name="monitoringEffectiveness" placeholder="Describe how DPIA effectiveness is monitored" />
            </div>
          </div>

          <div className="form-section">
            <label>How are lessons learned from DPIA reviews used to improve future assessments and data protection practices?</label>
            <div>
              <input type="text" name="lessonsLearned" placeholder="Describe how lessons are applied to future DPIAs" />
            </div>
          </div>

          {/* Compliance with GDPR Requirements Section */}
          <h3>Compliance with GDPR Requirements</h3>

          <div className="form-section">
            <label>How does your organization ensure compliance with GDPR requirements related to DPIAs (e.g., adherence to Article 35, documentation requirements)?</label>
            <div>
              <input type="text" name="gdprCompliance" placeholder="Describe how GDPR compliance is ensured" />
            </div>
          </div>

          <div className="form-section">
            <label>What steps are taken to address any non-compliance issues identified during the DPIA process?</label>
            <div>
              <input type="text" name="nonComplianceResolution" placeholder="Describe steps for addressing non-compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>How are changes in GDPR regulations or guidance incorporated into your organization's DPIA practices?</label>
            <div>
              <input type="text" name="gdprChanges" placeholder="Describe how changes in GDPR are incorporated" />
            </div>
          </div>

          {/* Training and Awareness Section */}
          <h3>Training and Awareness</h3>

          <div className="form-section">
            <label>What training is provided to staff involved in conducting or overseeing DPIAs (e.g., data protection principles, assessment techniques)?</label>
            <div>
              <input type="text" name="trainingProvided" placeholder="Describe training for DPIA staff" />
            </div>
          </div>

          <div className="form-section">
            <label>How is staff awareness of DPIA requirements and their role in the process maintained and updated?</label>
            <div>
              <input type="text" name="staffAwareness" placeholder="Describe how DPIA awareness is maintained" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources available to support staff in conducting effective DPIAs (e.g., guidelines, templates)?</label>
            <div>
              <input type="text" name="dpiAResources" placeholder="Describe resources available for DPIA staff" />
            </div>
          </div>

          {/* Third-Party Assessments Section */}
          <h3>Third-Party Assessments</h3>

          <div className="form-section">
            <label>How are third-party vendors or partners involved in the DPIA process, and what is their role in ensuring data protection (e.g., third-party assessments, contracts)?</label>
            <div>
              <input type="text" name="thirdPartyInvolvement" placeholder="Describe third-party involvement in DPIA" />
            </div>
          </div>

          <div className="form-section">
            <label>What procedures are in place to evaluate and manage risks associated with third-party data processing activities?</label>
            <div>
              <input type="text" name="thirdPartyRiskManagement" placeholder="Describe third-party risk management" />
            </div>
          </div>

          <div className="form-section">
            <label>How is compliance with DPIA requirements ensured when working with external parties?</label>
            <div>
              <input type="text" name="thirdPartyCompliance" placeholder="Describe third-party compliance procedures" />
            </div>
          </div>

          {/* Impact on Data Subjects Section */}
          <h3>Impact on Data Subjects</h3>

          <div className="form-section">
            <label>How are the potential impacts on data subjects considered and addressed during the DPIA process (e.g., data minimization, transparency)?</label>
            <div>
              <input type="text" name="dataSubjectsImpacts" placeholder="Describe how impacts on data subjects are addressed" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to inform and protect data subjects based on DPIA findings (e.g., privacy notices, consent mechanisms)?</label>
            <div>
              <input type="text" name="dataSubjectsProtection" placeholder="Describe measures to inform and protect data subjects" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback from data subjects used to improve DPIA practices and data protection measures?</label>
            <div>
              <input type="text" name="feedbackUse" placeholder="Describe how feedback from data subjects is used" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-section">
            <button type="submit" onClick={() => handleButtonClick('dpiA')}>Submit Report</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default DPIAPage;
