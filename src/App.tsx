import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Navigation, MobileNavigation } from "./components/Navigation";
import { SocialLinks } from "./components/SocialLinks";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import VestaLearnings from "./components/VestaLearnings";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <MobileNavigation />
        <SocialLinks />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/vesta-learnings" element={<VestaLearnings />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/mstr-vs-btc"
              element={
                <Navigate to="https://ze-codes.github.io/mstr-vs-btc" replace />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
