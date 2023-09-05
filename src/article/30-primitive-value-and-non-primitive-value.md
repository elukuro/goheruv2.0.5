---
title: "Primitive value and Non primitive value"
date: "7 March 2022"
---

Primitive value in javascript is a value that is not have any properties or methods. Javascript have five data types of primitive values:

- string
- number
- boolean
- null
- undefined

In the other hand non primitive value is a value that have properties or methods. Javascript have two data types of non primitive values:

- object
- arrays

The difference between primitive value and non primitive value is that primitive value is immutable, while non primitive value is mutable, another difference is primitive value copy by value, non primitive value copy by reference.

## Copy by value

To undersanding what is copy by value, let's see an example:

```
    let a = 17
```

In this example we set value of variable a with 17, but what actually happen behind the scenes is that javascript make a reserved space in javascript memory and store the value 17 in that reserved space, to simplify the example let's say that reserved space is called `001`.

```
    let a = 17
    // memory 001 = 17
```

Then we set another variable, let's see what happen:

```
    let a = 17
    // memory 001 = 17
    let b = a
```

What actually happen is javascript copies the value that inside `a` variable that stored in `001` memory and assign it to variable `b`, then javascript reserved another space in the memory for variable `b` to simplify let's say that reserved space is called `002`.

```
    let a = 17
    // memory 001 = 17
    let b = a
    // memory 002 = 17
```

Now we're come to interesting part, what if I change the value of variable `a`?

```
    a = 15;
    console.log(a);
    // 15
    console.log(b);
    // 17
```

If we change variable `a` shouldn't the value of variable `b` change?

What happen is javascript changes the value stored inside `001` memory to 15, but the value of variable `b` still remain 17 because there is no change in the reserved space `002` memory.

```
a = 15;
console.log(a);
// 15
// memory 001 = 15
console.log(b);
// 17
// memory 002 = 17
```

## Copy by reference

Let's understand what is copy by reference by looking at the example below:

```
var car = {
    name: 'Ford',
    type:'Fiesta',
    horsePower: 100
};
```

In this example we set value of variable car with object, similar with copy by value, javascript will reserved space in the memory and store the value of object inside reserved spaces, to simplify let's say that reserved space is called `003`.

```
var car = {
    name: 'Ford',
    type:'Fiesta',
    horsePower: 100
};
// memory 003 = {name: 'Ford', type: 'Fiesta', horsePower: 100}
```

Let's set another variable:

```
var car = {
    name: 'Ford',
    type:'Fiesta',
    horsePower: 100
};

var anotherCar = car;
```

Then we change the value of key `type` inside car object, let's see what happen:

```
car.type = 'Focus';

console.log(car.type);
// Focus
console.log(anotherCar.type);
// Focus

```

Let's understanding this with memory reference. when we create variable `anotherCar` we also reserved space in the javascript memory, to simplify let's call it `004`, however the value stored inside memory `004` is not copied of `car` object value, instead the address of reserved space for variable `car`, it's mean that `004` memory will store `003` memory address.

```
var car = {
    name: 'Ford',
    type:'Fiesta',
    horsePower: 100
};
// memory 003 = {name: 'Ford', type: 'Fiesta', horsePower: 100}

var anotherCar = car;
// memory 004 = 003
```

This will explain why when we change the value of key `type` inside car object, the value of key `type` inside variable `anotherCar` also change. because `anotherCar` variable is pointing to the same memory address that `car` variable is pointing to.
