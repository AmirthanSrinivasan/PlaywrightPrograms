// Declare an empty array
let months = [];

// Add elements one by one
months.push("January");
months.push("February");
months.push("March");

console.log("Array after adding elements:", months);

// Get and print the 2nd element (index starts from 0)
console.log("2nd element:", months[1]);

// Print the Size/Length
console.log("Length of array:", months.length);

// Check if it contains "March"
console.log("Contains March?", months.includes("March"));

// Remove 3rd element (index 2)
months.splice(0,1);   // removes 1 element at index 2

console.log("Array after removing 3rd element:", months);
