import React, { Component } from "react";
import { Link } from "react-router-dom";
import {createHashHistory} from 'history';


const history = createHashHistory();
class XdetailHeader extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:"商品详情"
		}
	}
	render(){
		return (
			<div id="global_header_top" className="headerpt">
			    <div className="header-wrap headerpt-fix" id="header_wrap">
			        <div id="global_header" className="header header-not-fix ">
			            <a onClick={history.goBack}  className="g-back " id="global_header_url"></a>
			            <h1 id="global_header_title">{this.state.title}</h1>
			            <a  className="g-right g-cart-r hide" id="g_right_cart">
			                <i className="i-cart">
			                    <em id="g_cart_count" className="hide">0</em>
			                </i>
			            </a>
						<div className="g-right-w">
							<span className="g-right" id="g_right_ico">
								<i className="item-icons i-home"></i>
							</span>
						</div>
					</div>
			    </div>
			</div>
		)
	}
}

export default XdetailHeader;