function powersOfTwo(n) {
	let result = [];
	// for ( let i = 0; 2 ** i <= n; i++) {
	// 	result.push(2 ** i);
	// }
	let i = 0;
	while (i <= n) {
		result.push(i);
		i *=2;	
	}
	return result;
}

console.log(powersOfTwo(20)); // [1, 2, 4, 8, 16]
