const student = {
    name : 'John',
    age : 25,
    email : 'john123@gmail.com',
    mobile : 9876543210
}
console.log(student)
// to access the values of the object throught the key
console.log(student.name)
console.log(student.email)
console.log(student.mobile)

// replacing the value of the object
student.email = 'john456@gmail.com'
console.log(student.email)
console.log(student)

// adding new key value pair to the object
student.city = 'Bangalore'
console.log(student)

console.log('--------------------------------')

const smartphones = {
    "brand" : "Samsung",
    "model" : "Galaxy S21",
    "price" : 70000,
    "color" : ["red", "white", "black", "blue"],
}
console.log(smartphones)
console.log(smartphones.brand)
console.log(smartphones.color[1])
smartphones.color[0] = "gray"
console.log(smartphones)

console.log('--------------------------------')

const phones = [
    {brand : "Samsung", model : "Galaxy S21", price : 70000, color : ["red", "white", "black", "blue"]},
    {brand : "Apple", model : "iPhone 12", price : 80000, color : ["red", "white", "black", "blue"]},
    {brand : "OnePlus", model : "8T", price : 45000, color : ["red", "white", "black", "blue"]},
    {brand : "Xiaomi", model : "Mi 10", price : 35000, color : ["red", "white", "black", "blue"]},
]
console.log(phones[1].model)
console.log(phones[0].color[2])
phones[1].color[0] = "gray"
console.log(phones[1])

5=="5" // true
5==="5" // false
