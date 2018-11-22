import React, {
	Component
} from "react";

import { Link } from "react-router-dom";

import "./Xmine.css";
import "./Xmine2.css";

class XmineHead extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}

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
					            <Link to="//passport.fenqile.com/" className="email">
					                <img alt="" src="/res/img/app/wallet_index/avt_default1.png" width="40" height="40" style={{backgroundSize:'48px 48px'}}/>
					                <span>立即登录</span>
					            </Link> 
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

}

export default XmineHead;