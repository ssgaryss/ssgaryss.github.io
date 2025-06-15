import React from 'react';
import '../assets/styles/TOC.scss';

interface TOCProps {
  title?: string;
  items: { id: string; title: string }[];
}

const TOC: React.FC<TOCProps> = ({ title = "Contents", items }) => {
  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
