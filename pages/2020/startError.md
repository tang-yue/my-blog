
#### egg npm run start error

是这样的，我以前有一个egg项目，但是时间已经是很久以前的了，于是我又新clone 了一份，发现npm install 之后，报错。

之前以为是npm 包有问题，冲突，或者没有更新，或者更新了，导致冲突，但是之后又测试了一个项目。发现同样的问题。

测试了两个项目，都发现了同一个问题，只要这个项目曾经运行过，再新 clone 一份， npm install 都会报错如下：

第一个项目这样。
```
> egg-admin@1.0.0 start /Users/tangyue/person/hetao-increasing2/egg-admin
> egg-scripts start --daemon --title=egg-server-egg-admin --ignore-stderr

[egg-scripts] Starting egg application at /Users/tangyue/person/hetao-increasing2/egg-admin
[egg-scripts] Run node /Users/tangyue/person/hetao-increasing2/egg-admin/node_modules/egg-scripts/lib/start-cluster {"title":"egg-server-egg-admin","baseDir":"/Users/tangyue/person/hetao-increasing2/egg-admin","framework":"/Users/tangyue/person/hetao-increasing2/egg-admin/node_modules/egg"} --title=egg-server-egg-admin
[egg-scripts] Save log file to /Users/tangyue/logs
[egg-scripts] Wait Start: 1...
[egg-scripts] tail -n 100 /Users/tangyue/logs/master-stderr.log
[egg-scripts] Got error when startup:
[egg-scripts] internal/modules/cjs/loader.js:463
[egg-scripts]   throw e;
[egg-scripts]   ^
[egg-scripts]
[egg-scripts] Error: Package exports for '/Users/tangyue/person/hetao-increasing2/egg-admin/node_modules/koa' do not define a valid '.' target
[egg-scripts]     at resolveExportsTarget (internal/modules/cjs/loader.js:460:13)
[egg-scripts]     at resolveExports (internal/modules/cjs/loader.js:393:16)
[egg-scripts]     at Function.Module._findPath (internal/modules/cjs/loader.js:492:20)
[egg-scripts]     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:787:27)
[egg-scripts]     at Function.Module._load (internal/modules/cjs/loader.js:693:27)
[egg-scripts]     at Module.require (internal/modules/cjs/loader.js:864:19)
[egg-scripts]     at require (internal/modules/cjs/helpers.js:74:18)
[egg-scripts]     at Object.<anonymous> (/Users/tangyue/person/hetao-increasing2/egg-admin/node_modules/egg-core/lib/egg.js:5:24)
[egg-scripts]     at Module._compile (internal/modules/cjs/loader.js:971:30)
[egg-scripts]     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1011:10) {
[egg-scripts]   code: 'MODULE_NOT_FOUND'
[egg-scripts] }
[egg-scripts]
[egg-scripts] Start got error, see /Users/tangyue/logs/master-stderr.log
[egg-scripts] Or use `--ignore-stderr` to ignore stderr at startup.
```

第二个项目
```
cache-require-paths: Failed saving cache: Error: ENOENT: no such file or directory, open '/Users/tangyue/person/hetao-increasing2/md-growth/node_modules/egg-bin/node_modules/egg-ts-helper/.tmp/requirePaths.json'
internal/modules/cjs/loader.js:463
  throw e;
  ^

Error: Package exports for '/Users/tangyue/person/hetao-increasing2/md-growth/node_modules/koa' do not define a valid '.' target
    at resolveExportsTarget (internal/modules/cjs/loader.js:460:13)
    at resolveExports (internal/modules/cjs/loader.js:393:16)
    at Function.Module._findPath (internal/modules/cjs/loader.js:492:20)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:787:27)
    at Module.cachePathsRequire [as require] (/Users/tangyue/person/hetao-increasing2/md-growth/node_modules/cache-require-paths/index.js:34:25)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/tangyue/person/hetao-increasing2/md-growth/node_modules/egg-core/lib/egg.js:5:24)
    at Module._compile (internal/modules/cjs/loader.js:971:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1011:10)
    at Module.load (internal/modules/cjs/loader.js:822:32) {
  code: 'MODULE_NOT_FOUND'
}
[egg-ts-helper] create typings/app/controller/index.d.ts (7ms)
[egg-ts-helper] create typings/app/middleware/index.d.ts (1ms)
[egg-ts-helper] create typings/config/index.d.ts (12ms)
[egg-ts-helper] create typings/app/service/index.d.ts (2ms)
[egg-ts-helper] create typings/app/index.d.ts (1ms)
internal/modules/cjs/loader.js:463
  throw e;
  ^

Error: Package exports for '/Users/tangyue/person/hetao-increasing2/md-growth/node_modules/koa' do not define a valid '.' target
    at resolveExportsTarget (internal/modules/cjs/loader.js:460:13)
    at resolveExports (internal/modules/cjs/loader.js:393:16)
    at Function.Module._findPath (internal/modules/cjs/loader.js:492:20)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:787:27)
    at Function.Module._load (internal/modules/cjs/loader.js:693:27)
    at Module.require (internal/modules/cjs/loader.js:864:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/tangyue/person/hetao-increasing2/md-growth/node_modules/egg-core/lib/egg.js:5:24)
    at Module._compile (internal/modules/cjs/loader.js:971:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1011:10) {
  code: 'MODULE_NOT_FOUND'
}
Error: /Users/tangyue/person/hetao-increasing2/md-growth/node_modules/egg-bin/lib/start-cluster {"typescript":false,"declarations":true,"workers":1,"baseDir":"/Users/tangyue/person/hetao-increasing2/md-growth","port":7002,"framework":"/Users/tangyue/person/hetao-increasing2/md-growth/node_modules/egg"} exit with code 1
    at ChildProcess.<anonymous> (/Users/tangyue/person/hetao-increasing2/md-growth/node_modules/common-bin/lib/helper.js:56:21)
    at Object.onceWrapper (events.js:300:26)
    at ChildProcess.emit (events.js:210:5)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:272:12) {
  code: 1
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! md-growth@1.0.0 dev: `node preload.js && egg-bin dev`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the md-growth@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/tangyue/.npm/_logs/2020-07-01T13_13_44_297Z-debug.log
```

共同点：

```
internal/modules/cjs/loader.js:463

 code: 'MODULE_NOT_FOUND'
```

然后就觉得，第一次运行在电脑可能生成了什么文件，阻碍了第二次，npm log 生成多了。npm cache clear -force，删除log 文件 没有起到作用。
多次尝试，删除 node_modules , package-lock.json 无果。

之后参考文章： [https://github.com/node-inspector/node-inspector/issues/1044]
