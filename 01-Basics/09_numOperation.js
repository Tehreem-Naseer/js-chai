const score = 100
console.log(score) //100

const balance = new Number(400)
console.log(balance)  // [Number: 400]

//toString

console.log(balance.toString().length)
console.log(balance.toString())

//tofixed      how many digit you want after digit
console.log(balance.toFixed(2)) // return 400.00
console.log(balance.toFixed(7)) // return 400.0000000

// to precision

const otherNumber   = 23.899
console.log(otherNumber.toPrecision(3)) // return 23.9

const otherNumber1 = 123.53
console.log(otherNumber1.toPrecision(3)) // return 124  as we mention we only want 3 significant digit

const otherNumber2 = 12223.53
console.log(otherNumber2.toPrecision(3))  // return 1.22e+4

const otherNumber3 = 10000000
console.log(otherNumber3.toLocaleString()) // return 10,000,000

console.log(otherNumber3.toLocaleString('en-IN')) // return 1,00,00,000

console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MIN_VALUE) //5e-324
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

///////////////////  Maths /////////////////////////

console.log(Math)  // 
console.log(Math.abs(-5))  //  absolute value issue
console.log(Math.round(12.3))  //12
console.log(Math.round(12.6))  //13
console.log(Math.ceil(4.2))   //5
console.log(Math.floor(4.2))  //4
console.log(Math.floor(4.9))  //4

//sqrt

console.log(Math.pow(2,5))  //32

console.log(Math.min(7,4,6,8,3,1))  // 1 return min number
console.log(Math.max(5,6,8,9,3,2,1)) // 9 return max number

// for any random value  its value is between zero and 1
console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1) // 3 to avoid zero  and value between a 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) //13
console.log(Math.floor(Math.random()*(max-min+1)))  // 1 this will give value between 1 and 10
