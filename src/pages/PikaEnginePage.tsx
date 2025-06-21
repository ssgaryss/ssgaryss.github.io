import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import { Box, Typography, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkButton from '../components/LinkButton';
import TOC from '../components/TOC';
import { TransText } from '../components/TransParagraph';
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

const PikaEnginePage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-pika-engine';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('PikaEnginePage.Contents.items.Abstract') },
    { id: 'ECS', title: t('PikaEnginePage.Contents.items.ECS') },
    { id: 'Lighting&Shadow', title: t('PikaEnginePage.Contents.items.Lighting&Shadow') },
    { id: 'Material', title: t('PikaEnginePage.Contents.items.Material') },
    { id: 'Render', title: t('PikaEnginePage.Contents.items.Render') },
    { id: 'Physics', title: t('PikaEnginePage.Contents.items.Physics') },
    { id: 'Serialization', title: t('PikaEnginePage.Contents.items.Serialization') },
    { id: 'Conclusion', title: t('PikaEnginePage.Contents.items.Conclusion') },
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
          <h1 className="project-title">{t('PikaEnginePage.Title')}</h1>
          <div className="project-links">
            <LinkButton href="https://github.com/ssgaryss/Pika.git" label="Code" icon={<GitHubIcon />} />
            <LinkButton href="/files/项目介绍.pptx" label="PPT" icon={<InsertDriveFileIcon />} />
          </div>
          <div className="project-contents">
            <TOC title={t('PikaEnginePage.Contents.title')} items={contents} />
          </div>
          <Divider className="contents-divider" />
          <div className="project-detail">
            <section id="Abstract">
              <h2>{t('PikaEnginePage.Abstract.title')}</h2>
              <p>
                {t('PikaEnginePage.Abstract.content1', { returnObjects: true }).map(
                    (_, index, array) => (
                    <TransText
                      key={index}
                      i18nKey="PikaEnginePage.Abstract.content1"
                      index={index}
                      isLast={index === array.length - 1}
                      breakCount={2}
                    />
                    )
                )}
              </p>
              <video controls>
                <source src={abstract1} type="video/mp4" />
                Failed to load video. Please check your connection or try again later.
              </video>
              <p>
                {t('PikaEnginePage.Abstract.content2', { returnObjects: true }).map(
                    (_, index, array) => (
                    <TransText
                      key={index}
                      i18nKey="PikaEnginePage.Abstract.content2"
                      index={index}
                      isLast={index === array.length - 1}
                      breakCount={2}
                    />
                    )
                )}
              </p>
              <video controls>
                <source src={abstract2} type="video/mp4" />
                Failed to load video. Please check your connection or try again later.
              </video>
            </section>
            <section id="ECS">
              <h2>{t('PikaEnginePage.ECS.title')}</h2>
              <p>
                {t('PikaEnginePage.ECS.content1', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.ECS.content1" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://github.com/skypjack/entt"]}
                    breakCount={2}
                  />
                ))}
              </p>
              <img src={ECS} alt="Unable to display image" />
              <p>
                {t('PikaEnginePage.ECS.content2', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.ECS.content2" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Lighting&Shadow">
              <h2>{t('PikaEnginePage.Lighting&Shadow.title')}</h2>
              <p>
                {t('PikaEnginePage.Lighting&Shadow.content1', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.Lighting&Shadow.content1" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
              <video controls>
                <source src={Lighting} type="video/mp4" />
                Failed to load video. Please check your connection or try again later.
              </video>
              <p>
                {t('PikaEnginePage.Lighting&Shadow.content2', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.Lighting&Shadow.content2" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Material">
              <h2>{t('PikaEnginePage.Material.title')}</h2>
              <p>
                {t('PikaEnginePage.Material.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.Material.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
              <img src={Material} alt="Unable to display image" />
            </section>
            <section id="Render">
              <h2>{t('PikaEnginePage.Render.title')}</h2>
              <p>
                {t('PikaEnginePage.Render.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.Render.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Physics">
              <h2>{t('PikaEnginePage.Physics.title')}</h2>
              <p>
                {t('PikaEnginePage.Physics.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.Physics.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://github.com/erincatto/box2d", "https://github.com/NVIDIAGameWorks/PhysX"]}
                    breakCount={2}
                  />
                ))}
              </p>
              <img src={Physics} alt="Unable to display image" />
            </section>
            <section id="Serialization">
              <h2>{t('PikaEnginePage.Serialization.title')}</h2>
              <p>
                {t('PikaEnginePage.Serialization.content1', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.Serialization.content1" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://github.com/jbeder/yaml-cpp"]}
                    breakCount={2}
                  />
                ))}
              </p>
              <video controls>
                <source src={Serialization} type="video/mp4" />
                Failed to load video. Please check your connection or try again later.
              </video>
              <p>
                {t('PikaEnginePage.Serialization.content2', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.Serialization.content2" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://github.com/assimp/assimp"]}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Conclusion">
              <h2>{t('PikaEnginePage.Conclusion.title')}</h2>
              <p>
                {t('PikaEnginePage.Conclusion.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.Conclusion.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://www.callofduty.com/cn/zh/blackops6", "https://infinitynikki.nuanpaper.com/home"]}
                    breakCount={2}
                  />
                ))}
              </p>
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

export default PikaEnginePage;
