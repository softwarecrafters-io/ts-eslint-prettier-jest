function removeCharactersInAlphabetIncludedIn(phraseToIterate: string[]) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    phraseToIterate.forEach(character => {
        if (alphabet.includes(character)) {
            alphabet = alphabet.replace(character, "")
        }
    })
    return alphabet;
}

export function checkPangramIn(phrase: string) {
    const phraseToIterate = phrase.toLowerCase().split("")
    const pangram = removeCharactersInAlphabetIncludedIn(phraseToIterate);

    return pangram === "";
}