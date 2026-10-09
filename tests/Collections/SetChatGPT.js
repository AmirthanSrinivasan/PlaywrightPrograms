// Declare a Set
let months = new Set();

// Add elements
months.add("January");
months.add("February");
months.add("March");

console.log("Set after adding elements:", months);

// Get and log the 2nd element (convert to array)
let secondElement = Array.from(months)[1];
//let secondElement = [...months]
console.log("2nd element:", secondElement[1]);

// Log the size
console.log("Size of set:", months.size);

// Check if it contains "March"
console.log("Contains March?", months.has("March"));

// Remove the 3rd element (index 2 after converting to array)
let thirdElement = Array.from(months)[2];
months.delete(thirdElement);

console.log("Set after removing 3rd element:", months);
