import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import * as amosThree from 'amos-three';
import LoginComponent from './LoginComponent';
import './waves.scss';

const opts = {
  spriteCanvasMaterial:{
    color: 0x588c47
  },
  canvasRenderer:{
    alpha: true,
    clearColor: 0x1a1a1a,
    clearColorAlpha: 0
  }
};
class LoginWaves extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const containerDom = ReactDOM.findDOMNode(this.refs['stageThreeLogin']);
    amosThree.initWaves(containerDom,opts);
    amosThree.enableAnimate();
  }

  render() {
    return (
      <div className="viewport">
        <div className="container-main">
          <div id="container">
            <section className="section-center header" style={{width:'1680px',height:'917px'}}>
              <div className="background-video-wrapper">
                <div ref="stageThreeLogin" className="header-gradient-bg">

                </div>
              </div>
              <div className="section-inner">
                <div className="container">
                  <LoginComponent />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

LoginWaves.propTypes = {

};

export default LoginWaves;
