import React from 'react';
import '../assets/styles/TOC.scss';

interface TOCProps {
  title?: string;
  items: { id: string; title: string }[];
}

const TOC: React.FC<TOCProps> = ({ title = "Contents", items }) => {
    const handleClick = (id: string) => {
    const section = document.getElementById(id);
    const navbar = document.getElementById("navigation");
    const offset = navbar?.clientHeight || 64;

    if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    };

  return (
    <div className="toc">
      <h3>{title}</h3>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => handleClick(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOC;
