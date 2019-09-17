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