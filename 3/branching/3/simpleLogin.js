const prompt = require('prompt-sync')({sigint:true});

const usn = prompt('Enter username: ')
const pwd = prompt('Enter password: ')

let result;

if (usn === "admin" && pwd === "12345") {
    result = "Login Successful"
} else if (usn !== "admin") {
    result = "Login Failed: Incorrect username"
} else {
    result = "Login Failed: Incorrect password"
}

console.log(`${result}`)