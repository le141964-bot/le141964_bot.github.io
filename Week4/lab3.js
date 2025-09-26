// Task 1
let colors = new Array('red', 'green', 'blue'); 

let sizes = ['small', 'medium', 'large']; 

let numbers = Array.of(5 , 15, 25); 

console.log("Initial Arrays:");
console.log("Colors:", colors);
console.log("Sizes:", sizes);
console.log("Numbers:", numbers);

// Task 2
colors.push('yellow'); 
console.log("\nAfter push():", colors); 

sizes.pop(); 
console.log('After pop():', sizes); 
console.log("Second number:", numbers[1]);

// Task 3
let filteredNumbers = numbers.filter(num => 10); 
console.log('\nFiltered numbers (>10):', filteredNumbers); 

let squaredNumbers = numbers.map(num => num * num); 
console.log('squared numbers:', squaredNumbers); 

console.log('Colors with forEach:'); 
colors.forEach(color => console.log(color)); 

// Task 4
console.log('\nNumbers with for...of:'); 
for (let num of numbers) {
    console.log(num); 
}

console.log('Sizes with for loop:'); 
for (let i = 0; i < sizes.length; i++) {
    console.log(sizes[i]); 
}

console.log('Colors with entries():'); 
for (let [index, color] of colors.entries()) {
    console.log(index, color);
}