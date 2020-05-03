export const formatLanguages = (langs) => {
    let languages = '';
    langs.forEach((lang, i, arr) => {
        if (i === arr.length - 1){ 
            languages += `${turnToDiminutive(lang)} `
        } else {
            languages += `${turnToDiminutive(lang)} - `
        }
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