const accountId = 1234;

// we can declare variable using 2 ways let and var but we mostly do not use var variable because it have scope issue
// in var scope is not defined 
/*
prefer not to use var
because of issue in block scope and functional scope
*/
let accountEmail = "tehreennaseer@gmail.com"
var accountPassword = "tehreem519"
accountCity = "Lahore"
let accountState;  // its value print as undefine

//accountId = 98227;  // cannot change value of constant variable  i tried and it give following error not allowed to change its value

//TypeError: Assignment to constant variable.

accountEmail = "tehreem789@gmail.com"
accountPassword = "abc6789"
accountCity  = "Islamabad"

console.log(accountId);
console.table([accountId ,accountEmail ,accountPassword,accountCity , accountState]); // console.table is used to print more than one variable


