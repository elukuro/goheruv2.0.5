---
title: "Type of function"
date: "17 October 2021"
---

Using a `function` is a good way to contain spesific task so you can call it whenever you need, In simple term `function` is a block of code that is design to perform spesific task. Usually structure of function is look like this

```
function functionName(argument_1, argument_2, argument_n){ // code to be executed }
```

There are various type of functions that you can use depending what your need, below here four type of function

### Named functions

Create function by giving it name, this is the most common way to make a function

```
function Add(num1,num2){
    return num1+num2
}
Add(2,3)
```

### Imediate Invoke functions

Call a function as soon as they are declared, the benefit is since no variable are created, it does not take up space in the global object or global memory

```
(function(num1,num2){
    return num1 + num2
})(2,3);
```

### Anonymous functions

It's the opposite side of named functions a functions without a name, however unlike Imediate invoke functions anonymous function are not executed as soon as they declared.
Usually we need anonymous functions when function is very short in size, or when passing a function as an argument to another function such as inside `setInverval`

```
var sum = function(num1,num2) { return num1 + num2}
sum(2,3)

```

### Recursive functions

A function that keeps calling itself until the conditions is failed

```
function countDown(number){
    console.log(number)
    var newNumber = number -1;
    if(newNumber > 0){
        countDown(newNumber)
    }
}
countdown(4)
```

### Method

Function that are part of an object called method

```
let person = {
    firstName:'John',
    lastName:'Snow',
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}
person.fullName()
```
