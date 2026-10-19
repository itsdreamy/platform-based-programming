const wives = [
    {
        "name" : "Siti Mirna",
        "phone" : "029292828112"
    },
    {
        "name" : "Bertania",
        "phone" : "092928281125"
    }
];
const students = [
    {
        "name" : "Anton Bareuh",
        "address": "Bandung",
        "isMarried": function() {
            const status = ("wives" in this && this.wives.length > 0) ? "Married" : "Single";
            return status;
        }
    },
    {
        "name" : "Adi Hilap",
        "address": "Sukabumi",
        "isMarried": function() {
            const status = ("wives" in this && this.wives.length > 0) ? "Married" : "Single";
            return status;
        }
    },
    {
        "name" : "Regith Nurmala",
        "address": [
            {
                "city" : "Sukabumi City",
                "province": "West Java"
            },
            {
                "city" : "Senayan",
                "Province": "DKI Jakarta"
            }
        ],
        "wives": wives,
        "isMarried": function() {
            const status = ("wives" in this && this.wives.length > 0) ? "Married" : "Single";
            return status;
        }
    },
]

let single = 0;
let married = 0;

for (let i = 0; i < students.length; i++) {
    const status = students[i].isMarried();
    console.log(`${students[i].name}: ${status}`);
    if (status === "Married") {
        married++;
    }else {
        single++;
    }
}

console.log(`Total Married: ${married}`);
console.log(`Total Single: ${single}`);