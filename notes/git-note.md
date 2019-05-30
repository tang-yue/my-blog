1、 如何将当前的不是master的分支，推送到远程的master分支

```
$ git push origin test:master    // 提交本地test分支作为远程的master分支

$ git push origin test:test      // 提交本地test分支作为远程的test分支
```

2、 查看远程分支和本地分支

```
$ git branch          // 查看本地分支

$ git branch -r        // 查看远程分支
```
3、 删除远程分支

```
git push origin :<branchname />
```