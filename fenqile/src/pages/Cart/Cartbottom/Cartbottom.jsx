import React, { Component } from "react";


class Carbottom extends Component {
	render() {
		return (
			<div className="cart-bottom weex-ct weex-div">
			    <div  className="cart-bottom-left weex-ct weex-div">
			        <div  className="check-wrap weex-ct weex-div">
			            <div    className="select-wrap weex-ct weex-div">
			                <figure  src={`https://cres.fenqile.cn/item_m/img/choose_single--15e12b7080.png`} className="checked-box weex-el weex-image" style={{backgroundImage:'url(https://cres.fenqile.cn/item_m/img/choose_single--15e12b7080.png)'}} ></figure>
			            </div>
			        </div>
			        <div  className="amount-detail weex-ct weex-div">
			            <div   className="amount-item weex-ct weex-div">
			                <div  className="item-cost weex-ct weex-div">
			                    <p   className="cost-total weex-el weex-text">合计 : </p>
			                    <p  className="cost-sign weex-el weex-text">¥</p>
			                    <p  className="cost-color weex-el weex-text">9199</p>
			                    
			                </div>
			            </div>
			            <div  className="count-pay weex-ct weex-div">
			                <figure src={`https://cres.fenqile.cn/item_m/img/cal_icon_blue--dcdd7fbc80.png`}  className="icon-count weex-el weex-image" style={{backgroundImage:'url(https://cres.fenqile.cn/item_m/img/cal_icon_blue--dcdd7fbc80.png)'}} ></figure>
			                <p className="count-pay-month weex-el weex-text">¥380.51</p>
			                <p className="count-pay-num weex-el weex-text">x36期 ›</p>
			            </div>
			        </div>
			        <div className="cart-active weex-ct weex-div">
			            <div className="cart-btn weex-ct weex-div">
			                <p className="total weex-el weex-text">结算(1)</p>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}

export default Carbottom;