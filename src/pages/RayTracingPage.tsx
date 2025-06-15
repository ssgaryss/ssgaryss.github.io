import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkButton from '../components/LinkButton';

const PikaEnginePage: React.FC = () => {
  const { t } = useTranslation();
  const project = INFO.projects.find(p => p.id === 'project-raytracing')!;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { id, link, cover } = project;

  return (
    <div className="project-page-wrapper">
      <div className="project-card">
        <div className="project-content">
          <div className="project-hero">
            <img src={cover} alt={`${t(`HomePage.Projects.${id}.title` as any)} Hero`} />
          </div>
          <h1 className="project-title">{t(`HomePage.Projects.${id}.title` as any)}</h1>
          <div className="project-links">
            <LinkButton href={link} label="Code" icon={<GitHubIcon />} />
          </div>
          <section className="project-abstract">
            <h2>Abstract</h2>
            <p>{t(`HomePage.Projects.${id}.description` as any)}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PikaEnginePage;
