import React from "react";
import { constructNewSkillSet } from "../../helpers/languagesHelper";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
    const {t} = useTranslation();
    
    const frontend: string[] = [
        'JavaScript',
        'React',
        'TypeScript',
        'Vue3',
        'Sass'
    ];
    
    const backend: string[] = [
        'Node.js',
        'Go',
        'PHP',
        'Java',
        'Laravel'
    ];
    
    const databases: string[] = [
        'PostgreSQL',
        'MySQL',
        'MariaDB'
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