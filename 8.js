function countdownByTwo(n) {
	let result = [];
	while (n >= 0) {
		result.push(n);
		n-=2;
	};
	return result;
}

console.log(countdownByTwo(10)); // [10, 8, 6, 4, 2, 0]
