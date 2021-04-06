npm 私包

### 移动端相关

1. 移动端真机调试参考： 

[参考1](https://www.cnblogs.com/tengrl/p/11014369.html)

[参考2](https://www.cnblogs.com/zt123123/p/14240642.html)

### 小知识点

1. 想要匹配两个字符串的中间字符串的内容：

```js
var reg = /\[audio=([0-9a-z]+?).mp3\]/g
let matchContent = option.content.match(reg);
console.log(matchContent)   // 类似于 ["[audio=1.mp3]", "[audio=2.mp3]"]
```

2. 关于三图兼容各个机型，正方形，样式

--- 写于2021年3月30日

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

3. 关于ios 手机上传图片然后发生翻转问题

--- 写于2021年3月30日

```js
// 判断有没有发生翻转
let isTurn = await this.detectImageAutomaticRotation();
          if(!isTurn) {
            console.log('发生旋转')
            imgSrc = await this.handleTurnImg(files[0])
          } else {
            imgSrc = await this.handleImg(files[0])
          }
```

下面是detectImageAutomaticRotation函数

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