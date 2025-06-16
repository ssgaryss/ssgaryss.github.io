import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
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
                        <h2 className="project-title-with-date">
                            <span className="project-title">
                                {t(`HomePage.Projects.${project.id}.title` as any)}
                            </span>
                            <span className="project-date">{project.date}</span>
                        </h2>
                        <p>{t(`HomePage.Projects.${project.id}.description` as any)}</p>
                        <div className="chip-container">
                            {project.keyword.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;