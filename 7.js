function multiplicationTable(n) {
  let result = [];
  let i = 1;
  while (i <= 10) {
    result.push(`${n} x ${i} = ${n * i}`);
    i++;
  }
  return result;
}

console.log(multiplicationTable(7));
