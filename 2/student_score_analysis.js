const studentName = "Andi";
const assignment = 80;
const midterm = 75;
const finalExam = 90;

function calculateFinalScore(assignment, midterm, finalExam) {
    const finalScore = (assignment * 0.3) + (midterm * 0.3) + (finalExam * 0.4);
    return finalScore;
}

const finalScore = calculateFinalScore(assignment, midterm, finalExam);

const status = finalScore >= 70 ? "Passed" : "Failed";

let category;
if (finalScore >= 85) {
    category = "Excellent";
} else if (finalScore >= 70) {
    category = "Good";
} else if (finalScore < 70) {
    category = "Failed";
}

console.log(`Student: ${studentName}`);
console.log(`Assignment: ${assignment}`);
console.log(`Midterm: ${midterm}`);
console.log(`Final Exam: ${finalExam}`);
console.log(`Final Score: ${finalScore}`);
console.log(`Status: ${status}`);
console.log(`Category: ${category}`);