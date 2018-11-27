import React, {
	Component
} from "react";

import { message, Button } from 'antd';
import qs from 'qs';
import Cookie from "../../../lib/cookie.js"


import "./Xregiste.css"
import "./Xregiste2.scss"

class Xregiste extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			isEmpty:false,
			phoneFinish:false,
			canPress:false,
			passright:false,
			nowpassright:'×',
			isShowErr:false,
			nowyzm:'',
			emailFinish:false,
			yzmright:'×',
			isShowyzmErr:false,
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
			var nowuser = this.refs.inforphone.value;
			var aa = qs.stringify({
			  'phonenumber': nowuser,
			});
			React.axios.post("http://localhost:12345/login/server",aa,{
				headers: {
	            	'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
	          	}
			})
			.then((response) => {
				console.log(response.data)
				if(response.data === 'has'){
					message.error('该账号已存在，请直接登陆');
				}else{
					this.setState({
						phoneFinish:true
					})
				}})
			.catch(function(error) {
				console.log(error);
			})
		}
	}
	makeSurepass(e){
		if(this.refs.inforpassAgain.value !== this.refs.inforpass.value){
			this.setState({
				passright:false,
				isShowErr:true,
				nowpassright:'×',
				canPress:false
			})
		}else{
			this.setState({
				nowpassright:'√'
			})
		}
		
	}
	makeSureuser(e){
		this.setState({
			nowpassright:false
		})
		var nowuser = this.refs.inforphone.value;
		var nowpass = this.refs.inforpass.value;
		var nowemail = this.refs.inforemail.value
		var aa = qs.stringify({
		  'phonenumber': nowuser,
		  'password': nowpass,
		  'email':nowemail
		});
		React.axios.post("http://localhost:12345/login/adduser",aa,{
			headers: {
            	'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
          	}
		})
		.then((response) => {
			if(response.data === 'success insert'){
				message.success('注册成功');
				window.location.href="http://localhost:3000/#/login";
			}else{
				message.error('注册失败');
			}})
		.catch(function(error) {
			console.log(error);
		})
	}
//	makephone(){
//		if(this.refs.inforphone.value === ""){
//			this.refs.inforphone.focus();
//		}else{
//			this.isShowcanPress();
//		}
//	}
	enteremail(e) {
		if(this.refs.inforemail.value.trim() === "") {
			message.error('邮箱不得为空');
			e.target.focus();
			this.setState({
				emailFinish:false
			})
		} else if(!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.refs.inforemail.value))) {
			message.error('邮箱格式有误');
			e.target.focus();
			this.setState({
				emailFinish:false
			})
		} else {
			var nowemail = this.refs.inforemail.value;
			var bb = qs.stringify({
			  'email': nowemail,
			});
			React.axios.post("http://localhost:12345/login/email",bb,{
				headers: {
	            	'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
	          	}
			})
			.then((response) => {
				if(response!==-1){
					this.setState({
						nowyzm:response.data
					})
					console.log(this.state.nowyzm);
				}else{
					message.error('邮箱验证码发送失败');
				}
			})
			.catch(function(error) {
				console.log(error);
			})
		}
	}
	makeyzm(){
		if(this.refs.inforyzm.value!= this.state.nowyzm){
			this.setState({
				isShowyzmErr:true,
				yzmright:'×',
				canPress:false,
			})
		}else{
			this.setState({
				yzmright:'√',
			})
			var aa = true;
			this.isShowcanPress(aa);
		}
	}
	isShowcanPress(aa){
		console.log(this.state.yzmFinish)
		if(this.refs.inforpassAgain && this.state.phoneFinish && this.refs.inforpass.value.trim() !== "" && aa ){
			this.setState({
				canPress:true
			})
		}else{
			this.setState({
				canPress:false
			})
		}
	}
	
	
	toLogin(){
		this.props.history.push('/login');
	}
	render() {
		return( 
			<div className="aa" style={{height:'100vh',width:'100vw',background:'#fff'}}>
			<div id="app" style={{background:'#fff'}}>
				<div className = "app-header-placeholder" >
					<div className = "app-header" style = {{backgroundColor: 'rgb(59, 155, 255)',color: 'rgb(255, 255, 255)'}} >
						<h1 className = "app-header-title" style = {{color: 'rgb(255, 255, 255)'}}> 注册分期乐账号 </h1>
						<a href = "#" className = "app-header-right" > </a>
						<div className = "app-header-line" style = {{display: 'none'}} > 
						</div> 
					</div>
				</div>
				<section className = "main-wrap"> 
					< div className = "login-banner" > </div> 
					<ul className="input-wrap">
						<li className="input-item">
							<i className="i-icon i-phone"></i >
							< input type = "text" placeholder = "输入手机号" maxLength = "13" autoComplete = "off" ref="inforphone" onBlur={this.enterPhone.bind(this)}/>
						</li>
						<li className="input-item">
							<i className="i-icon i-sms-code"></i >
							< input type = "password" placeholder = "请输入登录密码"  ref="inforpass" minLength = "6" autoComplete = "off" />
						</li >
						<li className="input-item">
							<i className="i-icon i-sms-code"></i >
							< input type = "password" placeholder = "请再次输入登录密码"  ref="inforpassAgain" minLength = "6" autoComplete = "off" onInput={this.makeSurepass.bind(this)}/>
							<span style={{fontSize:'16px',color:this.state.nowpassright==='×'?'red':'green',display:this.state.isShowErr?'inline-block':'none'}}>{this.state.nowpassright}</span>
						</li >
						<li className="input-item">
							<i className="i-icon i-sms-code"></i >
							< input type = "email" placeholder = "请输入邮箱账号"  ref="inforemail" minLength = "6" autoComplete = "off" onBlur={this.enteremail.bind(this)}/>
						</li >
						<li className="input-item">
							<i className="i-icon i-sms-code"></i >
							< input type = "text" placeholder = "请输入接收到的验证码"  ref="inforyzm" minLength = "6" autoComplete = "off" onInput={this.makeyzm.bind(this)}/>
							<span style={{fontSize:'16px',color:this.state.yzmright==='×'?'red':'green',display:this.state.isShowyzmErr?'inline-block':'none'}}>{this.state.yzmright}</span>
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
					<div className = "link-box" onClick={this.toLogin.bind(this)}> 已有账号？ 极速登陆 </div>
				</section >
			</div>
			</div>
		)
	}
	componentDidMount(){
		
	}
}

export default Xregiste;