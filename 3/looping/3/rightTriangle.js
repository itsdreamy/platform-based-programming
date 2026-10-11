const prompt = require('prompt-sync')({sigint: true});
const height = parseInt(prompt("Enter height: "));

for (let i = 1; i <= height; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}

console.log("");

for (let i = height; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}