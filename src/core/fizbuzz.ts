export const fizbuzz = (num: number) => {
	let result = ""
	
	if(num % 3 === 0) {
		result += "fizz"
	} 
	
	if(num % 5 === 0) {
		result += "buzz"
	}

	return result !== "" ? result : num.toString()
};
