// membuat object 

const req = {
    body: {
        name: "ridho",
        age: 20,
        major: "informatics",
    },
};

// destructing object
const {name, age, major} = req.body;
console.log(name,age,major);