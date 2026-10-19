// Create an employee object containing name and an address object with street, city, and postalCode. Update the city and display the complete address

const employee = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Sukaearth",
        postalCode: "12345",
    }
}

employee.address.city = "New York";
console.log(employee.address);