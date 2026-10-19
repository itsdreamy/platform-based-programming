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
        "address": "Bandung"
    },
    {
        "name" : "Adi Hilap",
        "address": "Sukabumi",
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
        "wives": wives
    }
]

let single = 0;
let married = 0;

for (let i = 0; i < students.length; i++) {
    const status = ("wives" in students[i] && students[i].wives.length > 0) ? "Married" : "Single";
    console.log(`${students[i].name}: ${status}`);
    if (status === "Married") {
        married++;
    }else {
        single++;
    }
}

console.log(`Total Married: ${married}`);
console.log(`Total Single: ${single}`);