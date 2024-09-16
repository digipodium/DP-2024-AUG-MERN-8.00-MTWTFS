// There are two types of loops in JavaScript
// 1. for loop
// 2. while loop

// for loop
for (let i = 0; i<=10; i++) {
    console.log(i)
}
console.log("---------------------------")

// while loop
let i = 0
while (i<=10) {
    console.log(i)
    i++
}

for (let i = 0; i<5; i++) {
    console.log("John")
}

// for of loop
let names = ["John", "Smith", "Sam"]
for (let name of names) {
    console.log(name, "is a good human")
}

console.log("---------------------------")

// for in loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
}
for (let k in person) {
    console.log(k)
}

console.log("---------------------------")

// to print both the keys and values
for (let k in person) {
    console.log(k,":", person[k])
}
