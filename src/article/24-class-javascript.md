---
title: "Classes Javascript"
date: "29 November 2021"
---

ES6 intoduced classes, it's often used by some front-end libraries such as react, in simple term classes are special kind of functions

```
function Car(type,brand){
    this.type= type;
    this.brand = brand;
}
Car.prototype.getDescription = function(){
    console.log(`This car is ${this.type} from brand ${this.brand}`)
}

let newCar = new Car('Jazz','Honda')
newCar.getDescription()

```

Before classes introduce in ES6, the best way to create an object template was using functions, but now we can create an object template using classes,
as above example can be rewritten with class in following way

```
class Car{
    constructor(type,brand){
        this.type= type;
        this.brand = brand;
    }
    getDescription=()=>{
        console.log(`This car is ${this.type} from brand ${this.brand}`)
    }
}
let newCar = new Car('Jazz','Honda')
newCar.getDescription()
```

Now we have more better approach for creating object template in the form of classes, the difference between functions and classes in simple are

- classes are blueprint for javascript object
- function are the way to package reusable code

Therefore, when we need to make reusabled block of code that used multiple time, we can package those block inside function, However
when we need to create an object that needs to generated mulitple times then use classes
