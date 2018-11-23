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
			currentSize:0,
			isSelectGuarantee:false,
			list:[],
			nowprice:0,
			sliceprice:0,
			nowpic:"",
			colorText:"深空灰色",
			sizeText:"256GB",
			asing:"",
		}
		
	}
	setCurrentColor(index,e){
		let cart= this.state.list[0];
		let text = e.target.innerText;
		this.setState({
      		currentColor: index,
      		colorText:text
    	})
		for(let key in cart){
				if(key==index){
					this.setState({
	                    nowpic: cart[key].sku_pic,
	                })
	                this.props.istext(this.state.colorText,this.state.sizeText)
				}
		 	}
		
	}
	setCurrentSize(index,e){
		let cart= this.state.list[0]
		let text = e.target.innerText;
			this.setState({
	      		currentSize: index,
	      		sizeText:text
	    	})
		for(let key in cart){
				if(key==index){
					this.setState({
	                    nowprice: cart[key].real_amount,
	                    sliceprice:cart[key].amount
	                })
				}
		 	}
	
	}
	setCurrentGuarantee(index){
		this.setState({
      		currentGuarantee: index,
      		isSelectGuarantee:!(this.state.isSelectGuarantee)
    	})
	}
	
	loadMore(){
		 React.axios.get("getPriceAndStockInfo.json").then((response) => {
		 	console.log(response.data.data.result_rows)
		 	let cart = response.data.data.result_rows
		 	for(let key in cart){
				if(key==this.state.currentSize){
					this.setState({
	                    nowprice: cart[key].real_amount,
	                    sliceprice:cart[key].amount,
	                    nowpic:cart[key].sku_pic,
	                    asing:cart[key].mon_pay
	                })
				}
		 	}
            this.setState({
                list: this.state.list.concat(response.data.data.result_rows)
            })
        }).catch(function (error) {
            console.log(error);
        });
	}
	componentWillUpdate(nextProps,nextState) {
		  this.props.istext(nextState.colorText,nextState.sizeText,nextState.nowpic)	
		  this.props.isnowprice(nextState.nowprice,nextState.sliceprice)
	}
	// componentWillMount(){
	// 	console.log(4)
	// }
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
											<img id="popup_img" src={this.state.nowpic} className="imgauto js-popup-img" alt="" />
										</div>
										<div className="top-detail" id="spec_popup_price_wrap">
									
											<div className="top-price">
												<div className="normal-price"><em>¥</em>
													{
														this.state.nowprice
													}
												</div>
												<div className="normal-state">
													现货
												</div>
											</div>
											<a className="cal-price js-mon-pay-block" href="javascript:;">
												<i className="cal-icon"></i>
												<span className="cal-price-num">¥<span className="js-mon-pay">{this.state.asing}</span></span>
												<span className="cal-price-month" onClick={this.props.toggleFenqi.bind(this,true)}>x<span className="js-fq-num" >36</span>期</span>
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
																			}  data-feature-type="颜色" data-type-index="1" data-feature-value={colorArr[i]}><a href="javascript:;" onClick={this.setCurrentColor.bind(this,i)}>{colorArr[i]}</a></li>);
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
																			} data-feature-type="内存" data-type-index="2" data-feature-value={sizeArr[i]}><a onClick={this.setCurrentSize.bind(this,i)}  href="javascript:;">{sizeArr[i]}</a></li>);
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
	 componentDidMount  () {
        this.loadMore()
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
		},
		isnowprice(nowprice,sliceprice){
			dispatch({
				type:"setnowprice",
				nowprice:nowprice,
				sliceprice:sliceprice
			})
		},
		istext(color,size,pic){
			dispatch({
				type:"istext",
				colorText:color,
				sizeText:size,
				nowpic:pic
			})
		},
		toggleFenqi(bol){
			dispatch({
				type:"toggleFenqi",
				isShowFenqi:bol
			})
		}
	}
})(XdetailMainSpecification);