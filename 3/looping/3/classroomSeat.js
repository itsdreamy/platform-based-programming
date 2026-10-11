const prompt = require('prompt-sync')({ sigint: true });

let seats = [];
for (let i = 0; i < 5; i++) {
    seats[i] = [];
    for (let j = 0; j < 6; j++) {
        seats[i][j] = '[O]';
    }
}

function printChart() {
    console.log('\n ============ SEATING CHART ============');
    for (let i = 0; i < 5; i++) {
        let rowStr = `Row ${i + 1}: `;
        for (let j = 0; j < 6; j++) {
            let label = `R${i + 1}S${j + 1}`;
            rowStr += `${label} ${seats[i][j]}   `;
        }
        console.log(rowStr);
    }
    console.log('=========================================\n');
}

printChart();

let input = prompt('Enter seat(s) to reserve (e.g., R1S1 R1S2 R3S5): ');
let selected = input.trim().toUpperCase().split(/\s+/);

for (let i = 0; i < selected.length; i++) {
    let seat = selected[i];
    let row = parseInt(seat[1]) - 1;
    let col = parseInt(seat[3]) - 1;

    if (row >= 0 && row < 5 && col >= 0 && col < 6) {
        seats[row][col] = '[X]';
        console.log(`Reserved ${seat}`);
    } else {
        console.log(`Invalid seat: ${seat}`);
    }
}

printChart();