---
title: "What is hoisting ? explain in less than 3 minutes"
date: "12 November 2021"
---

Short answer: Hoisting is javascript behaviour that move declaration to the top

```
yourName="Jiwoo";
console.log(yourName);
var yourName;
```

What really happen here is during compile phase, javascript will put the variables declaration into memory, visually similar like this:

```
var yourName;
yourName="Jiwoo";
console.log(yourName);
```

Okay then let's try another example

```
number1 = 3;
console.log('number 1', number1);
console.log('number 2', number2);
console.log('number 3', number3);
var number2 = 3;


// output
// number 1 3
// number 2 undefined
// Uncaught ReferenceError: number3 is not defined
    at <anonymous>:4:25

```

What the heck is going on here ?, okay let's break it down

Since there is no declaration and initialisation for `variable3` it's make sense when the result are `Uncaught ReferenceError: number3 is not defined`

We didn't make any variable declaration for `number1`, but why it's log correct answer?, it's because javascript "magically" create a declaration for `number1` variable and move it to the top. In simple term javascript saying "Hey you're initialise `number1` with value `3` but you're not making any declaration, okay you lazy I will do it for you huufh 😩"

`number2` are the most confusing one, you already initialise and declare your variable but why it's log `undefined`?, Remember that hoisting only move declaration?, it's mean that javascript only move `number2` declaration to the top and because initialisation happen after `console.log` it will log `undefined`
