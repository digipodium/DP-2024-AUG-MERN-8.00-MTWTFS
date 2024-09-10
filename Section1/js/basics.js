console.log("Hello from My Side");
console.log("Hello from My Side");
console.log("Hello from My Side");

// Types of variables
// 1. var
// 2. let
// 3. const

var a = 10
console.log(a)
let b = 20
console.log(b)
const c = 30
console.log(c)

// using let we can change the value of variable
b = 40
console.log(b)
// using const we can't change the value of variable
// c = 50
// console.log(c)

var x = 30
// Redeclaration is possible in var
var x = 40
// Reassign is possible in var
x = 50
console.log(x)

let y = 30
// Redeclaration is not possible in let
// let y = 40
// Reassign is possible in let
y = 50
console.log(y)

// redeclaration and reassignment is not possible in const

console.log("---------------------------")
// Local scope
let num = 10
console.log(num)

if (true) {
    let num = 20
    console.log(num)
}
console.log(num)

console.log("---------------------------")
// Global scope
var num1 = 10
console.log(num1)

if (true) {
    var num1 = 20
    console.log(num1)
}
console.log(num1)