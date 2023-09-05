---
title: "Developer malpractices to avoid"
date: "6 May 2021"
---

### Write code as sort as possible 
Dont try to make your code as short as possible, which often leads to code thats hard to understand for other developers. Code like the one shown below is discouraged : 
```
‘?’ i = i ? i < 0 ? Math.max(0, len + i) : i : 0; 
```
Is it possible to guess the value of variable `i`? Someone tasked with figuring it out might spend his whole life just to see that the value of `i` is 0 .

### One letter variables
Don't name your variables as a,b,c or d. Asingle letter variable name is hard to find and search by editor.Moreover it is difficult to understand what the variable represents from its name unless we analyze the code line by line.

### Use Abbreviations
Don't name your variable with pointless or meaningless abbreviations as shown below :
```
    list → lst
    begin_date →bgdt
    browser → bws
```
you can use `dob` as abbreviation of date of birth instead of `dteofbrth` .

### Being abstract with variable names
Don't use abstract names such as `obj, value, data, elem` as your variable name unless they are the only variable within your code scope, it's hard to define `data` variable if we use more than one data. What does `data` or `value` mean anyway? Everything has data and value so using `userData` or `customerData` to provide more meaningful name is better.

### Super functions
Don't create a function that has many other functions, a good function only does one thing, `validateEmail(email)` function should only validate email format and not send or prefill an email values. It is prefered to create other functions to do that.

### Inconsistent naming
If you define `showFirstName` function to preview first name then don't define `displayLastName` as function to preview last name. It is confusing and hard to debug when your code gets bigger. So you should take care to be consistent with your prefix. 
naming your function `showLastName` instead of `displayLastName` would be more consistent.

### Re-use variable names
Don't reuse a variable name since that makes it too hard to know the actual value and takes more time to analyse the code.
