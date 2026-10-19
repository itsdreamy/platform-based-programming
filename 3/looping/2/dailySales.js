const prompt = require('prompt-sync')({sigint: true});
sumSales = 0;
above500 = [];
const weeklyTarget = 3500000;
highestSales = 0;
highestSalesDay = 0;

for (let i = 1; i <= 7; i++) {
    let report = prompt(`Enter the day ${i} sales report: `);
    if (parseFloat(report) > 500000) {
        above500.push(parseFloat(report));
    }
    if (parseFloat(report) > highestSales) {
        highestSales = parseFloat(report);
        highestSalesDay = i;
    }
    sumSales += parseFloat(report);
}

if (sumSales >= weeklyTarget) {
    console.log(`Target achieved!`);
} else {
    console.log(`Target not achieved!`);
}

console.log(`Total sales for the week: ${sumSales}`);
console.log(`Average sales for the week: ${Math.floor(sumSales / 7)}`);
console.log(`Days with sales above 500,000: ${above500.length}`);
console.log(`Highest sales is in day ${highestSalesDay} with sales of ${highestSales}`);
