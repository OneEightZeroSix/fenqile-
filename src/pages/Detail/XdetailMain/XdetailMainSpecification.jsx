import React, {
	Component
} from "react";
import {Provider,connect} from 'react-redux';


class XdetailMainSpecification extends Component {
	constructor(props){
		super(props);
		this.props=props;
		this.state = {
			currentColor:0,
			currentSize:2,
			isSelectGuarantee:false
		}
		

	}
	setCurrentColor(index){
		this.setState({
      		currentColor: index
    	})
	}
	setCurrentSize(index){
		this.setState({
      		currentSize: index
    	})
	}
	setCurrentGuarantee(index){
		this.setState({
      		currentGuarantee: index,
      		isSelectGuarantee:!(this.state.isSelectGuarantee)
    	})
	}
	render(){
		return (
            <section className="item-side-slide item-option-slide" id="item_select_wrap_1542707154201a194321319021619300">
				<div id="fragment_box_154270715420218453_layer" className={this.props.isShowSpecification? "js-g-fragment-layer fui-mask-fadein":"js-g-fragment-layer hide"} style={{width:'100%'}}>

					<div  onClick={this.props.toggleSpecification.bind(this)} className="fui-mask"></div>
					<div id="fragment_box_154270715420218453_content" className="js-g-fragment-content  fui-f-ov" style={{height: '525px'}}>

					
						<div className="slide-main swiper-container1">
							<div className="swiper-wrapper">

				
								<div className="main swiper-slide">
									<div className="main-top">
										<div className="top-img">
											<img id="popup_img" src="https://cimg1.fenqile.com/product3/M00/35/14/RrQHAFuZjLmAJnUhAAD5rlh2Nms712.jpg" className="imgauto js-popup-img" alt="" />
										</div>
										<div className="top-detail" id="spec_popup_price_wrap">
									
											<div className="top-price">
												<div className="normal-price"><em>¥</em>9199</div>
												<div className="normal-state">
													现货
												</div>
											</div>
											<a className="cal-price js-mon-pay-block" href="javascript:;">
												<i className="cal-icon"></i>
												<span className="cal-price-num">¥<span className="js-mon-pay">380.51</span></span>
												<span className="cal-price-month ">x<span className="js-fq-num">36</span>期</span>
											</a>

										</div>
									</div>

							
									<div className="main-bd js-spec-fragment-body">
										<div id="spec_swiper" className="swiper-container2 swiper-container-horizontal">
											<div className="swiper-wrapper">

												<div className="option swiper-slide swiper-slide-active" id="spec_container" style={{width: '320px'}}>
													<div className="js-feature-list-wrap">
														<dl className="option-sec js-feature-type-wrap"> <dt> 颜色 <span className="js-select-tips sec-tip hide js-select-tips-颜色">请选择颜色</span>
															</dt>
															<dd>
																{(()=>{
																	let colorArr = ['深空灰色','银色','金色'];
																	let itemlist = [];
																	for(let i=0;i<colorArr.length;i++){
																		itemlist.push(
																			<li key={i} className={
																				this.state.currentColor ===i? "js-select-item js-sku-feature js-feature-颜色 on":"js-select-item js-sku-feature js-feature-颜色"
																			} onClick={this.setCurrentColor.bind(this,i)} data-feature-type="颜色" data-type-index="1" data-feature-value={colorArr[i]}><a href="javascript:;">{colorArr[i]}</a></li>);
																	}
																	return <ul className="js-feature-ul option-item clear" data-feature-type="颜色">{itemlist}</ul>
																	
																})()}
																
															</dd>
														</dl>
														<dl className="option-sec js-feature-type-wrap"> <dt> 内存 <span className="js-select-tips sec-tip hide js-select-tips-内存">请选择内存</span>
															</dt>
															<dd>
																{(()=>{
																	let sizeArr = ['512GB','256GB','64GB'];
																	let itemlist = [];
																	for(let i=0;i<sizeArr.length;i++){
																		itemlist.push(
																			<li key={i} className={
																				this.state.currentSize ===i? "js-select-item js-sku-feature js-feature-内存 on":"js-select-item js-sku-feature js-feature-内存"
																			} onClick={this.setCurrentSize.bind(this,i)} data-feature-type="内存" data-type-index="2" data-feature-value={sizeArr[i]}><a href="javascript:;">{sizeArr[i]}</a></li>);
																	}
																	return <ul className="js-feature-ul option-item clear" data-feature-type="内存">{itemlist}</ul>
																	
																})()}
																
															</dd>
														</dl>
													</div>
										
													<div className="js-attach-sku-wrap">
														<dl className="option-sec op-server"><dt className="option-title">
																<div className="option-main">增值服务</div>
																<a href="https://sale.fenqile.com/VlVdQkhdV1lFSFNTWU1I/index.html">
																	<div className="i-screen">
																		<img src="//cres1.fenqile.cn/item_m/img/product/tip_server--0d308ddf36.png" className="imgauto" />
																	</div>
																	服务说明
																</a>
															</dt>
															<dd>
																<div className="item-content">
																	<div className="i-screen">
																		<img src="https://cres.fenqile.cn/item_m/img/product/safe--40022ec63f.png" className="imgauto" />
																	</div>
																	<p className="main-txt">碎屏保障</p>
																	<p className="tip-txt js-tips-0"></p>
																</div>
																{(()=>{
																	let guaranteeArr = [{guaranteeType:'官修版',guaranteePrice:'￥268'}];
																	let itemlist = [];
																	for(let i=0;i<guaranteeArr.length;i++){
																		itemlist.push(
																			<li key={i} className={
																				(this.state.currentGuarantee ===i&&this.state.isSelectGuarantee===true)? "js-attach-sku on":"js-attach-sku"
																			}  index={i} onClick={this.setCurrentGuarantee.bind(this,i)} data-service-index="0" data-sku-name={guaranteeArr[i].guaranteeType}>
																				<a href="javascript:;">
																					<span>{guaranteeArr[i].guaranteeType}</span>
																	 				<span className="item-price">{guaranteeArr[i].guaranteePrice}</span>
																				</a>
																			</li>);
																	}
																	return <ul className="option-item clear">{itemlist}</ul>
																	
																})()}
																
															</dd>
														</dl>
													</div>
												</div>
											</div>
										</div>
									</div>
								

									<div className="main-btn js-spec-bottom-btn-wrap"> 
										<a href="javascript:;" className="bt btn-new-color hid js-spec-bottom-btn " data-type="cart" data-page-type="30"> 加入购物车 </a> 
										<a href="javascript:;" className="bt js-spec-bottom-btn " data-type="buy" data-page-type="30"> 立即购买 </a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		)
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		toggleSpecification(){
			dispatch({
				type:"toggleSpecification",
				isShowSpecification:false
			})
		}
	}
})(XdetailMainSpecification);