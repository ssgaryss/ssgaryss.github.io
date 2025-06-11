import React from 'react';
import './styles/PikaEnginePage.scss';

const ProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <h1>Gaussian Splatting Based Relighting</h1>
      <p className="project-subtitle">Real-time relighting using 2D Gaussian Splatting.</p>
      <div className="project-section">
        <h2>Overview</h2>
        <p>
          This project explores real-time relighting based on 2D Gaussian splatting. It includes novel
          optimizations for view-dependent appearance modeling and performance on modern GPUs.
        </p>
      </div>
      <div className="project-section">
        <h2>Technologies</h2>
        <ul>
          <li>React.js</li>
          <li>Three.js</li>
          <li>PyTorch</li>
        </ul>
      </div>
      <div className="project-section">
        <h2>GitHub</h2>
        <a href="https://github.com/your-repo-link" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
