import React from 'react';
import { Trans } from 'react-i18next';
import '../assets/styles/TransParagraph.scss';

interface TransTextProps {
  i18nKey: string;
  index?: number;
  isLast?: boolean;
  links?: string[];
  breakLine?: boolean;
  breakCount?: number;
}

const TransText: React.FC<TransTextProps> = ({
  i18nKey,
  index,
  isLast,
  links,
  breakLine = true,
  breakCount = 1,
}) => {
  const components: Record<number, React.ReactNode> = {
    1: <strong />,
    2: <em />,
  };

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

  const breaks =
    breakLine && !isLast
      ? Array.from({ length: breakCount }, (_, i) => <br key={i} />)
      : null;

  return index !== undefined ? (
    <>
      {transElement}
      {breaks}
    </>
  ) : (
    transElement
  );
};

interface TransListProps {
  i18nKey: string;
  count: number;
  links?: string[][];
  breakLine?: boolean;
  breakCount?: number;
  variant?: 'quote' | 'ordered';
}

const TransList: React.FC<TransListProps> = ({
  i18nKey,
  count,
  links,
  breakLine = true,
  breakCount = 1,
  variant = 'quote', // 默认 quote 样式
}) => {
  const Wrapper = variant === 'ordered' ? 'ol' : 'div';
  const wrapperClass = variant === 'ordered' ? 'trans-list-ordered' : 'trans-list-box';

  return (
    <Wrapper className={wrapperClass}>
      {Array.from({ length: count }, (_, index) => {
        const item = (
          <TransText
            key={index}
            i18nKey={i18nKey}
            index={index}
            isLast={index === count - 1}
            links={links?.[index]}
            breakLine={breakLine}
            breakCount={breakCount}
          />
        );
        return variant === 'ordered' ? <li key={index}>{item}</li> : item;
      })}
    </Wrapper>
  );
};

export { TransText, TransList };
