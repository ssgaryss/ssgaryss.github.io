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

const ModelGrayPage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-model-gray';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('ModelGrayPage.Contents.items.Abstract') },
    { id: 'Requirements', title: t('ModelGrayPage.Contents.items.Requirements') },
    { id: 'Challenges', title: t('ModelGrayPage.Contents.items.Challenges') },
    { id: 'Outcomes', title: t('ModelGrayPage.Contents.items.Outcomes') },
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
          <h1 className="project-title">{t('ModelGrayPage.Title')}</h1>
          <div className="project-links">
            <LinkButton href="/files/ModelGray.png" label="Doc" icon={<InsertDriveFileIcon />} />
          </div>
          <div className="project-contents">
            <TOC title={t('ModelGrayPage.Contents.title')} items={contents} />
          </div>
          <Divider className="contents-divider" />
          <div className="project-detail">
            <section id="Abstract">
              <h2>{t('ModelGrayPage.Abstract.title')}</h2>
              <p>
                {t('ModelGrayPage.Abstract.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"ModelGrayPage.Abstract.content" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://www.maxon.net/en/zbrush", "https://www.blender.org"]}
                    breakCount={2}
                  />
                ))}
              </p>
            </section>
            <section id="Requirements">
                <h2>{t('ModelGrayPage.Requirements.title')}</h2>
                <p>
                    {t('ModelGrayPage.Requirements.content', { returnObjects: true }).map((_, index, array) => (
                    <TransText
                        key={index}
                        i18nKey={"ModelGrayPage.Requirements.content" as any}
                        index={index}
                        isLast={index === array.length - 1}
                        links={["https://www.odysseyai.art"]}
                        breakCount={2}
                        />
                    ))}
                </p>
            </section>
            <section id="Challenges">
                <h2>{t('ModelGrayPage.Challenges.title')}</h2>
                <p>
                    {t('ModelGrayPage.Challenges.content1', { returnObjects: true }).map((_, index, array) => (
                        <TransText
                        key={index}
                        i18nKey={"ModelGrayPage.Challenges.content1" as any}
                        index={index}
                        isLast={index === array.length - 1}
                        links={["https://help.maxon.net/zbr/en-us/Content/html/user-guide/customizing-zbrush/zscripting/zscripting.html"]}
                        breakCount={2}
                        />
                    ))}
                </p>
                <TransList
                  i18nKey={"ModelGrayPage.Challenges.list" as any}
                  count={2}  // 指定条目数量：0, 1, 2
                  variant="quote"
                />
                <p>
                    {t('ModelGrayPage.Challenges.content2', { returnObjects: true }).map((_, index, array) => (
                        <TransText
                        key={index}
                        i18nKey={"ModelGrayPage.Challenges.content2" as any}
                        index={index}
                        isLast={index === array.length - 1}
                        links={["https://help.maxon.net/zbr/en-us/Content/html/user-guide/customizing-zbrush/zscripting/zscripting.html"]}
                        breakCount={2}
                        />
                    ))}
                </p>
            </section>
            <section id="Outcomes">
              <h2>{t('ModelGrayPage.Outcomes.title')}</h2>
              <p>
                {t('ModelGrayPage.Outcomes.content', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"ModelGrayPage.Outcomes.content" as any}
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

export default ModelGrayPage;
