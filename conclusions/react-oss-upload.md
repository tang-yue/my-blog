### 如何在react里，上传图片等到oss

#### 上传图片到oss功能的一些思考

[javascript 客户端签名直传](https://help.aliyun.com/document_detail/31925.html?spm=a2c4g.11186623.4.2.eHVzX8)

主要就是参照的上面的JavaScript客户端签名直传部分

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
            self: this,  // 将this赋值给self
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
      uploadFileData[this.props.tag] = `//cdn.console.example.com/${this.props.dirname}${file_name}`;
      this.props.dispatch({  
             type: 'modal/getFileData',
             payload: uploadFileData,
        })
      // this.props.dispatch 这部分是公司的业务代码，
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