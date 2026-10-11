const prompt = require('prompt-sync')({ sigint: true });

const numDays = parseInt(prompt('Enter the number of days: '));

let overallTotal = 0;
let totalTxCount = 0;
let countAbove1M = 0;

let highestDayTotal = -1;
let highestDay = 0;

let currentStreak = 0;
let longestStreak = 0;
let flaggedDays = [];

for (let day = 1; day <= numDays; day++) {
    console.log(`\n--- Day ${day} ---`);
    let txCount = parseInt(prompt(`Number of transactions for Day ${day}: `));
    
    let dayTotal = 0;
    let day1MCount = 0;

    for (let t = 1; t <= txCount; t++) {
        let amount = parseFloat(prompt(`Transaction ${t} amount: `));
        
        dayTotal += amount;
        overallTotal += amount;
        totalTxCount++;

        if (amount > 1000000) {
            countAbove1M++;
            day1MCount++;
        }

        if (amount > 500000) {
            currentStreak++;
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
    }

    if (dayTotal > highestDayTotal) {
        highestDayTotal = dayTotal;
        highestDay = day;
    }

    if (day1MCount >= 3) {
        flaggedDays.push(day);
    }
}

let avgValue = totalTxCount > 0 ? overallTotal / totalTxCount : 0;

console.log('\n================ ANALYSIS RESULTS ================');
console.log(`Total Transaction Value: Rp${overallTotal.toLocaleString('id-ID')}`);
console.log(`Average Transaction Value: Rp${Math.floor(avgValue).toLocaleString('id-ID')}`);
console.log(`Transactions > Rp1,000,000: ${countAbove1M}`);
console.log(`Day with Highest Total: Day ${highestDay} (Rp${highestDayTotal.toLocaleString('id-ID')})`);
console.log(`Longest Consecutive Streak (> Rp500,000): ${longestStreak} transactions`);
console.log(`Flagged Days (≥ 3 tx > 1M): ${flaggedDays.length > 0 ? flaggedDays.join(', ') : 'None'}`);