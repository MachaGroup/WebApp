import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './AccessControl.css'; // Reuse the same CSS file for consistency in styling

// section 7

function AccessRestrictionsPage() {
  const navigate = useNavigate();  // Initialize useNavigate hook for navigation

  // Function to handle back button
  const handleBack = () => {
    navigate(-1);  // Navigates to the previous page
  };

  return (
    <div className="form-page">
      <header className="header">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>←</button> {/* Back button at the top */}
        <h1>7.1.1.1.1 Access Restrictions</h1>
      </header>

      <main className="form-container">
        <form>
          {/* Policy Scope and Definition */}
          <h2>Policy Scope and Definition:</h2>
          <div className="form-section">
            <label>745. What types of websites or online content are explicitly prohibited by the Acceptable Use Policy (AUP) (e.g., adult content, gambling sites)?</label>
            <div>
            <input type="text" name="website-content-type" placeholder="Describe the content type" />
            </div>
          </div>
         
          <div className="form-section">
            <label>746. How are these restrictions defined and categorized within the policy?</label>
            <div>
            <input type="text" name="restrictions-defined" placeholder="Define restrictions" />
            </div>
          </div>

          <div className="form-section">
            <label>747. Are there clear guidelines on what constitutes prohibited websites or online activities?</label>
            <div>
            <input type="text" name="guidelines-for-websites" placeholder="State guidelines" />
            </div>
          </div>

          {/* Implementation and Enforcement */}
          <h2>Implementation and Enforcement:</h2>
          <div className="form-section">
            <label>748. How are access restrictions enforced on the network (e.g., through web filters, firewalls)?</label>
            <div>
            <input type="text" name="restrictions-enforced" placeholder="Describe access restrictions" />
            </div>
          </div>

          <div className="form-section">
            <label>749. What tools or technologies are used to block access to prohibited websites?</label>
            <div>
            <input type="text" name="tools-block-access" placeholder="Describe tools" />
            </div>
          </div>

          <div className="form-section">
            <label>750. How frequently are these tools updated to ensure effectiveness against new or evolving threats?</label>
            <div>
            <input type="radio" name="frequency" value="weekly" /> Weekly
            <input type="radio" name="frequency" value="monthly" /> Monthly 
            <input type="radio" name="frequency" value="yearly" /> Yearly 
            </div>
          </div>

          {/* User Notification and Awareness */}
          <h2>User Notification and Awareness:</h2>
          <div className="form-section">
            <label>751. How are users informed about the access restrictions and prohibited websites (e.g., through training, policy documents)?</label>
            <div>
            <input type="radio" name="how-informed" value="training" /> Training
            <input type="radio" name="how-informed" value="policy doc" /> Policy Documents 
            </div>
          </div>

          <div className="form-section">
            <label>752. Are there mechanisms in place to notify users when they attempt to access a restricted site?</label>
            <div>
              <input type="radio" name="mechanims-placed" value="yes" /> Yes
              <input type="radio" name="mechanims-placed" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>753. How is compliance with the AUP communicated to users to ensure they understand the restrictions?</label>
            <div>
            <input type="text" name="compliance-communicated" placeholder="Explain communication" />
            </div>
          </div>

          {/* Exceptions and Approvals */}
          <h2>Exceptions and Approvals:</h2>
          <div className="form-section">
            <label>754. What procedures are in place for requesting exceptions to the access restrictions (e.g., for educational or research purposes)?</label>
            <div>
            <input type="text" name="procedures-place" placeholder="Describe procedures" />
            </div>
          </div>

          <div className="form-section">
            <label>755. Who is authorized to review and approve requests for access to restricted websites?</label>
            <div>
            <input type="text" name="authorize-review" placeholder="State authorized" />
            </div>
          </div>

          <div className="form-section">
            <label>756. Are there documented processes for handling and documenting exceptions?</label>
            <div>
            <input type="radio" name="document-processes" value="yes" /> Yes
            <input type="radio" name="document-processes" value="no" /> No
            </div>
          </div>

          {/* Monitoring and Reporting */}
          <h2>Monitoring and Reporting:</h2>
          <div className="form-section">
            <label>757. How is user activity monitored to ensure compliance with access restrictions (e.g., logging, auditing)?</label>
            <div>
            <input type="radio" name="user-activity-monitored" value="logging" /> Logging
            <input type="radio" name="user-activity-monitored" value="auditing" /> Auditing
            </div>
          </div>

          <div className="form-section">
            <label>758. What methods are used to track and report attempts to access prohibited websites?</label>
            <div>
            <input type="text" name="methods to track" placeholder="State methods" />
            </div>
          </div>

          <div className="form-section">
            <label>759. How are violations of access restrictions addressed and managed?</label>
            <div>
            <input type="text" name="violations-addressed" placeholder="State management" />
            </div>
          </div>

          {/* Policy Review and Updates */}
          <h2>Policy Review and Updates:</h2>
          <div className="form-section">
            <label>760. How frequently is the Acceptable Use Policy reviewed and updated to reflect changes in technology and threats?</label>
            <div>
            <input type="radio" name="frequency" value="weekly" /> Weekly
            <input type="radio" name="frequency" value="monthly" /> Monthly 
            <input type="radio" name="frequency" value="yearly" /> Yearly 
            </div>
          </div>

          <div className="form-section">
            <label>761. Who is responsible for reviewing and revising the policy, and what criteria are used for updates?</label>
            <div>
            <input type="text" name="responsible" placeholder="State responsible" />
            </div>
          </div>

          <div className="form-section">
            <label>762. How are updates communicated to users to ensure they are aware of any changes in access restrictions?</label>
            <div>
            <input type="text" name="updates-communicated" placeholder="State method" />
            </div>
          </div>

          {/* Legal and Regulatory Compliance */}
          <h2>Legal and Regulatory Compliance:</h2>
          <div className="form-section">
            <label>763. What legal or regulatory requirements impact the development and enforcement of access restrictions (e.g., data protection laws)?</label>
            <div>
            <input type="text" name="legal-requirments" placeholder="State requirements" />
            </div>
          </div>

          <div className="form-section">
            <label>764. How does the policy ensure compliance with relevant laws and regulations regarding internet usage?</label>
            <div>
            <input type="text" name="policy-compliance" placeholder="State policy compliance" />
            </div>
          </div>

          <div className="form-section">
            <label>765. Are there procedures for addressing legal or regulatory issues related to access restrictions?</label>
            <div>
            <input type="text" name="procedures-legal" placeholder="State procedures" />
            </div>
          </div>

          {/* User Education and Training */}
          <h2>User Education and Training:</h2>
          <div className="form-section">
            <label>766. What training programs are in place to educate users about the Acceptable Use Policy and access restrictions?</label>
            <div>
            <input type="text" name="training-programs" placeholder="State programs" />
            </div>
          </div>

          <div className="form-section">
            <label>767. How is the effectiveness of the training assessed and improved over time?</label>
            <div>
            <input type="text" name="effectiveness" placeholder="State how" />
            </div>
          </div>

          <div className="form-section">
            <label>768. Are there resources available for users to better understand the reasons for access restrictions?</label>
            <div>
            <input type="radio" name="document-processes" value="yes" /> Yes
            <input type="radio" name="document-processes" value="no" /> No
            </div>
          </div>

          {/* Incident Management */}
          <h2>Incident Management:</h2>
          <div className="form-section">
            <label>769. What steps are taken when a user repeatedly attempts to access prohibited websites or violates access restrictions?</label>
            <div>
            <input type="text" name="prohibit-websites" placeholder="Describe steps" />
            </div>
          </div>

          <div className="form-section">
            <label>770. How are incidents related to access restriction violations documented and managed?</label>
            <div>
            <input type="text" name="incident-restriction" placeholder="State incident relations" />
            </div>
          </div>

          <div className="form-section">
            <label>771. What disciplinary actions are outlined in the policy for non-compliance?</label>
            <div>
            <input type="text" name="actions-policy" placeholder="State actions" />
            </div>
          </div>

          {/* Feedback and Improvement */}
          <h2>Feedback and Improvement:</h2>
          <div className="form-section">
            <label>772. How is feedback collected from users regarding the effectiveness and impact of access restrictions?</label>
            <div>
            <input type="text" name="feedback-collected" placeholder="State how" />
            </div>
          </div>

          <div className="form-section">
            <label>773. Are there mechanisms for users to provide suggestions or report issues related to access restrictions?</label>
            <div>
            <input type="radio" name="document-processes" value="yes" /> Yes
            <input type="radio" name="document-processes" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>774. How is feedback used to make improvements to the Acceptable Use Policy and access restriction mechanisms?</label>
            <div>
            <input type="text" name="feedback-improvement" placeholder="State how" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default AccessRestrictionsPage;