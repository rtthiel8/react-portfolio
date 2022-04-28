import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';

function App() {

  const [sections] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);


  return (
    <div id="page-container">
      <div id="content-wrap">
        <Header>
          <Nav
            sections={sections}
            setCurrentSection={setCurrentSection}
            currentSection={currentSection}
          ></Nav>
        </Header>
        <main>
          <Page currentSection={currentSection} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
