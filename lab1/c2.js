const arr = [10, "hello", true, 25, false, "JS", 3.5, 100, "world", true];
const types = {
    number: 0,
    string: 0,
    boolean: 0
};

for (const val of arr) {
    types[typeof val]++;
}
console.log(types);
const res = {};
for (const val of arr) {
    const type = typeof val;
    res[type] = (res[type] || 0) + 1;
}

console.log(res);
