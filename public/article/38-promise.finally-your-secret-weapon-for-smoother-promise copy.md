## Promise.finally(): Your Secret Weapon for Smoother Promise

### 31 Aug 2024

When you have a promise, sometimes you want to ensure that some code always runs, regardless of the outcome of the promise. For example, you may want to hide a loading spinner or close a file connection whether the operation was successful or not. Before finally(), developers had to duplicate code in both the .then() and .catch() blocks. finally() eliminates that redundancy.

### Example

```javascript
fetchData()
  .then((data) => {
    console.log("Data fetched successfully", data);
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  })
  .finally(() => {
    hideLoadingSpinner(); // Runs no matter the result
  });
```

Keep your promises predictable using this handy trick.
