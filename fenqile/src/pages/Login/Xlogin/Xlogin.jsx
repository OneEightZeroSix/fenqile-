import React, {
	Component
} from "react";


import { message, Button } from 'antd';
import qs from 'qs';
import Cookie from "../../../lib/cookie.js"


import "./Xlogin.css"
import "./Xlogin2.scss"



class Xlogin extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			isEmpty:false,
			phoneFinish:false,
			canPress:false,
		}
	}
	enterPhone(e) {
		if(this.refs.inforphone.value.trim() === "") {
			message.error('手机号不得为空');
			e.target.focus();
			this.setState({
				phoneFinish:false
			})
		} else if(!(/^1[34578]\d{9}$/.test(this.refs.inforphone.value))) {
			message.error('手机号格式有误');
			e.target.focus();
			this.setState({
				phoneFinish:false
			})
		} else {
			this.setState({
				phoneFinish:true
			})
		}
	}
	makeSurepass(e){
		if(this.state.phoneFinish && this.refs.inforpass.value.trim() !== ""){
			this.setState({
				canPress:true
			})
		}else{
			this.setState({
				canPress:false
			})
		}
	}
	makeSureuser(e){
		var nowuser = this.refs.inforphone.value;
		var nowpass = this.refs.inforpass.value;
		var aa = qs.stringify({
		  'phonenumber': nowuser,
		  'password': nowpass
		});
		React.axios.post("http://localhost:12345/login/registe",aa,{
			headers: {
            	'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
          	}
		})
		.then((response) => {
			if(response.data === 'no'){
				message.error('该用户不存在，请注册后登陆');
			}else if(response.data === 'err'){
				message.error('密码有误');
				this.refs.inforpass.value = "";
				this.refs.inforpass.focus();
			}else{
				var infor = [{username:response.data.username,phonenumber:response.data.phonenumber,userimg:response.data.userimg}]
				console.log(infor)
				Cookie.setCookie("userinformation", JSON.stringify(infor));
				console.log(Cookie.getCookie("userinformation"))
				window.location.href="http://localhost:3000/#/mine";
			}})
		.catch(function(error) {
			console.log(error);
		})
	}
	makephone(){
		if(this.refs.inforphone.value == ""){
			this.refs.inforphone.focus();
		}else{
			this.makeSurepass.bind(this);
		}
	}
	toRegiste(){
		this.props.history.push('/registe');
	}
	tuichu(){
		this.props.history.push('/home/mainPage1');
	}
	
	render() {
		return( 
			<div className="qq" style={{height:'100vh',width:'100vw',background:'#fff'}}>
			<div id="app" style={{background:'#fff'}}>
				<div className = "app-header-placeholder" >
					<div className = "app-header" style = {{backgroundColor: 'rgb(59, 155, 255)',color: 'rgb(255, 255, 255)'}} >
						<h1 onClick={this.tuichu.bind(this)}  className = "app-header-title" style = {{color: 'rgb(255, 255, 255)'}}> 登录分期乐 </h1>  
						<a href = "#" className = "app-header-right" > </a>
						<div className = "app-header-line" style = {{display: 'none'}} > 
						</div> 
					</div>
				</div>
				<section className = "main-wrap" > 
					< div className = "login-banner" > </div> 
					<ul className="input-wrap">
						<li className="input-item">
							<i className="i-icon i-phone"></i >
							< input type = "text" placeholder = "输入手机号" maxLength = "13" autoComplete = "off" ref="inforphone" onBlur={this.enterPhone.bind(this)}/>
						</li>
						<li className="input-item">
							<i className="i-icon i-sms-code"></i >
							< input type = "password" placeholder = "请输入登录密码"  ref="inforpass" minLength = "6" autoComplete = "off" onInput={this.makeSurepass.bind(this)} onBlur={this.
							makephone.bind(this)}/>
						</li >
						<p className = "wrap protocol-wrap" > 
							<span className = "agree-text agree" > 同意 </span> 
							<a href="javascript:;">分期乐用户服务协议 </a>
						</p >
					</ul>
					<div className="btn-wrap">
						<button className={this.state.canPress?'lego-button':'lego-button button-disabled'} disabled={!this.state.canPress} style={{height: '44px'}}  onClick={this.makeSureuser.bind(this)}>
							<span className="button-text">登录</span >
						</button>
					</div>
					<div className = "link-box" onClick={this.toRegiste.bind(this)}> 没有账号？ 极速注册 </div>
				</section >
			</div>
			</div>
		)
	}
	componentDidMount(){
		
	}
}

export default Xlogin;