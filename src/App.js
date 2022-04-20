import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {

  const [projects] =  useState([
    {
        name: "Project 1",
        description: "what i built",
    },
    {
        name: "Project 2",
        description: "I also made"
    },
    {
        name: "Project 3",
        description: "app for this"
    }
]);

const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        ></Portfolio>
      </main>
    </div>
  );
}

export default App;
