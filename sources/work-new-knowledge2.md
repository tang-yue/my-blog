---
2018 年 5月27号开始至今

---

### 上传图片到oss功能的一些思考

[javascript 客户端签名直传](https://help.aliyun.com/document_detail/31925.html?spm=a2c4g.11186623.4.2.eHVzX8)

主要就是参照的上面的代码

* 生命周期函数体现的淋漓尽致

* 将init() 初始化函数 写在DidMout里面。

* 因为一个页面里面多处用到 这个组件，因此，每个组件的里面的Dom的id都是需要不一样的，这个需要通过this.props给传进去

* 在该组件被卸载的时候，即componentWillUnmount，需要将所存储的该页面的图片的url链接地址都给清理掉。
因为全局变量总是有缓存存储在里面。也是因为全局变量引起的bug

* 关于该组件和我们的大容器相连接的地方，我们直接是写死掉的，和modalForm相连接的。这个部分的存值也是要清理掉的。

代码如下
组件件js代码
```
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import './lib/crypto1/crypto/crypto.js';
import './lib/crypto1/hmac/hmac.js';
import './lib/crypto1/sha1/sha1.js';
import { Base64 } from 'js-base64';
import styles from './Upload.css';
import plupload from 'plupload';
import flash_swf_url from 'plupload/js/Moxie.swf';
import silverlight_xap_url from 'plupload/js/Moxie.xap';

import {accessid, accesskey, host, policyText, ossUrl} from '../../utils/config/config.js';
const policyBase64 = Base64.encode(JSON.stringify(policyText))
const message = policyBase64;
const bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, { asBytes: true }) ;
const signature = Crypto.util.bytesToBase64(bytes);
const g_dirname = '';
let uploadFileData = {};
var suffix = '';
var file_name = '';
const namespace = 'contentUploadImage';
class UploadImage extends PureComponent {
     constructor() {
        super();
     }
    componentDidMount () {
      var uploader = new plupload.Uploader({
          runtimes : 'html5,flash,silverlight,html4',
          browse_button : `selectImage_${this.props.tag}`,
          flash_swf_url: flash_swf_url,
          silverlight_xap_url:silverlight_xap_url,
            url : ossUrl,
            self: this,
          init: {
          PostInit: function(file) {
            document.getElementById(`ossfile_${uploader.settings.self.props.tag}`).innerHTML = '';
          document.getElementById(`uploadImage_${uploader.settings.self.props.tag}`).onclick = function() {
            uploader.settings.self.set_upload_param(uploader, '', false);
                    return false;
            };
          },
        BeforeUpload: function(up, file) {
                uploader.settings.self.set_upload_param(up, file.name, true);
            },
            FilesAdded: function(up, files) {
              plupload.each(files, function(file) {
            document.getElementById(`ossfile_${uploader.settings.self.props.tag}`).innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
              +'<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
              +'</div>';
          });
            },
            UploadProgress: function(up, file) {
          var d = document.getElementById(file.id);
          d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
                var prog = d.getElementsByTagName('div')[0];
          var progBar = prog.getElementsByTagName('div')[0]
          progBar.style.width= 2*file.percent+'px';
            progBar.style.height= '10px';
            progBar.style.backgroundColor= '#5cb85c';
            progBar.style.borderRadius = '25px';
          progBar.setAttribute('aria-valuenow', file.percent);
        },
        FileUploaded: function(up, file, info) {
                if (info.status == 200)
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'success';
                  uploader.settings.self.getFileUrl(file.name);
                }
                else
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }
        },
        Error: function(up, err) {
            document.getElementById(`console_${uploader.settings.self.props.tag}`).appendChild(document.createTextNode("\nError xml:" + err.response));
        }
          }
        });
        uploader.init();
    }
    componentWillUnmount() {
        uploadFileData = {};
    }
    // 获取后缀
    get_suffix(filename) {
      let pos = filename.lastIndexOf('.')
      suffix = ''
      if (pos != -1) {
          suffix = filename.substring(pos)
      }
      return suffix;
  }
    set_upload_param(up, filename, ret) {
      this.get_suffix(filename);
      file_name = Math.round(new Date().getTime()/1000) + suffix;
      const new_multipart_params = {
          'Filename': 'console/',
          'key' : this.props.dirname + file_name,
          'policy': policyBase64,
          'OSSAccessKeyId': accessid,
          'success_action_status': '200', //让服务端返回200,不然，默认会返回204
          'signature': signature,
          'multi_selection': false
      };
      up.setOption({
          'url': host,
          'multipart_params': new_multipart_params
      });
      up.start();
    }
    getFileUrl(filename) {
      uploadFileData[this.props.tag] = `//cdn.console.pipacoding.com/${this.props.dirname}${file_name}`;
      this.props.dispatch({
             type: 'modal/getFileData',
             payload: uploadFileData,
        })
    }
  render() {
    const { tag } = this.props;
      return (
        <div className="container">
          <div id={`ossfile_${tag}`}>你的浏览器不支持flash,Silverlight或者HTML5！</div>
          <div>
            <span
              id={`selectImage_${tag}`}
              className={styles.uploadImage}
              >
              选择文件
            </span>
            <span
              id={`uploadImage_${tag}`}
              className={styles.uploadImage}
              >
              上传
            </span>
          </div>
          <pre id={`console_${tag}`}></pre>
        </div>
      )
  }
}

function mapStateToProps ({ }) {
  return { }
}

