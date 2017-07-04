import React, { Component, PropTypes } from 'react';

class Upload extends Component {
  render() {
    return (
      <div className="upload_box">
        <div className="upload_main">
          <div className="upload_choose">
            <div className="convent_choice">
              <div className="andArea">
                <div className="filePicker">点击选择文件</div>
                <input id="fileImage" type="file" size="30" name="fileselect[]" multiple="" />
              </div>
            </div>
            <span id="fileDragArea" className="upload_drag_area">或者将文件拖到此处</span>
          </div>
          <div className="status_bar">
            <div id="status_info" className="info">选中1张文件，共75.65KB。</div>
            <div className="btns">
              <div className="webuploader_pick">继续选择</div>
              <div className="upload_btn">开始上传</div>
            </div>
          </div>
          <div id="preview" className="upload_preview">
            <div id="uploadList_0" className="upload_append_list">
              <div className="file_bar">
                <div style="padding:5px;">
                  <p className="file_name">1.jpg</p>
                  <span className="file_del" data-index="0" title="删除"></span>
                </div>
              </div>
              <a style="height:100px;width:120px;" href="#" className="imgBox">
                <div className="uploadImg" style="width:105px">
                  <img id="uploadImage_0" className="upload_image" src="" style="width:expression(this.width > 105 ? 105px : this.width)" alt="" />
                </div>
              </a>
              <p id="uploadProgress_0" className="file_progress"></p>
              <p id="uploadFailure_0" className="file_failure">上传失败，请重试</p>
              <p id="uploadSuccess_0" className="file_success"></p>
            </div>
          </div>
        </div>
        <div className="upload_submit">
          <button type="button" id="fileSubmit" className="upload_submit_btn">确认上传文件</button>
        </div>
        <div id="uploadInf" className="upload_inf"></div>
      </div>
    );
  }
}

Upload.propTypes = {

};

export default Upload;
