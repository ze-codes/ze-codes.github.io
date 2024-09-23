import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import VestaLearnings from "./components/VestaLearnings";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";

function FadeInWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="fade-in">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<FadeInWrapper><Home /></FadeInWrapper>} />
            <Route path="/experiences" element={<FadeInWrapper><Experiences /></FadeInWrapper>} />
            <Route path="/projects" element={<FadeInWrapper><Projects /></FadeInWrapper>} />
            <Route path="/vesta-learnings" element={<FadeInWrapper><VestaLearnings /></FadeInWrapper>} />
            <Route path="/blog" element={<FadeInWrapper><Blog /></FadeInWrapper>} />
            <Route path="/hobbies" element={<FadeInWrapper><Hobbies /></FadeInWrapper>} />
            <Route path="/contact" element={<FadeInWrapper><Contact /></FadeInWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;