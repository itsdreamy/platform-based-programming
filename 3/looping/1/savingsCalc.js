const input = 5000

for (let i = 1; i <= 30; i++) {
    let savings = input * i
    if (savings >= 100000) {
        console.log(`You need ${i} days to reach your savings goal of 100,000. Your total savings will be ${savings}.`);
        break;  
    }
}