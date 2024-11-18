import React from 'react';
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust path as needed

// section 6 : disaster recovery planning

function ContinuityOfOperationsPage() {
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

      {/* Continuity of Operations Section */}
      <main className="form-container">
        <h2>Continuity of Operations</h2>

        <form>
          {/* Identification of Critical Functions */}
          <h4>Identification of Critical Functions</h4>

          <div className="form-section">
            <label>What criteria are used to identify and prioritize critical functions that must continue during a disruption?</label>
            <div>
              <input type="text" name="criticalFunctionsCriteria" placeholder="Describe the criteria for identifying critical functions" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are critical functions reviewed and updated to reflect changes in organizational priorities or operations?</label>
            <div>
              <input type="text" name="criticalFunctionsReview" placeholder="Describe the frequency of reviewing and updating critical functions" />
            </div>
          </div>

          <div className="form-section">
            <label>Are dependencies between critical functions and other business operations clearly documented and understood?</label>
            <div>
              <input type="text" name="criticalFunctionsDependencies" placeholder="Describe how dependencies are documented and understood" />
            </div>
          </div>

          {/* Continuity Planning and Documentation */}
          <h4>Continuity Planning and Documentation</h4>

          <div className="form-section">
            <label>Does the organization have a comprehensive continuity of operations plan (COOP) that outlines procedures for maintaining critical functions during different types of disruptions?</label>
            <div>
              <input type="text" name="COOPDetails" placeholder="Describe the continuity of operations plan" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the COOP documented, and is it easily accessible to all relevant personnel during an emergency?</label>
            <div>
              <input type="text" name="COOPAccessibility" placeholder="Describe COOP documentation and accessibility" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there specific guidelines within the COOP for short-term versus long-term continuity of operations?</label>
            <div>
              <input type="text" name="COOPGuidelines" placeholder="Describe short-term and long-term guidelines within COOP" />
            </div>
          </div>

          {/* Resource Allocation and Management */}
          <h4>Resource Allocation and Management</h4>

          <div className="form-section">
            <label>What resources (e.g., personnel, technology, financial) are allocated to support the continuity of critical functions during a disruption?</label>
            <div>
              <input type="text" name="continuityResources" placeholder="Describe resources allocated for continuity" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these resources prioritized and managed to ensure they are available when needed?</label>
            <div>
              <input type="text" name="resourcePrioritization" placeholder="Describe resource prioritization and management" />
            </div>
          </div>

          <div className="form-section">
            <label>Are backup resources identified and prepared in advance to mitigate the impact of potential resource shortages?</label>
            <div>
              <input type="text" name="backupResources" placeholder="Describe how backup resources are prepared" />
            </div>
          </div>

          {/* Staff Training and Awareness */}
          <h4>Staff Training and Awareness</h4>

          <div className="form-section">
            <label>Are staff members trained on their roles and responsibilities in maintaining critical functions during a disruption?</label>
            <div>
              <input type="text" name="staffTraining" placeholder="Describe staff training for continuity roles" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is this training conducted, and does it include practical exercises or simulations?</label>
            <div>
              <input type="text" name="trainingFrequency" placeholder="Describe frequency of training and exercises" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there mechanisms in place to ensure that all staff, including new hires and contractors, are aware of the COOP and their role in it?</label>
            <div>
              <input type="text" name="staffAwareness" placeholder="Describe how staff is made aware of COOP" />
            </div>
          </div>

          {/* Testing and Evaluation of Continuity Plans */}
          <h4>Testing and Evaluation of Continuity Plans</h4>

          <div className="form-section">
            <label>How often are continuity of operations plans tested to ensure they are effective and up-to-date?</label>
            <div>
              <input type="text" name="continuityTestFrequency" placeholder="Describe frequency of continuity plan testing" />
            </div>
          </div>

          <div className="form-section">
            <label>Are different types of disruptions simulated during these tests to assess the plan's robustness across various scenarios?</label>
            <div>
              <input type="text" name="disruptionSimulation" placeholder="Describe types of disruptions simulated during testing" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback from these tests used to improve the continuity of operations planning and procedures?</label>
            <div>
              <input type="text" name="testFeedback" placeholder="Describe how test feedback improves planning" />
            </div>
          </div>

          {/* Coordination with External Partners */}
          <h4>Coordination with External Partners</h4>

          <div className="form-section">
            <label>Are there established partnerships with external organizations (e.g., suppliers, emergency services) to support continuity of critical functions?</label>
            <div>
              <input type="text" name="externalPartners" placeholder="Describe external partnerships for continuity" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these partnerships maintained and reviewed to ensure they remain effective and relevant?</label>
            <div>
              <input type="text" name="partnerReview" placeholder="Describe review and maintenance of partnerships" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there protocols in place to communicate and coordinate with these partners during a disruption?</label>
            <div>
              <input type="text" name="partnerCoordination" placeholder="Describe coordination protocols with external partners" />
            </div>
          </div>

          {/* Technology and Infrastructure Resilience */}
          <h4>Technology and Infrastructure Resilience</h4>

          <div className="form-section">
            <label>What measures are in place to ensure that the technology and infrastructure supporting critical functions are resilient to disruptions?</label>
            <div>
              <input type="text" name="techResilience" placeholder="Describe technology and infrastructure resilience" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there redundant systems or failover mechanisms to maintain critical functions in the event of a primary system failure?</label>
            <div>
              <input type="text" name="redundantSystems" placeholder="Describe redundant systems or failover mechanisms" />
            </div>
          </div>

          <div className="form-section">
            <label>How are these systems tested and maintained to ensure they are ready for use during an actual disruption?</label>
            <div>
              <input type="text" name="systemTesting" placeholder="Describe how redundant systems are tested" />
            </div>
          </div>

          {/* Continuous Improvement and Plan Updates */}
          <h4>Continuous Improvement and Plan Updates</h4>

          <div className="form-section">
            <label>How frequently is the continuity of operations plan reviewed and updated to address new risks, changes in operations, or lessons learned from past disruptions?</label>
            <div>
              <input type="text" name="planReviewFrequency" placeholder="Describe frequency of continuity plan reviews" />
            </div>
          </div>

          <div className="form-section">
            <label>Is there a formal process for incorporating feedback from staff and stakeholders into the plan's revisions?</label>
            <div>
              <input type="text" name="feedbackProcess" placeholder="Describe the feedback process for plan revisions" />
            </div>
          </div>

          <div className="form-section">
            <label>How are changes to the continuity plan communicated to ensure all relevant parties are aware and prepared?</label>
            <div>
              <input type="text" name="planCommunication" placeholder="Describe how changes to the plan are communicated" />
            </div>
          </div>

          {/* Performance Metrics and Reporting */}
          <h4>Performance Metrics and Reporting</h4>

          <div className="form-section">
            <label>What performance metrics are used to evaluate the effectiveness of the continuity of operations plan?</label>
            <div>
              <input type="text" name="performanceMetrics" placeholder="Describe performance metrics for evaluating COOP" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there regular reports generated to monitor these metrics and identify areas for improvement?</label>
            <div>
              <input type="text" name="reporting" placeholder="Describe the reporting process for performance metrics" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the success of maintaining critical functions measured during a disruption?</label>
            <div>
              <input type="text" name="successMeasurement" placeholder="Describe how success is measured during disruptions" />
            </div>
          </div>

          {/* Communication Strategy During Disruptions */}
          <h4>Communication Strategy During Disruptions</h4>

          <div className="form-section">
            <label>What communication strategies are in place to keep staff and stakeholders informed about the status of critical functions during a disruption?</label>
            <div>
              <input type="text" name="communicationStrategy" placeholder="Describe communication strategies during disruptions" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there predefined communication channels and messages for different types of disruptions?</label>
            <div>
              <input type="text" name="predefinedMessages" placeholder="Describe predefined communication channels and messages" />
            </div>
          </div>

          <div className="form-section">
            <label>How is communication effectiveness evaluated and improved over time to support continuity efforts?</label>
            <div>
              <input type="text" name="communicationEffectiveness" placeholder="Describe how communication effectiveness is evaluated" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default ContinuityOfOperationsPage;
