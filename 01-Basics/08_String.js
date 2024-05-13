// concatination
// str = str1 + str

//string interpolation

let name = "tehreem"
let count = '3'

console.log(`hello my name is ${name.toUpperCase()}. This is new way of string concatination i have learnt it today hope i will
remember this. I also want to learn this course in ${count} days`)

// new way to declare string
const gameName = new String("dhuhfiwhifi")  // its datatype is object return value as key value pair like at 0 index 
//there is d at 1 index it is h so 0 is key and d is value and 1 is key h is value and so on

console.log(gameName[0])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.charAt(4)) //kis index par konsa character hai

console.log(gameName.indexOf('i'))

console.log(gameName.substring(0,4))

console.log(gameName.slice(0,4))
const anotherString = gameName.slice(-6,4) //this concept is not clear to me
console.log(anotherString)

//trim

const abc = "          test user             "
console.log(abc.trim())

// replace

const url = "http://localhost:443/dress%20me"

console.log(url.replace('%20' , '-'))

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);

console.log(url.includes('dress'))

console.log(url.includes('rrrhyj'))

const gameName2 = "bcxhd-ncxjn-bcxhdj"
console.log(gameName2.split('-'))

/* The small() method of String values creates a string that embeds this string in a <small> element (<small>str</small>), which causes this string to be displayed in a small font. */

const contentString = "Hello, world";

console.log(contentString.small());  // output <small>Hello, world</small>

/*
Instead of using small() and creating HTML text directly, you should use DOM APIs such as document.createElement(). For example:

JS
Copy to Clipboard
const contentString = "Hello, world";
const elem = document.createElement("small");
elem.innerText = contentString;
document.body.appendChild(elem); 
*/