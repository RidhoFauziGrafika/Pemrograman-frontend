const names = ["ridho", "fauzi", "grafika"];

/**
 * mengubah nama menjadi awalan dengan mr/mrs
 */

const formattedName = names.map(function(name) {
    return `Mr/Mrs. ${name}`
});

console.log(names);
console.log(formattedName);