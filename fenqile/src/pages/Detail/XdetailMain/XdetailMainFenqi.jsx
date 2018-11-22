import React, {
	Component
} from "react";
import {Provider,connect} from 'react-redux';

class XdetailMainFenqi extends Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			isShowMonPayGuess:true,
			currentDownpayment:0,
			currentStage:9,
			currentSf:"零首付",
			currentFq:"36期",
			currentPlan:{
				"total_capital_amount": "9199",
				"has_discount_flag": 0,
				"fq": "36期",
				"fq_num": 36,
				"sf": "零首付",
				"ratio_year": "28",
				"total_real_pay_amount": "13698.36",
				"mon_pay": "380.51",
				"total_ori_fee_amount": "4499.36",
				"total_discount_fee_amount": "0",
				"total_real_fee_amount": "4499.36"
			}
			
		}
	
	}
	
	
	toMonPayDetail(){
		this.setState({
			isShowMonPayGuess:false            
        })
	}
	toMonPayGuess(){
		this.setState({
			isShowMonPayGuess:true            
        })
	}
	toggleFenqi(){
        this.setState({
            isShowMonPayGuess:true
        })
        this.props.toggleFenqi();
    }
	render(){
		return (
			<div>
			
			<section className="item-side-slide item-option-slide" id="item_select_wrap_1542620081722a420669217960134570">
				<div id="fragment_box_154262008172451105_layer" className={this.props.isShowFenqi?'js-g-fragment-layer fui-mask-fadein':'hide js-g-fragment-layer'} style={{width: '100%'}}>
					
					<div onClick={this.toggleFenqi.bind(this)} className="fui-mask"></div>
					<div id="fragment_box_154262008172451105_content" className="js-g-fragment-content  fui-f-ov" style={{height: '525px'}}>
						<div className="slide-main" style={{zIndex:"100000"}}>
							<div className="swiper-wrapper">
								
								<div className={this.state.isShowMonPayGuess? "main swiper-slide js-mon-pay-popup js-mon-pay-page":"main swiper-slide js-mon-pay-popup js-mon-pay-page hide"}>
									<div className="main-title">
										<h3 className="main-h3">月供测算</h3>
										<div onClick={this.toggleFenqi.bind(this)} className="handle-right js-fee-popup-close"> <i className="i-close"></i> </div>
									</div>
									<div className="pay-time"> <span className="pay-sing">¥</span> <span className="pay-money js-mon-pay">{this.state.currentPlan.mon_pay}</span> <span
										 className="pay-x">x</span> <span className="pay-num js-fq-num">{this.state.currentPlan.fq_num}</span> <span className="pay-txt">期</span> 
										 <i onClick={this.toMonPayDetail.bind(this)} className="tip-icon js-mon-pay-detail-icon"></i>
									</div>
									<div className="main-bd">
										<div className="swiper-container2">
											<div className="swiper-wrapper">
												<div className="option swiper-slide js-spec-fee">
													<dl className="option-sec"><dt>首付</dt>
														<dd>
														{(()=>{
															let downpaymentArr = ['零首付','10%','20%','30%','40%','50%'];
															let itemlist = [];
															for(let i=0;i<downpaymentArr.length;i++){
																itemlist.push(<li key={i} className={
																	this.state.currentDownpayment ===i? "js-first-pay-selector js-select-item on":"js-first-pay-selector js-select-item"
																} onClick={this.props.setCurrentDownpayment.bind(this,i,downpaymentArr[i])} data-fpay-value={i*10}><a href="javascript:;">{downpaymentArr[i]}</a></li>);
															}
															return <ul className="option-item clear">{itemlist}</ul>
															
														})()}
															
															
														</dd>
													</dl>
													<dl className="option-sec"><dt>分期数 <span className="blue hide js-spec-sales-tag"></span></dt>
														<dd>
														{(()=>{
															let stageArr = ['不分期','2期','3期','6期','9期','12期','15期','18期','24期','36期'];
															let itemlist = [];
															for(let i=0;i<stageArr.length;i++){
																itemlist.push(<li key={i} className={
																	this.state.currentStage ===i? "js-select-item js-fq-num-selector on":"js-select-item js-fq-num-selector"
																} onClick={this.props.setCurrentStage.bind(this,i,stageArr[i])}><a href="javascript:;">{stageArr[i]}</a></li>);
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
								<div className={this.state.isShowMonPayGuess? "main swiper-slide js-mon-pay-popup js-mon-pay-detail hide":"main swiper-slide js-mon-pay-popup js-mon-pay-detail"}>
									<div className="main-title">
										<div className="handle-left js-fee-popup-back"> <i  onClick={this.toMonPayGuess.bind(this)} className="g-back"></i> </div>
										<h3 className="main-h3">月供详情</h3>
										<div className="handle-right js-fee-popup-close hide"> <i className="i-close"></i> </div>
									</div>
									<div className="main swiper-slide js-mon-pay-list">
										<div className="content-main">
											<div className="total-title">合计需还</div>
											<div className="total-num">
												<p className="yen">¥</p>
												<p className="num">{this.state.currentPlan.total_capital_amount}</p>
											</div>
											<div className="total-des"><span></span></div>
										</div>
										<ul className="content-detail">
											<li>
												<div className="row-l"><span>本金</span></div>
												<div className="row-r"><span>¥{this.state.currentPlan.total_capital_amount}</span></div>
											</li>
											<li>
												<div className="row-l"><span>服务费</span></div>
												<div className="row-r"><span>¥{this.state.currentPlan.total_ori_fee_amount}</span><del className="old-price">¥{this.state.currentPlan.total_discount_fee_amount}</del></div>
											</li>
											<li>
												<div className="row-l"><span>年化利率</span></div>
												<div className="row-r"><span>{this.state.currentPlan.ratio_year}%</span></div>
											</li>
											<li>
												<div className="row-l"><span>期数</span></div>
												<div className="row-r"><span>{this.state.currentPlan.fq}</span></div>
											</li>
											<li>
												<div className="row-l"><span>月供</span></div>
												<div className="row-r"><span>¥{this.state.currentPlan.mon_pay}</span></div>
											</li>
										</ul>
										<div className="tip-box">首期月供根据实际使用天数计算，具体以账单金额为准</div>
									</div>
								</div>
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
		setCurrentDownpayment(index,currentSf){
			React.axios.get("fenqi.json")
	        .then((response) => {
	            let fenqiArr=response.data.data.result_rows.fee_info_list;
	            let fenqi = fenqiArr.filter((x) => x.sf === currentSf&&x.fq === this.state.currentFq)
	            this.setState({
	                currentPlan: fenqi[0],
	                currentSf: currentSf,
	                currentDownpayment: index
	            })
	            dispatch({
	            	type:"setCurrentDownpayment",
					 currentPlan: fenqi[0],
	                currentSf: currentSf,
	                currentDownpayment: index
				})
	        })
	        .catch(function (error) {
	            console.log(error);
	        });
		},
		setCurrentStage(index,currentFq){
			React.axios.get("fenqi.json")
	        .then((response) => {
	            let fenqiArr=response.data.data.result_rows.fee_info_list;
	            let fenqi = fenqiArr.filter((x) => x.fq === currentFq&&x.sf === this.state.currentSf)
	            this.setState({
	                currentPlan: fenqi[0],
	                currentFq: currentFq,
	                currentStage: index
	            })
              	dispatch({
	            	type:"setCurrentStage",
					currentPlan: fenqi[0],
	                currentFq: currentFq,
	                currentStage: index
				})
	        })
	        .catch(function (error) {
	            console.log(error);
	        });
  
		},
		toggleFenqi:()=>{
			dispatch({
				type:"toggleFenqi",
				isShowFenqi:false,
			})
		}
	}
})(XdetailMainFenqi);