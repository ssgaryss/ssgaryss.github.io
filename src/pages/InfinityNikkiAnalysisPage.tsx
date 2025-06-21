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

const InfinityNikkiAnalysisPage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-nikki-analysis';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('InfinityNikkiAnalysisPage.Contents.items.Abstract') },
    { id: 'PPLL', title: t('InfinityNikkiAnalysisPage.Contents.items.PPLL') },
    { id: 'ShellFur', title: t('InfinityNikkiAnalysisPage.Contents.items.ShellFur') },
    { id: 'SSAO', title: t('InfinityNikkiAnalysisPage.Contents.items.SSAO') },
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
          <h1 className="project-title">{t('InfinityNikkiAnalysisPage.Title')}</h1>
          <div className="project-links">
            <LinkButton href="/files/无限暖暖渲染方案.png" label="Doc" icon={<InsertDriveFileIcon />} />
          </div>
          <div className="project-contents">
            <TOC title={t('InfinityNikkiAnalysisPage.Contents.title')} items={contents} />
          </div>
          <Divider className="contents-divider" />
          <div className="project-detail">
            <section id="Abstract">
              <h2>{t('InfinityNikkiAnalysisPage.Abstract.title')}</h2>
              <p>
                {t('InfinityNikkiAnalysisPage.Abstract.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"InfinityNikkiAnalysisPage.Abstract.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={[`mailto:${INFO.main.email}`, "https://infinitynikki.nuanpaper.com/home", "/files/无限暖暖渲染方案.png"]}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="PPLL">
              <h2>{t('InfinityNikkiAnalysisPage.PPLL.title')}</h2>
              <p>
                {t('InfinityNikkiAnalysisPage.PPLL.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"InfinityNikkiAnalysisPage.PPLL.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="ShellFur">
              <h2>{t('InfinityNikkiAnalysisPage.ShellFur.title')}</h2>
              <p>
                {t('InfinityNikkiAnalysisPage.ShellFur.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"InfinityNikkiAnalysisPage.ShellFur.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="SSAO">
              <h2>{t('InfinityNikkiAnalysisPage.SSAO.title')}</h2>
              <p>
                {t('InfinityNikkiAnalysisPage.SSAO.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"InfinityNikkiAnalysisPage.SSAO.content" as any}
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

export default InfinityNikkiAnalysisPage;
