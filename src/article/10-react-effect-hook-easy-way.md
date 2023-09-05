---
title: "Using effect hook easily"
date: 9 Apr 2021"
---

### Hooks are a new addition made in react 16.8, allowing us to use state and other react feathers without writing classes


Having explained about the `useState` hook, in the previous post, this post explains the other hook, namely `useEffect`.

In sort `useEffect` let us perform side effect after we render component, let see example below.

Example using class component: 
```
class PlusOne extends React.Component{
    // prepare and declaring state 
    constructor(props);
    super(props);
    this.state = {
        count:0
    }
    componentDidMount() {
        document.title = `hit ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `hit ${this.state.count} times`;
    }
    render() {
        return(
            <div>
                <p>you hit {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    +
                </button>
            </div>
        )
    }
}
```
>   gentle reminder that hooks don't work with class components


Example using hooks: 
```
   // import useState and useEffect from react lib
   import React, { useState,useEffect } from 'react';
   function PlusOne() {
       const[count,setCount]= useState(0); /* first count variable value set to 0 */
       useEffect(()=>{
           /*
            use effect let us express side effect after component rendered.   
           */
           document.title = `hit ${count} times`; 
       },[count]) // only re-run effect if count changes
       return(
           <div>
            <p> you hit {count} </p>
            <button onClick={()=> setCount(count+1)}>
                +
            </button>
           </div>
       )
   }
```


