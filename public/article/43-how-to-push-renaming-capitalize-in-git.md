## How to set Git to not ignore case-sensitive

### 8 Dec 2024 

By default, Git is case-insensitive, which can cause issues when renaming files by changing only their capitalization, e.g., flag.svg to Flag.svg.

To fix this, set core.ignorecase to false in your terminal:

```
git config --global core.ignorecase false
```

This global setting ensures Git detects case-sensitive changes in all repositories. To apply it only to a specific repository, run the command without --global.
