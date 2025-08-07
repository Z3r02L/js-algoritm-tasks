function isPrime(n) {
	if (n === 2) {
		return true;
	}	if (n > 2 && n % 2 === 0) {
		return false;
	}	for (let  i = 3; i <= n ** 1/2; i+=2 ) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;  
}

console.log(isPrime(7)); // true
console.log(isPrime(9)); // false
