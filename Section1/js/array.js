let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
console.log(fruits)

console.log('---------------Array Methods-----------------')
// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove element from the beginning of the array
// 4. unshift() - add element at the beginning of the array
// 5. concat() - merge two arrays
// 6. slice() - extract a portion of an array
// 7. splice() - add/remove elements from an array
// 8. indexOf() - find the index of an element
// 9. forEach() - loop through the array
// 10. map() - create a new array from an existing array
// 11. filter() - create a new array with elements that pass a test

// Indexing and Slicing

console.log(fruits[3])
console.log(fruits[2])

console.log(fruits.slice(1,5))

console.log('---------------Array Methods-----------------')

fruits.push("Grapes")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.unshift("Kiwi")
console.log(fruits)

fruits.shift()
console.log(fruits)

const vegetables = ["Carrot", "Cabbage", "Tomato", "Potato"]
const newarr = vegetables.concat(fruits)
console.log(newarr)

newarr.push("Pumpkin")
console.log(newarr)

const index = newarr.indexOf("Mango")
console.log(index)

newarr.splice(2, 2, "Spinach", "Lettuce")
console.log(newarr)

const num = [1,2,3,4,5,6,7,8,9,10]
num.forEach((x) => {
    console.log(x)
})

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let newArr = []
arr.forEach((x) => {
    newArr.push(x*2)
})
console.log(newArr)

let newArr1 = arr.map((x) => x*2)
console.log(newArr1)

const evenNum = arr.filter((x) => x%2==0)
console.log(evenNum)