UploadImage.defaultProps = {
    tag: null,
    dirname: null
}
UploadImage.propTypes = {
    tag: PropTypes.string.isRequired,
    dirname: PropTypes.string.isRequired,
    location: PropTypes.object,
    dispatch: PropTypes.func,
}
export default connect(mapStateToProps)(UploadImage)
```
用这个组件需要两个属性，即tag,dirname，如果不传这两个属性组件会报错的实现。
这是一个新的，以前都没有这么苛刻。
主代码引用
```
// 引
import Upload from '../../../components/Upload/Upload';
// 用
<Upload dirname="content/course/" tag="avatar"/> 
```
### 删除远程分支

git push origin :branch-name

### js取小数的余数和整数部分
设小数为 n;
小数的整数为 Math.floor(n);
小数的余数为 n - Math.floor(n);

### 关于组件用funtion 而不是 class 组件名称 extends Component {} 这样的形式

一次偶然的发现，代码如下：
```
父组件引用子组件代码
<Landingpage0 
          classMonth={classMonth} 
          classDate={classDate}
          qrcodeImg={qrcodeImg}
          cls={cls}
          hidePic={hidePic}
          price={price}
          pay={pay}
        />
```

```
子组件代码
function Landingpage0({  price, pay, cls, qrcodeImg, classMonth, classDate, hidePic, groupon }) {}
```
完全省略了this.props这样比较重复写的代码。

### urlBase64safe
关于图片拼水印，需要用到安全url
```
var URLSafeBase64 = require('urlsafe-base64') 
    console.log((query.name));
    let name =URLSafeBase64.encode(new Buffer(query.name));
    let userId = URLSafeBase64.encode(new Buffer(getUserInformation.userId))
```
我想说的是最重要的搜索
### 正则校验
`/^[a-zA-Z\d]+$/.test(valueNum)`

### 手机号正则校验 

/^1[3|4|5|7|8][0-9]\d{8}$/.test(isPhoneValue)

### JSON.stringify()
`{courseId: 101, publish: 1, payId: 1001}`
`encodeURI(JSON.stringify(filter))`
### 组件的坏处and好处
我觉得我是不太喜欢用组件的，我也觉得我是太喜欢用组件的。
### dva 里面跳转的新方式 可以跳的很快
```
import { routerRedux } from 'dva/router';
yield put(routerRedux.replace({pathname: '/applySuccess'}));
```
### setTimeout 绑定参数
<!-- 不要再用google搜索了，不要再搜了 -->
```
 function close(grade) {
    setTimeout(function() {
      dispatch({type:'landingpage/save',payload:{isMask:false}});
      window.location.href = `//mp.pipacoding.com/summerClass?courseId=${grade}&origin=landing`
    }.bind(grade),100);
  }
```
### 关于样式，一个标签绑定两个class样式
我发现很久以前不用的东西，很久以前我用的很熟练，之后不用了之后就会忘记掉了。
`styles.bgColor + ' ' + styles.bgColorFloat`
### 关于ref
```
import { Player } from 'video-react';

<Player 
    ref="player" 
    poster={poster}
    onPause={this.videoPause.bind(this,url)} 
/>

```
### nvm的安装以及使用
[nvm](http://bubkoo.com/2017/01/08/quick-tip-multiple-versions-node-nvm/)

### 判断是否是微信环境
mobile-detect    npm 包   安装 MobileDetect
### 获取样式兼容的方式
```
getStyle(obj,name) {
    if(obj.currentStyle) {
      return obj.currentStyle[name];
    } else {
      return getComputedStyle(obj, false)[name];
    }
  }
```
### h5页面撑起高度
```
style={{ minHeight: `${config.pageHeight}rem`}}
```
### 关于跳转加快的两种方式
```
// Inside Effects
yield put(routerRedux.push('/logout'));
// Inside Effects // 带query 的方式
yield put(routerRedux.push({pathname: '/applySuccess',query:{classId:payload.dataInfo.id}}));
// Outside Effects
dispatch(routerRedux.push({pathname: '/applySuccess',query:{classId:payload.dataInfo.id}}));
```
### 关于元素属性offsetTop
```
var anchor = document.getElementById(selector);
if(document.body.scrollTop) {
  document.body.scrollTop = anchor.offsetTop;
} else if (document.documentElement.scrollTop) {
  document.documentElement.scrollTop = anchor.offsetTop;
}else {
  var oPos = anchor.offsetTop;
  window.scrollTo(0, oPos-36)
}
```
### 关于手机返回键
```
]  !function(pkg, undefined){
    var STATE = 'x-back';
    var element;

    var onPopState = function(event){
        event.state === STATE && fire();
    }

    var record = function(state){
        history.pushState(state, null, location.href);
    }

    var fire = function(){
        var event = document.createEvent('Events');
        event.initEvent(STATE, false, false);
        element.dispatchEvent(event);
    }

    var listen = function(listener){
        element.addEventListener(STATE, listener, false);
    }

    ;!function(){
        element = document.createElement('span');
        window.addEventListener('popstate', onPopState);
        this.listen = listen;
        record(STATE);
    }.call(window[pkg] = window[pkg] || {});

}('XBack');

XBack.listen(function(){
    window.location.href = 'https://www.baidu.com'
});
// 可以监听到手机的返回键.
```
### 关于loading 出现的大bug
1、 loading 方式
2、 && 我所遇到的fundebug 报错 ，包括滚动组件
### 关于ios 键盘和安卓键盘问题，针对这两个我的处理方式
### 关于用dva搭建项目，我所遇到的一些问题。
主要是关于绑定事件问题
配置文件问题
新的用法问题
关于select问题










