//Task 1
function sum(a,b) {
    return a + b; 
}

console.log('Sum:', sum(5,3 )); 

const product = function(a, b) {
    return a * b;
}; 

console.log('Product:', product (5, 3));

const difference = (a, b) => a - b; 
console.log('Differnece:', difference(10,4)); 

// Task 2 

function sumAll(...nums) {
    return nums.reduce((acc, num) => acc + nums, 0);
}
console.log("SumAll:", sumAll(1, 2, 3, 4, 5));

function greet(name = 'Anoymous') {
    return 'Hello ${name}!'; 

}

console.log('Greeting:', greet('Dan')); 
console.log('Greeting (default):', greet()); 

function sumArguments() {
    let total = 0; 
    for ( let i = 0; i < arguments.length; i++) {
        total += arguments[i]; 
    }
    return total; 
} 
console.log('Sum with arguments object:', sumArguments(2, 4, 6, 8)); 

// Task 3

function createPerson(name, age) { 
    return { name: name, age: age}; 
}
console.log('Person:', createPerson('ALice, 25'));

function isEven(num) {
    return num % 2 === 0;
}

console.log("IsEven (10):", isEven(10)); 
console.log("IsEven (7):", isEven(7)); 

function doNothing() {}
console.log('DoNotthing', doNothing()); 

// Task 4
function outerFunction() {
    return function() {
        console.log("Hello from the inner function"); 
    }; 
}
const innerFunc = outerFunction();
innerFunc(); 

function createCounter() {
    let count = 0; // private variable
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const counter = createCounter(); 
console.log("Counter increment:", counter.increment()); 
console.log("Counter increment:", counter.increment()); 
console.log("Counter decrement:", counter.decrement()); 