---
title: "Git commands you might not know"
date: "26 Feb 2021"
---

Most developers use git when working (rightly so, since it is a very reliable platform for version control and community sourcing). As such, most of us are familiar with popular git commands such as `git init` , `git push` , `git commit` , `git clone` etc. Here are a few more commands that arent as well known but just as useful: 


## 1 Switch to previous branch 

you can use `git checkout -` for switching from your current branch to the previous branch, it will make work easier when working with multiple branches
```
git branch
    development
    *main

git checkout -
    *development
    main

git checkout - 
    development
    *main
```

## 2 Show manual page
If you forgot a git command that you need, the `git help everyday` command is a lifesaver as it shows you the manual page in a minimum set format. On the other hand, if you want a full tutorial introduction, you can use the `git help tutorial` command.

## 3 Autocorrect 
By running the `git config --global help.autocorrect 10` command, Git will automatically run the correct form of a command if the developer has made a mistake. Here "10" refers to the number of deciseconds (ie "10" -> 1 second) after which the change is made as shown below: 
```
git config --global help.autocorrect 10
git stats 
    WARNING: You called a Git command named 'stats', which does not exist.
    Continuing in 1.0 seconds, assuming that you meant 'status'.
    --- then running git status command
```
You can use the `git config --global help.autocorrect 0` command to deactivate this configeration.

## 4 Show file content inside a branch
to preview the content of a file in other branch you can simply use the `git show <branch>:<path/to/file>` command.

```
git show development:README.md
    --- This is content README.md from branch development 
git show main:README.md
    --- This is content README.md from branch main 
```

## 5 Show graphical Alternatives for git commit 
The command `git citool`, will give you a graphical interface to review modified files, stage them, put commit mesages and record new commits onto the current branch