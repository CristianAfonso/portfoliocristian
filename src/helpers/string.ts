export const replaceDashesIntoWhiteSpaces = (string: string): string => {
    return string.replace(/[-_]/g, ' ');
}

export const capitalizeFirstLetterOfEachWord = (string: string): string => {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};