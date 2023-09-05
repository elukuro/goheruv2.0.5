---
title: "Bind, call, Apply in javascript"
date: "20 February 2022"
---

ES6 introduces the new metthos for objects, bind, call and apply, here a simple example to explain them.

```
    let car = {
        name: 'Ford',
        getName: function(){
            return this.name;
        }
    };
    let fullName = car.getName();
    fullName;
    // Ford
```

## Bind

bind create a new copy of the function, It accept a value as argument , let's see example:

```
    let car = {
        name: 'Ford',
        getName: function(){
            return this.name;
        }
    };
    let fullName = car.getName.bind(car);
    fullName();
```

In this example, we pass object car as argument to the bind method in the invocation of the getName method.
this bind method create a new copy of the original getName method and sets this keword to the object car.

here another example

```
    let car = {
        name: 'Ford',
    };
    function getName(){
        return this.name;
    }
    let fullName = getName.bind(car);
    fullName();
```

## Call

Call has similarity with bind, with some differences :

- call doesn't create a new copy of the function, it just call the function with the given arguments
- call imediately invoke the function
- call accept arguments

```
   let car = {
       name: 'Ford',
       getName: function(){
           return this.name;
       }
   };

   let firstCar = {name:'Honda'};
   let secondCar = {name:'Toyota'};

   car.getName.call(firstCar);
   car.getName.call(secondCar);

```

another example, see how we can pass arguments to the call method :

```
    let car = {
        name: 'Ford',
        getName: function(transmission){
            return `${this.name} has ${this.horsePower} horse power and is a ${this.type} and transmission is ${transmission}`;
        }
    };

    let firstCar = {name:'Honda', horsePower:'200', type:'SUV'};
    let secondCar = {name:'Toyota', horsePower:'100', type:'Sedan'};
    car.getName.call(firstCar, 'manual');
    car.getName.call(secondCar,'automatic');
```

## Apply

Is similar to call, but it accept an array of arguments instead of a list of arguments.

```
  let car = {
        name: 'Ford',
        getName: function(transmission, color){
            return `${this.name} has ${this.horsePower} horse power and is a ${this.type} and transmission is ${transmission} and color is ${color}`;
        }
    };

    let firstCar = {name:'Honda', horsePower:'200', type:'SUV'};
    let secondCar = {name:'Toyota', horsePower:'100', type:'Sedan'};
    car.getName.apply(firstCar, ['manual', 'red']);
    car.getName.apply(secondCar, ['automatic', 'blue']);

```
