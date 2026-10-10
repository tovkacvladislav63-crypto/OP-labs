const square = num => num ** 2;
const cube = num => num ** 3;
const average = (a, b) => (a + b) / 2;

const calculate = () =>
    Array.from({ length: 10 }, (_, i) =>
        average(square(i), cube(i))
    );

console.log(calculate());
