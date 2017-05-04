import React, { Component, PropTypes } from 'react';

class TestItem extends Component {
  render() {
    return (
      <div className="group-list">
        <div>Swap them around</div>
        <div>Swap us around</div>
        <div>Swap things around</div>
        <div>Swap everything around</div>
      </div>
    );
  }
}

TestItem.propTypes = {

};

export default TestItem;
