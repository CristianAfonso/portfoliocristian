import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/main.scss';
import Header from      './components/header/Header';
import Skills from      './components/skills/Skills';
import Experience from  './components/experience/Experience';
import AboutMe from     './components/aboutMe/AboutMe';
import Education from   './components/education/Education';
import Projects from    './components/projects/Projects';
import Contact from     './components/contact/Contact';
import Footer from      './components/footer/Footer';
import GoTopButton from './atoms/GoTopButton/GoTopButton'
import useScrollHighlight from './observers/IntersectionObserver';

const App: React.FC = () => {
  
  const highlightColor = useScrollHighlight();
  return (
    <Router>
      <Header />
      <div className="fixed-highlight-border" style={{ backgroundColor: highlightColor }}></div>
      <Routes>
        
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <GoTopButton/>
    </Router>
  );
};

export default App;