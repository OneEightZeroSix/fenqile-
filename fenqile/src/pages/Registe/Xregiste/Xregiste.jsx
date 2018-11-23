import React, {
	Component
} from "react";


import { message, Button } from 'antd';
import "./Xregiste.css"
import "./Xregiste2.scss"


class Xlogin extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			isEmpty:false
		}
	}
	enterPhone(e) {
		if(this.refs.inforphone.value.trim() == "") {
			message.error('手机号不得为空');
			e.target.focus();
		} else if(!(/^1[34578]\d{9}$/.test(this.refs.inforphone.value))) {
			message.error('手机号格式有误');
			e.target.focus();
			this.phoneFinish = false;
		} else {
			this.phoneFinish = true;
		}
	}
	render() {
		return( 
			<div className="aa">
			<div id="app" style={{background:'#fff'}}>
				<div className = "app-header-placeholder" >
					<div className = "app-header" style = {{backgroundColor: 'rgb(59, 155, 255)',color: 'rgb(255, 255, 255)'}} >
						<h1 className = "app-header-title" style = {{color: 'rgb(255, 255, 255)'}}> 登录分期乐 < /h1>  
						<a href = "#" className = "app-header-right" > < /a>
						<div className = "app-header-line" style = {{display: 'none'}} > 
						< /div> 
					</div>
				</div>
				<section className = "main-wrap" style = {{minHeight: '623px'}} > 
					< div className = "login-banner" > < /div> 
					<ul className="input-wrap">
						<li className="input-item">
							<i className="i-icon i-phone"></i >
							< input type = "text" placeholder = "输入手机号" maxLength = "13" autoComplete = "off" ref="inforphone" onBlur={this.enterPhone.bind(this)}/>
						</li>
						<li className="input-item">
							<i className="i-icon i-sms-code"></i >
							< input type = "password" placeholder = "请输入登录密码" minLength = "6" autoComplete = "off" /> 
						</li >
						<p className = "wrap protocol-wrap" > 
							<span className = "agree-text agree" > 同意 < /span> 
							<a href="javascript:;">分期乐用户服务协议 </a>
						</p >
					</ul>
					<div className="btn-wrap">
						<button disabled="disabled" className="lego-button button-disabled" style={{height: '44px'}}>
							<span className="button-text">登录</span >
						< /button>
					</div>
					<div className = "link-box" > 没有账号？ 极速注册 < /div>
				</section >
			</div>
			</div>
		)
	}
	componentDidMount(){
		console.log(55);
	}
}

export default Xlogin;