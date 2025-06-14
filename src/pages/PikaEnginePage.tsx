import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkButton from '../components/LinkButton';

const PikaEnginePage: React.FC = () => {
  const { t } = useTranslation();
  const project = INFO.projects.find(p => p.id === 'project-pika-engine')!;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { id, link, cover } = project;

  return (
    <div className="project-page-wrapper">
      <div className="project-card">
        <div className="project-content">
          <h1 className="project-title">{t(`HomePage.Projects.${id}.title` as any)}</h1>
          <div className="project-links">
            <LinkButton href={link} label="Code" icon={<GitHubIcon />} />
            <LinkButton href="/files/项目介绍.pptx" label="PPT" icon={<InsertDriveFileIcon />} />
          </div>
          <div className="project-hero">
            <img src={cover} alt={`${t(`HomePage.Projects.${id}.title` as any)} Hero`} />
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
