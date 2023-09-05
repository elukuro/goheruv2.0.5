---
title: "Conditional Function Calls"
date: "16 July 2021"
---

Usually when we want to call two functioned based on a condition, the code is often clunky and looks somewhat like this:


```
const type = 'greeting';

function greeting() {
    console.log('hello')
}

function goodbye() {
    console.log('goodbye')
}

if(type == 'greeting'){
    greeting()
}else{
    goodbye()
}
```

However, there exists a simple shorthand to simplify the above code into a single line as shown below: 


```
(type == 'greeting' ? greeting : goodbye)()
``` 


