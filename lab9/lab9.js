// Task 1
const student = {
    name: "John Doe",
    age: 16,
    grade: "10th",
    school: "Greenwood High",

    greet: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);
console.log("School:", student.school);

student.greet();

student.age = 17;
console.log("Updated Age:", student.age);


// Task 2

const bookJSON = `
{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925,
    "genre": "Novel"
}
`;

const bookObject = JSON.parse(bookJSON);
console.log("Parsed Object:", bookObject);

const newBookJSON = JSON.stringify(bookObject);
console.log("Stringified JSON:", newBookJSON);


// Task 3

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log("Combined Array:", combinedArray);

const person1 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25
};

const person2 = {
    ...person1,
    age: 30
};

console.log("Person 1:", person1);
console.log("Person 2:", person2);


// Task 4
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

console.log("Add:", calculator.add(10, 5));
console.log("Subtract:", calculator.subtract(10, 5));
console.log("Multiply:", calculator.multiply(10, 5));
console.log("Divide:", calculator.divide(10, 5));