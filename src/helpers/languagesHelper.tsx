import { ProficiencyCardPropsModel } from "../models";
import SkillsContainer from "../atoms/SkillsContainer/SkillsContainer";

export function constructNewSkillSet(languages: { [key: string]: number}[], title: string, showContent: boolean) {
    const res_techs: ProficiencyCardPropsModel[] = [];
    languages.forEach(languageObj => {
        Object.entries(languageObj).forEach(([language]) => {
        const foundElement:ProficiencyCardPropsModel | undefined= techs.find(element => element.title === language);
        if(foundElement){
            res_techs.push(foundElement);
        }
    })});
    return <SkillsContainer title={title} content={res_techs} showContent={showContent} />
}

export const techs: ProficiencyCardPropsModel[] =
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
        title: 'TypeScript',
        abbreviation: 'ts',
        image: 'ts.png',
        proficiencyLevelPercentage: 75,
        color: '#3178c6',
        onMouseDown: () => { }
    },
    {
        title: 'HTML',
        abbreviation: 'html',
        image: 'html.png',
        proficiencyLevelPercentage: 95,
        color: '#e34c26',
        onMouseDown: () => { }
    },
    {
        title: 'Java',
        abbreviation: 'java',
        image: 'java.png',
        proficiencyLevelPercentage: 95,
        color: '#e34c26',
        onMouseDown: () => { }
    },
    {
        title: 'CSS',
        abbreviation: 'css',
        image: 'css.png',
        proficiencyLevelPercentage: 90,
        color: '#264de4',
        onMouseDown: () => { }
    },
    {
        title: 'Sass',
        abbreviation: 'scss',
        image: 'scss.png',
        proficiencyLevelPercentage: 85,
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
    },
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
    {
        title: 'PostgreSQL',
        abbreviation: 'postgresql',
        image: 'postgresql.png',
        proficiencyLevelPercentage: 65,
        color: '#336791',
        onMouseDown: () => { }
    },
    {
        title: 'MySQL',
        abbreviation: 'mysql',
        image: 'mysql.png',
        proficiencyLevelPercentage: 65,
        color: '#F29111',
        onMouseDown: () => { }
    },
    {
        title: 'MariaDB',
        abbreviation: 'mariadb',
        image: 'mariadb.png',
        proficiencyLevelPercentage: 65,
        color: '#c59b6c',
        onMouseDown: () => { }
    },
]