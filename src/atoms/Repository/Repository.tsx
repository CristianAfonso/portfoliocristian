import { RepoModel } from "../../models";
import React, { useState }  from "react";
import styles from './Repository.module.css'
import { FaAngleDown,FaAngleUp} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import {replaceDashesIntoWhiteSpaces, capitalizeFirstLetterOfEachWord} from '../../helpers/string'
import { useTranslation } from "react-i18next";
import { constructNewSkillSet } from "../../helpers/languagesHelper";

const Repository: React.FC<RepoModel> = ({name,  url, languages, last_update}) => {
    const [showContent, setShowContent] = useState(false);
    
    const {t} = useTranslation();

    return(
        <div className={styles.repository_card}>
            <button onMouseDown={() => {setShowContent(!showContent)}} className={styles.repository_title}>
                <h3>{capitalizeFirstLetterOfEachWord(replaceDashesIntoWhiteSpaces(name))}</h3>
                { showContent ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {showContent && <div className={styles.repository_content}>
                <a href={url} target="_blank" rel="noopener noreferrer"><FaGithub/> {t('projects.repository.link')}</a>
                  <div className={styles.repository_languages_container}>
                    { 
                        constructNewSkillSet(languages, `${t('projects.repository.languages')}:`, false)
                    }
                  </div>
                <p style={{textAlign:'right'}}>{t('projects.repository.last_update')}: {last_update.toLocaleDateString()}</p>
            </div>}
        </div>
      );
}

export default Repository;