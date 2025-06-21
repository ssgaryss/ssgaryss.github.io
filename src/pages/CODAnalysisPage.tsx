import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import { Box, Typography, Divider } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkButton from '../components/LinkButton';
import TOC from '../components/TOC';
import { TransText } from '../components/TransParagraph';
import PageTurningButton from '../components/PageTurningButton';

interface PageProps {
  mode: 'light' | 'dark';
}

const CODAnalysisPage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-cod-analysis';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('CODAnalysisPage.Contents.items.Abstract') },
    { id: 'DOF', title: t('CODAnalysisPage.Contents.items.DOF') },
    { id: 'AA', title: t('CODAnalysisPage.Contents.items.AA') },
    { id: 'AO', title: t('CODAnalysisPage.Contents.items.AO') },
    { id: 'Reflection', title: t('CODAnalysisPage.Contents.items.Reflection') },
    { id: 'GI', title: t('CODAnalysisPage.Contents.items.GI') },
    { id: 'Effects', title: t('CODAnalysisPage.Contents.items.Effects') },
    { id: 'AE', title: t('CODAnalysisPage.Contents.items.AE') },
    { id: 'Static', title: t('CODAnalysisPage.Contents.items.Static') },
    { id: 'Animation', title: t('CODAnalysisPage.Contents.items.Animation') },
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
              <h2>{t('CODAnalysisPage.Abstract.title')}</h2>
              <p>
                {t('CODAnalysisPage.Abstract.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.Abstract.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={[`mailto:${INFO.main.email}`, "https://www.callofduty.com/cn/zh/blackops6"]}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="DOF">
              <h2>{t('CODAnalysisPage.DOF.title')}</h2>
              <p>
                {t('CODAnalysisPage.DOF.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.DOF.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="AA">
              <h2>{t('CODAnalysisPage.AA.title')}</h2>
              <p>
                {t('CODAnalysisPage.AA.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.AA.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="AO">
              <h2>{t('CODAnalysisPage.AO.title')}</h2>
              <p>
                {t('CODAnalysisPage.AO.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.AO.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Reflection">
              <h2>{t('CODAnalysisPage.Reflection.title')}</h2>
              <p>
                {t('CODAnalysisPage.Reflection.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.Reflection.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="GI">
              <h2>{t('CODAnalysisPage.GI.title')}</h2>
              <p>
                {t('CODAnalysisPage.GI.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.GI.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Shadow">
              <h2>{t('CODAnalysisPage.Shadow.title')}</h2>
              <p>
                {t('CODAnalysisPage.Shadow.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.Shadow.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Effects">
              <h2>{t('CODAnalysisPage.Effects.title')}</h2>
              <p>
                {t('CODAnalysisPage.Effects.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.Effects.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="AE">
              <h2>{t('CODAnalysisPage.AE.title')}</h2>
              <p>
                {t('CODAnalysisPage.AE.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.AE.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Static">
              <h2>{t('CODAnalysisPage.Static.title')}</h2>
              <p>
                {t('CODAnalysisPage.Static.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.Static.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Animation">
              <h2>{t('CODAnalysisPage.Animation.title')}</h2>
              <p>
                {t('CODAnalysisPage.Animation.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.Animation.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
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

export default CODAnalysisPage;
