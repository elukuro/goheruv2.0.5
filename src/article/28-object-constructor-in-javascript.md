---
title: "Object constructor in javascript"
date: "6 February 2022"
---

Object constructor is a blueprint of an object, it is a function that is used to create an object.

```
function Person(first,last,age){
    this.firstname= first;
    this.lastname = last,
    this.age = age;
}

const father = new Person('Jhon','Doe',24);
const mother = new Person('Jean','Doe',28);

```

In those example, we call `Person` function two times, thereby create two different instance of the functions, since we use `new` keyword
it create two different object that set into `father` and `mother` variable.

However we cannot add new properties or methods to an object constructor directly in the way we that we use to add properties or methods to an object.

```
    Person.nationality = "USA";
    const father = new Person('Jhon','Doe',24);
    father.nationality
    // undefined
```

To add new properties or new methods to the object constructor, we can use prototype

```
    Person.prototype.nationality = "USA";
    father.nationality
    // USA
```

Now every object created using the object constructor `Person` will have property `nationality` set to `USA`
