import React from 'react';
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

interface LanguageToggleProps { arrowColor?: string; }

const LanguageToggle: React.FC<LanguageToggleProps> = ({ arrowColor = '#fff' }) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';
  const flagMap: Record<'en'|'zh', string> = { en: USFlag, zh: CNFlag };

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const handleSelect = (lang: 'en' | 'zh') => {
    if (lang !== currentLang) i18n.changeLanguage(lang);
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
            src={flagMap[currentLang]}
            alt={currentLang}
            className="language-toggle__flag"
          />
        }
        endIcon={<ArrowDropDownIcon className="language-toggle__arrow" sx={{ color: arrowColor }} />}
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
        {(['en', 'zh'] as const).map((lang) => (
          <MenuItem
            key={lang}
            onClick={(e) => { e.stopPropagation(); handleSelect(lang); }}
            className="language-toggle__menu-item"
          >
            <ListItemIcon className="language-toggle__menu-icon">
              <Box
                component="img"
                src={flagMap[lang]}
                alt={lang}
                className="language-toggle__menu-flag"
              />
            </ListItemIcon>
            <Typography className="language-toggle__menu-text">
              {lang === 'en' ? 'English' : '中文'}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageToggle;