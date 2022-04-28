import React, { useState } from "react";
import About from '../About';
import Project from '../Project';
import ContactForm from '../Contact';
import Resume from '../Resume';



function Page({ currentSection }) {

    const [projects] = useState([
        {
            title: "Brewber",
            description: "find food and brews near you!"
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
        },
        {
            title: "Peddlr",
            description: "A cyclists virtual best friend."
        }
    ]);


    const [currentProject, setCurrentProject] = useState(projects[0]);



    const renderPage = () => {
        switch (currentSection.name) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Project projects={projects} currentProject={currentProject} setCurrentProject={setCurrentProject} />
            case 'Contact':
                return <ContactForm />
            case 'Resume':
                return <Resume />
            default:
                return <About />
        }
    }

    return (
        <section>
            {renderPage()}
        </section>
    )
}

export default Page;

