const prompt = require('prompt-sync')({sigint:true});

const usn = prompt('Enter username: ')
const pwd = prompt('Enter password: ')
const accStat = prompt('Enter account status: ')

let result;

if (usn === "admin" && pwd === "12345" && accStat === "active") {
    result = "Login Successful"
} else if (usn === "admin" && pwd === "12345" && accStat === "inactive") {
    result = "Account Inactive"
} else {
    result = "Invalid Credentials"
}

console.log(`Username: ${usn}, Password: ${pwd}, Account Status: ${accStat}`)
console.log(`Result: ${result}`)