console.log(2>1)
console.log(2<1)
console.log(2>=1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)

//it automatically convert it in number but sometimes it doesnot give desire result
console.log("2">1)  // return true
console.log("02">1) //return true

console.log(null > 0) //return false
console.log(null >= 0) //return true
console.log(null == 0) // return false

console.log(undefined > 0) //return false
console.log(undefined < 0) //return false
console.log(undefined == 0) //return false

//strict check ===

console.log("2" == 2) //return true
console.log("2" === 2)  //return false because it doesnot convert it into number