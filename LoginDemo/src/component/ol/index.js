import React,{ Component } from 'react';
import style from './style.css';
​
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            isRemember: false,
            unameHelp: "",
            upwdHelp: ""
        }
    }
​
    //监听input中的数据，保存到state中
    changeUsername(e){
        let uname = e.target.value;
        this.setState({
            userName: uname
        });
        console.log(this.state.userName);
    }
​
    changePassword(e){
        let upwd = e.target.value;
        this.setState({
            userPassword: upwd
        })
    }
​
    //是否记住密码
    handleCheckbox(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({
                isRemember: true
            })
        }else{
            this.setState({
                isRemember: false
            })
        }
    }
​
    //点击登录按钮，触发后台接口提供的验证，对数据的处理等方法
    handleClick(){
        if(this.state.userName === ""||this.state.userName === null){
            this.setState({
                unameHelp: "* 用户名不能为空"
            })
        }else if(this.state.userPassword === ""||this.state.userPassword === null){
            this.setState({
                unameHelp: "",
                upwdHelp: "* 密码不能为空"
            })
        }else{
            this.setState({ //清除help-block提示文字
                unameHelp: "",
                upwdHelp: ""
            });

            if(this.state.isRemember === true){ //是否记住密码，若记住，则保存至localstorage，反之，清除
                // let loginData = {this.state.userName,this.state.userPassword};
                let loginData = {};
                loginData.userName = this.state.userName;
                loginData.userPassword = this.state.userPassword;
                Data.localSetItem("mm_loginStatus",loginData);
            }else{
                Data.localRemoveItem("jiaj-loginStatus");
            }

            this.props.login(this.state.userName,this.state.userPassword);
            console.log(this.state);
        }
​
​
    }
​
    render(){
​
        return (
            <div classname="login-box">
                <div classname="login-title">登   录</div>
                <form action="" classname="form-horizontal">
                    <div classname="form-group input-text">
                        <label htmlfor="uname">账号</label>
                        <input classname="form-control" name="username" id="uname" ref="uname" placeholder="手机号/用户名" onchange="{this.changeUsername.bind(this)}/" type="text" />
                        <span classname="help-block">{this.state.unameHelp}</span>
                    </div>
                    <div classname="form-group input-text">
                        <label htmlfor="upwd">密码</label>
                        <input classname="form-control" name="password" id="upwd" ref="upwd" placeholder="密码" onchange="{this.changePassword.bind(this)}/" type="password" />
                        <span classname="help-block">{this.state.upwdHelp}</span>
                    </div>
                    <div classname="form-group">
                        <label htmlfor="chk" classname="check">
                            <input id="chk" checked="{this.state.isRemember}" onclick="{this.handleCheckbox.bind(this)}" type="checkbox" />
                            <span>记住密码</span>
                        </label>
                    </div>
                    <div classname="form-group">
                        <button type="button" onclick="{this.handleClick.bind(this,this.state.userName,this.state.userPassword)}" classname="btn btn-primary login-btn">登录</button>
                    </div>
                </form>
            </div>
        );
    }
}
​
