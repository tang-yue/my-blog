npm 私包

### 移动端相关

1. 移动端真机调试参考：

[参考 1](https://www.cnblogs.com/tengrl/p/11014369.html)

[参考 2](https://www.cnblogs.com/zt123123/p/14240642.html)

### 小知识点

1. 想要匹配两个字符串的中间字符串的内容：

```js
var reg = /\[audio=([0-9a-z]+?).mp3\]/g;
let matchContent = option.content.match(reg);
console.log(matchContent); // 类似于 ["[audio=1.mp3]", "[audio=2.mp3]"]
```

2. 关于三图兼容各个机型，正方形，样式

--- 写于 2021 年 3 月 30 日

```html
<div class="parent">
  <div class="imgWrap">
    <img />
  </div>
</div>
```

```less
.parent {
  display: flex;
  flex-wrap: wrap;
  .imgWrap {
    position: relative;
    width: 30.3%;
    height: 0;
    padding-top: 30.3%; //调整图片比例
    margin: 0 1.4% 2.8% 1.4%;
    img {
      border-radius: 4px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
```

3. 关于 ios 手机上传图片然后发生翻转问题

--- 写于 2021 年 3 月 30 日

```js
// 判断有没有发生翻转
let isTurn = await this.detectImageAutomaticRotation();
if (!isTurn) {
  console.log("发生旋转");
  imgSrc = await this.handleTurnImg(files[0]);
} else {
  imgSrc = await this.handleImg(files[0]);
}
```

下面是 detectImageAutomaticRotation 函数

```js
detectImageAutomaticRotation() {
  return new Promise(resolve => {
    const testAutoOrientationImageURL =
  'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
  'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
  'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
  'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
  'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
  'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
let isImageAutomaticRotation;
    if (isImageAutomaticRotation === undefined) {
      const img = new Image();

      img.onload = () => {
        // 如果图片变成 1x2，说明浏览器对图片进行了回正
        isImageAutomaticRotation = img.width === 1 && img.height === 2;

        resolve(isImageAutomaticRotation);
      };

      img.src = testAutoOrientationImageURL;
    } else {
      resolve(isImageAutomaticRotation);
    }
  });
}
```

最后处理函数

```js
// handleImg
handleImg(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      resolve(e.target.result)
    }
  })
}
// handleTurnImg
handleTurnImg(file) {
  return new Promise((resolve) => {
    let _this = this;
    EXIF.getData(file, function () {
      var Orientation = EXIF.getTag(this, "Orientation");
      console.log("Orientation>>>>>>", Orientation);
      //转换成base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        if (Orientation == 1) {
            resolve(e.target.result)
        } else {
          var uploadBase64 = new Image();
          uploadBase64.src = e.target.result;
          uploadBase64.onload = () => {
            //修正旋转图片
            var expectWidth = uploadBase64.width;
            var expectHeight = uploadBase64.height;

            var canvas = document.createElement("canvas"),
                ctx = canvas.getContext("2d");
            canvas.width = expectWidth;
            canvas.height = expectHeight;

            ctx.drawImage(uploadBase64, 0, 0, expectWidth, expectHeight);
            var base64 = null;

            if (Orientation !== "" && Orientation != 1) {
                switch (Orientation) {
                    case 6:
                        console.log("270");
                        _this.rotateImg(uploadBase64, "left", canvas);
                        break;
                    case 8:
                        console.log("90");
                        _this.rotateImg(uploadBase64, "right", canvas);
                        break;
                    case 3:
                        console.log("180");
                        _this.rotateImg(uploadBase64, "horizen", canvas);
                        break;
                }
                //输出转换后的base64图片
                var base64 = canvas.toDataURL(file.type, 1);
                // return base64
                resolve(base64)
                //输出转换后的流
                // var newBlob = _this.convertBase64UrlToBlob(base64, file.type);
            }
          };
        }
      };
    })
  })
}
// 对图片进行处理函数
//对图片旋转处理
    rotateImg(img, direction, canvas) {
      //图片旋转4次后回到原方向
      if (img == null) return;
      var height = img.height;
      var width = img.width;
      var step = 2;

      if (direction == "right") {
          step++;
      } else if (direction == "left") {
          step--;
      } else if (direction == "horizen") {
          step = 2; //不处理
        }
      //旋转角度以弧度值为参数
      var degree = step * 90 * Math.PI / 180;
      var ctx = canvas.getContext("2d");
      switch (step) {
          case 0:
              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(img, 0, 0);
              break;
          case 1:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(degree);
              ctx.drawImage(img, 0, -height);
              break;
          case 2:
              canvas.width = width;
              canvas.height = height;
              ctx.rotate(degree);
              ctx.drawImage(img, -width, -height);
              break;
          case 3:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(degree);
              ctx.drawImage(img, -width, 0);
              break;
      }
      console.log("结束旋转图片");
    }
```

---- 2021 年 6 月 8 日 更新踩坑记录如下：

上述代码仅针对 ios 手机，安卓手机不要执行上述获取旋转信息的代码了。

**踩坑理由：**目前已知在 ios 手机上会出现旋转，在安卓手机不会发生旋转==》判断旋转的`detectImageAutomaticRotation`函数只有 ios 手机的浏览器里才会返回`false`，而安卓手机的浏览器只会返回`true`。而现实是部分安卓手机的浏览器也会返回`false`。

4. 将 url 转成 base64 函数

```js
function urlToBase64(url, str) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = function () {
      let canvas = document.createElement("canvas");
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      // 将图片插入画布并开始绘制
      canvas.getContext("2d").drawImage(image, 0, 0);
      // result
      let result = canvas.toDataURL("image/png");
      console.log(result, str);
      resolve(result);
    };
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute("crossOrigin", "Anonymous");
    image.src = url;
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error("urlToBase64 error"));
    };
  });
}
urlToBase64("http://xxxxxxxxx.png"); // 注意上面的后缀要和这里的后缀保持一致
```

5. 实现一个队列，可以执行，可以暂停，可以继续

缘起于一次别人的前端分享作业

```js
const queue = () => {
  const list = [];
  let index = 0;
  let isStop = false;

  const next = () => {
    // 加限制
    if (index >= list.length - 1) {
      console.log("all well done");
      return;
    }
    if (isStop) return;
    const cur = list[++index];
    cur(next);
  };

  const add = (...fn) => {
    list.push(...fn);
  };

  const run = (...args) => {
    const cur = list[index];
    typeof cur === "function" && cur(next);
  };

  const stop = () => {
    isStop = true;
  };

  const retry = () => {
    isStop = false;
    next(); //  继续上一次暂停的
  };

  return {
    add,
    run,
    stop,
    retry,
  };
};

const async = (x) => {
  return (next) => {
    setTimeout(() => {
      console.log(x);
      next();
    }, 1000);
  };
};

const q = queue();

const funs = "123456".split("").map((x) => async(x));

q.add(...funs);

q.run();

setTimeout(() => {
  q.stop();
}, 3000);

setTimeout(() => {
  q.retry();
}, 5000);

// 指定数量发起请求
```

6. 如何在 chrome 控制台查看元素节点的属性

```js
console.log("%0", myElement);

console.dir(myElement);

console.log([myElement]);
```
