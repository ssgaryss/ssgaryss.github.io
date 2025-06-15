import React from 'react';
import { Trans } from 'react-i18next';
import '../assets/styles/TransParagraph.scss';

interface TransTextProps {
  i18nKey: string;
  index?: number;
  isLast?: boolean;
  links?: string[]; // 如 ['https://github.com/skypjack/entt', 'https://unity.com/', ...]
}

const TransText: React.FC<TransTextProps> = ({ i18nKey, index, isLast, links }) => {
  const components: Record<number, React.ReactNode> = {
    1: <strong />,
    2: <em />,
  };

  // 动态注册链接组件：从 <3> 开始编号
  links?.forEach((href, i) => {
    const tagIndex = i + 3;
    components[tagIndex] = (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-link"
      />
    );
  });

  const i18nPath = index !== undefined ? `${i18nKey}.${index}` : i18nKey;

  const transElement = (
    <Trans
      i18nKey={i18nPath as any}
      components={components as any}
    />
  );

  return index !== undefined ? (
    <>
      {transElement}
      {!isLast && <br />}
    </>
  ) : (
    transElement
  );
};

export default TransText;
