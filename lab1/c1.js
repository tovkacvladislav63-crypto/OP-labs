const inc = num => num + 1;

const a = 7;
const b = inc(a);

console.dir({ a, b });

const incObj = obj => {
    obj.n++;
};

const obj = { n: 7 };
incObj(obj);

console.dir(obj);
