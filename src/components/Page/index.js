import React, { useState } from "react";
import About from '../About';
import Project from '../Project';
import ContactForm from '../Contact';
import Resume from '../Resume';



function Page({ currentSection }) {

    const [projects] = useState([
        {
            title: "My Outdoor Space",
            description: "A forum for outdoor enthusiasts.",
            img: "my-os.png",
            deployedLink: "https://my-outdoor-space.herokuapp.com/",
            gitHubLink: "https://github.com/rtthiel8/my-outdoor-space"
        },
        {
            title: "Brewber",
            description: "Find food and brews near you!",
            img: "Brewber.png",
            deployedLink: "https://hmlessard.github.io/Brewber/",
            gitHubLink: "https://github.com/rtthiel8/Brewber"
        },
        {
            title: "Peddlr",
            description: "A cyclists virtual best friend.",
            img: "Biker.jpg"
        },
        {
            title: "Project 4",
            description: "Coming Soon",
            img: "Mountains.jpg"
        },
        {
            title: "Project 5",
            description: "Coming Soon",
            img: "coming-soon.jpg"
        },
        {
            title: "Project 6",
            description: "Coming Soon",
            img: "coming-soon.jpg"
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

