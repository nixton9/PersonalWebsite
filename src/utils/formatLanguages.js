export const formatLanguages = (langs) => {
    let languages = '';
    langs.forEach(lang => {
        languages += `${turnToDiminutive(lang)} `
    });
    return languages
}

const turnToDiminutive = (lang) => {
    let newLang;
    switch (lang) {
        case 'Javascript':
        newLang = 'JS'
        break

        default:
            newLang = lang
    }
    return newLang
}