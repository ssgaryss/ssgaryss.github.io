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
import abstract1 from '../assets/images/project-pika-engine/abstract-2D.mp4';
import abstract2 from '../assets/images/project-pika-engine/abstract-3D.mp4';

const PikaEnginePage: React.FC = () => {
  const { t } = useTranslation();
  const project = INFO.projects.find(p => p.id === 'project-pika-engine')!;
  const contents = [
    { id: 'abstract', title: t('PikaEnginePage.Contents.items.abstract') },
    { id: 'ecs', title: t('PikaEnginePage.Contents.items.ecs') },
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
            <section id="ecs">
              <h2>{t('PikaEnginePage.ECS.title')}</h2>
              <p>
                {t('PikaEnginePage.ECS.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PikaEnginePage.ECS.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://github.com/skypjack/entt"]}
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
            </section>
            <section id="Render">
              <h2>{t('PikaEnginePage.Render.title')}</h2>
              <p>{t('PikaEnginePage.Render.content')}</p>
            </section>
            <section id="Physics">
              <h2>{t('PikaEnginePage.Physics.title')}</h2>
              <p>{t('PikaEnginePage.Physics.content')}</p>
            </section>
            <section id="Serialization">
              <h2>{t('PikaEnginePage.Serialization.title')}</h2>
              <p>{t('PikaEnginePage.Serialization.content')}</p>
            </section>
            <section id="Conclusion">
              <h2>{t('PikaEnginePage.Conclusion.title')}</h2>
              <p>{t('PikaEnginePage.Conclusion.content')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PikaEnginePage;
