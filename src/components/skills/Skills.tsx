import React from "react";
import { ProficiencyCardPropsModel } from "../../models";
import SkillsContainer from "../../atoms/SkillsContainer/SkillsContainer";
import { constructNewSkillSet } from "../../helpers/languagesHelper";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
    const {t} = useTranslation();
    
    const frontend: { [key: string]: number }[] = [
        { 'JavaScript': 85 },
        { 'React': 90 },
        { 'TypeScript': 80 },
        { 'Vue3': 75 },
        { 'Sass': 65 }
    ];
    
    const backend: { [key: string]: number }[] = [
        { 'Node.js': 85 },
        { 'Go': 70 },
        { 'PHP': 65 },
        { 'Java': 60 },
        { 'Laravel': 75 }
    ];
    
    const databases: { [key: string]: number }[] = [
        { 'PostgreSQL': 80 },
        { 'MySQL': 85 },
        { 'MariaDB': 70 }
    ];
    
    
    return(
        <section>
            { constructNewSkillSet(frontend, `${t(`skills.frontend`)}`, true)} 
            { constructNewSkillSet(backend, `${t(`skills.backend`)}`, true)} 
            { constructNewSkillSet(databases, `${t(`skills.database`)}`, true)} 
        </section>
    )
}
export default Skills;