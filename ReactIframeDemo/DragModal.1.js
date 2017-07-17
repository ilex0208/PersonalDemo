import React, { Component, PropTypes } from 'react';
// import Dragany from 'ray-dragany';
import Dragany from 'react-draggable';
import { Modal, Button } from 'amos-antd';

function constrain(snap) {
  function constrainOffset(offset, prev) {
    var delta = offset - prev;
    if (Math.abs(delta) >= snap) {
      return prev + parseInt(delta / snap, 10) * snap;
    }
    return prev;
  }
  return function(pos) {
    return {
      top: constrainOffset(pos.top, pos.prevTop),
      left: constrainOffset(pos.left, pos.prevLeft)
    };
  };
}

class DragModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false
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
  render() {
    return (
      <Dragany
        axis="x"
        handle=".handle"
        constrain={constrain(25)}
        start={{x: 25, y: 25}}
        bound="all box"
        zIndex={100}
      >
        <div>
          <div className="handle">Drag from here</div>
          <div>Lorem ipsum...</div>
        </div>
      </Dragany>
    );
  }
}

DragModal.propTypes = {

};

export default DragModal;
