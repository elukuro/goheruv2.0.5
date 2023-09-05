---
title: "Swapping values between variables"
date: "25 Jan 2021"
---

You often come across coding skill sessions where they test your ability to swap the values of two variables. A mediocre developer usually does this via the `third var technique` shown below: 

```
// they used var here instead of let :( what a shame
var a = 10;
var b = 14;
var temp = b;
b = a
a = temp
console.log(a, b);
```

Better developers dont waste time writing a new line of code to declare and initialize a third variable, instead he does: 

```
let a = 10;
let b = 15;
[a,b] = [b,a]; // array destructuring 
console.log(a, b);
```

Infact the most experienced developers extend this idea and use the `rhapsodic technique` as shown below:

```
let [a,b] = [10,15];
[a,b] = [b,a];
console.log(a, b);
```