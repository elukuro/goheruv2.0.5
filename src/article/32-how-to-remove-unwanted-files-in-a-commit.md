---
title: "How to remove unwanted files in a commit but keep it locally"
date: "12 Feb 2023"
---

When I was working, I accidentally put package.lock.json and yarn.lock.json in a commit, I just notice this mistake in the last minutes before I submit merge request.

How I can away with this situation

```
// remove package.lock.json and yarn.lock.json from git

git rm —-cached package-lock.json
git rm —-cached yarn-lock.json

git add .

git commit

git push
```

The ‘—-cached’ is the magic, In simple explanation I keep package.lock and yarn.lock in my computer because I still need those file, but I removed it from the staging area so it won’t appeared.

Update:

You can also remove multiple files at once by listing them all in the command like this:

```js

git rm <file_name_1> <file_name_2> <file_name_3> --cached

git rm —-cached package-lock.json yarn-lock.json
```
