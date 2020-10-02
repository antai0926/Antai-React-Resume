import React from 'react';
import './App.scss';
import Profile from './component/Profile/Profile.component.jsx';
import Experience from './component/Experience/Experience.compnent';
import Skills from './component/Skills/Skills.component';
import Portfolio from './component/Portfolio/Portfolio.component';
import Education from './component/Education/Education.component';

function App() {
  return (
    <div className="container">
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
