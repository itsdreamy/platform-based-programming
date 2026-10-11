const prompt = require('prompt-sync')({sigint:true});

const score = Number(prompt('Input score (num only): '))
const attendance = Number(prompt('Input attendance percentage (num only): '))
const assignment = Number(prompt('Input completed assignment percentage (num only): '))

let result;

if (score >= 60 && score <= 100 && attendance >= 75 && attendance <= 100 && assignment >= 80 && assignment <= 100){
    result = "Passed"
} else {
    result = "Failed"
    if (score < 60){
        console.log("Score is below passing threshold.")
    }
    if (attendance < 75){
        console.log("Attendance is below required percentage.")
    }
    if (assignment < 80){
        console.log("Completed assignment percentage is below required threshold.")
    }
}

console.log(`Score: ${score}, Attendance: ${attendance}%, Assignment: ${assignment}%`)
console.log(`Result: ${result}`)    