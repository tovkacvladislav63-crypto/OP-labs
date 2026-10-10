const range = (a, b) =>
    Array.from({ length: Math.max(0, b - a + 1) }, (_, i) => a + i);
const rangeOdd = (a, b) =>
    range(a, b).filter(num => num % 2 !== 0);
console.log(range(1, 10));
console.log(rangeOdd(1, 10));
