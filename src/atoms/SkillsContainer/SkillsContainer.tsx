import React from "react";
import { useState } from "react";
import ProficiencyCard from "../../atoms/ProficiencyCard/ProficiencyCard";
import { SkillsContainerModel } from "../../models";
import { useTranslation } from "react-i18next";
import styles from './Skills.module.css';

const SkillsContainer:React.FC<SkillsContainerModel> = ({title, content}) => {

    const [selectedTech, setSelectedTech] = useState(content[0].abbreviation);
    const {t} = useTranslation();

    const handleChangeSelectedTech = (newSelectedTech: string) => {
        setSelectedTech(newSelectedTech);
    }

    return(
        <div className={styles.skills_container}>
            <h3>
                {title}
            </h3>
            <div className={styles.proficiency_container}>
                {content.map((element, index) => (
                  <ProficiencyCard
                        key={index}
                        className={selectedTech === element.abbreviation ? styles.selected : ''}
                        onMouseDown={() => handleChangeSelectedTech(element.abbreviation)}
                        title={element.title}
                        image={element.image}
                        proficiencyLevelPercentage={element.proficiencyLevelPercentage}
                        color={element.color} abbreviation={element.abbreviation}/>
                ))}
            </div>
            <div className='proficiency_content'>
                <h3>
                    {t(`skills.${selectedTech}.title`)}
                </h3>
                <span>
                    {t(`skills.${selectedTech}.content`)}
                </span>
            </div>
        </div>
    )
}

export default SkillsContainer;