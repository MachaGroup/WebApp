import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './PhysicalSecurity.css'; // Reuse the same CSS file for consistency in styling
import logo from '../assets/MachaLogo.png';  // Adjust the path relative to the current file location

function PhysicalSecurityPage() {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleButtonClick = (section) => {
    // Navigate to specific routes based on section
    switch (section) {
      case 'Access Control':
        navigate('/Access');
        break;
      case 'Surveillance Systems':
        navigate('/surveillance');
        break;
      case 'Security Personnel':
<<<<<<< HEAD
        navigate('/Security');
=======
        navigate('/security-personnel');
>>>>>>> 016dd032272e5d1c63fc1e08a785c8ab11ac95f3
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
        <h2>Physical Security</h2>
        <form>
          {/* Physical Security Buttons */}
          {['Access Control', 'Surveillance Systems', 'Security Personnel'].map((section, index) => (
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

<<<<<<< HEAD
export default PhysicalSecurityPage;

=======
export default PhysicalSecurityPage;
>>>>>>> 016dd032272e5d1c63fc1e08a785c8ab11ac95f3
