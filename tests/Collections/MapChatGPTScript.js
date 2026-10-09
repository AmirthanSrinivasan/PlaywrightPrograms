// Declare a Map
let months = new Map();

// Add elements (key → value)
months.set(1, "January");
months.set(2, "February");
months.set(3, "March");

console.log("Map after adding elements:", months);

// Log the 2nd element (convert values to array)
let secondElement = Array.from(months.values())[1];
console.log("2nd element:", secondElement);

// Log the size
console.log("Size of map:", months.size);

// Check if it contains "March"
let hasMarch = Array.from(months.values()).includes("March");
console.log("Contains March?", hasMarch);

//////
let hasMarchKey = Array.from(months.keys()).includes(1);
console.log("Contains March Key?", hasMarchKey);

// Remove the 3rd element (using key = 3)
months.delete(3);

console.log("Map after removing 3rd element:", months);
