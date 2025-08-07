function factorial(n) {
	// let fn = 1*2*3*4*5;
	// return fn;
	if ( n === 0 || n === 1 ) {
		return 1;
	};
	let fac = 1;
	for (let i = 2; i <= n; i++) {
		fac *= i;
	};
	return fac;
}
console.log(factorial(5)); // 120
