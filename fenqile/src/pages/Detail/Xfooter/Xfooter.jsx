import React, {
	Component
} from "react";


import { Link } from "react-router-dom";

class Xfooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	render() {
		return(
			<div id="bottom_wrap" className="">
	        {/*购买btn */}
	        <section className="buy-btn buy-btn-no">
	            <div className="buy-btn-area hide" id="bottom_tips"></div>
	            <div className="buy-btn-fix">
	                <div className="buy-btn-icon-block">
	                    <div className="btn-icon-block">
	                        <Link className="icon-part v vm" to="#" id="customer_btn">
	                            <i className="item-icons icon-server"></i>
	                            <p id="customer_txt">客服</p>
	                        </Link>
	                        <Link to={`/cart/`} className="icon-part v vm js-data-report" data-hottag="LINK_CART_" data-href="//item.m.fenqile.com/cart/index.html?show_title_return=1">
	                            <i className="item-icons icon-cart"><em id="cart_num" className="hide"></em></i>
	                            <p>购物车</p>
	                        </Link>
	                        <Link className="icon-part v vm" to="#" id="fav_btn">
	                            {/*已收藏，添加.icon-liked */}
	                            <i className="item-icons icon-like" id="favorite_icon"></i>
	                            <p className="js-favorite-text">收藏</p>
	                        </Link>
	                    </div>
	                </div>
	                {/*只有一个按钮时，添加.buy-btn-only */}
		            <div className="buy-btn-block">
		            <div className="db" id="bottom_btn_wrap">
		                {/*建行添加.bank-cart-btn样式 */}
				        <Link to="#" className="bt btn-add-cart js-bottom-btn " data-type="cart">
				            加入购物车
				        </Link>
				    {/*无法购买add. btn-disable  */}
				   {/*建行添加bank-buy-btn样式 */}
				        <Link to="#" className="bt js-bottom-btn " data-type="buy">立即购买</Link>
				    </div>
	            </div>
	            </div>
	        </section>
	        {/*购买btn */}
	
	        <div className="gotop hide" id="go_top_icon">
	            <span className="gotoico"></span>
	        </div>
	    </div>
		)
	}
	componentDidMount() {

   	}
	
	
	
}

export default Xfooter;