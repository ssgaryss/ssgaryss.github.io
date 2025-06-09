import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import INFO from "../assets/data/user";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href={INFO.socials.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href={INFO.main.resume} target="_blank" rel="noreferrer"><PictureAsPdfIcon/></a>
      </div>
      <p>© 2025 <a href="https://github.com/ssgaryss/ssgaryss.github.io.git" target="_blank" rel="noreferrer">Huidi Qiu</a>. All rights reserved.</p>
    </footer>
  );
}

export default Footer;