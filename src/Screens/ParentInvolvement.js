import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

// section 8 

function ParentInvolvementPage() {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleButtonClick = (section) => {
    console.log(`Button clicked for: ${section}`);
    // Add logic for handling button click, e.g., open a modal or navigate

    switch (section) {
        case 'Parent Education Events Plans':
            navigate('/parent-education-events-plans');
            break;
        case 'Parent Communication':
            navigate('/parent-comm');
            break;
        default:
          console.log('Unknown section');
  }
  };

  return (
    <div className="form-page">
      {/* Header Section */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>←</button> {/* Use window.history.back for navigation */}
        <h1>The MACHA Group</h1>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Parent and Community Involvement Section */}
      <main className="form-container">
        <h2>Parent and Community Involvement</h2>
        <form>
          {/* Back-to-School Nights Section */}
          <h3>Back-to-School Nights</h3>

          <div className="form-section">
            <label>What activities are typically planned for Back-to-School Nights to engage families?</label>
            <div>
              <input type="text" name="activitiesBackToSchool" placeholder="Describe activities planned for Back-to-School Nights" />
            </div>
          </div>

          <div className="form-section">
            <label>How are parents informed about the purpose and schedule of Back-to-School Nights?</label>
            <div>
              <input type="text" name="communicationBackToSchool" placeholder="Describe how parents are informed about Back-to-School Nights" />
            </div>
          </div>

          <div className="form-section">
            <label>What opportunities are provided for parents to connect with teachers and school staff during these events?</label>
            <div>
              <input type="text" name="parentConnectionOpportunities" placeholder="Describe opportunities for parent-teacher connections" />
            </div>
          </div>

          <div className="form-section">
            <label>How is feedback from families collected after Back-to-School Nights to improve future events?</label>
            <div>
              <input type="text" name="feedbackCollection" placeholder="Describe how feedback is collected from families" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there any specific resources or information shared with families during Back-to-School Nights to support student success?</label>
            <div>
              <input type="text" name="resourcesShared" placeholder="Describe resources shared with families during the event" />
            </div>
          </div>

          {/* Parent Workshops on Student Safety Section */}
          <h3>Parent Workshops on Student Safety</h3>

          <div className="form-section">
            <label>What topics are covered in parent workshops focused on student safety?</label>
            <div>
              <input type="text" name="workshopTopics" placeholder="Describe topics covered in parent workshops on safety" />
            </div>
          </div>

          <div className="form-section">
            <label>How are parents encouraged to participate in these workshops, and what methods are used to promote attendance?</label>
            <div>
              <input type="text" name="workshopPromotion" placeholder="Describe methods used to promote parent participation in workshops" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there opportunities for parents to ask questions or share concerns during the workshops?</label>
            <div>
              <input type="text" name="parentOpportunities" placeholder="Describe opportunities for questions or concerns during workshops" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the effectiveness of these workshops evaluated in terms of improving parents' understanding of student safety?</label>
            <div>
              <input type="text" name="workshopEffectiveness" placeholder="Describe how effectiveness of workshops is evaluated" />
            </div>
          </div>

          <div className="form-section">
            <label>What resources or materials are provided to parents during these workshops to help them implement safety measures at home?</label>
            <div>
              <input type="text" name="workshopResources" placeholder="Describe resources or materials provided during workshops" />
            </div>
          </div>

          {/* Parent-Teacher Conferences Section */}
          <h3>Parent-Teacher Conferences</h3>

          <div className="form-section">
            <label>How often are parent-teacher conferences held to discuss student safety and well-being?</label>
            <div>
              <input type="text" name="conferenceFrequency" placeholder="Describe frequency of parent-teacher conferences" />
            </div>
          </div>

          <div className="form-section">
            <label>What specific safety topics are typically addressed during these conferences?</label>
            <div>
              <input type="text" name="conferenceSafetyTopics" placeholder="Describe safety topics addressed during parent-teacher conferences" />
            </div>
          </div>

          <div className="form-section">
            <label>How are parents informed about the importance of discussing safety concerns during these meetings?</label>
            <div>
              <input type="text" name="conferenceCommunication" placeholder="Describe how parents are informed about safety topics during conferences" />
            </div>
          </div>

          <div className="form-section">
            <label>Are there resources or handouts provided to parents during conferences to help them understand school safety policies?</label>
            <div>
              <input type="text" name="conferenceResources" placeholder="Describe resources or handouts provided to parents" />
            </div>
          </div>

          <div className="form-section">
            <label>How do teachers and staff follow up on safety discussions that occur during parent-teacher conferences?</label>
            <div>
              <input type="text" name="conferenceFollowUp" placeholder="Describe follow-up actions after parent-teacher conferences" />
            </div>
          </div>

          {/* Volunteer Programs Section */}
          <h3>Volunteer Programs</h3>

          {/* Classroom Helpers Section */}
          <h4>Classroom Helpers</h4>

          <div className="form-section">
            <label>What training is provided to classroom helpers regarding student safety and emergency procedures?</label>
            <div>
              <input type="text" name="classroomHelperTraining" placeholder="Describe the training provided to classroom helpers" />
            </div>
          </div>

          <div className="form-section">
            <label>How are classroom helpers screened to ensure they are suitable for working with students?</label>
            <div>
              <input type="text" name="helperScreening" placeholder="Describe screening process for classroom helpers" />
            </div>
          </div>

          <div className="form-section">
            <label>In what ways do classroom helpers contribute to maintaining a safe and supportive environment in the classroom?</label>
            <div>
              <input type="text" name="helperContributions" placeholder="Describe contributions of classroom helpers to student safety" />
            </div>
          </div>

          <div className="form-section">
            <label>How are classroom helpers informed about the school’s safety policies and reporting procedures?</label>
            <div>
              <input type="text" name="helperSafetyInfo" placeholder="Describe how classroom helpers are informed of safety policies" />
            </div>
          </div>

          <div className="form-section">
            <label>What feedback mechanisms are in place for classroom helpers to communicate concerns or suggestions about safety in the classroom?</label>
            <div>
              <input type="text" name="helperFeedback" placeholder="Describe feedback mechanisms for classroom helpers" />
            </div>
          </div>

          {/* Parent Chaperones for Field Trips Section */}
          <h4>Parent Chaperones for Field Trips</h4>

          <div className="form-section">
            <label>What requirements must parent chaperones meet before being allowed to accompany students on field trips?</label>
            <div>
              <input type="text" name="chaperoneRequirements" placeholder="Describe requirements for parent chaperones" />
            </div>
          </div>

          <div className="form-section">
            <label>How are parent chaperones trained on emergency procedures and student safety protocols during field trips?</label>
            <div>
              <input type="text" name="chaperoneTraining" placeholder="Describe the training for parent chaperones on field trips" />
            </div>
          </div>

          <div className="form-section">
            <label>What responsibilities do parent chaperones have in ensuring the safety and well-being of students while on outings?</label>
            <div>
              <input type="text" name="chaperoneResponsibilities" placeholder="Describe responsibilities of parent chaperones on field trips" />
            </div>
          </div>

          <div className="form-section">
            <label>How is communication between teachers and parent chaperones handled before, during, and after field trips?</label>
            <div>
              <input type="text" name="chaperoneCommunication" placeholder="Describe communication process between teachers and chaperones" />
            </div>
          </div>

          <div className="form-section">
            <label>What process is in place for parents to report any safety concerns they observe during field trips?</label>
            <div>
              <input type="text" name="chaperoneReportConcerns" placeholder="Describe process for reporting safety concerns during field trips" />
            </div>
          </div>

          {/* Fundraising Events Section */}
          <h4>Fundraising Events</h4>

          <div className="form-section">
            <label>What types of fundraising events are organized to support student safety initiatives and programs?</label>
            <div>
              <input type="text" name="fundraisingEvents" placeholder="Describe types of fundraising events for student safety" />
            </div>
          </div>

          <div className="form-section">
            <label>How do fundraising events engage parents and the community in promoting school safety?</label>
            <div>
              <input type="text" name="fundraisingEngagement" placeholder="Describe how fundraising events promote school safety" />
            </div>
          </div>

          <div className="form-section">
            <label>What measures are in place to ensure the safety of students during fundraising events?</label>
            <div>
              <input type="text" name="fundraisingSafety" placeholder="Describe measures for ensuring student safety during fundraising events" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the use of funds raised communicated to parents and the community?</label>
            <div>
              <input type="text" name="fundraisingCommunication" placeholder="Describe how use of funds is communicated" />
            </div>
          </div>

          <div className="form-section">
            <label>What feedback mechanisms are in place for parents and community members to suggest ideas for future fundraising events?</label>
            <div>
              <input type="text" name="fundraisingFeedback" placeholder="Describe feedback mechanisms for fundraising events" />
            </div>
          </div>

          {/* Community Engagement Surveys Section */}
          <h3>Community Engagement Surveys</h3>

          <div className="form-section">
            <label>What methods are used to collect feedback from the community regarding school safety and emergency preparedness?</label>
            <div>
              <input type="text" name="communityFeedbackMethods" placeholder="Describe methods for collecting community feedback on school safety" />
            </div>
          </div>

          <div className="form-section">
            <label>How often are community engagement surveys conducted to gather input from parents and local stakeholders?</label>
            <div>
              <input type="text" name="surveyFrequency" placeholder="Describe how often community engagement surveys are conducted" />
            </div>
          </div>

          <div className="form-section">
            <label>What types of questions are included in the surveys to assess community perceptions of safety?</label>
            <div>
              <input type="text" name="surveyQuestions" placeholder="Describe the types of questions included in community surveys" />
            </div>
          </div>

          <div className="form-section">
            <label>How is the feedback from community surveys analyzed and used to inform safety policies and practices?</label>
            <div>
              <input type="text" name="surveyAnalysis" placeholder="Describe how feedback from surveys is analyzed and used" />
            </div>
          </div>

          <div className="form-section">
            <label>What follow-up actions are taken to communicate the results of the surveys back to the community?</label>
            <div>
              <input type="text" name="surveyFollowUp" placeholder="Describe follow-up actions taken after community surveys" />
            </div>
          </div>

          {/* Assessing Community Needs and Priorities Section */}
          <h3>Assessing Community Needs and Priorities</h3>

          <div className="form-section">
            <label>How are community needs and priorities related to school safety identified and prioritized?</label>
            <div>
              <input type="text" name="communityNeedsIdentification" placeholder="Describe how community needs related to school safety are identified" />
            </div>
          </div>

          <div className="form-section">
            <label>What tools or methods are used to assess the specific safety concerns of community members?</label>
            <div>
              <input type="text" name="assessmentTools" placeholder="Describe tools or methods used to assess safety concerns" />
            </div>
          </div>

          <div className="form-section">
            <label>How often is the assessment of community needs conducted to ensure it reflects current conditions?</label>
            <div>
              <input type="text" name="communityNeedsAssessmentFrequency" placeholder="Describe how often community needs assessments are conducted" />
            </div>
          </div>

          <div className="form-section">
            <label>In what ways are community members involved in the process of identifying their safety needs and priorities?</label>
            <div>
              <input type="text" name="communityInvolvement" placeholder="Describe how community members are involved in identifying safety needs" />
            </div>
          </div>

          <div className="form-section">
            <label>How do the assessed needs influence the development of school safety programs and initiatives?</label>
            <div>
              <input type="text" name="needsInfluenceOnPrograms" placeholder="Describe how assessed needs influence school safety initiatives" />
            </div>
          </div>

          {/* Planning Community Outreach Strategies Section */}
          <h3>Planning Community Outreach Strategies</h3>

          <div className="form-section">
            <label>What specific outreach methods will be used to engage with community members regarding school safety?</label>
            <div>
              <input type="text" name="outreachMethods" placeholder="Describe outreach methods to engage community members" />
            </div>
          </div>

          <div className="form-section">
            <label>How will the effectiveness of outreach strategies be measured and evaluated?</label>
            <div>
              <input type="text" name="outreachEvaluation" placeholder="Describe how outreach effectiveness will be measured" />
            </div>
          </div>

          <div className="form-section">
            <label>What role will community feedback play in shaping future outreach initiatives?</label>
            <div>
              <input type="text" name="communityFeedbackRole" placeholder="Describe role of community feedback in future outreach initiatives" />
            </div>
          </div>

          <div className="form-section">
            <label>How will the school ensure inclusivity in its outreach efforts to reach diverse community groups?</label>
            <div>
              <input type="text" name="outreachInclusivity" placeholder="Describe how inclusivity will be ensured in outreach efforts" />
            </div>
          </div>

          <div className="form-section">
            <label>What resources or partnerships will be leveraged to enhance community outreach efforts?</label>
            <div>
              <input type="text" name="outreachResources" placeholder="Describe resources or partnerships to enhance outreach efforts" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default ParentInvolvementPage;