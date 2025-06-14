import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import INFO from "../assets/data/user";
import '../assets/styles/Project.scss';

function Project() {
    const { t } = useTranslation();

    return(
    <div className="projects-container" id="projects">
        <h1>{t(`HomePage.Projects.Title`)}</h1>
        <div className="projects-grid">
            {INFO.projects.map((project) => (
                <div className="project" key={project.id}>
                    <Link to={project.path}>
                        <img src={project.cover} className="zoom" alt="thumbnail" width="100%" />
                    </Link>
                    <Link to={project.path}>
                        <h2>{t(`HomePage.Projects.${project.id}.title` as any)}</h2>
                    </Link>
                    <p>{t(`HomePage.Projects.${project.id}.description` as any)}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;