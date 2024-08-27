import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import VestaLearnings from './components/VestaLearnings';
import Blog from './components/Blog';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/vesta-learnings" element={<VestaLearnings />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;