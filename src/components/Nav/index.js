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
                        onClick={() => {
                            setCurrentSection(section)
                        }}
                    >

                        <a href='#${section.name}'>
                            {section.name}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

// <nav>
//     <ul className="flex-row">
//         <li className='mx-2'>
//             <a href="#about" onClick={() => setCurrentSection(true)}>
//                 About Me
//             </a>
//         </li>
//         <li>
//             <a href="#portfolio" onClick={() => setCurrentSection(false)}>
//                 Portfolio
//             </a>
//         </li>
//         <li>
//             <a href="#contact" onClick={() => setCurrentSection(false)}>
//                 Contact    
//             </a>
//         </li>
//         <li>
//             <a href="#resume" onClick={() => setCurrentSection(false)}>
//                 Resume
//             </a>
//         </li>
//     </ul>
// </nav>
//     );
// }

export default Nav;

