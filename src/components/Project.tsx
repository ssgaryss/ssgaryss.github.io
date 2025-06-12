import React from "react";
import { Link } from 'react-router-dom';
import INFO from "../assets/data/user";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {INFO.projects.map((project) => (
                <div className="project" key={project.id}>
                    <Link to={project.path}>
                        <img src={project.cover} className="zoom" alt="thumbnail" width="100%" />
                    </Link>
                    <Link to={project.path}>
                        <h2>{project.title}</h2>
                    </Link>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;