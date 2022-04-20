import React, { useState } from "react";


function Portfolio(props) {

    const {
        projects = [],
        setCurrentProject,
        currentProject,
    } = props;

    return (
        <section>
            <h1>Portfolio</h1>
            {projects.map((project) => {
                <li
                    className={`mx-1 ${currentProject.name === project.name
                        }`}
                    key={project.name}
                >
                    <span
                        onClick={() => {
                            setCurrentProject(project)
                        }}
                    >
                        {project.name}
                    </span>
                </li>
            })}
            <div className="flex-row">
                {/* <img
                src={photo}
                alt=""
                className="img-thumbnail mx-1"
                /> */}
            </div>
        </section>
    )
}

export default Portfolio;