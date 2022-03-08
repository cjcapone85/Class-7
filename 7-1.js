// function redundantReturn() {
//     let str = "Chad"
    
//     function name() {
//         //console.log(str);
//     }
//     return name;
// }

// let newName = redundantReturn();

// console.log(newName);
//newName();


function redundantReturn(str) {
    return () => {
        return str + "!"
    }
}

const something = redundantReturn("name")
console.log(something());



// ## Exercise #1: Basic

// **Aim**: Write a function `redundantReturn` that takes in a string `str` and returns a function that returns str.