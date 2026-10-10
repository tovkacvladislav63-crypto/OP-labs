const arr = [
    {name: "Stepan", phone: "+380501234567" },
    {name: "Yevgen", phone: "+380671234567" },
    {name: "Vlad", phone: "+380931234567" }
];

const findPhoneByName = name =>
    arr.find(val => val.name === name)?.phone;
console.log(findPhoneByName("Oksana"));
const hash = {
    Stepan: "+380501234567",
    Yevgen: "+380671234567",
    Vlad: "+380931234567"
};

const findPhoneByNameHash = name => hash[name];
console.log(findPhoneByNameHash("Diana"));
