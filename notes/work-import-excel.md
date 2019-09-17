后台功能，常会用到的上传excel功能

### 一，原生
主代码部分
```
import React, { PureComponent } from "react";
import { Modal, Button } from "antd";
import styles from "./Collections.less";

const namespace = "collections";
// 改写纯函数方法为纯组件方法。
class ImportModal extends PureComponent {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  selectFile = e => {
    const oFile = document.getElementById("File");
    if (oFile) {
      oFile.click();
    }
    e.preventDefault();
  };
  onChange = e => {
    // const file = e.target.files[0];
  };

  upload = e => {
    const oUpload = document.getElementById("upload");
    if (oUpload) {
      oUpload.click();
    }
    e.preventDefault();
    var formData = new FormData();
    console.log(this.fileInput.current.files[0], '看看这个值  我需要进行比对下')
    formData.append("file", this.fileInput.current.files[0]);
    this.props.dispatch({
      type: `${namespace}/importExcel`,
      payload: formData
    });
  };
  render() {
    return (
      <Modal
        centered={true}
        title="导入excel"
        visible={this.props.importModalVisible}
        onCancel={this.props.onCancel}
        footer={null}
      >
        <div style={{ padding: "0 35px 0 35px" }}>
          <form method="post" target="hiddenIFrame">
            <input
              style={{ display: "none" }}
              type="file"
              name="file"
              id="File"
              ref={this.fileInput}
              onChange={this.onChange}
            />
            <Button
              onClick={this.selectFile}
              type="primary"
              className={styles.buttonSty}
            >
              选择文件
            </Button>
            <input
              style={{ display: "none" }}
              id="upload"
              type="submit"
              value="上传"
            />
            <Button
              onClick={this.upload}
              style={{ float: "right" }}
              type="primary"
              className={styles.buttonSty}
            >
              上传
            </Button>
          </form>
          <iframe
            title="hidden"
            style={{ display: "none" }}
            name="hiddenIFrame"
            id="hiddenIFrame"
          />
        </div>
      </Modal>
    );
  }
}

export default ImportModal;


.buttonSty {
  cursor: pointer;
  width: 150px;
  height: 40px;
}
.promptInfo {
  margin-top: 15px;
  width: 600px;
  margin-bottom: 20px;
}
```
**重要的services** 部分
headers部分设置 Content-Type 属性为 false
```
export function addressImport(params) {
  return request("/gift/v1/address/import", {
    method: "POST",
    headers: {
      "Content-Type": false
    },
    body: params
  });
}
```
上述代码存在问题，就是我点击第二次的时候，才能够获取到文件名。必须点击两次。
### 二 借助npm 包。rc-upload
```
import React, { PureComponent } from "react";
import { Modal } from "antd";
import Upload from "rc-upload";
import styles from "./Collections.less";

const namespace = "collections";

class ImportModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFileName: ''
    }
    this.uploaderProps = {
      accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
      multiple: false,
      className: styles.upload,
      beforeUpload: (file) => {
        props.dispatch({
          type: `${namespace}/save`,
          payload: {
            selectedFileName: file.name,
            file: file
          }
        })
      }
    };
  }

  handleOk = () => {
    var formData = new FormData();
    formData.append("file", this.props.file);
    this.props.dispatch({
      type: `${namespace}/importExcel`,
      payload: formData
    });
  }


  render() {

    console.log(this.props.selectedFileName)
    return (
      <Modal
        centered={true}
        title="导入excel"
        visible={this.props.importModalVisible}
        onCancel={this.props.onCancel}
        onOk={this.handleOk}
      >
        <div style={{display: "flex"}}>
          <div className={styles.uploadBtn}>
            <Upload {...this.uploaderProps} ref="inner">选择文件</Upload>
          </div>
          <div>{this.props.selectedFileName ? `文件名：${this.props.selectedFileName}` : ''}</div>
        </div>
      </Modal>
    );
  }
}
export default ImportModal;
```
在自带的beforeUpload 方法里我们就可以获取到文件名，然后展示在页面上，之后点击确定，开始上传文件。