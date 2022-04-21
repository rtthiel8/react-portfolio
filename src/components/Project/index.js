import React from "react";


function Project(props) {

    const {
        projects = [],
        setCurrentProject,
        currentProject,
    } = props;

    

    return (
        <section>
            <h1>Portfolio</h1>
            <ul>
            {projects.map((project) => (
                <li
                    className={`mx-1 ${currentProject.title === project.title
                        }`}
                    key={project.title}
                >
                    <h3>
                        {project.title}
                    </h3>
                    <h6>
                        {project.description}
                    </h6>
                    <button
                        onClick={() => {
                            setCurrentProject(project)
                        }}
                    >
                        See it here!
                    </button>
                    <button>
                        Github 
                    </button>
                </li>
            ))}
            </ul>
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

export default Project;