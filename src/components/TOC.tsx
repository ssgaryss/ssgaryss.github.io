import React from 'react';
import '../assets/styles/TOC.scss';

interface TOCItem {
  id: string;
  title: string;
  children?: TOCItem[]; // 副标题支持
}

interface TOCProps {
  title?: string;
  items: TOCItem[];
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

  const renderItems = (tocItems: TOCItem[]) => (
    <ul>
      {tocItems.map(item => (
        <li key={item.id}>
          <div className="toc-title" onClick={() => handleClick(item.id)}>
            {item.title}
          </div>
          {item.children && (
            <ul>
              {item.children.map(sub => (
                <li key={sub.id}>
                  <div className="toc-subtitle" onClick={() => handleClick(sub.id)}>
                    {sub.title}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="toc">
      <h3>{title}</h3>
      {renderItems(items)}
    </div>
  );
};

export default TOC;
