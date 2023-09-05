## Reducing the use of var

### 16 Jan 2021

> Long ago there used to be a wild creature, who would attack developers with its claws if they lowered their guard

`var` is very wild because it has no block scope which makes it a "beast" that is visible outside the blocks as shown below:

```
  if(true){
    var a = 'var is wild'
  }
  alert(a); // works
```

Since `var` ignores blocks, `a` will become a global variable and your browser will show an alert that contains variable `a`'s value.

Apart from simple program blocks, `var` also ignores things like `for-loop` blocks since it is not `block` and `loop-local`.

If `var` is declared and being used within a function, then it becomes a function-level variable, meaning it will ignore blocks within the function but cannot be accessed outside the function.

```
  function sayHi() {
    if (true) {
      var a = "Hi";
    }

    alert(a); // works
  }

  sayHi();
  alert(a); // ReferenceError: a is not defined
```

If we have already declared and initialized a `var` and decide to redeclare it, the program will simply ignore the previous value and work with the newly initialized value.

```
var user = "Pete";
var user = "John";  // this "var" does nothing (already declared)
                    // ...it doesn't trigger an error

alert(user); // John
```

Remember when I mentioned that `var` is a global variable? This also means that you can declare them below their implementation (or use) and you still wont encounter any errors.

This means that the following two code segments work the same:

```
function sayHi() {
  phrase = "Hello";

  alert(phrase);

  var phrase;       // declared below
}
sayHi();
```

```
function sayHi() {
  var phrase;       // declared above

  phrase = "Hello";

  alert(phrase);
}
sayHi();
```

It is due to this, that I suggest you use `let` and `cost` instead of `var` as they are more modern and less wild, i.e. you have more control over scope (or block) resolution as compared to what you would have with `var`.

Reference: [The old var](https://javascript.info/var)
