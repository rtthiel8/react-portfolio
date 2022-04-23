import React from 'react';

function Nav(props) {

    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;

    return (

        <nav>
            <ul className='flex-row'>
                {sections.map((section) => (
                    <li
                        className={`mx-2 ${currentSection.name === section.name
                            }`}
                        key={section.name}
                    >
                        <a href={section.name} onClick={(e) => {
                            e.preventDefault()
                            setCurrentSection(section)
                        }} >
                            {section.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;
