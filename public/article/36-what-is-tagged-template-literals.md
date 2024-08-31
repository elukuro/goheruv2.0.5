## What is Tagged Template Literals?

### 4 Aug 2024

A tagged template literal involves a template literal prefixed with a function, called a tag. This function can process and manipulate the literal's content. Here's a simple example:

```javascript
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
  return "Processed string";
}

const name = "Alice";
const greeting = tag`Hello, ${name}! How are you?`;
console.log(greeting);
```

### Use Cases for Tagged Template Literals

#### 1. Internationalization (i18n)

Tagged template literals can dynamically translate strings based on the user’s locale. Here’s an example using Japanese:

```javascript
function i18n(strings, ...values) {
  const translations = {
    "Hello, ": "こんにちは、",
    "! How are you?": "！元気ですか？",
  };

  return strings.reduce(
    (result, str, i) => result + translations[str] + (values[i] || ""),
    ""
  );
}

const name = "アリス";
const greeting = i18n`Hello, ${name}! How are you?`;
console.log(greeting); // Output: "こんにちは、アリス！元気ですか？"
```

#### 2. Custom String Formatting

They can also implement custom formatting logic, such as escaping HTML.

```javascript
function escapeHTML(strings, ...values) {
  const escape = (str) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return strings.reduce(
    (result, str, i) => result + str + escape(values[i] || ""),
    ""
  );
}

const userInput = '<script>alert("XSS")</script>';
const sanitized = escapeHTML`User input: ${userInput}`;
console.log(sanitized);
// Output: "User input: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"
```

### Conclusion

Tagged template literals provide a versatile tool for dynamic string manipulation in JavaScript. They can simplify tasks like internationalization and custom string formatting, leading to more expressive and maintainable code.
