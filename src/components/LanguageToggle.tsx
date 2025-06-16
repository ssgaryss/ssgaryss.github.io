import React, { useEffect, useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Box
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from 'react-i18next';
import '../assets/styles/LanguageToggle.scss';
import CNFlag from '../assets/images/flags/zh.png';
import USFlag from '../assets/images/flags/en-us.png';

interface LanguageToggleProps {
  arrowColor?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ arrowColor = '#fff' }) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // 等待初始化完成再渲染组件
  if (!i18n.isInitialized) return null;

  const supportedLangs: Record<string, { label: string; flag: string }> = {
    en: { label: 'English', flag: USFlag },
    zh: { label: '中文', flag: CNFlag },
    // 可以扩展更多语言：
    // ja: { label: '日本語', flag: JaFlag },
    // fr: { label: 'Français', flag: FrFlag },
  };

  const langCode = Object.keys(supportedLangs).find(code =>
    i18n.language.toLowerCase().startsWith(code)
  ) || 'en';

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (lang: keyof typeof supportedLangs) => {
    if (lang !== langCode) i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="language-toggle__button"
        startIcon={
          <Box
            component="img"
            src={supportedLangs[langCode].flag}
            alt={langCode}
            className="language-toggle__flag"
          />
        }
        endIcon={
          <ArrowDropDownIcon
            className="language-toggle__arrow"
            sx={{ color: arrowColor }}
          />
        }
        aria-controls={open ? 'lang-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      />

      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{ className: 'language-toggle__menu-list' }}
      >
        {Object.entries(supportedLangs).map(([lang, { label, flag }]) => (
          <MenuItem
            key={lang}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(lang as keyof typeof supportedLangs);
            }}
            className="language-toggle__menu-item"
          >
            <ListItemIcon className="language-toggle__menu-icon">
              <Box
                component="img"
                src={flag}
                alt={lang}
                className="language-toggle__menu-flag"
              />
            </ListItemIcon>
            <Typography className="language-toggle__menu-text">
              {label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageToggle;
