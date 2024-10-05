// Types of functions in JavaScript
// 1. User defined functions
// 2. Built-in functions

// syntax for user defined functions

// function functionName() {    
//     // code to be executed
// }

// function call
// functionName()

// non parameterized function
function greet() {
    console.log("Hello, Good Morning")
}
greet()

// parameterized function
function greet1(name){
    console.log("Hello", name)
}
greet1("John")

// function without return statement
function addNum(a,b){
    console.log(a+b)
}
num = addNum(10,20)
console.log(num)

// function with return statement
function addNum1(a,b){
    return a+b
}
num1 = addNum1(10,20)
console.log(num1)
num2 = addNum1(30,40)
console.log(num2)

console.log("---------------------------")

function square(n){
    return n**2
}       
console.log(square(3))

console.log("---------------------------")

function myFunc(num,pow){
    return num**pow
}
console.log(myFunc(3,5))

console.log("-----------Arrow Function----------------")

// syntax for arrow function
// const functionName = () => {
//     // code to be executed
// }

const double = (n) => n*2
console.log(double(5))

console.log("---------------------------")

const evenOdd = () => {
    for (let i=0; i<=10; i++){
        if (i%2==0){
            console.log(i, "is even")
        } else {
            console.log(i, "is odd")
        }
    }
}
evenOdd()

console.log("---------------------------")
// const fun = N => {
//     var n = 10;
//     return N+2;
// }
// console.log(n)

const addNum2 = (a,b) => {
    let c = a+b
    console.log(c)
}
const res = addNum2(45,67)
console.log(res)

console.log("---------------------------")

const fruits = ['apple', 'banana', 'orange', 'grape','mango']
console.log(fruits.slice(2))
