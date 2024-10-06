import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import FormInputPage from './FormInputPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/" exact component={HomePage} />
        <Route path="/form" component={FormInputPage} />
      </Routes>
    </Router>
  );
}

export default App;
