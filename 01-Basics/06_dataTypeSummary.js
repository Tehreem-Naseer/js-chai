// primitive Datatype
//7 type
//string number null boolean undefined symbol BigInt

//Reference type (non primitive)
//Array object function

//Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.

// to make it type strict 

//const score:number = 100

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId) // return false
//place n at last to make it big int
const bigNumber = 298389289003898393n

const arrayExamp = ["lahore","islamabad","karachi"]  //array
//object
const myObj = {
    name : "Tehreem",
    age : "25",
}
//function
// assign variable a function
const myFunc  = function(){
    console.log("Hello World")
}

//// https://262.ecma-international.org/5.1/#sec-11.4.3