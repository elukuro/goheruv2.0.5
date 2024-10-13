## What is an IIFE (Immediately Invoked Function Expression) and Why Should You Care?

### 13 Oct 2024

An (IIFE) Immediately Invoked Function Expression is a function that executed as soon as it’s defined.
It’s a common design pattern that helps create a private scope and avoiding polluting the global scope.

```javascript
(function () {
  // Code inside IIFE
})();
```

The function declare inside parentheses and trailing () immediately invoke it.

This can be useful when you need to fetch data immediately after the page loads, here the example:

```javascript
(async function () {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
```
