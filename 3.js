function countDiv3Not5(n) {
let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      count++;
    }
  }
	return count;
}

console.log(countDiv3Not5(20)); // 4 (3, 6, 9, 12, 18)
