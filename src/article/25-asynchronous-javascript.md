---
title: "Understanding Asynchronous javascript"
date: "8 December 2021"
---

Let's me explain with a simple example

```
console.log('First log');
console.log('Second log');
console.log('Third log');
```

As we can see, every line of code will waits for previous line to complete execution before execute next line. this is called with synchronous javascript

Below here another example

```
console.log('First log');
setTimeout(()=>{
    console.log('Second log');
},2000)
console.log('Third log')
```

setTimeout function will wait for milisecond time that set in second argument and executes anonymous function in the first arguments, what output you think will be ?

```
First log
Third log
undefined
Second log
```

As we can see from this example, Third log does not wait for Second log to execute, this method of not waiting for the previous code to complete is called
with asynchronous.

## Why we need asynchronous ?

The best way to use asynchronous is when your website working with server to fetching data or response, istead of waiting all
data from server is loaded that maybe takes more than one minutes (depend on speed of your internet and server speed to resolve request)
you could use asynchronous to make sure that code ahead will execute and javascript will not waiting server response to complete.

Here is real life example of asynchronous implementation

```
    let url='https://fierce-headland-02005.herokuapp.com/my-book';
    async function fetchData(){
        try{
            const response = await fetch(url,{method:'GET',headers:{'Content-Type':'application/json'}})
            return response.json()
        }catch(err){
            console.log(err)
        }
    }
    let test = new fetchData().then(response=> console.log(response))
```
