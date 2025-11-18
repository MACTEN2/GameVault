import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePortal from './components/GamePortal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GamePortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;