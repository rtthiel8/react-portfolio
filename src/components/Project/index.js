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
                        <a href={project.GitHubLink}>
                        <button>
                            Github
                        </button>
                        </a>
                        <div className="flex-row">
                            <img
                                src={project.img}
                                alt=""
                                className="img-thumbnail mx-1"
                            />
                        </div>
                    </li>
                ))}
            </ul>

        </section>
    )
}

export default Project;