
export interface ProficiencyCardPropsModel {
    title: string;
    abbreviation: string;
    image: string;
    proficiencyLevelPercentage: number;
    color: string;
    onMouseDown?: () => void;
    className?: string;
}

export interface SkillsContainerModel{
    title: string,
    content: ProficiencyCardPropsModel[],
    showContent: boolean,
}

export interface RepoModel{
    name: string,
    url:string,
    languages: {[key: string]: number}[],
    last_update: Date,
}