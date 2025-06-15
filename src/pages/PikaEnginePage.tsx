import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import { Box, Typography, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkButton from '../components/LinkButton';
import TOC from '../components/TOC';


const PikaEnginePage: React.FC = () => {
  const { t } = useTranslation();
  const project = INFO.projects.find(p => p.id === 'project-pika-engine')!;
  const contents = [
    { id: 'abstract', title: t('PikaEnginePage.Contents.items.abstract') },
    { id: 'ecs', title: t('PikaEnginePage.Contents.items.ecs') },
    { id: 'Lighting&Shadow', title: t('PikaEnginePage.Contents.items.Lighting&Shadow') },
    { id: 'Serialization', title: t('PikaEnginePage.Contents.items.Serialization') },
  ];
  
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
          <h1 className="project-title">{t('PikaEnginePage.Title')}</h1>
          <div className="project-links">
            <LinkButton href={link} label="Code" icon={<GitHubIcon />} />
            <LinkButton href="/files/项目介绍.pptx" label="PPT" icon={<InsertDriveFileIcon />} />
          </div>
          <div className="project-contents">
            <TOC title={t('PikaEnginePage.Contents.title')} items={contents} />
          </div>
          <Divider className="contents-divider" />
          <div className="project-detail">
            <section id="abstract">
              <h2>{t('PikaEnginePage.Abstract.title')}</h2>
              <p>{t('PikaEnginePage.Abstract.content')}</p>
              <img src={cover} alt={`${t(`HomePage.Projects.${id}.title` as any)} Hero`} />
            </section>
            <section id="ecs">
              <h2>{t('PikaEnginePage.ECS.title')}</h2>
              <p>{t('PikaEnginePage.ECS.content')}</p>
            </section>
            <section id="Lighting&Shadow">
              <h2>{t('PikaEnginePage.Lighting&Shadow.title')}</h2>
              <p>{t('PikaEnginePage.Lighting&Shadow.content')}</p>
            </section>
            <section id="Serialization">
              <h2>{t('PikaEnginePage.Serialization.title')}</h2>
              <p>{t('PikaEnginePage.Serialization.content')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PikaEnginePage;
