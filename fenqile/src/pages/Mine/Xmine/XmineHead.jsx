import React, {
	Component
} from "react";

import { Link } from "react-router-dom";
import Cookie from "../../../lib/cookie.js"
import qs from 'qs';

import "./Xmine.css";
import "./Xmine2.css";

class XmineHead extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			userinfor:'立即登陆',
			isShowLogin:true,
			userimg:'',
		}
	}
		getUser(){
		var allinfor = Cookie.getCookie("userinformation") || [];
		if(typeof allinfor == "string") {
			allinfor = JSON.parse(allinfor);
		}
		if(allinfor.length==0){
			this.setState({
				userinfor:'',
				isShowLogin:true
			})
		}else{
			console.log(allinfor)
			var nowuser = allinfor[0].username;
			var nowphone = allinfor[0].phonenumber;
			var nowimg = allinfor[0].userimg?allinfor[0].userimg:""
			console.log(nowimg)
			if(nowuser){
				this.setState({
					userinfor:nowuser,
					isShowLogin:false,
					userimg:nowimg
				})
			}else{
				this.setState({
					userinfor:nowphone,
					isShowLogin:false,
					userimg:nowimg
				})
			}
			
		}
		
	}
//	getUserinfor(){
//		var zz = qs.stringify({
//        'phonenumber': this.state.userinfor,
//      });
//		React.axios.post("http://localhost:12345/login/registe",zz,{
//          headers: {
//                  'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
//              }
//      })
//      .then((response) => {
//      	console.log(response.data.uerimg);
//      	if(response.data.uerimg){
//      		 this.setState({
//					userimg:response.data.uerimg
//          	})
//      	}else{
//      		this.setState({
//					userimg:""
//          	})
//      	}
//      })
//      .catch(function(error) {
//          console.log(error);
//      })
//	}

	render() {
		return(
			<div>
	            <div className="headerpt">
			        <div className="header" style={{border:0}}>
			            <h1></h1>
			            <div className="g-right"><Link className="set-up" to="/app/account/set.html"><span>设置</span></Link> 
			            <Link className="ml15" to="/app/message/index.html"><i className="i-mail"><span className="red-d"></span></i></Link> 
			            </div>
			        </div>
			    </div>
			    
			    <section className="account-wrap">
			    	<div className="account-top-con">
					    <section className="account-info">
					        <div className="fx1 justify">
					            <div className="email" >
					                <img src={this.state.userimg==''?"https://cres2.fenqile.cn/home_m/online/img/cc66e33f6b05c0ad30d9fe31b4040fc8.png":this.state.userimg} style={{backgroundSize:'48px 48px'}} width="40" height="40"/>
					                <Link to="/login" style={{
					                	display:this.state.isShowLogin?'inline-block':'none',color:"#fff"
					                }}>立即登陆</Link>
					                <Link to="/personal" style={{
					                	display:this.state.isShowLogin?'none':'inline-block',color:"#fff"
					                }}>{this.state.userinfor}</Link>
					            </div> 
					            <Link to="//passport.fenqile.com/" className="amount have-d"><i className="i-limit"></i>查看乐卡额度</Link> 
					        </div>
					    </section>
					    <section className="my-item">
					        <ul className="item-bd">
					            <li>
					                <Link to="//home.m.fenqile.com/coupon/list.html" data-fql-stat="COUPON">
					                    <div className="info-num">0</div>
					                    <div className="info-des">优惠券</div>
					                </Link> 
					            </li>
					            <li>
					                <Link to="/app/favorite/list.html" data-fql-stat="FAVORITE">
					                    <div className="info-num">0</div>
					                    <div className="info-des">收藏</div>
					                </Link> 
					            </li>
					        </ul>
					    </section>
					</div>
			    </section>
		  	</div>
		)
	}
	componentDidMount(){
		this.getUser()
//		this.getUserinfor()
	}
}

export default XmineHead;