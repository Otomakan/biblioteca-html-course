export const convertTitleToURL = (title: string): string => {
    return title.split(' ').join('-')
}

export const convertURLToTitle = (title: string): string => {
    return title.split('-').join(' ')
}