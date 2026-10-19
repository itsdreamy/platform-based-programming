// Given an array of student objects, create a function that groups students by their major. Return an object whose keys are majors and whose values are arrays of students.
const students = [
    { name: "John", major: "Computer Science" },
    { name: "Jane", major: "Mathematics" },
    { name: "Jim", major: "Computer Science" },
    { name: "Jill", major: "Mathematics" },
];

function groupStudentsByMajor(students) {
    const result = {};
    students.forEach(student => {
        if (!result[student.major]) {
            result[student.major] = [];
        }
        result[student.major].push(student);
    });
    return result;
}

console.log(groupStudentsByMajor(students));