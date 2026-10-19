const prompt = require('prompt-sync')({sigint:true});

const parkingHour = Number(prompt('Input the parking hour: '))

let parkingFee = 0

if (parkingHour > 1){
    parkingFee = 5000 + ((parkingHour -1) * 3000)
    if (parkingFee > 20000){
        parkingFee = 20000
    }
} else if (parkingHour == 1) {
    parkingFee = 5000
} else {
    console.log("Enter a valid number!")
}

console.log(`${parkingHour} hour(s) = Rp${parkingFee}`)