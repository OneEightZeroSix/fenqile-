import React, {
	Component
} from "react";

import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { Provider, connect } from 'react-redux';


class XdetailMainPic extends Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
		 	tabs:[
			  	{ 
			  		title: <img src="https://cimg1.fenqile.com/product3/M00/23/8B/R7QHAFuZjKaAR1r7AAD6SRDtLYA535.jpg" alt="" className="imgauto" />,
			  		imgSrc:"https://cimg1.fenqile.com/product3/M00/23/8C/R7QHAFuZjOWAUA0gAAD6SRDtLYA789.jpg"
	  		 	},
			  	{ 
			  		title: <img src="https://cimg1.fenqile.com/product3/M00/35/13/RrQHAFuZjKuAPXN2AAD5rlh2Nms887.jpg" alt="" className="imgauto" />,
			  		imgSrc:"https://cimg1.fenqile.com/product3/M00/35/14/RrQHAFuZjOmAXefiAAD5rlh2Nms545.jpg"
	  		 	},
			  	{ 
			  		title: <img src="https://cimg1.fenqile.com/product3/M00/23/8B/R7QHAFuZjK6AFFkeAAETEvXkxVU884.jpg" alt="" className="imgauto" />,
			  		imgSrc:"https://cimg1.fenqile.com/product3/M00/35/14/RrQHAFuZjOyAKpJ9AAETEvXkxVU996.jpg"
	  		 	}
			],
			price:this.props.nowprice
		}
	}	

	render(){
		return (
			<div>
				<div id="top_pic_wrap">
					<section className="proimg-wrap proimg-stage-wrap">
					<div>
					    <Tabs style={{width:'20px'}} tabs={this.state.tabs}
					      initialPage={0}

					      tabBarPosition="bottom"
					      onChange={(tab, index) => { this.setState({price:tab.price}) }}
					      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
					      renderTab={tab => <span style={{marginRight:'16px',width: '44px',height: '44px',display: 'block',borderRadius: '3px',boxSizing: 'border-box',position: 'relative'}}>{tab.title}</span>}
					    >

						{(()=>{
	                    	return this.state.tabs.map((item,index)=>{
	                    		return(
	                    			<div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '320px', backgroundColor: '#fff' }}>
					        			<img src={this.props.isShowSpecification?  this.props.nowpic:item.imgSrc} alt="" className="imgauto js-sku-img" data-index={index} />
					     	 		</div>
	                			)
								
	                    	})  
	                	})()}   
					    </Tabs>
					    <WhiteSpace />
				  </div>
				</section>

				</div>
				<section className="more-price">
					
					<div id="dacu_img_wrap"></div>

				
					<div id="countdown_wrap"></div>

					
					<div id="price_area_wrap">
						<div className="section-price section-price-noborder">
							
							<div className="wrap-inner ">
								
								
								<div className="price-wrap ">
									
									<span className="now-price-rmb"><em>¥</em></span>
									<span className="now-price">{this.props.nowprice}</span>
									
										<span className="old-price ">{Number(this.props.sliceprice)==-1? "":"¥"+this.props.sliceprice}</span>
									
									
								</div>
								
					
								<a onClick={this.props.toggleFenqi.bind(this)} className="cal-price js-mon-pay-block" href="javascript:;">
									<i className="cal-icon"></i>
									<span className="cal-price-num">¥<span className="js-mon-pay">{this.props.currentPlan.mon_pay}</span></span>
									<span className="cal-price-month">x<span className="js-fq-num">{this.props.currentPlan.fq_num}</span>期</span>
								</a>
								
							</div>
							<div className="section-price-bottom js-section-price-bottom hide">
									
								<p className="shopping-gold-txt js-shopping-gold-txt hide" data-hack-flag=""></p>
							</div>
						</div>
					</div>

					<div id="free_worry_wrap"></div>

				
					<div id="user_guide_wrap">
					

						<div className="guide-bcard">
							<a className="guide-inner "  id="vip_next_url">
			
								<div className="guide-price">
									<i className="i-bcard" style={{backgroundImage: 'url(https://cimg1.fenqile.com/product/M00/F1/BC/hRoGAFqzdX2ANPS_AAAFjmyUyZ0955.png)'}}></i>
									<span style={{color:'#394050'}}>乐卡分期，最高支持36期，每月仅380.51元</span>
									
								</div>
								
								<div className="btn-open">立即开通</div>
								
							</a>
						</div>
					</div>

			
					<div id="title_info_wrap">
						<div className="info-main">
							<div className="info-name">
								<div className="fx1">
									
									<span className="tag-block">
										
											<span className="ori">正品</span>
										
											<span className="self">自营</span>
										
									</span>
									
									<span className="item-name">
										苹果（Apple）iPhone XS Max双卡双待全网通国行正品
									</span>
								</div>
							</div>
							<div className="info-des">
								<p className="txt-des">免息！分期乐是苹果授权经销商，正品有保障！</p>
								
								<p><a className="surprise-more"  data-fql-stat="LINK_SUBTITLE_S201809130018237">
								19-20日手机爆款12期免息，领券下单立减100！</a></p>
							
							</div>
						</div>
					</div>
				</section>
				<ul className="pro-info js-init-wrap">

			        <li id="exclusive_wrap" className="hide"></li>
			        <li id="coupon_icon_wrap" className="hide"></li>
			        <li onClick={this.props.toggleSales.bind(this)} id="present_icon_wrap" className="">
						<a href="javascript:;">
							<div className="info-label">促销</div>
							<div className="fx1">
								<div className="form-text">
									
									<div className="promo-list">
										<em>免息</em>
										<p className="txt-hide">新人限时9期免息，仅限乐卡支付</p>
									</div>
								
									<div className="promo-list">
										<em>全场加价购</em>
										<p className="txt-hide">全场满99元另加39元，或满299元另加99元，或满999元另加399元，即可在购物车换购热销商品</p>
									</div>
								
									<div className="promo-list">
										<em>套餐</em>
										<p className="txt-hide">当前商品享受套餐优惠</p>
									</div>
									
								</div>
							</div>
						</a>
					</li>
			 
			        <li id="recycle_info_wrap" className="">
						<a href="" className="wrap-recycle js-data-report" data-hottag="LINK_RECYCLING_">
							<img src="https://cimg1.fenqile.com/ibanner2/M00/31/79/jqgHAFsop1mAFRMaAAAHIUIBO50219.png" className="imgauto" />
							<div className="fx1 vh">
								<div className="form-text">
									<p className="new-txt">以旧换新，旧机抵扣新机款</p>
								</div>
							</div>
							<div className="sale-btn"></div>
						</a>
					</li>
			    </ul>


			    <div className="pro-info js-init-wrap">

			        <ul onClick={this.props.toggleSpecification.bind(this)} id="selected_sku_key_wrap">
						<li id="feature_list">
							<a href="javascript:;">
								<div className="info-label">已选</div>
								<div className="fx1">
									<div className="form-text">
										<p className="txt-hide" id="sku_key">{this.props.colorText} {this.props.sizeText} </p>
									</div>
								</div>
							</a>
						</li>
				
					
						<li className="item-add-server js-attach-block" id="attach_block">
							<a href="javascript:;">
							
								<div className="info-label info-label-hide">已选</div>
							
								<div className="fx1 add-server">
									<div className="form-text">
										<p className="txt-hide" id="attach_sku_key">
										
												选择增值服务<span className="add-tips" id="attach_tips_ad">屏碎心不碎 足不出户 免费换新</span>
											
										</p>
									</div>
								</div>
							</a>
						</li>
					</ul>
			   
			        <ul onClick={this.props.toggleAdress.bind(this)} id="address_info_wrap" className="">
						<li>
							<a href="javascript:;" id="address_info">
								<div className="info-label">送至</div>
								<div className="fx1">
									<div className="form-text">
										<p className="txt-hide" id="address_name">{this.props.currentProvince} {this.props.currentCity} {this.props.currentArea} {this.props.currentStreet}</p>
									</div>
								</div>
							</a>
						</li>
					</ul>

			 
			        <ul id="consult_phone_wrap">
			        </ul>

			 
			        <div id="stock_info_wrap"></div>

			      
			        <ul id="service_text_wrap">
						<li>
							<a href="javascript:;" className="vh">
								<div className="info-label">说明</div>
								<div className="fx1">
									<div className="form-text mbf8">
										
										<span className="detail-txt">正品保证</span>
										
										<span className="detail-txt">不支持7天无理由退货</span>
										
										<span className="detail-txt">闪电发货</span>
										
										<span className="detail-txt">提前还款免服务费</span>
										
										<span className="detail-txt">不支持信用卡分期</span>
										
									</div>
								</div>
							</a>
						</li>
					</ul>
			    </div>
			</div>

		)
	}
}


export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		toggleFenqi(){
			dispatch({
				type:"toggleFenqi",
				isShowFenqi:true
			})
		},
		toggleSales(){
			dispatch({
				type:"toggleSales",
				isShowSales:true
			})
		},
		toggleSpecification(){
			dispatch({
				type:"toggleSpecification",
				isShowSpecification:true
			})
		},
		toggleAdress(){
			localStorage.text=document.getElementById("address_name").innerText;
			document.getElementById("citiesList").innerHTML=""
			document.getElementById("areasList").innerHTML=""
			document.getElementById("streetsList").innerHTML=""
			dispatch({
				type:"toggleAdress",
				isShowAdress:true
			})
		}
	}
})(XdetailMainPic);