---
title: "Using state hook easily"
date: "2 Apr 2021"
---

### Hooks are a new addition made in react 16.8, allowing us to use state and other react feathers without writing classes


>The first "hook" that we will learn is `useState`, and the other is `useEffect` . 

`useState` is simillar to declaring state with class component, including the `setState` functionality in one wrap.


Example using class component: 
```
class PlusOne extends React.Component{
    // prepare and declaring state 
    constructor(props);
    super(props);
    this.state = {
        count:0
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
   // import useState from react lib
   import React, { useState } from 'react';
   function PlusOne() {
       const[count,setCount]= useState(0); /* first count variable value set to 0 */
       /* 
        those above line actually is an `array destructuring` , they are consist of two variable
        count is  current value
        setCount is function that let us update it
       */
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



### Conclusion

- State hooks are similar to declaring a state
- React hooks can't be used in class components 
- React hooks make our components looks more clean