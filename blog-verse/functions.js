// Default Function

console.log("\nDefault Func: ")
function greet(){
    console.log("Welcome to Devastra...");
}
greet()

// Parametarized Function

console.log("\nParametarized Func: ")
function student(name, age){
    return {name, age}
}
let studentDetails = student("Jasmika", 19);
console.log("Student Details: ", studentDetails);

// Arrow Function 

console.log("\nArrow Func: ")
const square = (x) => x * x;
console.log(square(5));

const add = (x, y) => {
    console.log(x, y);
    return x + y;
}
console.log(add(10, 12));