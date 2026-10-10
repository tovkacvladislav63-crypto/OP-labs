const fn = () => {
    const a = { name: "Vlad" };
    let b = { name: "Sasha" };

    Object.assign(a, { name: "Kolia" });
    Object.assign(b, { name: "Taras" });

    b = { name: "Petro" };
    console.log(a);
    console.log(b);
};
fn();
const createUser = (name, city) => ({ name, city });
console.log(createUser("Viktoria", "Kyiv"));
