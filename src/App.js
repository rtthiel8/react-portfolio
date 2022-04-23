import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  
  const [projects] = useState([
    {
      title: "Project 1",
      description: "what i built",
    },
    {
      title: "Project 2",
      description: "I also made"
    },
    {
      title: "Project 3",
      description: "app for this"
    },
    {
      title: "Super",
      description: "best evah"
    },
    {
      title: "Runnin Bud",
      description: "Get up and go today."
    }
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
      <Header />
      <main>
        <About />
        <Project
          projects={projects}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
        ></Project>
        <ContactForm />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
