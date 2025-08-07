
function sumEvenToN(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
};

console.log(sumEvenToN(10)); // 2+4+6+8+10 = 30
