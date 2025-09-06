// Arthmetic Operators 

let x = 11, y = 5;

console.log("x + y =", x + y); 
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y", x ** y);

// Assignment Operators 

let z = 4

z+=4
console.log("z+=4 =", z)
z-=4
console.log("z-=4 =", z)
z*=4
console.log("z*=4 =", z)
z/=4
console.log("z/=4 =", z)
z%=4
console.log("z%=4 =", z)

// Comparision Operators 

let a = 12, b = "12";

console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);
console.log("a !== b:", a !== b);
console.log("a <= b: ", a <= b);
console.log("a >= b: ", a >= b);
console.log("a < b:", a < b);
console.log("a > b:", a > b);

// Logical Operators

let p = 10, q = 20;

console.log(a < 20 && b < 20);
console.log(a < 20 || b < 20);
console.log(!(a < 20));

// String Operators 

let firstName = "Peddada", middleName = "Jasmika", lastName = "Satya Sri"; 

fullName = firstName + " " + middleName + " " + lastName;
console.log("Full Name:", fullName);
let correctName = `Hello, ${fullName}!`;
console.log("Correct Name: ", correctName);

// Ternary Operator 

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";

console.log(canVote);

// Increment and Decrement Operators

let count = 5;

console.log("Post Increment (count++): ", count++);
console.log("After Post Increment (count): ", count);
console.log("Pre Increment (++count): ", ++count);
console.log("Post Decrement (count--): ", count--);
console.log("After Post Decrement (count): ", count);
console.log("Pre Decrement (--count): ", --count);
