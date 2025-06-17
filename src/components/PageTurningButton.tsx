import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/PageTurningButton.scss';

interface Project {
  id: string;
  path: string;
  title?: string;
  [key: string]: any;
}

interface PostNavigationProps {
  // 手动方式（可选）
  prevLabel?: string;
  prevPath?: string;
  nextLabel?: string;
  nextPath?: string;

  // 自动方式（传这两个就会忽略上面四个）
  projects?: Project[];
  currentId?: string;
}

const PostNavigation: React.FC<PostNavigationProps> = ({
  prevLabel,
  prevPath,
  nextLabel,
  nextPath,
  projects,
  currentId,
}) => {
  const navigate = useNavigate();

  // 如果传了 projects 和 currentId，则自动推断前后页
  if (projects && currentId) {
    const index = projects.findIndex(p => p.id === currentId);

    if (index !== -1) {
      const prev = index > 0 ? projects[index - 1] : null;
      const next = index < projects.length - 1 ? projects[index + 1] : null;

      prevLabel = prev ? prev.title || prev.id : 'HOME';
      prevPath = prev ? prev.path : '/';

      if (next) {
        nextLabel = next.title || next.id;
        nextPath = next.path;
      } else {
        nextLabel = undefined;
        nextPath = undefined;
      }
    } else {
      console.warn(`PostNavigation: currentId "${currentId}" not found in projects.`);
    }
  }

  return (
    <div className="post-nav-container">
      {prevLabel && prevPath && (
        <button
          className="post-nav-button"
          onClick={() => navigate(prevPath)}
        >
          ← {prevLabel}
        </button>
      )}
      {nextLabel && nextPath && (
        <button
          className="post-nav-button"
          onClick={() => navigate(nextPath)}
        >
          {nextLabel} →
        </button>
      )}
    </div>
  );
};

export default PostNavigation;
