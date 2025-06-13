import React from "react";
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import INFO from "../assets/data/user";
import '../assets/styles/Main.scss';

function Main() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={INFO.main.profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={INFO.socials.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href={INFO.main.resume} target="_blank" rel="noreferrer"><PictureAsPdfIcon/></a>
          </div>
          <h1>{t('HomePage.Main.name')}</h1>
          <p>{t('HomePage.Main.greeting')}</p>

          <div className="mobile_social_icons">
            <a href={INFO.socials.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href={INFO.main.resume} target="_blank" rel="noreferrer"><PictureAsPdfIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;