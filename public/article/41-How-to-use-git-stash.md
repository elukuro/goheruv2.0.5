## How to Temporarily Store Changes in Git

### 18 Nov 2024

git stash is a Git command used to temporarily save changes in your working directory without committing them.

This is useful when you want to switch branches or work on something else but don’t want to commit incomplete work.

Here some key command for git stash

#### git stash save

Saves your changes and resets your working directory to match the latest commit.

```javascript
git stash save "WIP: working on feature"
```

#### git stash list

To show all stash that you have made.

```javascript
git stash list
stash@{0}: WIP: working on feature
```

#### git stash drop

Removes a specific stash entry from the stack. You can drop the latest stash or specify one by index.

```javascript
git stash drop stash@{0}
```
