import React, { useState } from "react";
import Nav from "../Nav";

function Header() {

 
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
        <header>
            <h2>
                Ryan Thiel
            </h2>
        <Nav 
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}

        ></Nav>
        </header>
    )
}

export default Header;