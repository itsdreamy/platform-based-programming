// Create an object named student with the properties name, age, and major. Display each property in the console.

const student = [
    {
        name: "Ahmad",
        age: 20,
        major: "Computer Science"
    },
    {
        name: "Ayman",
        age: 21,
        major: "Computer Science"
    },
    {
        name: "Mohamed",
        age: 22,
        major: "Computer Science"
    },
    {
        name: "Ali",
        age: 23,
        major: "Computer Science"
    }
]

student.forEach(student => {
    console.log("name: " + student.name + ", age: " + student.age + ", major: " + student.major);
});