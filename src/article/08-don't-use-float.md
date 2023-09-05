---
title: "Don't use float attribute"
date: "28 Mar 2021"
---

### The use of float is heavily discouraged when making divisions

Of course you can use float values, don't be silly, but make sure you use it wisely, because sometimes you may have to pay for it by using the clear-fix 🙀

```
<div style="
    background: blue;
    display: block;
    clear: both; // cost that I mean
    overflow: hidden; // just whyyy 😔
"><p>container here </p>
    <div style="background:red;float:left;height: 100px;width: 100px;">child 1</div>
    <div style="background:red;float:left;height: 100px;width: 100px;">child 2</div>
    <div style="background:red;float:left;height: 100px;width: 100px;">child 3</div>
</div>
```

Sometimes when we create a website, we'll have to create `div`s that divide the container width equaly. When doing so, our approach is usually something like this :

```
    <div class="container">
        <div style="
            float: left;
            width: 50%;
            background: red;
        ">
            div a
        </div>
        <div style="
            float: right;
            width: 50%;
            background: blue;
        ">
            div b
        </div>
    </div>
```

The above method works fine when the elements are simple. However as they get more and more complex, it gets harder to make proper divisions using float values unless you use the clear-fix in your container.

An even better way of doing this is actually by using the `flex` value for the `display` attribute as shown below:

```
<div class="container" style="
    display: flex;
    justify-content: space-evenly;
">
    <div style="background:red;width: 50%;">div a</div>
    <div style="background:blue;width: 50%;">div b</div>
</div>
```
