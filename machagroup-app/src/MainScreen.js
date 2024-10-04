import React from 'react';
import './MainScreen.css';  // We will style it later

function MainScreen() {
  return (
    <div className="main-container">
      <header className="header">
        <h1>The MACHA Group</h1>
      </header>

      <div className="welcome-message">
        <h2>Welcome Back!</h2>
      </div>

      <div className="buttons-container">
        <button>Create a Form</button>
        <button>Pricing</button>
        <button>About Us</button>
        <button>FAQ</button>
        <button>Contact Us</button>
        <button>Settings</button>
      </div>

      <footer>
    
      </footer>
    </div>
  );
}

export default MainScreen;
