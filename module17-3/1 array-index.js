// array index starts from 0
var numbers = [45, 68, 78, 56, 89, 98];
// array index :0,  1,  2,  3,  4,  5

// 1. get element by index
// console.log(numbers); // [ 45, 68, 78, 56, 89, 98 ]
// console.log(numbers[0]); // 45
// console.log(numbers[1]); // 68
// console.log(numbers[2]); // 78

/* 
var element = numbers[1];
console.log(element); // 68 */

/* 
var numbers = [45, 68, 78, 56, 89, 98]; */
/* 
numbers.push(100);
console.log(numbers); // [ 45, 68, 78, 56, 89, 98, 100 ] */

/* 
// 2. set element value by index
numbers[1] = 55;
console.log(numbers); // [ 45, 55, 78, 56, 89, 98 ] */

// 3. find index of an element

var numbers = [45, 68, 78, 56, 89, 98];
/* 
var positionIndex = numbers.indexOf(68);
console.log(positionIndex); // 1
 */
var positionIndex = numbers.indexOf(168);
console.log(positionIndex); // -1
