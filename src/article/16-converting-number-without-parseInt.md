---
title: "Converting a string to an Integer"
date: "21 July 2021"
---

A very common way to get the integer value from a string of digits is to use the parseInt() method as shown below:

```
const num = parseInt("100")
```

However instead of using `parseInt` or `parseFloat` , a simple `+` operator will do the trick as depicted below:

```
const num = +"100"
```
