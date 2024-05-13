// stack(primitive)  heap(non primitive)

when we declare a value like let aa = 123 and bb = aa later we change the value of bb= 789 then the value of 
aaa will remain the same and the value if bb will change although we assign bb the value of aa
it is because we give the copy value of aa not refernce while in non primitive data type value store in heap 
so when we assign a value to non primitive data type like let user1={
    email : "tehreennaseer@gmail.com"
}
and assign it in second variable like user2 = user1  later when we change the value of user2 variable like 
user2.email = tnaseer@gmail.com
it change both the value user1.email and user2.email
because it give the refernce so when we change the refernce change the actual value

//datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare i