import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './SurveillanceSystems.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

function SecurityGuardsPage() {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleButtonClick = (section) => {
    // Navigate to specific routes based on section
    switch (section) {
      case 'CCTV Camera':
        navigate('/CCTV');
        break;
      case 'Alarm Systems':
        navigate('/AlarmS');
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

      {/* Physical Security Section */}
      <main className="form-container">
        <h2>Surveillance Systems</h2>
        <form>
          {/* Physical Security Buttons */}
          {['CCTV Camera', 'Alarm Systems'].map((section, index) => (
            <div key={index} className="form-section">
              <label>{section}</label>
              <button type="button" className="form-button" onClick={() => handleButtonClick(section)}>
                Enter Here
              </button>
            </div>
          ))}
        </form>
      </main>
    </div>
  );
}

export default SecurityGuardsPage;

