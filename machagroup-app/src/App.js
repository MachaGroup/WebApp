import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';  // Ensure HomePage is correctly imported
import FormInputPage from './FormInputPage';  // Ensure FormInputPage is correctly imported
import MainScreen from './MainScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<FormInputPage />} />
        <Route path="/Main" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

