const accountId = 1234;
let accountEmail = "tehreennaseer@gmail.com"
var accountPassword = "tehreem519"
accountCity = "Lahore"

//accountId = 98227;  // cannot change value of constant variable  i tried and it give following error not allowed to change its value

//TypeError: Assignment to constant variable.

accountEmail = "tehreem789@gmail.com"
accountPassword = "abc6789"
accountCity  = "Islamabad"

console.log(accountId);
console.table([accountId ,accountEmail ,accountPassword,accountCity]); // console.table is used to print more than one variable


