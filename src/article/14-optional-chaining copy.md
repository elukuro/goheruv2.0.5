---
title: "Optional Chaining"
date: "23 May 2021"
---

When the reference that we use has `nul`-ish value, the chaining operator gives us an `undefined` value instead of the error. This is useful in situations where the content of an object don't have a guarantee as to which all properties are required or present.

```
const ourObject = {
    name:'Alina',
    pet:{
        name:'kitty',
        type:'cat'
    }
}
const dogName = ourObject.dog.name;
console.log(dogName)
```

In the above code, since dog does not exist in `ourObject` , it will return an : `Uncaught TypeError: Cannot read property 'name' of undefined`


It is to prevent such errors that we use optional chaining

```
const dogName = ourObject.dog?.name
console.log(dogName) // Undefined
```

So instead of throwing an error, the above code will return `undefined`. It also works for checking methods inside an object as shown below:

```
console.log(ourObject.nonEksistingMethod())
//Uncaught TypeError: ourObject.someNonExistentMethod is not a function

console.log(ourObject.someNonExistentMethod?.())
// Undefined    
```