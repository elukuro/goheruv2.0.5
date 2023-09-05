---
title: "Ternary operator vs if..else block"
date: "2 Feb 2021"
---

When programming simple conditions with one statement for each case, instead of using the clunky `if-else` block, we can use the `ternary` operator which only uses one line of code.


### Usual (long) method: 

```
const x = 10;
let answer;
if(x > 3) {
    answer = 'more than 3';
}
else {
    answer = 'less than 3';
}
```

### Shorter method:

```
const answer = x > 10 ? 'more than 3' : 'less than 3';
```
