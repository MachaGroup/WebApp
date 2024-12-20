import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './FormQuestions.css';  // Ensure this is linked to your universal CSS

function FenceSensorsPage() {
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
        <h1>Fence Sensors Assessment</h1>
      </header>

      <main className="form-container">
        <form>
          {/* Sensor Placement and Coverage */}
          <h2>Sensor Placement and Coverage:</h2>
          <div className="form-section">
            <label>Are the fence sensors strategically placed along the perimeter to detect tampering or unauthorized access attempts?</label>
            <div>
              <input type="radio" name="strategic-placement" value="yes" /> Yes
              <input type="radio" name="strategic-placement" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Do they cover the entire perimeter, including all fence lines and potential entry points?</label>
            <div>
              <input type="radio" name="full-coverage" value="yes" /> Yes
              <input type="radio" name="full-coverage" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are there any areas along the fence line where sensor coverage is insufficient?</label>
            <div>
              <input type="text" name="insufficient-coverage" placeholder="Describe areas of insufficient coverage" />
            </div>
          </div>

          {/* Detection Sensitivity */}
          <h2>Detection Sensitivity:</h2>
          <div className="form-section">
            <label>Are the fence sensors set to an appropriate sensitivity level to detect tampering, such as cutting, climbing, or lifting of the fence?</label>
            <div>
              <input type="radio" name="sensitivity-level" value="yes" /> Yes
              <input type="radio" name="sensitivity-level" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Have adjustments been made to minimize false alarms caused by environmental factors such as wind, vegetation, or wildlife?</label>
            <div>
              <input type="radio" name="false-alarm-adjustments" value="yes" /> Yes
              <input type="radio" name="false-alarm-adjustments" value="no" /> No
            </div>
          </div>

          {/* Response Time and Alarm Triggering */}
          <h2>Response Time and Alarm Triggering:</h2>
          <div className="form-section">
            <label>Do the fence sensors respond quickly to detected tampering and trigger alarms promptly?</label>
            <div>
              <input type="radio" name="quick-response" value="yes" /> Yes
              <input type="radio" name="quick-response" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Is there a mechanism in place to differentiate between normal activities (e.g., wind-induced movements) and suspicious behaviors to minimize false alarms?</label>
            <div>
              <input type="radio" name="differentiation-mechanism" value="yes" /> Yes
              <input type="radio" name="differentiation-mechanism" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are alarms transmitted to monitoring stations or security personnel in real-time for immediate response?</label>
            <div>
              <input type="radio" name="real-time-transmission" value="yes" /> Yes
              <input type="radio" name="real-time-transmission" value="no" /> No
            </div>
          </div>

          {/* Integration with Alarm Systems */}
          <h2>Integration with Alarm Systems:</h2>
          <div className="form-section">
            <label>Are the fence sensors integrated with the overall perimeter alarm system?</label>
            <div>
              <input type="radio" name="integrated-alarm-system" value="yes" /> Yes
              <input type="radio" name="integrated-alarm-system" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Do they communicate seamlessly with alarm control panels and monitoring stations?</label>
            <div>
              <input type="radio" name="seamless-communication" value="yes" /> Yes
              <input type="radio" name="seamless-communication" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Is there coordination between fence sensor activations and other alarm devices such as sirens, strobe lights, or notification systems?</label>
            <div>
              <input type="radio" name="coordination-with-other-devices" value="yes" /> Yes
              <input type="radio" name="coordination-with-other-devices" value="no" /> No
            </div>
          </div>

          {/* Remote Monitoring and Management */}
          <h2>Remote Monitoring and Management:</h2>
          <div className="form-section">
            <label>Is there remote access and monitoring functionality for the fence sensors?</label>
            <div>
              <input type="radio" name="remote-monitoring" value="yes" /> Yes
              <input type="radio" name="remote-monitoring" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Can security personnel view sensor status, receive alerts, and adjust settings remotely as needed?</label>
            <div>
              <input type="radio" name="remote-adjustments" value="yes" /> Yes
              <input type="radio" name="remote-adjustments" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Is there secure authentication and encryption protocols in place to prevent unauthorized access to sensor controls?</label>
            <div>
              <input type="radio" name="secure-protocols" value="yes" /> Yes
              <input type="radio" name="secure-protocols" value="no" /> No
            </div>
          </div>

          {/* Durability and Reliability */}
          <h2>Durability and Reliability:</h2>
          <div className="form-section">
            <label>Are the fence sensors designed to withstand outdoor environmental factors such as temperature variations, moisture, and physical impact?</label>
            <div>
              <input type="radio" name="durable-design" value="yes" /> Yes
              <input type="radio" name="durable-design" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are they constructed from durable materials capable of withstanding exposure to the elements and potential tampering attempts?</label>
            <div>
              <input type="radio" name="durable-materials" value="yes" /> Yes
              <input type="radio" name="durable-materials" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Have the sensors undergone testing or certification to verify reliability and durability?</label>
            <div>
              <input type="radio" name="testing-certification" value="yes" /> Yes
              <input type="radio" name="testing-certification" value="no" /> No
            </div>
          </div>

          {/* Maintenance and Upkeep */}
          <h2>Maintenance and Upkeep:</h2>
          <div className="form-section">
            <label>Is there a regular maintenance schedule in place for the fence sensors?</label>
            <div>
              <input type="radio" name="maintenance-schedule" value="yes" /> Yes
              <input type="radio" name="maintenance-schedule" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are maintenance tasks, such as testing sensor functionality, replacing batteries, and inspecting sensor connections, performed according to schedule?</label>
            <div>
              <input type="radio" name="maintenance-tasks" value="yes" /> Yes
              <input type="radio" name="maintenance-tasks" value="no" /> No
            </div>
          </div>

          <div className="form-section">
            <label>Are there records documenting maintenance activities, repairs, and any issues identified during inspections?</label>
            <div>
              <input type="radio" name="maintenance-records" value="yes" /> Yes
              <input type="radio" name="maintenance-records" value="no" /> No
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default FenceSensorsPage;
