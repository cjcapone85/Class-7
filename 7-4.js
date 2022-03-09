// **Aim**: Create the function that takes an array with objects and returns the sum of people's budgets.

const getBudgets = ([
    {name: "Chad", age:36, budget: 15000},
    {name: "Meagan", age:36, budget: 20000},
    {name: "Rohan", age: 2, budget: 200},
]);

let result = getBudgets.map(a => a.budget);
let sum = 0;
for (let i = 0; i < result.length; i++) {
    sum += result[i];
}

console.log(sum);







// _Examples_

// ```js
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])    ➞    65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])    ➞    62600
// ```