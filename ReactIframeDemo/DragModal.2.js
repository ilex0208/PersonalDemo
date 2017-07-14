import React, { Component, PropTypes } from 'react';
// import Dragany from 'ray-dragany';
// import Dragany from 'react-draggable';
import { Button, Checkbox } from 'antd';
import Modal from './modal';

class DragModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      dragable: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  onCheckChange = (e) => {
    this.setState({dragable: e.target.checked});
  }

  render() {
    return (
      <div id="darg-demo">
        <Button type="primary" onClick={this.showModal}>
          显示对话框
        </Button>
        <Checkbox onChange={this.onCheckChange}>是否可拖拽</Checkbox>
        <div id="drag-modal">
          <Modal
            ref="modal"
            visible={this.state.visible}
            dragable={this.state.dragable}
            title="对话框标题" onOk={this.handleOk} onCancel={this.handleCancel}
            footer={[
              <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返 回</Button>,
              <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
              提 交
              </Button>
            ]}
            dragableOps={{
              bounds: {
                left: -700,
                top: -75,
                right: 700,
                bottom: 675
              }
            }}
            getContainer={() => document.getElementById('drag-modal')}
          >
          <p>对话框的内容</p>
        </Modal>
        </div>
      </div>
    );
  }
}

DragModal.propTypes = {

};

export default DragModal;
