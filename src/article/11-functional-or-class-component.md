---
title: "Functional and Class component"
date: "16 Apr 2021"
---

Component is a reusable part we are able to use anywhere inside the user interface. There are two way to create components, namely using functional components and other one being class components. I usually prefer using functional components except when I need to use state management or take benefit from lifecycle.

## Functional component or stateless component
- Just a function that returns HTML.
- Gives a solution without state and able to consume props. 
```
   function Hey(props){
       return <h1> hello {props.name}</h1>
   } 
   export default Hey
```
- It has no render method, just return.
- Component lifecycles such as mounting and updating doesn't exist, instead functional component has `useEffect()` to replicate lifecycle behaviour, and `useState()` to store states.

## Class component or stateful component
- Classes that extends the component class from react library.
- Using state attribute, we can set state are able to consume props with `this.props` .
- The `render()` method is used to render HTML.
- Three phases of lifecyle : 
    - mounting : putting elements into the DOM (constructor, getDrivedStateFromProps, render, componentDidMount)
    - updating : when a component is updated (getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate)
    - unmounting: when a component is removed from the DOM (componentWillUnmount)
```
    import React, { Component } from "react";
    class Hey extends Component{
        constructor(props) {
            super(props);
            this.state = {
                name:'';
            }
        }
        render() {
            return(
               <h1> Hey {this.state.name} </h1>
            )
        }
    }
    export default Hey
```

### So why should we use functional components ? 
- less code than class component.
- more readable because it's like a plain javascript function.
- more easy to separate from container.

### Conclusion
If you don't need your own state or need to access lifecycle hook, use functional component as much as posibble