// Given arrya
var fruits = ["Apple", "Banana", "Orange"];

// Find the index of ‘Banana'
indexOfBanana = fruits.indexOf("Banana");

console.log("Index of Banana : ", indexOfBanana); // Index of Banana :  1

// replace ‘Banana’  with ‘Mango’
fruits[indexOfBanana] = "Mango";

console.log(fruits); // ["Apple", "Mango", "Orange"]

// Remove ‘Orange’ and add ‘Watermelon’

var removeOrange = fruits.pop();
console.log(removeOrange); // Orange

// after removing orange, fruits array will be ["Apple", "Mango"]
console.log(fruits); // ["Apple", "Mango"]

// adding watermelon
var addWatermelon = fruits.push("Watermelon");
console.log(fruits); // ["Apple", "Mango", "Watermelon"]
console.log(addWatermelon); // 3
