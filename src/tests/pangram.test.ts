/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
Ignore numbers and punctuation.
*/

import {checkPangramIn} from "../core/pangram";

describe('Given a phrase detect', () => {
    it("whether it is a pangram", () => {
        const phrase = "The quick brown fox jumps over the lazy dog"
        
        expect(checkPangramIn(phrase)).toBeTruthy()
    })

    it("not it is a pangram", () => {
        const phrase = "This phrase no it is a pangram"

        expect(checkPangramIn(phrase)).toBeFalsy()
    })
});