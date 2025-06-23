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

// AA
import AA_01 from '../assets/images/project-cod-analysis/AA_01.png';
import AA_02 from '../assets/images/project-cod-analysis/AA_02.png';
import AA_SMAA_01 from '../assets/images/project-cod-analysis/AA_SMAA_01.png';
import AA_SMAA_02 from '../assets/images/project-cod-analysis/AA_SMAA_02.png';
import AA_TAA_01 from '../assets/images/project-cod-analysis/AA_TAA_01.png';
import AA_TAA_02 from '../assets/images/project-cod-analysis/AA_TAA_02.png';
import AA_NIS_01 from '../assets/images/project-cod-analysis/AA_NIS_01.png';
// AO
import AO_01 from '../assets/images/project-cod-analysis/AO_01.png';

interface PageProps {
  mode: 'light' | 'dark';
}

const CODAnalysisPage: React.FC<PageProps> = ({ mode }) => {
  const { t } = useTranslation();
  const current_page_id = 'project-cod-analysis';
  const project = INFO.projects.find(p => p.id === current_page_id)!;
  const contents = [
    { id: 'Abstract', title: t('CODAnalysisPage.Contents.items.Abstract') },
    { id: 'AA', title: t('CODAnalysisPage.Contents.items.AA') },
    { id: 'AO', title: t('CODAnalysisPage.Contents.items.AO') },
    { id: 'GI', title: t('CODAnalysisPage.Contents.items.GI') },
    { id: 'Shadow', title: t('CODAnalysisPage.Contents.items.Shadow') },
    { id: 'Effects', title: t('CODAnalysisPage.Contents.items.Effects') },
    { id: 'Static', title: t('CODAnalysisPage.Contents.items.Static') },
    { id: 'Reflection', title: t('CODAnalysisPage.Contents.items.Reflection') },
    { id: 'AE', title: t('CODAnalysisPage.Contents.items.AE') },
    { id: 'DOF', title: t('CODAnalysisPage.Contents.items.DOF') },
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
            <section id="AA">
              <h2>{t('CODAnalysisPage.AA.title')}</h2>
              <p>
                <TransText i18nKey={"CODAnalysisPage.AA.content0" as any}/>
              </p>
              <TransList
                i18nKey={"CODAnalysisPage.AA.list0" as any}
                count={3}
                links={[
                  ["#smaa-section"],
                  ["#taa-section"],
                  ["#nis-section"]
                ]}
                variant="quote"
              />
              <img src={AA_01} alt="Unable to display image" />
              <p>
                {t('CODAnalysisPage.AA.content1', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.AA.content1" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={[
                      "https://www.iryoku.com/smaa", 
                      "https://en.wikipedia.org/wiki/Temporal_anti-aliasing",
                      "https://github.com/NVIDIAGameWorks/NVIDIAImageScaling"
                    ]}
                    breakCount={2}
                  />
                ))}
              </p>
              <img src={AA_02} alt="Unable to display image" />
              <section id="smaa-section">
                <h3>{t('CODAnalysisPage.AA.Subsections.SMAA.title')}</h3>
                <p>
                  {t('CODAnalysisPage.AA.Subsections.SMAA.content1', { returnObjects: true }).map((_, index, array) => (
                    <TransText
                      key={index}
                      i18nKey={"CODAnalysisPage.AA.Subsections.SMAA.content1" as any}
                      index={index}
                      isLast={index === array.length - 1}
                      links={[
                        "https://www.iryoku.com/smaa",
                        "https://en.wikipedia.org/wiki/Morphological_antialiasing"
                      ]}
                      breakCount={2}
                    />
                  ))}
                </p>
                <TransList
                  i18nKey={"CODAnalysisPage.AA.Subsections.SMAA.list1" as any}
                  count={3}
                  variant="ordered"
                />
                <p>
                  <TransText
                    i18nKey={"CODAnalysisPage.AA.Subsections.SMAA.content2" as any}
                    links={[
                      "https://www.iryoku.com/smaa",
                      "https://en.wikipedia.org/wiki/Morphological_antialiasing"
                    ]}
                  />
                </p>
                <img src={AA_SMAA_01} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.AA.Subsections.SMAA.content3" as any}/>
                </p>
                <img src={AA_SMAA_02} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.AA.Subsections.SMAA.content4" as any}/>
                </p>
              </section>
              <section id="taa-section">
                <h3>{t('CODAnalysisPage.AA.Subsections.TAA.title')}</h3>
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.AA.Subsections.TAA.content1" as any}
                    links={["https://en.wikipedia.org/wiki/Temporal_anti-aliasing"]}
                  />
                </p>
                <img src={AA_TAA_01} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.AA.Subsections.TAA.content2" as any}/>
                </p>
                <img src={AA_TAA_02} alt="Unable to display image" />
              </section>
              <section id="nis-section">
                <h3>{t('CODAnalysisPage.AA.Subsections.NIS.title')}</h3>
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.AA.Subsections.NIS.content1" as any}
                    links={[
                      "https://github.com/NVIDIAGameWorks/NVIDIAImageScaling",
                      "https://developer.nvidia.com/rtx/dlss?sortBy=developer_learning_library%2Fsort%2Ffeatured%3Adesc%2Ctitle%3Aasc&hitsPerPage=6"
                    ]}
                    />
                </p>
                <img src={AA_NIS_01} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.AA.Subsections.NIS.content2" as any}/>
                </p>
              </section>
            </section>
            <section id="AO">
              <h2>{t('CODAnalysisPage.AO.title')}</h2>
              <p>
                <TransText i18nKey={"CODAnalysisPage.AO.content0" as any}/>
              </p>
              <TransList
                i18nKey={"CODAnalysisPage.AO.list0" as any}
                count={1}
                links={[
                  ["#gtao-section"]
                ]}
                variant="quote"
              />
              <img src={AO_01} alt="Unable to display image" />
              <p>
                {t('CODAnalysisPage.AO.content1', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.AO.content1" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={["https://zhuanlan.zhihu.com/p/150178776"]}
                    breakCount={2}
                  />
                ))}
              </p>
              <section id="gtao-section">
                <h3>{t('CODAnalysisPage.AO.Subsections.GTAO.title')}</h3>
                <p>
                  <TransText i18nKey={"CODAnalysisPage.AO.Subsections.GTAO.content1" as any}/>
                </p>
              </section>
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
