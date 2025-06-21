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

import FrameAdvisor from '../assets/images/project-rdc-parser/FrameAdvisor.png';
import Challenges from '../assets/images/project-rdc-parser/Challenges.png';
import Outcomes from '../assets/images/project-rdc-parser/Outcomes.png';

interface PageProps {
  mode: 'light' | 'dark';
}

const RDCParserPage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-rdc-parser';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('RDCParserPage.Contents.items.Abstract') },
    { id: 'Requirements', title: t('RDCParserPage.Contents.items.Requirements') },
    { id: 'Challenges', title: t('RDCParserPage.Contents.items.Challenges') },
    { id: 'Outcomes', title: t('RDCParserPage.Contents.items.Outcomes') },
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
          <h1 className="project-title">{t('RDCParserPage.Title')}</h1>
          <div className="project-links">
            <LinkButton href="/files/RDC-Parser.png" label="Doc" icon={<InsertDriveFileIcon />} />
          </div>
          <div className="project-contents">
            <TOC title={t('RDCParserPage.Contents.title')} items={contents} />
          </div>
          <Divider className="contents-divider" />
          <div className="project-detail">
            <section id="Abstract">
              <h2>{t('RDCParserPage.Abstract.title')}</h2>
              <p>
                {t('RDCParserPage.Abstract.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"RDCParserPage.Abstract.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://renderdoc.org", "/files/RDC-Parser.png"]}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Requirements">
              <h2>{t('RDCParserPage.Requirements.title')}</h2>
              <p>
                {t('RDCParserPage.Requirements.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"RDCParserPage.Requirements.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://developer.arm.com/Tools%20and%20Software/Frame%20Advisor"]}
                    breakCount={2}
                  />
                ))}
              </p>
              <img src={FrameAdvisor} alt="Unable to display image" />
            </section>
            <section id="Challenges">
              <h2>{t('RDCParserPage.Challenges.title')}</h2>
              <p>
                {t('RDCParserPage.Challenges.content1', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"RDCParserPage.Challenges.content1" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
              <TransList
                i18nKey={"RDCParserPage.Challenges.list" as any}
                count={2}  // 指定条目数量：0, 1
                variant="ordered"
              />
              <p>
                {t('RDCParserPage.Challenges.content2', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"RDCParserPage.Challenges.content2" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
              <img src={Challenges} alt="Unable to display image" />
            </section>
            <section id="Outcomes">
              <h2>{t('RDCParserPage.Outcomes.title')}</h2>
              <p>
                {t('RDCParserPage.Outcomes.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"RDCParserPage.Outcomes.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://infinitynikki.nuanpaper.com/home"]}
                    breakCount={2}
                  />
                ))}
              </p>
              <img src={Outcomes} alt="Unable to display image" />
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

export default RDCParserPage;
