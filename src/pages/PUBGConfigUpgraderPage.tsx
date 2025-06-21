import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import { Box, Typography, Divider } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkButton from '../components/LinkButton';
import TOC from '../components/TOC';
import { TransText, TransList } from '../components/TransParagraph';
import PageTurningButton from '../components/PageTurningButton';

interface PageProps {
  mode: 'light' | 'dark';
}

const PUBGConfigUpgraderPage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-pubg-upgrader';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('PUBGConfigUpgraderPage.Contents.items.Abstract') },
    { id: 'Requirements', title: t('PUBGConfigUpgraderPage.Contents.items.Requirements') },
    { id: 'Challenges', title: t('PUBGConfigUpgraderPage.Contents.items.Challenges') },
    { id: 'Outcomes', title: t('PUBGConfigUpgraderPage.Contents.items.Outcomes') },
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
          <h1 className="project-title">{t('PUBGConfigUpgraderPage.Title')}</h1>
          <div className="project-links">
            <LinkButton href="/files/PUBGConfigUpgrader.png" label="Doc" icon={<InsertDriveFileIcon />} />
          </div>
          <div className="project-contents">
            <TOC title={t('PUBGConfigUpgraderPage.Contents.title')} items={contents} />
          </div>
          <Divider className="contents-divider" />
          <div className="project-detail">
            <section id="Abstract">
              <h2>{t('PUBGConfigUpgraderPage.Abstract.title')}</h2>
              <p>
                {t('PUBGConfigUpgraderPage.Abstract.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PUBGConfigUpgraderPage.Abstract.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://gp.qq.com", "/files/PUBGConfigUpgrader.png"]}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Requirements">
              <h2>{t('PUBGConfigUpgraderPage.Requirements.title')}</h2>
              <p>
                {t('PUBGConfigUpgraderPage.Requirements.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PUBGConfigUpgraderPage.Requirements.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Challenges">
              <h2>{t('PUBGConfigUpgraderPage.Challenges.title')}</h2>
              <p>
                {t('PUBGConfigUpgraderPage.Challenges.content1', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PUBGConfigUpgraderPage.Challenges.content1" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Outcomes">
              <h2>{t('PUBGConfigUpgraderPage.Outcomes.title')}</h2>
              <p>
                {t('PUBGConfigUpgraderPage.Outcomes.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"PUBGConfigUpgraderPage.Outcomes.content" as any}
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

export default PUBGConfigUpgraderPage;
