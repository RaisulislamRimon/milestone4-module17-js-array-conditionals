var numbers = [10, 20, 30, 40];
console.log(numbers); // [10, 20, 30, 40]
numbers.push(50);
console.log(numbers); // [10, 20, 30, 40, 50]

var friends = ["John", "Peter", "Mary", "Bob"];
console.log(friends); // [ 'John', 'Peter', 'Mary', 'Bob' ]
friends.push("Mike");
console.log(friends); // [ 'John', 'Peter', 'Mary', 'Bob', 'Mike' ]

// use pop to get last element
// friends.pop();
console.log(friends.pop()); // Mike
console.log(friends); // [ 'John', 'Peter', 'Mary', 'Bob' ]

var element = friends.pop();
console.log(element); // Bob
