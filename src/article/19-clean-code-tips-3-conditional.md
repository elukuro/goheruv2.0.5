---
title: "Clean code tips #3: Conditionals"
date: "16 September 2021"
---

## Positive Conditionals over negative ones

understanding negative conditionals is a bit more cumbersome as compared to understanding positive ones so it is prefered to employ those more

```
// ❌ Don't 

function isUserNotVerified(){

}

if(!userVerified){

}

// ✅ Do

function isUserVerified(){

}

if(userVerified){

}

```


## Shorthands

Shorthands make your code more compact and easier to read
```
// ❌ Don't

if(isActive ==null){

}

if(firstname !== null || firstname !=='' || firstname !== undefined){

}

const isUserValid = user.isVerified() && user.isActive() ? true : false;

// ✅ Do

if(isActive) {

}

if(!!firstname){

}

const isUserValid = user.isVerified() && user.isActive()
```

## Object literals over Switch statements 

Object literals make your switch conditions easier to understand
```
// ❌ Don't

const getStatus = (status) => {
  switch (status) {
    case "success":
      return "green";
    case "failure":
      return "red";
    case "warning":
      return "yellow";
    case "loading":
    default:
      return "blue";
  }
};

// ✅ Do
const statusColors = {
  success: "green",
  failure: "red",
  warning: "yellow",
  loading: "blue",
};

const getStatus = (status) => statusColors[status] || statusColors.loading;
```


## Optional chaining 

Optional chaining is a very useful paradigm to use to make your code simpler and more concise. Unfortunately it doesnt work with the IE browser as of now.

It works as shown below : 

```
const alice = {
    name:'Alice',
    cat:{
        name:'Nala'
    }
}
// ❌ Don't

const cat = (alice && alice.cat && alice.cat.name) || 'N/A';

// ✅ Do

const cat = alice?.cat?.name ?? 'N/A';

```

click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) for more about optional chaining.