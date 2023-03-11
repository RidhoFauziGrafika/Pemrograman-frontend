const users = [
    {
        name: "ridho",
        age: 20,
    },
    {
        name: "fauzi",
        age: 50,
    },
    {
        name: "grafika",
        age: 30,
    },
];

const filterUser = users.filter(function (user) {
    return user.age > 21;
});

console.log(filterUser);