import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styles from './LanguageSelector.module.css';

const LanguageSelector: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node) && isDropdownOpen) {
        toggleDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.languages_selector} ref={ref}>
      <button className={styles.language_icons} onClick={toggleDropdown}>
        <FaGlobe />
        {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isDropdownOpen && (
        <div className={styles.dropdown_menu}>
          <button onClick={() => changeLanguage('es')} className={`${i18n.language === 'es' ? styles.active : ''}`}>
            Spanish
          </button>
          <button onClick={() => changeLanguage('en')} className={`${i18n.language === 'en' ? styles.active : ''}`}>
            English {'(United Kingdom)'}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
