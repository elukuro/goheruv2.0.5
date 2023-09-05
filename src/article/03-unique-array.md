---
title: "Making an array with unique values easily"
date: "31 Jan 2021"
---

The fastest and shortest way to remove duplicate elements from an array is by making a set of the array itself. Since sets consider duplicate elements the same, it will technically return an array containing every element once.

```
const a =[1,2,3,12,3,1,2,3];    //contains duplicate entries

// use Set to remove duplicate entries

const unique = [... new Set(a)]
console.log(unique)


// result is [1,2,3,12] , easy isn't it 
```
