//let score = 33
let score = "33"
let score1 = "33abc"
let score2 = null
let score3;
let score4 = true

console.log(typeof score)
console.log(typeof (score))

let numberConversion = Number(score)
let numberConversion1 = Number(score1)
let numberConversion2 = Number(score2)
let numberConversion3 = Number(score3)
let numberConversion4 = Number(score4)

console.log(typeof (numberConversion))  //return number 
console.log(typeof (numberConversion1)) // return number 

console.log(numberConversion)  //return  33 
console.log(numberConversion1) //return  NaN
console.log(numberConversion2) //return 0
console.log(numberConversion3) //return NaN
console.log(numberConversion4) //return 1


// lets convert boolean

let isLoggedIn =1
let isLoggedIn1 = 7
let isLoggedIn2 = -7
let isLoggedIn3 = 0
let isLoggedIn4 = ""
let isLoggedIn5 = "tehreem"

let booleanConversion = Boolean(isLoggedIn)
let booleanConversion1 = Boolean(isLoggedIn1)
let booleanConversion2 = Boolean(isLoggedIn2)
let booleanConversion3 = Boolean(isLoggedIn3)
let booleanConversion4 = Boolean(isLoggedIn4)
let booleanConversion5 = Boolean(isLoggedIn5)

console.log(typeof booleanConversion)
console.log(typeof booleanConversion1)
console.log(typeof booleanConversion2)
console.log(typeof booleanConversion3)
console.log(typeof booleanConversion4)
console.log(typeof booleanConversion5)

console.log(booleanConversion)   // return true
console.log(booleanConversion1)  // return true
console.log(booleanConversion2)  // return true
console.log(booleanConversion3)  // return false
console.log(booleanConversion4)  // return false
console.log(booleanConversion5)  // return true

//lets convert in String

let something = 33
let something1 = null

let stringConversion = String(something)
let stringConversion1 = String(something1)

console.log(typeof stringConversion)   // return string
console.log(typeof stringConversion1)  // return string

console.log(stringConversion)     // return 33
console.log(stringConversion1)    // return null
