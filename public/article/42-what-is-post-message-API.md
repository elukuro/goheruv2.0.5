## How to Enable Communication Between Browser Windows with JavaScript

### 18 Nov 2024

The postMessage API in JavaScript is a powerful tool for securely enabling cross-origin communication between different windows or iframes. It’s commonly used to exchange data between a parent component and an embedded iframe, allowing for controlled interaction even if the documents originate from different sources.

Here’s a practical example of using postMessage to send data between an iframe and a parent component:

```javascript
// Parent Component
const iframe = document.getElementById("myIframe");

// Send a message to the iframe
iframe.contentWindow.postMessage(
  "Hello from parent",
  "https://iframe-domain.here"
);

// Listen the message
window.addEventListener(
  "message",
  (event) => {
    if (event.origin === "https://iframe-domain.here") {
      console.log("Message from iframe:", event.data);
    }
  },
  false
);

// Iframe Component
// Send a message to the parent
window.parent.postMessage("Hello from iframe", "https://parent-domain.here");
```
