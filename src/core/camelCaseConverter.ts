export const camelCaseConverter = (varName: string) => {
    const words = varName.split(/[\s | _ | -]/)

    return words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join("")
}