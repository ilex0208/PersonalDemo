import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Form, Input, Button, Row } from 'antd';
import { loginAuth, thirdAuth, getPermissions } from './../../action/authAction';
import './antd.less';
import './login.scss';

const createForm = Form.create();
const FormItem = Form.Item;

class LoginComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      securityTip: '风险提醒：请保护好您的用户名和密码，如果遗忘密码，请与管理员联系'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('login=>',nextProps);
    // 获取权限
    if(nextProps.user && nextProps.user.api_key && nextProps.user.id) {
      this.props.getPermissions();
    }
    // 已经获取权限
    if(nextProps.permissions && nextProps.permissions.urls) {
      if(this.props.goto) {
        this.props.goto();
      } else {
        this.context.router.replace('home');
      }
    }
    const user = nextProps.user;
    if (user) {
      browserHistory.push('home');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      this.props.loginAuth(values);
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    const nameProps = getFieldProps('userName', {
      rules: [
        { required: true, message: '请填写用户名' }
      ]
    });
    const passwdProps = getFieldProps('password', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' }
      ]
    });
    return (
      <div className="login-box">
        <div className="login-box-header">
          <img src={require('./logo.png')} alt='AMOS' />
        </div>
        <div className="login-form">
          <Form inline onSubmit={this.handleSubmit}>
            <Row className="mb-20">
              <FormItem label="用户名：" hasFeedback labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Input {...nameProps} className="w-350" />
              </FormItem>
            </Row>
            <Row>
              <FormItem label="密　码：" hasFeedback labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Input className="w-350" {...passwdProps} type="password" autoComplete="off" onContextMenu={false} onPaste={false} onCopy={false} onCut={false} />
              </FormItem>
            </Row>
            <FormItem>
              <Button className="btn-login" type="primary" htmlType="submit" />
            </FormItem>
          </Form>
          <p className="login-key">{this.state.securityTip}</p>
        </div>
      </div>
    );
  }
}

LoginComponent.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

LoginComponent.propTypes = {
  form: PropTypes.any,
  userName: PropTypes.string,
  getPermissions: PropTypes.func,
  goto: PropTypes.any,
  loginAuth: PropTypes.func
};

function mapStateToProps(state) {
  const {user,permissions} = state ? state.authReducer : {};
  return {
    user: user,
    permissions: permissions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginAuth: bindActionCreators(loginAuth, dispatch),
    thirdAuth: bindActionCreators(thirdAuth, dispatch),
    getPermissions: bindActionCreators(getPermissions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(createForm(LoginComponent));
