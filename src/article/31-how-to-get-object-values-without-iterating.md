---
title: "How to get all object values without iterating"
date: "8 May 2022"
---

Es8 has introduced a new feature called `Object.values()` that can be used to get the values of an object.

Instead of iterating through every element of object we can use `Object.values` to return all values
of an object in the form of array.

```
    const cars = {
        'Toyota': 'Camry',
        'Ford': 'Fiesta',
        'Honda': 'Civic'
    };
    const carsValue = Object.values(cars);

    //['Camry', 'Fiesta', 'Civic']
```
