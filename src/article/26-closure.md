---
title: "Understanding Javascript Closure"
date: "8 January 2022"
---

Closure gives you a access to an outer function scope from an inner function.

Here some simple example:

```
  function init(){
    let firstName = 'John';
    let lastName = 'Snow';
    function greeting(){ // inner function a closure
      return `Hello ${firstName} ${lastName}`;
    }
    return greeting();
  }
  init();
```

Here another example:

```
    function myName(){
        let name = 'Herro';
        function displayName(){
            return name;
        }
        return displayName;
    }
    let myFuncName = myName();
    myFuncName();
    // Herro
```

Let's see what going on

myName() function is run and place inside myFuncName variable and become reference to displayName() function, dispayName is'nt invoke yet.
since displayName() has reference to myName() within which variable name exists, then "Herro" is passed when myFuncName() are invoke.
