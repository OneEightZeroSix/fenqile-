import React, {
	Component
} from "react";
import {
	SwipeAction,
	List
} from 'antd-mobile';
import {Provider, connect} from 'react-redux';
import "./Xmain.css"
class Xmaincenter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowCancel:false,
			qty:1
		}
	}
	qtyup(e){
		e.stopPropagation();
		let qty = this.props.qty;
		this.setState({qty:qty++})
		this.props.qtys(qty++);
	}
	qtybt(e){
		e.stopPropagation();
		let qty = this.props.qty;
		this.setState({qty:qty--})
		qty<=1? this.props.qtys(1):this.props.qtys(qty--);
	}
	render() {
		return (
			<div>
			<section className=" weex-ct weex-cell">
			    <div className=" weex-ct weex-div">
			        <div className="cart-wrap weex-ct weex-div">
			            <div className="full-off-wrap weex-ct weex-div">
			                <p className="off-tag weex-el weex-text">全场加价购</p>
			                <p className="off-txt weex-el weex-text">已购满999元，可加价399元换购商品</p>
			                <div className="make-up weex-ct weex-div">
			                    <p className="make-txt weex-el weex-text">去换购</p>
			                </div>
			            </div>
			        </div>
			        <div className=" weex-ct weex-div" id="fenqileItem">
			            <div className="cart-wrap weex-ct weex-div">
			                <div className="shop-wrap weex-ct weex-div">
			                    <div className="check-wrap weex-ct weex-div">
			                        <div className="select-wrap weex-ct weex-div">
			                            <figure src="https://cres.fenqile.cn/item_m/img/choose_single--15e12b7080.png"  className=" checked-box weex-el weex-image" style={{backgroundImage: 'url(https://cres.fenqile.cn/item_m/img/choose_single--15e12b7080.png)'}}></figure>
			                        </div>
			                    </div>
			                    <p className="shop-name weex-el weex-text">分期乐</p>
			                    <div className="shop-operate weex-ct weex-div">
			                    </div>
			                </div>
			                <div className=" weex-ct weex-div">
			                    <div className=" weex-ct weex-div">
			                        <div className="shop-item weex-ct weex-div good-item">
			                            
			                            <div className="shop-scroller weex-ct weex-div" style={{transform: 'translate(0px, 0px)',width: 'auto'}}>
			                                <div className="shop-item-detail weex-ct weex-div" style={{width:'100%'}}>
				                                <div className=" weex-ct weex-div check-wrap">
			                                        <div className=" weex-ct weex-div">
			                                            <figure src="https://cres.fenqile.cn/item_m/img/choose_single--15e12b7080.png"  className="checked-box weex-el weex-image" style={{backgroundImage: 'url(https://cres.fenqile.cn/item_m/img/choose_single--15e12b7080.png)'}}></figure>
			                                        </div>
			                                    </div>
					                            <List>
												    <SwipeAction
												      style={{ backgroundColor: 'gray' }}
												      autoClose
												      right={[
												        {
												          text: '移入收藏',
												          onPress: () => console.log('cancel'),
												          style: { backgroundColor: '#ddd', color: 'white' },
												        },
												        {
												          text: '删除',
												          onPress: (e) => {
												          	var goodItem = document.getElementsByClassName('good-item');
											          		var shopItemParent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
															var fenqileItem = shopItemParent.parentElement.parentElement.parentElement.parentElement;
											          		if(goodItem.length<2){
																fenqileItem.parentElement.removeChild(fenqileItem);
											          		}else{
											          			shopItemParent.parentElement.removeChild(shopItemParent)
											          		};
												      	},
												          style: { backgroundColor: '#F4333C', color: 'white' },
												        },
												      ]}
												      onOpen={() => console.log('global open')}
												      onClose={() => console.log('global close')}
												    >
												      	<List.Item
													        extra={
													        	<div className="item-detail weex-ct weex-div">
							                                        <div className="item-detail-top weex-ct weex-div">
							                                            <div className=" weex-ct weex-div">
							                                                <div className="product-inner weex-ct weex-div">
							                                                    <p className=" weex-el weex-text product-title">苹果（Apple）iPhone XS Max双卡双待全网通国行正品</p>
							                                                </div>
							                                                <p className=" weex-el weex-text product-norms">规格： 深空灰色 64GB</p>
							                                            </div>
							                                            <div className="tag-wrap weex-ct weex-div">
							                                                <p className="tag weex-el weex-text">限购价</p>
							                                            </div>
							                                        </div>
							                                        <div className="item-detail-btm weex-ct weex-div">
							                                            <div className="price-wrap weex-ct weex-div">
							                                                <p className="price-sign weex-el weex-text">¥</p>
							                                                <p className="price weex-el weex-text">9199</p>
							                                            </div>
							                                            {(()=>{
							                                            	if(this.props.qtyshow){
							                                            			return (<div  className="btn-operate weex-ct weex-div">
																									    <p onClick={this.qtybt.bind(this)} className=" weex-el weex-text btn-minus btn-none">－</p>
																									    <p className="edit-num weex-el weex-text">{this.state.qty}</p>
																									    <p onClick={this.qtyup.bind(this)} className=" weex-el weex-text btn-plus">＋</p>
																									</div>)
							                                            		}else{
							                                            			return(<p className="item-num weex-el weex-text">x{this.state.qty}</p>)
							                                            		}
							                                            })()
							                                            }
							                                        </div>
						                                    	</div>
						                                	}
													        arrow="horizontal"
													        onClick={e => console.log(e)}
													      >
													        <div className="item-wrap weex-ct weex-div">
						                                        <div className="img-link weex-ct weex-div">
						                                            <figure src="https://cimgs1.fenqile.com/product3/M00/35/14/RrQHAFuZjLmAJnUhAAD5rlh2Nms712_160x160.jpg" className=" item-img checked-box weex-el weex-image"  style={{backgroundImage: 'url(https://cimgs1.fenqile.com/product3/M00/35/14/RrQHAFuZjLmAJnUhAAD5rlh2Nms712_160x160.jpg)'}}></figure>
						                                        </div>
						                                    </div>
						                                    
												      	</List.Item>
												    </SwipeAction>
											  	</List>
									  		</div>
									  	</div>
			                            <div className="gift-arrow weex-ct weex-div"></div>
			                            <div className="shop-gift weex-ct weex-div">
			                                <div className="shop-hui weex-ct weex-div">
			                                    <p className="gift-tag weex-el weex-text">限制</p>
			                                    <div className="gitf-detail weex-ct weex-div">
			                                        <p className="gift-txt weex-el weex-text">当前促销价限购5件，超过以结算价为准</p>
			                                    </div>
			                                </div>
			                                <div className="shop-hui weex-ct weex-div">
			                                    <p className="gift-tag weex-el weex-text">服务</p>
			                                    <div className="gitf-detail weex-ct weex-div">
			                                        <p className="gift-txt weex-el weex-text">选择增值服务</p>
			                                    </div>
			                                    <div className="arrow-right weex-ct weex-div"></div>
			                                </div>
			                            </div>
			                        </div>
			                        <div className=" weex-ct weex-div"></div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>
			<div weex-type="div" className={this.state.isShowCancel?"mask-wrap weex-ct weex-div":"mask-wrap weex-ct weex-div hide"}>
				<div weex-type="div" data-evt-click="" className="mask weex-ct weex-div"></div> 
				<div weex-type="div" className="box-wrap weex-ct weex-div">
					<div weex-type="div" className="box-module weex-ct weex-div" style={{height: '10rem'}}> 
						<p weex-type="text" className="box-tips weex-el weex-text">确认要删除这件商品？</p> 
						<div weex-type="div" className="box-btn-wrap weex-ct weex-div" >
							<div weex-type="div" data-evt-click="" className="box-btn weex-ct weex-div">
								<p weex-type="text" className="box-left weex-el weex-text" style={{color: '#78baff',fontSize:'13px'}}>取消</p>
							</div> 
							<div weex-type="div" data-evt-click="" className=" weex-ct weex-div box-btn no-border">
								<p weex-type="text" className="box-right weex-el weex-text" style={{color: '#78baff',fontSize:'13px'}}>确认</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	}
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
        qtys(qt){
        	 dispatch({
                type:"qty",
                qty:qt
            })
        }
    }
})( Xmaincenter);