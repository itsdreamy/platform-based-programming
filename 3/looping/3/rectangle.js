const prompt = require("prompt-sync")({sigint: true});
let rows = parseInt(prompt("Enter rows: "));
let cols = parseInt(prompt("Enter cols: "));
for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j < cols; j++) {
        str += "* ";
    }
    console.log(str);
}
