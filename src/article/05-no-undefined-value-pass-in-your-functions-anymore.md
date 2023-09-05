---
title: "Providing default values for params"
date: "12 Feb 2021"
---

When we want our functions to be able to run on variable number of arguments, we can set `default values` for those arguments. This way, if one of the arguments arent provided, the function can still proceed rather than being `undefined`

```
    function multiply(a = 1 ,b = 1) {
        return a * b;
    }

    console.warn(multiply(5,2))
    // expected output : 10 

    console.warn(multiply(5))
    // expected output: 5 ( 5 * 1)

    console.warn(multiply())
    // expected output: 1 (5 * 1)
```

