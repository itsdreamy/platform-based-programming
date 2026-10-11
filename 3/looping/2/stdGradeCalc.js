const prompt = require('prompt-sync')({sigint: true});
let passedStudents = [];
let failedStudents = [];
let highestGrade = 0;
let lowestGrade = 100;

for (let i = 1; i <= 10; i++) {
    let grade = parseFloat(prompt(`Enter grade for student ${i}: `));
    if (grade >= 75) {
        passedStudents.push(grade);
    } else {
        failedStudents.push(grade);
    }
    if (grade > highestGrade) {
        highestGrade = grade;
    }
    if (grade < lowestGrade) {
        lowestGrade = grade;
    }
}

console.log(`Number of students who passed: ${passedStudents.length}`);
console.log(`Number of students who failed: ${failedStudents.length}`);
console.log(`Highest grade: ${highestGrade}`);
console.log(`Lowest grade: ${lowestGrade}`);

