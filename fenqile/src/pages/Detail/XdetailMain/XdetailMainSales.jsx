import React, {
	Component
} from "react";
import {Provider,connect} from 'react-redux';

class XdetailMainSales extends Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
		}
	}
	render(){
		return (
			<div>
				<section className="side-slide option-slide" id="active_wrap">
					<div id="fragment_box_154270716592176990_layer" className={this.props.isShowSales? "js-g-fragment-layer fui-mask-fadein":"js-g-fragment-layer hide"} style={{width: '100%'}}>
						<div onClick={this.props.toggleSales.bind(this)} className="fui-mask js-mask"></div>   
							<div id="fragment_box_154270716592176990_content" className="js-g-fragment-content  fui-f-ov" style={{height: '525px'}}>
							
							        <div className="pop-b-con pop-address-con js-popup-body">
							            <div className="p-slide p-message">
							                <div className="p-s-distribute">
							                    <a href="javascript:;" className="i-close js-confirm-btn"></a>
							                    <h3>促销</h3>
							                </div>
							                <div className="order-message">
							                    <ul className="form-new" id="popup_active_list">
													<li className="form-txt">
														<div className="db">
															<em>免息</em>
															<span className="txt">
																	<span className="txt">
																		 新人限时9期免息，仅限乐卡支付
																	</span>
															</span>
														</div>
													</li>
													<li className="form-txt">
														<div className="db">
															<em>全场加价购</em>
															<span className="txt">
																<a href="javascript:;" className="chunk js-custom-stat" data-fql-stat="present_popup_S201809130018237_5">
																	全场满99元另加39元，或满299元另加99元，或满999元另加399元，即可在购物车换购热销商品
																</a>
															</span>
														</div>
													</li>
													<li className="form-txt">
														<div className="db">
															<em>套餐</em>
															<span className="txt">
																<a href="javascript:;" className="chunk js-custom-stat" data-fql-stat="present_popup_S201809130018237_6">
																	当前商品享受套餐优惠
																</a>
															</span>
														</div>
													</li>
													<li className="form-txt">
														<div className="db">
															<em>限制</em>
															<span className="txt">
																<span className="txt">
																	 购买不超过5件时享受优惠，超出数量以结算价为准
																</span>
															</span>
														</div>
													</li>
												</ul>
							                </div>
							                <div onClick={this.props.toggleSales.bind(this)} className="p-btn js-popup-close-btn"><a href="javascript:;">确定</a></div>
							            </div>
							        </div>
							
				   		</div>
			   		</div>
		   		</section>
		   	</div>
		)
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		toggleSales(){
			dispatch({
				type:"toggleSales",
				isShowSales:false
			})
		}
	}
})(XdetailMainSales);