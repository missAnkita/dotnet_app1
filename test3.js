// example.js

// A simple function to greet the user
function greet(name) {
    return `Hello, ${name}!`;
}

// Print a greeting to the console
console.log(greet('World'));

// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Print the array and its sum
console.log('Numbers:', numbers);
console.log('Sum:', numbers.reduce((acc, num) => acc + num, 0));
