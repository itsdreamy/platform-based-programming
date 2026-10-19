// Create a user object with username and email. Add an isActive property, then delete the email property. Display the updated object. property.

const user = [
    {
        id: 1,
        username: "ahmad",
        email: "ahmad@gmail.com",
    },
    {
        id: 2,
        username: "ayman",
        email: "ayman@gmail.com",
    },
    {
        id: 3,
        username: "mohamed",
        email: "mohamed@gmail.com",
    }
]

user.forEach(user => {
    console.log("id: " + user.id + ", username: " + user.username + ", email: " + user.email);
});

user.map(user => {
    user.isActive = true;
    delete user.email;
    return user;
});

console.log("--------------------------------");
user.forEach(user => {
    console.log("id: " + user.id + ", username: " + user.username + ", email: " + user.email + ", isActive: " + user.isActive);
});