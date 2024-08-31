## Understanding Scope Chain in JavaScript

### 4 Aug 2024

In JavaScript, the scope chain is a mechanism that defines how variable resolution works in nested functions. It determines the order in which variables are looked up when a variable is referenced.

The scope chain works by looking up variables in the local scope first, then moving up to the outer (parent) scope, and finally to the global scope if necessary. This process continues until the variable is found or the global scope is reached.

### Example

```javascript
let globalVar = "global";

function outerFunction() {
  let outerVar = "outer";

  function innerFunction() {
    let innerVar = "inner";

    console.log(innerVar); // Outputs: inner
    console.log(outerVar); // Outputs: outer
    console.log(globalVar); // Outputs: global
  }

  innerFunction();
}

outerFunction();
```

Explanation:

- innerFunction can access innerVar from its own scope, outerVar from outerFunction’s scope, and globalVar from the global scope.
- If a variable is not found in the local scope, JavaScript moves up the scope chain to find it.

Understanding the scope chain is crucial for avoiding variable name conflicts and managing variable access in your code.
