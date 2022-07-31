// how to add an element at the beginning of an array javascript
// https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
const array1 = [3, 2, 1];

const newFirstElement = 4;

const newArray1 = [newFirstElement].concat(array1); // [ 4, 3, 2, 1 ]

console.log(newArray1);
// -----------
const array2 = [3, 2, 1];

const newLastElement = 0;

// Both of these lines are equivalent:
const newArray2 = array.concat(newLastElement); // [ 3, 2, 1, 0 ]
const newArray3 = array.concat([newLastElement]); // [ 3, 2, 1, 0 ]

console.log(newArray2); // [3, 2, 1, 0]
console.log(newArray3); // [(3, 2, 1, 0)];
