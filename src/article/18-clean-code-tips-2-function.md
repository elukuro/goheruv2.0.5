---
title: "Clean code tips #2: Functions"
date: "11 September 2021"
---

## Use descriptive names

Always remember to name your functions descriptively. It is allright if your function names are lengthy as long as they describe what the function does. Function names usually take the form of action verbs: 


```
// ❌ Don't 

function switch(){

}

function declined(user){

}

// ✅ Do

function toggleSwitchDarkMode(){

}

function isDecline(user){

}

```

## Add default arguments for extra safety

Default arguments can prevent ur function from returning `undefined` and getting an error. Technically you can perform short-circuiting to prevent this from happening but using default arguments is a better way to solve that problem.

```
// ❌ Don't

function printFromDirectory(dir){
    return dir 
}

printFromDirectory()


// ✅ Do

function printFromDirectory(dir = './print'){
    return dir 
}

printFromDirectory()


```

## Limit the number of arguments 

It is recommended to have anywhere from 0 to 2 arguments max for a single function. Any more than that and your function might seem too complex and can be made better by dividing into smaller ones.

If you want to pass data through functions you can use `Object`

function argument should only have zero, one or two arguments, more than that mean your functions is to complex and need to devided to smaller one.
if you want to pass data through function you can use an `object`

```
// ❌ Don't 

function sendUserData(name,state,sex,age){

}

sendUserData('John','Canada','Male','32')

// ✅ Do

const userData={
    name:'John',
    state:'Canada',
    sex:'Male',
    age:'32'
}
sendUserData(userData)

```

## Avoid multiple actions and flag as arguments

A function is best defined when it does one operation or action at a time. This reduces the function size, complexity and makes it easier to debug and refactor. Generally having a line range of 20-30 is acceptable and flags as arguments can be simplified as shown below :


```
// ❌ Don't 
function calculate(x, y, operation){
    if(operation === 'add'){
        return x + y;
    }
    if(operation === 'substract'){
        return x - y;
    }
    if(operation === 'multiply'){
        return x * y;
    }
    if(operation === 'divide'){
        return x / y;
    }
}

// ✅ Do
function addNumber(x,y){
    return x+y;
}

function substractNumber(x,y){
    return x-y;
}

function multiplyNumber(x,y){
    return x*y;
}

function devideNumber(x,y){
    return x/y;
}

```

## Don't repeat yourself 

If you find yourself with repetitive code, make sure to change it before its too late since it will become a hastle to make changes in the logic later on.

```
// ❌ Don't 

function getTrucksList(trucks) {
    trucks.forEach(truck)=>{
        const {price, size, numberOfWheel} = truck
        render({price,size,numberOfWheel})
    }
}

function getCarsList(cars) {
    cars.forEach(car)=>{
        const {price, numberOfDoors} = car
        render({price,numberOfDoors})
    }
}

// ✅ Do

function getVehichlesList(vehicles){
    vehicles.forEach(vehicle){
        const price = vehicle.price
        const data = {price}

        if(vehicle.type ==='truck'){
            data.size = vehicle.size
            data.numberOfWheel= vehicle.numberOfWheel
        }
         if(vehicle.type ==='car'){
            data.numberOfDoors= vehicle.numberOfDoors
        }
        render({data})
    }
}

```

## Avoid side effects 

Side effects of code refer to unexpected developments in results somewhere due to changes elsewhere. They are undesirable and causes of side effects are easier to fix if they are centralized

```
// ❌ Don't 
let date = "11-08-2021";

function splitIntoDayMonthYear() {
  date = date.split("-");
}

splitIntoDayMonthYear();


// ✅ Do
function splitIntoDayMonthYear(date) {
  return date.split("-");
}

const newDate = splitIntoDayMonthYear(date)

```