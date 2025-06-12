import React from 'react';
import { Chip } from '@mui/material';
import '../assets/styles/LinkButton.scss';

interface LinkChipProps {
  href: string;
  label: string;
  icon: React.ReactElement;
}

const LinkChip: React.FC<LinkChipProps> = ({ href, label, icon }) => {
  return (
    <Chip
      label={label}
      icon={icon}
      clickable
      component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-chip"
    />
  );
};

export default LinkChip;
