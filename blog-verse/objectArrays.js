// Array Methods and Destructuring

console.log("\nArray Methods and Destructuring")

let person = {
    name: "Sirisha",
    age: 29,
    skills: ["JavaScript", "React", "Node.js"]
};

const {name, age} = person; // Destructuring Assignment
console.log(name)
console.log(age)

let fruits = ['Apple', 'Orange'];
console.log(fruits[0])

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((num) => num * num); // Transform each element
console.log(squares);

let even = numbers.filter((num) => num % 2 === 0); // Filter elements based on condition
console.log(even);

let sum = numbers.reduce((present, num) => present + num, 0); // Accumulate values
console.log(sum)

// Array of objects

let students = [
    {name: 'Jasmika', marks: 40}, 
    {name: 'Sirisha', marks: 50}, 
    {name: 'Kavya', marks: 60}
];

let i = 0;
for(object of students){
    i++;
    console.log("Student ", i , ": ", object)
}

let highestMarks = 0;
for(let object of students){
    if(object.marks > highestMarks){
        highestMarks = object.marks;
        topper = person.name
    }
}
console.log("Highest Marks: ", highestMarks , " for ", topper);