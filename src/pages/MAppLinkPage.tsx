import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ProjectPage.scss';
import INFO from '../assets/data/user';
import { Divider } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkButton from '../components/LinkButton';
import TOC from '../components/TOC';
import { TransText, TransList } from '../components/TransParagraph';
import PageTurningButton from '../components/PageTurningButton';

import Outcomes from '../assets/images/project-mapplink/Outcomes.mp4';

interface PageProps {
  mode: 'light' | 'dark';
}

const MAppLinkPage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-mapplink';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('MAppLinkPage.Contents.items.Abstract') },
    { id: 'Requirements', title: t('MAppLinkPage.Contents.items.Requirements') },
    { id: 'Challenges', title: t('MAppLinkPage.Contents.items.Challenges') },
    { id: 'Outcomes', title: t('MAppLinkPage.Contents.items.Outcomes') },
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
          <h1 className="project-title">{t('MAppLinkPage.Title')}</h1>
          <div className="project-links">
            <LinkButton href="/files/MAppLink.png" label="Doc" icon={<InsertDriveFileIcon />} />
          </div>
          <div className="project-contents">
            <TOC title={t('MAppLinkPage.Contents.title')} items={contents} />
          </div>
          <Divider className="contents-divider" />
          <div className="project-detail">
            <section id="Abstract">
              <h2>{t('MAppLinkPage.Abstract.title')}</h2>
              <p>
                {t('MAppLinkPage.Abstract.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"MAppLinkPage.Abstract.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={[
                        "https://www.autodesk.com/hk/products/3ds-max/overview", 
                        "https://www.adobe.com/hk_en/products/photoshop/landpa.html", 
                        "https://lolm.qq.com/main.html",
                        "/files/MAppLink.png"
                    ]}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Requirements">
                <h2>{t('MAppLinkPage.Requirements.title')}</h2>
                <p>
                    {t('MAppLinkPage.Requirements.content', { returnObjects: true }).map((_, index, array) => (
                    <TransText
                        key={index}
                        i18nKey={"MAppLinkPage.Requirements.content" as any}
                        index={index}
                        isLast={index === array.length - 1}
                        breakCount={2}
                        />
                    ))}
                </p>
            </section>
            <section id="Challenges">
                <h2>{t('MAppLinkPage.Challenges.title')}</h2>
                <p>
                    {t('MAppLinkPage.Challenges.content1', { returnObjects: true }).map((_, index, array) => (
                        <TransText
                        key={index}
                        i18nKey={"MAppLinkPage.Challenges.content1" as any}
                        index={index}
                        isLast={index === array.length - 1}
                        breakCount={2}
                        />
                    ))}
                </p>
                <TransList
                  i18nKey={"MAppLinkPage.Challenges.list" as any}
                  count={2}  // 指定条目数量：0, 1
                  variant="quote"
                />
                <p>
                    {t('MAppLinkPage.Challenges.content2', { returnObjects: true }).map((_, index, array) => (
                        <TransText
                        key={index}
                        i18nKey={"MAppLinkPage.Challenges.content2" as any}
                        index={index}
                        isLast={index === array.length - 1}
                        links={["https://github.com/pybind/pybind11"]}
                        breakCount={2}
                        />
                    ))}
                </p>
            </section>
            <section id="Outcomes">
              <h2>{t('MAppLinkPage.Outcomes.title')}</h2>
              <p>
                {t('MAppLinkPage.Outcomes.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"MAppLinkPage.Outcomes.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    breakCount={2}
                  />
                ))}
              </p>
              <video controls>
                <source src={Outcomes} type="video/mp4" />
                Failed to load video. Please check your connection or try again later.
              </video>
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

export default MAppLinkPage;
