import { camelCaseConverter } from "../core/camelCaseConverter"

describe("CamelCase Converter", () => {
    it("Return an empty string like it", () => {
        const result = camelCaseConverter("")

        expect(result).toBe("")
    })

    it("Return the same word for a word that have de first letter upper", () => {
        const result = camelCaseConverter("Foo")

        expect(result).toBe("Foo")
    })

    it("Return join words in CamelCase for a text that have the letter of all words in upper split by space", () => {
        const result = camelCaseConverter("Foo Bar")

        expect(result).toBe("FooBar")
    })

    it("Return join words in CamelCase for a text that have the letter of all words in upper split by _ or -", () => {
        const result = camelCaseConverter("Foo_Bar-Foo")

        expect(result).toBe("FooBarFoo")
    })

    it("Return the same word capitalized for a word in lower case", () => {
        const result = camelCaseConverter("foo")

        expect(result).toBe("Foo")
    })

    it("Capitalize all words for a text with all upper case and return it joined", () => {
        const result = camelCaseConverter("foo_bar-foo")

        expect(result).toBe("FooBarFoo")
    })
})