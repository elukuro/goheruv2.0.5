---
title: "How to destructure object and make alias for some of key name"
date: "19 November 2021"
---

Let say you have object that look like this:

```
    const userData={firstName:'John',lastName:'Doe',country:'Ireland'}
```

Then you want to destructure this object and change `country` key name with `nationality` , here how to do that

```
    let {firstName,lastName,country:nationality} = userData
    /*
        firstName
        'John'
        lastName
        'Doe'
        country
        Uncaught ReferenceError: country is not defined --> because we don't declare country variable
        nationality
        'Ireland'
    */

```
