---
title: "Clean code tips #1: variable"
date: "9 September 2021"
---

## Use meaningful names 
Yes, I know that you already know but to be honest, putting a meaningful name for a variable is not easy. We must always remember that the name given to a variable sould be descriptive.Different languages sometimes have different conventions as well, for example variable names in javascript is usually writen in `camelCase`.as for `boolean` variables, their names usually answer questions such as `isActive` `hasParams` etc.

```
// ❌ Don't 

const x = "Jean Doe";
const bar = 23;
const active = true;

// ✅ Do

const fullName = "Jean Doe";
const Age = 23;
const isActive = true;
```

## Dont hardcode values 

Hard coded values are difficult to maintain. Its a pain to keep track of and even more of a hassle to change. Instead, using a meaningful and searchable constant name (using `SCREAM_SNAKE_CASE`) for a constant value is the way to go as shown for the function parameter shown below: 

```
function setConfig(hasKey = ''){
    ...
};

// ❌ Don't 

setConfig('KLKJFI123123KJHF');


// ✅ Do

const HASH_KEY = 'KLKJFI123123KJHF';
setConfig(HASH_KEY);
```


## Avoid overly descriptive variable names

Don't add redundant context to a variable that can already describe itself

```
// ❌ Don't 

const user:{
    userId:'12345',
    userPassword:'12345qwe',
    userFirstName:'John',
    userLastName:'Doe'
}

user.userPassword

// ✅ Do

const user:{
    Id:'12345',
    Password:'12345qwe',
    FirstName:'John',
    LastName:'Doe'
}

user.Password
```