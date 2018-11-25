import React, { Component } from "react";


class Cartheader extends Component {
	render() {
		return (
				<div className=" weex-ct weex-div">
				    <div className=" weex-ct weex-div app-web-header-place"></div>
				    <div className=" weex-ct weex-div app-web-header">
				        <div className="header-left weex-ct weex-div">
				            <div className="header-left-btn weex-ct weex-div"><i  className="g-back"></i></div>
				        </div>
				        <p className="header-title weex-el weex-text">购物车</p>
				        <div className="header-right weex-ct weex-div">
				            <div className="header-right-btn weex-ct weex-div">
				                <p className="g-right weex-el weex-text">编辑</p>
				            </div>
				        </div>
				    </div>
				</div>
		)
	}
}

export default Cartheader;