const studentName = "Siti";
const averageScore = 86;
const attendance = 92;
const familyIncome = 4000000;
const organizationMember = true;

// const studentName = "Andi";
// const averageScore = 75;
// const attendance = 95;
// const familyIncome = 2000000;
// const organizationMember = true;

// const studentName = "Rina";
// const averageScore = 90;
// const attendance = 88;
// const familyIncome = 2000000;
// const organizationMember = true;

var category = "";
var basicReq = false;

function categorizeScholarshipEligibility(studentName, averageScore, attendance, familyIncome, organizationMember) {
    if (averageScore >= 80 && attendance >= 90) {
        basicReq = true;
    }else {
        category = "Not eligible";
    }

    if (basicReq) {
        if (familyIncome <=5000000 && organizationMember) {
            category = "Category B";
        } else if (familyIncome <= 3000000 && organizationMember) {
            category = "Category A";
        } else {
            category = "Not eligible";
        }
    }
}

categorizeScholarshipEligibility(studentName, averageScore, attendance, familyIncome, organizationMember);

console.log(`Student Name: ${studentName}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Attendance: ${attendance}%`);
console.log(`Family Income: Rp${familyIncome}`);
console.log(`Organization Member: ${organizationMember}`);
console.log();
console.log(`Basic Requirements: ${basicReq ? "Passed" : "Failed"}`);
console.log(`Scholarship Category: ${category}`);


// Explanation: Those students receive different result because they have different values for their average scores and attendance. 
// The eligibility for the scholarship is determined based on these criteria. 
// Andi and Rina didn't pass the basic requirements because their average scores and attendance did not meet the minimum thresholds, 
// while Siti met both criteria and was categorized accordingly based on her family income and organization membership.