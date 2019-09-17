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
主组件js代码
```
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import "./lib/crypto1/crypto/crypto.js";
import "./lib/crypto1/hmac/hmac.js";
import "./lib/crypto1/sha1/sha1.js";
import { Base64 } from "js-base64";
import styles from "./Upload.css";
import plupload from "plupload";
import flash_swf_url from "plupload/js/Moxie.swf";
import silverlight_xap_url from "plupload/js/Moxie.xap";
import { config } from "../../utils/utils.js";
import { message, Modal } from "antd";

const { accessid, accesskey, host, policyText, ossUrl } = config;
const policyBase64 = Base64.encode(JSON.stringify(policyText));
const msg = policyBase64;
const bytes = Crypto.HMAC(Crypto.SHA1, msg, accesskey, { asBytes: true });
const signature = Crypto.util.bytesToBase64(bytes);

let uploadFileData = {};
var suffix = "";
var file_name = "";

class UploadImage extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    var uploader = new plupload.Uploader({
      runtimes: "html5,flash,silverlight,html4",
      browse_button: `selectImage_${this.props.tag}`,
      flash_swf_url: flash_swf_url,
      silverlight_xap_url: silverlight_xap_url,
      url: ossUrl,
      multi_selection: false,
      self: this,
      init: {
        PostInit: function(file) {
          document.getElementById(
            `ossfile_${uploader.settings.self.props.tag}`
          ).innerHTML =
            "";
          // document.getElementById(
          //   `uploadImage_${uploader.settings.self.props.tag}`
          // ).onclick = function() {
          //   uploader.settings.self.set_upload_param(uploader, "", false);
          //   return false;
          // };
        },
        BeforeUpload: function(up, file) {
          uploader.settings.self.set_upload_param(up, file.name, true);
        },
        FileUploaded: function(up, file, info) {
          if (info.status === 200) {
            message.info("上传成功", 2);
            uploader.settings.self.getFileUrl(file.name);
          }
        },
        FilesAdded: function(up, file) {
          uploader.settings.self.set_upload_param(uploader, "", false);
          return false;
        },
        Error: function(up, err) {
          switch (err.code) {
            case -200:
              // 网络发生错误
              break;
            case -300:
              // 磁盘读写错误
              break;
            case -600:
              // 选择的文件大小错误
              if (
                uploader.settings.self.props.limit.indexOf("fileSize") !== -1
              ) {
                Modal.warning({
                  title: `上传文件的体积不能超过${Number(
                    uploader.settings.self.props.uploadFilters.max_file_size
                      .match(/[0-9]/g)
                      .join("")
                  ) / 1024}M`,
                  content: "",
                  okText: "知道了"
                });
              }
              break;
            case -601:
              // 选择的文件类型不符合要求
              if (
                uploader.settings.self.props.limit.indexOf("fileType") !== -1
              ) {
                Modal.warning({
                  title: "上传的文件格式只能为png，jpg",
                  content: "",
                  okText: "知道了"
                });
              }
              break;
            case -602:
              // 选取文件重复
              break;
            default:
              document
                .getElementById(`console_${uploader.settings.self.props.tag}`)
                .appendChild(
                  document.createTextNode("\nError xml:" + err.response)
                );
          }
        }
      },
      filters: this.props.uploadFilters || {}
    });
    uploader.init();
  }

  componentWillUnmount() {
    uploadFileData = {};
  }

  // 获取后缀
  get_suffix(filename) {
    let pos = filename.lastIndexOf(".");
    suffix = "";
    if (pos !== -1) {
      suffix = filename.substring(pos);
    }
    return suffix;
  }

  set_upload_param(up, filename, ret) {
    this.get_suffix(filename);
    file_name = Math.round(new Date().getTime() / 1000) + suffix;
    const new_multipart_params = {
      Filename: "console",
      key: this.props.dirname + file_name,
      policy: policyBase64,
      OSSAccessKeyId: accessid,
      success_action_status: "200", //让服务端返回200,不然，默认会返回204
      signature: signature,
      multi_selection: false
    };
    up.setOption({
      url: host,
      multipart_params: new_multipart_params
    });
    up.start();
  }

  getFileUrl(filename) {
    uploadFileData[this.props.tag] = `//cdn.console.pipacoding.com/${
      this.props.dirname
    }${file_name}`;
    this.props.dispatch({
      type: "modal/getFileData",
      payload: uploadFileData
    });
  }

  render() {
    const { tag } = this.props;

    return (
      <div>
        <div id={`ossfile_${tag}`}>
          你的浏览器不支持flash,Silverlight或者HTML5！
        </div>
        <div>
          <span
            id={`selectImage_${tag}`}
            className={styles.uploadImage + " " + styles.selectBtn}
          >
            上传图片
          </span>
        </div>
        <pre id={`console_${tag}`} />
      </div>
    );
  }
}

// eslint-disable-next-line
function mapStateToProps({}) {
  return {};
}

UploadImage.defaultProps = {
  tag: null,
  dirname: null
};

UploadImage.propTypes = {
  tag: PropTypes.string.isRequired,
  dirname: PropTypes.string.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func
};
export default connect(mapStateToProps)(UploadImage);
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