import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import { Box, Typography, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkButton from '../components/LinkButton';
import TOC from '../components/TOC';
import TransText from '../components/TransParagraph';
import PageTurningButton from '../components/PageTurningButton';

import abstract1 from '../assets/images/project-pika-engine/abstract-2D.mp4';
import abstract2 from '../assets/images/project-pika-engine/abstract-3D.mp4';
import ECS from '../assets/images/project-pika-engine/ECS.png';
import Lighting from '../assets/images/project-pika-engine/Lighting.mp4';
import Material from '../assets/images/project-pika-engine/Material.png';
import Physics from '../assets/images/project-pika-engine/Physics.png';
import Serialization from '../assets/images/project-pika-engine/Serialization.mp4';

interface PageProps {
  mode: 'light' | 'dark';
}

const CODAnalysisPage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-cod-analysis';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('CODAnalysisPage.Contents.items.Abstract') },
  ];
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { id, cover } = project;

  return (
    <div className={`project-page-wrapper ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="project-card">
        <div className="project-content">
          <div className="project-hero">
            <img src={cover} alt={`${t(`HomePage.Projects.${id}.title` as any)} Hero`} />
          </div>
          <h1 className="project-title">{t('CODAnalysisPage.Title')}</h1>
          <div className="project-links">
            {/* <LinkButton href="/files/项目介绍.pptx" label="PPT" icon={<InsertDriveFileIcon />} /> */}
          </div>
          <div className="project-contents">
            <TOC title={t('CODAnalysisPage.Contents.title')} items={contents} />
          </div>
          <Divider className="contents-divider" />
          <div className="project-detail">
            <section id="Abstract">
                
            </section>
            <Divider className="contents-divider" />
            <div className="page-turning-wrapper">
              <PageTurningButton
                currentId={current_page_id}
                projects={INFO.projects}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CODAnalysisPage;
