const prompt = require('prompt-sync')({ sigint: true });

const OVERTIME_RATE = 25000;
let employeeOvertimes = [];
let totalAllOvertime = 0;
let maxOvertime = -1;
let topEmployee = 0;

for (let emp = 1; emp <= 5; emp++) {
    console.log(`\n--- Employee ${emp} ---`);
    let weeklyHours = 0;
    let weeklyOvertime = 0;

    for (let day = 1; day <= 7; day++) {
        let hours = parseFloat(prompt(`  Day ${day} working hours: `));
        weeklyHours += hours;
        if (hours > 8) {
            weeklyOvertime += (hours - 8);
        }
    }

    employeeOvertimes.push(weeklyOvertime);
    totalAllOvertime += weeklyOvertime;

    if (weeklyOvertime > maxOvertime) {
        maxOvertime = weeklyOvertime;
        topEmployee = emp;
    }

    console.log(`Employee ${emp} -> Weekly Hours: ${weeklyHours}, Overtime: ${weeklyOvertime} hrs`);
}

console.log('\n================ PAYROLL SUMMARY ================');
console.log(`Total Overtime (All Employees): ${totalAllOvertime} hrs`);
console.log(`Employee with Most Overtime: Employee ${topEmployee} (${maxOvertime} hrs)`);

console.log('\n--- Challenge: Employees with Overtime > 10 Hours ---');
for (let i = 0; i < employeeOvertimes.length; i++) {
    if (employeeOvertimes[i] > 10) {
        let pay = employeeOvertimes[i] * OVERTIME_RATE;
        console.log(`Employee ${i + 1}: ${employeeOvertimes[i]} hrs overtime | Pay: Rp${pay.toLocaleString('id-ID')}`);
    }
}