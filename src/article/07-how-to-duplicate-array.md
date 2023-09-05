---
title: "Duplicating an array"
date: "13 Mar 2021"
---

When the following script is run, we come across an unexpected behaviour. Can you guess what is weird in the output?

```
    const arrayA = [1,2,3]
    const duplicate = arrayA 
    duplicate.push(4)
    console.log(duplicate,arrayA)
```

The output for the previous script will be something like this : 
```
[1, 2, 3, 4] [1, 2, 3, 4]
```

As expected, the value of `duplicate` array is correct. However we also see that in adding '4' to `duplicate` , the values in `arrayA` has also changed. Why is that? 

This happened due to the fact that we did an assignment of arrayA to duplicate via `duplicate = arrayA` . Since assignment operations with arrays work as reference, we copied a reference of `arrayA` to duplicate rather than copying its values into `duplicate`.

To handle this problem, you can use the `spread` operator to clone arrayA. The spread operator is a new feature that was introduced in ES6. The same is shown in the output of the following code: 

```
    const arrayA = [1,2,3]
    const duplicate = [...arrayA] 
    duplicate.push(4)
    console.log(duplicate,arrayA)
```
Output :
```
[1, 2, 3, 4] [1, 2, 3]
```
