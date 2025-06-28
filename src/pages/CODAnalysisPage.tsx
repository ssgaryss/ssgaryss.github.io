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
import AO_GTAO_01 from '../assets/images/project-cod-analysis/AO_GTAO_01.png';
import AO_GTAO_02 from '../assets/images/project-cod-analysis/AO_GTAO_02.png';
import AO_GTAO_03 from '../assets/images/project-cod-analysis/AO_GTAO_03.png';
// Reflection
import Reflection_01 from '../assets/images/project-cod-analysis/Reflection_01.png';
import Reflection_SSR_01 from '../assets/images/project-cod-analysis/Reflection_SSR_01.gif';
import Reflection_SSR_02 from '../assets/images/project-cod-analysis/Reflection_SSR_02.png';
import Reflection_SSR_03 from '../assets/images/project-cod-analysis/Reflection_SSR_03.png';
import Reflection_ReflectionProbe_01 from '../assets/images/project-cod-analysis/Reflection_ReflectionProbe_01.png';
// GI
import GI_01 from '../assets/images/project-cod-analysis/GI_01.png';
// Shadow
import Shadow_01 from '../assets/images/project-cod-analysis/Shadow_01.png';
import Shadow_CSM_01 from '../assets/images/project-cod-analysis/Shadow_CSM_01.png';
import Shadow_PCF_01 from '../assets/images/project-cod-analysis/Shadow_PCF_01.png';
// Effects
import Effects_SSFS_01 from '../assets/images/project-cod-analysis/Effects_SSFS_01.png';
import Effects_SSFS_02 from '../assets/images/project-cod-analysis/Effects_SSFS_02.png';
import Effects_SSFS_03 from '../assets/images/project-cod-analysis/Effects_SSFS_03.png';
import Effects_Volumetric_fog_01 from '../assets/images/project-cod-analysis/Effects_Volumetric_fog_01.png';
import Effects_Volumetric_fog_02 from '../assets/images/project-cod-analysis/Effects_Volumetric_fog_02.png';
import Effects_Volumetric_fog_03 from '../assets/images/project-cod-analysis/Effects_Volumetric_fog_03.png';
import Effects_Bloom_01 from '../assets/images/project-cod-analysis/Effects_Bloom_01.png';
import Effects_Lens_Flare_01 from '../assets/images/project-cod-analysis/Effects_Lens_Flare_01.png';
// Static
import Static_01 from '../assets/images/project-cod-analysis/Static_01.png';
import Static_LOD_01 from '../assets/images/project-cod-analysis/Static_LOD_01.png';
import Static_Culling_01 from '../assets/images/project-cod-analysis/Static_Culling_01.png';
import Static_Batching_01 from '../assets/images/project-cod-analysis/Static_Batching_01.png';

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
    { id: 'Reflection', title: t('CODAnalysisPage.Contents.items.Reflection') },
    { id: 'GI', title: t('CODAnalysisPage.Contents.items.GI') },
    { id: 'Shadow', title: t('CODAnalysisPage.Contents.items.Shadow') },
    { id: 'Effects', title: t('CODAnalysisPage.Contents.items.Effects') },
    { id: 'Static', title: t('CODAnalysisPage.Contents.items.Static') },
    // { id: 'AE', title: t('CODAnalysisPage.Contents.items.AE') },
    // { id: 'DOF', title: t('CODAnalysisPage.Contents.items.DOF') },
    // { id: 'Animation', title: t('CODAnalysisPage.Contents.items.Animation') },
  ];
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { id, cover } = project;
  const documentPath: string = "/files/COD Black Op 6 Analysis.png";

  return (
    <div className={`project-page-wrapper ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="project-card">
        <div className="project-content">
          <div className="project-hero">
            <img src={cover} alt={`${t(`HomePage.Projects.${id}.title` as any)} Hero`} />
          </div>
          <h1 className="project-title">{t('CODAnalysisPage.Title')}</h1>
          <div className="project-links">
            <LinkButton href={documentPath} label="Doc" icon={<InsertDriveFileIcon />} />
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
                    links={[
                      `mailto:${INFO.main.email}`, 
                      "https://www.callofduty.com/cn/zh/blackops6",
                      documentPath
                    ]}
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
                    links={["https://zhuanlan.zhihu.com/p/342210503", "#Shadow"]}
                    breakCount={2}
                  />
                ))}
              </p>
              <section id="gtao-section">
                <h3>{t('CODAnalysisPage.AO.Subsections.GTAO.title')}</h3>
                <p>
                  <TransText i18nKey={"CODAnalysisPage.AO.Subsections.GTAO.content1" as any}/>
                </p>
                <img src={AO_GTAO_01} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.AO.Subsections.GTAO.content2" as any}/>
                </p>
                <img src={AO_GTAO_02} alt="Unable to display image" />
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.AO.Subsections.GTAO.content3" as any}
                    links={["https://blog.csdn.net/bugrunner/article/details/7272902"]}
                  />
                </p>
                <img src={AO_GTAO_03} alt="Unable to display image" />
              </section>
            </section>
            <section id="Reflection">
              <h2>{t('CODAnalysisPage.Reflection.title')}</h2>
              <p>
                <TransText i18nKey={"CODAnalysisPage.Reflection.content0" as any}/>
              </p>
              <TransList
                i18nKey={"CODAnalysisPage.Reflection.list0" as any}
                count={2}
                links={[
                  ["#ssr-section"],
                  ["#reflection-probe-section"],
                ]}
                variant="quote"
              />
              <img src={Reflection_01} alt="Unable to display image" />
              <p>
                <TransText
                  i18nKey={"CODAnalysisPage.Reflection.content1" as any}
                />
              </p>
              <section id="ssr-section">
                <h3>{t('CODAnalysisPage.Reflection.Subsections.SSR.title')}</h3>
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.Reflection.Subsections.SSR.content1" as any}
                    links={["https://lettier.github.io/3d-game-shaders-for-beginners/screen-space-reflection.html"]}
                  />
                </p>
                <img src={Reflection_SSR_01} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Reflection.Subsections.SSR.content2" as any}/>
                </p>
                <img src={Reflection_SSR_02} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Reflection.Subsections.SSR.content3" as any}/>
                </p>
                <img src={Reflection_SSR_03} alt="Unable to display image" />
              </section>
              <section id="reflection-probe-section">
                <h3>{t('CODAnalysisPage.Reflection.Subsections.ReflectionProbe.title')}</h3>
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.Reflection.Subsections.ReflectionProbe.content1" as any}
                    links={["https://zhuanlan.zhihu.com/p/438022045"]}
                  />
                </p>
                <img src={Reflection_ReflectionProbe_01} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Reflection.Subsections.ReflectionProbe.content2" as any}/>
                </p>
              </section>
            </section>
            <section id="GI">
              <h2>{t('CODAnalysisPage.GI.title')}</h2>
              <p>
                <TransText i18nKey={"CODAnalysisPage.GI.content0" as any}/>
              </p>
              <TransList
                i18nKey={"CODAnalysisPage.GI.list0" as any}
                count={4}
                links={[
                  ["#lightmap-section"],
                  ["#gtao-section"],
                  ["#ssr-section"],
                  ["#reflection-probe-section"],
                ]}
                variant="quote"
              />
              <img src={GI_01} alt="Unable to display image" />
              <p>
                <TransText
                  i18nKey={"CODAnalysisPage.GI.content1" as any}
                />
              </p>
              <section id="lightmap-section">

              </section>
            </section>
            <section id="Shadow">
              <h2>{t('CODAnalysisPage.Shadow.title')}</h2>
              <p>
                <TransText i18nKey={"CODAnalysisPage.Shadow.content0" as any}/>
              </p>
              <TransList
                i18nKey={"CODAnalysisPage.Shadow.list0" as any}
                count={2}
                links={[
                  ["#csm-section"],
                  ["#pcf-section"],
                ]}
                variant="quote"
              />
              <img src={Shadow_01} alt="Unable to display image" />
              <p>
                <TransText
                  i18nKey={"CODAnalysisPage.Shadow.content1" as any}
                  links={[
                    "https://www.unishiki.cc/2025/02/21/Mathematical-Visualization-12/",
                    "https://dev.epicgames.com/documentation/en-us/unreal-engine/contact-shadows-in-unreal-engine?application_version=5.0",
                    "https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@14.0/manual/Override-Micro-Shadows.html",
                    "https://zhuanlan.zhihu.com/p/478472753",
                    "https://zhuanlan.zhihu.com/p/605111811"
                  ]}
                />
              </p>
              <section id="csm-section">
                <h3>{t('CODAnalysisPage.Shadow.Subsections.CSM.title')}</h3>
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Shadow.Subsections.CSM.content1" as any}/>
                </p>
                <img src={Shadow_CSM_01} alt="Unable to display image" />
              </section>
              <section id="pcf-section">
                <h3>{t('CODAnalysisPage.Shadow.Subsections.PCF.title')}</h3>
                <p>
                  <TransText 
                  i18nKey={"CODAnalysisPage.Shadow.Subsections.PCF.content1" as any}
                  links={["https://www.shadertoy.com/view/4l3yRM"]}
                  />
                </p>
                <img src={Shadow_PCF_01} alt="Unable to display image" />
              </section>
            </section>
            <section id="Effects">
              <h2>{t('CODAnalysisPage.Effects.title')}</h2>
              <p>
                <TransText i18nKey={"CODAnalysisPage.Effects.content0" as any}/>
              </p>
              <TransList
                i18nKey={"CODAnalysisPage.Effects.list0" as any}
                count={4}
                links={[
                  ["#ssfs-section"],
                  ["#volumetric-fog-section"],
                  ["#bloom-section"],
                  ["#lens-flare-section"]
                ]}
                variant="quote"
              />
              <p>
                {t('CODAnalysisPage.Effects.content1', { returnObjects: true }).map((_, index, array) => (
                  <TransText
                    key={index}
                    i18nKey={"CODAnalysisPage.Effects.content1" as any}
                    index={index}
                    isLast={index === array.length - 1}
                    links={[
                      "https://www.bilibili.com/video/BV1wNwfeaEPE/",
                      "https://zhuanlan.zhihu.com/p/366083234",
                      "https://zhuanlan.zhihu.com/p/525500877",
                      "https://xiaoiver.github.io/coding/2019/02/06/Lensflare.html",
                      "https://users.oden.utexas.edu/~arbogast/cam397/dawson_v2.pdf",
                      "https://zhuanlan.zhihu.com/p/362175935",
                      documentPath
                    ]}
                    breakCount={2}
                  />
                ))}
              </p>
              <section id="ssfs-section">
                <h3>{t('CODAnalysisPage.Effects.Subsections.SSFS.title')}</h3>
                <img src={Effects_SSFS_01} alt="Unable to display image" />
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.Effects.Subsections.SSFS.content1" as any}
                    links={["https://www.bilibili.com/video/BV1wNwfeaEPE/"]}
                  />
                </p>
                <img src={Effects_SSFS_02} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Effects.Subsections.SSFS.content2" as any}/>
                </p>
                <img src={Effects_SSFS_03} alt="Unable to display image" />
              </section>
              <section id="volumetric-fog-section">
                <h3>{t('CODAnalysisPage.Effects.Subsections.VolumetricFog.title')}</h3>
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.Effects.Subsections.VolumetricFog.content0" as any}
                    links={["https://zhuanlan.zhihu.com/p/366083234"]}
                  />
                </p>
                <TransList
                  i18nKey={"CODAnalysisPage.Effects.Subsections.VolumetricFog.list0" as any}
                  count={2}
                  variant="quote"
                />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Effects.Subsections.VolumetricFog.content1" as any}/>
                </p>
                <img src={Effects_Volumetric_fog_01} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Effects.Subsections.VolumetricFog.content2" as any}/>
                </p>
                <img src={Effects_Volumetric_fog_02} alt="Unable to display image" />
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Effects.Subsections.VolumetricFog.content3" as any}/>
                </p>
                <img src={Effects_Volumetric_fog_03} alt="Unable to display image" />
              </section>
              <section id="bloom-section">
                <h3>{t('CODAnalysisPage.Effects.Subsections.Bloom.title')}</h3>
                <img src={Effects_Bloom_01} alt="Unable to display image" />
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.Effects.Subsections.Bloom.content1" as any}
                    links={["https://zhuanlan.zhihu.com/p/525500877"]}
                  />
                </p>
              </section>
              <section id="lens-flare-section">
                <h3>{t('CODAnalysisPage.Effects.Subsections.LensFlare.title')}</h3>
                <img src={Effects_Lens_Flare_01} alt="Unable to display image" />
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.Effects.Subsections.LensFlare.content1" as any}
                    links={["https://xiaoiver.github.io/coding/2019/02/06/Lensflare.html"]}
                  />
                </p>
              </section>
            </section>
            <section id="Static">
              <h2>{t('CODAnalysisPage.Static.title')}</h2>
              <p>
                <TransText i18nKey={"CODAnalysisPage.Static.content0" as any}/>
              </p>
              <TransList
                i18nKey={"CODAnalysisPage.Static.list0" as any}
                count={3}
                links={[
                  ["#lod-section"],
                  ["#culling-section"],
                  ["#batch-section"],
                ]}
                variant="quote"
              />
              <img src={Static_01} alt="Unable to display image" />
              <p>
                <TransText
                  i18nKey={"CODAnalysisPage.Static.content1" as any}
                  links={["https://dev.epicgames.com/documentation/zh-cn/unreal-engine/nanite-virtualized-geometry-in-unreal-engine"]}
                />
              </p>
              <section id="lod-section">
                <h3>{t('CODAnalysisPage.Static.Subsections.LOD.title')}</h3>
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Static.Subsections.LOD.content1" as any}/>
                </p>
                <img src={Static_LOD_01} alt="Unable to display image" />
              </section>
              <section id="culling-section">
                <h3>{t('CODAnalysisPage.Static.Subsections.Culling.title')}</h3>
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Static.Subsections.Culling.content1" as any}/>
                </p>
                <img src={Static_Culling_01} alt="Unable to display image" />
              </section>
              <section id="batch-section">
                <h3>{t('CODAnalysisPage.Static.Subsections.Batching.title')}</h3>
                <p>
                  <TransText i18nKey={"CODAnalysisPage.Static.Subsections.Batching.content1" as any}/>
                </p>
                <img src={Static_Batching_01} alt="Unable to display image" />
                <p>
                  <TransText 
                    i18nKey={"CODAnalysisPage.Static.Subsections.Batching.content2" as any}
                    links={["https://discussions.unity.com/t/gpu-instancing-and-static-batching/712655/3"]}
                  />
                </p>
              </section>
            </section>
            {/* <section id="AE">
              <h2>{t('CODAnalysisPage.AE.title')}</h2>
            </section>
            <section id="DOF">
              <h2>{t('CODAnalysisPage.DOF.title')}</h2>
            </section>
            <section id="Animation">
              <h2>{t('CODAnalysisPage.Animation.title')}</h2>
            </section> */}
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
