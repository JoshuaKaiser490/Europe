import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Germany from './pages/Germany';
import France from './pages/France';
import Italy from './pages/Italy';
import Spain from './pages/Spain';
import { EuropeProvider } from './context/EuropeContext';

const App = () => {
  return (
    <EuropeProvider>
      <Router>
        <Header />
        <main style={{ padding: '2em' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/germany" element={<Germany />} />
            <Route path="/france" element={<France />} />
            <Route path="/italy" element={<Italy />} />
            <Route path="/spain" element={<Spain />} />
          </Routes>
        </main>
      </Router>
    </EuropeProvider>
  );
};

export default App;
