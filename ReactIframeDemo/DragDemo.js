/**
 * ilex
 * demo for iframe
 */
import React, {Component, PropTypes} from 'react';
import DragableDecorator from './dragable';
const {dragableContainersDecorator, dragableGroupDecorator} = DragableDecorator;
import TestItem from './TestItem';

import ReactDOM from 'react-dom';

const opCont ={
  // handle: '.group-title' // Restricts sort start click/touch to the specified element
};
const opGroup = {
  draggable: 'div', // Specifies which items inside the element should be dragable
  group: 'shared'
};

class DragDemo extends Component {

  componentDidMount() {
    let ref1 = ReactDOM.findDOMNode(this.refs['containersDecorator']);
    let ref2 = ReactDOM.findDOMNode(this.refs['groupDecorator2']);
    console.log('ref2', ref2);
    this.containersDecorator(ref1);
    // this.groupDecorator(ref2);
  }


  containersDecorator = (componentBackingInstance) => {
    console.log('containersDecorator', componentBackingInstance);
    dragableContainersDecorator(componentBackingInstance, opCont);
  }

  groupDecorator = (componentBackingInstance) => {
    console.log('groupDecorator', componentBackingInstance);
    dragableGroupDecorator(componentBackingInstance, opGroup);
  }

  render() {
    return (
      <div className="container" ref='containersDecorator'>
        <div className="group">
          <h2 className="group-title">Group 1</h2>
          <div className="group-list" ref={this.groupDecorator}>
            <div>Swap them around<div>child-1</div></div>
            <div>Swap us around<div>child-2</div></div>
            <div>Swap things around<div>child-3</div></div>
            <div>Swap everything around<div>child-4</div></div>
          </div>
        </div>
        <div className="group">
          <h2 className="group-title">Group 2</h2>
          {/*<div className="group-list" ref={this.groupDecorator}>
            <div>Swap them around</div>
            <div>Swap us around</div>
            <div>Swap things around</div>
            <div>Swap everything around</div>
          </div>*/}
          <TestItem ref='groupDecorator2' />
        </div>
      </div>
    );
  }
}

DragDemo.propTypes = {

};

export default DragDemo;
