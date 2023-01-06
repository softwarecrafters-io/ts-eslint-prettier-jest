import { fizbuzz } from '../core/fizbuzz';

xdescribe("fizbuzz must be return", () => {
	it("For number 1 '1'", () => {
		const result = fizbuzz(1)

		expect(result).toBe("1")
	})

	it("For number 3 the result must be fizz", () => {
		const result = fizbuzz(3)

		expect(result).toBe("fizz")
	})

	it("For the number 5 the result must be buzz", () => {
		const result = fizbuzz(5)

		expect(result).toBe("buzz")
	})

	it("For the number 15 the result must be fizzbuzz", () => {
		const result = fizbuzz(15)

		expect(result).toBe("fizzbuzz")
	})

	it("For all number that have 3 like divider must return fizz", () => {
		const result = fizbuzz(6)

		expect(result).toBe("fizz")
	})

	it("For all number that have 5 like divider must return buzz", () => {
		const result = fizbuzz(20)

		expect(result).toBe("buzz")
	})

	it("For all number that have 15 like divider must return fizzbuzz", () => {
		const result = fizbuzz(30)

		expect(result).toBe("fizzbuzz")
	})

	it("For the rest of the numbers the result must be the same number", () => {
		const result = fizbuzz(2)

		expect(result).toBe("2")
	})
})