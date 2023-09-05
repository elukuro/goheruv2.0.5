---
title: "Cloning an object easily while excluding certain keys"
date: "23 Apr 2021"
---

Let say you have an object that you want to use as a payload to make a request :
```
const payload = {
    'username': 'Mark',
    'Hash' :'8fafasdf8afadsf',
    'redirectUrl':'/'
}
```
Suppose you want to exclude `redirectUrl` from your object but don't want to delete this key, on the surface level it is very easy, just destructure the object and rearrange it to a new variable as shown below :
```
    const {username,Hash} = payload;
    const newPayload = {username,Hash}
```
but what if your object is actually updated and now look like this :
```
const payload = {
    'username': 'Mark',
    'Hash' :'8fafasdf8afadsf',
    'redirectUrl':'/',
    'firstname':'mark',
    'lastname':'brown',
    'birthdate':'01/12/2000',
    'gender':'MALE',
    'address':'planet earth'
}
```
destructuring and rearranging this is very tedious and hard to do.
### "Put rest to the last" technique
You can solve the above mentioned problem by putting keys that you dont want to use and putting the rest of the keys in the end
```
const payload = {
    'username': 'Mark',
    'Hash' :'8fafasdf8afadsf',
    'redirectUrl':'/',
    'firstname':'mark',
    'lastname':'brown',
    'birthdate':'01/12/2000',
    'gender':'MALE',
    'address':'planet earth'
}

let{redirectUrl, ...newPayload} = payload

newPayload
/*
    {
        'username': 'Mark',
        'Hash' :'8fafasdf8afadsf',
        'firstname':'mark',
        'lastname':'brown',
        'birthdate':'01/12/2000',
        'gender':'MALE',
        'address':'planet earth'
    }
*/

```
If you want to add another key to exclude, just simply put the key's name after `redirectUrl` .




