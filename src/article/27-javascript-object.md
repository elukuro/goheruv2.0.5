---
title: "Understanding Javascript Object"
date: "22 January 2022"
---

Object in javascript are similar with arrays, they able to store multiple value, however the difference is object don't have indexed positions like arrays
and object give a name to every value that you store.

## Analogy of object

Object in javascript has similarity with object in real life it has property and behaviors.

Car property will be something like:

- Brand
- Model
- Color
- Horse Power
- Transmission Type

Car has behaviors such as:

- Accelerate
- Turn right
- Turn left
- Turn on Light

Thoose car object inside javascript will looks like this:

```
    let car = {
        brand:"Toyota",
        model:"Prius",
        color:"silver",
        horsePower:98,
        transmissionType:"AT"
        accelerate:function(){
            // code to accelerate
        }
        turnRight:function(){
            // code to turn right
        }
        turnLeft:function(){
            // code to turn right
        }
        turnOnLight:function(){
            // code to turn on light
        }
        ...
    }
```

## Create an Object

There is two way to create object, first is using `object literal`, and second one are using `new` keyword.

```
// object literal

const car = {
    brand:"Toyota"
}

// new keyword

let car = new Object();
car.brand = "Toyota";
```

Between the two,`object literal` are widely use among developer because it's better readability and also faster execution.

### Object properties & Method

The key:value pair in javascript object called with `properties`, there is two ways to access properties either dot notation or square bracket.

```
// Dot notation

car.brand // Toyota

// Square bracket

car["brand"] // Toyota

// or calling square bracket with variable

const brand = "brand";
car[brand] // Toyota

```

Then you can change value of properties by set new value using `=` sign

```
car.brand = "Honda" // or
car["brand"] = "Honda"
```

You can also access all object values in a form of arrays using `Object.values`

```
const car = {
    brand:"Honda",
    type:"Civic"
}

Object.values(car)

// ["Honda", "Civic"]

```

To make a method (method is a function that store inside an object) you can add `function`.

```
    let person = {
        firstName:"John",
        lastName:"Snow",
        fullName:function(){
            return `${this.firstName} ${this.lastName}`
        }
    }
    person.fullName()
    // John Snow
```

`this` keyword refers to the owner of the functions, at above example it will be `person` object, therefore inside `fullName()` method `this.firstName`
will refer to `person` object with `firstName` property name or similar with `person.firstName`.
