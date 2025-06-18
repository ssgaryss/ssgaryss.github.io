import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkButton from '../components/LinkButton';
import PageTurningButton from '../components/PageTurningButton';

const PikaEnginePage: React.FC = () => {
  const { t } = useTranslation();
  const current_page_id = 'project-raytracing';
  const project = INFO.projects.find(p => p.id === current_page_id)!;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { id, cover } = project;

  return (
    <div className="project-page-wrapper">
      <div className="project-card">
        <div className="project-content">
          <div className="project-hero">
            <img src={cover} alt={`${t(`HomePage.Projects.${id}.title` as any)} Hero`} />
          </div>
          <h1 className="project-title">{t(`HomePage.Projects.${id}.title` as any)}</h1>
          <div className="project-links">
            <LinkButton href="https://github.com/ssgaryss/Ray-Tracing.git" label="Code" icon={<GitHubIcon />} />
          </div>
          <section className="project-abstract">
            <h2>Abstract</h2>
            <p>{t(`HomePage.Projects.${id}.description` as any)}</p>
          </section>
          <div className="page-turning-wrapper">
            <PageTurningButton
              currentId="project-raytracing"
              projects={INFO.projects}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PikaEnginePage;
