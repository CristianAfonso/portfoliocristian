import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../atoms/LanguageSelector/LanguageSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Link to="/"><img alt="Logo" src={`${process.env.PUBLIC_URL}/CristianAfonso.png`}/></Link>
      <nav>
        <ul>
          <li><Link to="/">{t('header.aboutMe')}</Link></li>
          <li><Link to="/skills">{t('header.skills')}</Link></li>
          <li><Link to="/experience">{t('header.experience')}</Link></li>
          <li><Link to="/education">{t('header.education')}</Link></li>
          <li><Link to="/projects">{t('header.projects')}</Link></li>
          <li><Link to="/contact">{t('header.contact')}</Link></li>
        </ul>
      </nav>
      <LanguageSelector/>
    </header>
  );
};

export default Header;
