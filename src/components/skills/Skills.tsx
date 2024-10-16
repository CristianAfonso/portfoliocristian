import React from "react";
import { ProficiencyCardPropsModel } from "../../models";
import SkillsContainer from "../../atoms/SkillsContainer/SkillsContainer";

const Skills: React.FC = () => {
    const frontend_techs: ProficiencyCardPropsModel[] =
        [
            {
                title: 'JavaScript',
                abbreviation: 'js',
                image: 'js.png',
                proficiencyLevelPercentage: 85,
                color: '#FFD600',
                onMouseDown: () => { }
            },
            {
                title: 'Sass',
                abbreviation: 'sass',
                image: 'sass.png',
                proficiencyLevelPercentage: 55,
                color: '#c69',
                onMouseDown: () => { }
            },
            {
                title: 'React',
                abbreviation: 'react',
                image: 'react.png',
                proficiencyLevelPercentage: 65,
                color: '#61dbfb',
                onMouseDown: () => { }
            },
            {
                title: 'Vue3',
                abbreviation: 'vue3',
                image: 'vue3.png',
                proficiencyLevelPercentage: 80,
                color: '#41b883',
                onMouseDown: () => { }
            },
            {
                title: 'Angular',
                abbreviation: 'angular',
                image: 'angular.png',
                proficiencyLevelPercentage: 55,
                color: '#C3002F',
                onMouseDown: () => { }
            } 
        ]
    const backend_techs: ProficiencyCardPropsModel[] =
        [
            {
                title: 'PHP',
                abbreviation: 'php',
                image: 'php.png',
                proficiencyLevelPercentage: 60,
                color: '#8993be',
                onMouseDown: () => { }
            },
            {
                title: 'Laravel',
                abbreviation: 'laravel',
                image: 'laravel.png',
                proficiencyLevelPercentage: 55,
                color: '#F05340',
                onMouseDown: () => { }
            },
            {
                title: 'Go',
                abbreviation: 'go',
                image: 'go.png',
                proficiencyLevelPercentage: 35,
                color: '#00ADD8',
                onMouseDown: () => { }
            },
            {
                title: 'Node.js',
                abbreviation: 'nodejs',
                image: 'nodejs.png',
                proficiencyLevelPercentage: 50,
                color: '#68a063',
                onMouseDown: () => { }
            },
        ]

    return(
        <section>
            <SkillsContainer title="Frontend" content={frontend_techs} />
            <SkillsContainer title="Backend" content={backend_techs} />
        </section>
    )
}
export default Skills;