import React, {
    Component
} from "react";

import { Link } from "react-router-dom";

class XmineTab extends Component {
    constructor(props){
        super(props);
        // props states
        this.props = props;
        // model  data
        this.state = {
        	bill:[{
        		hrefurl:"#",
        		title:"本月账单",
        		content:"全部",
        		star:'js-bill-all',
        		iconclassName:'i-account-bill',
        		icon:''
        	}],
        	order:[{
        		hrefurl:"#",
        		title:"我的订单",
        		content:"全部",
        		star:'ORDER_LIST',
        		iconclassName:'i-account-order',
        		icon:''
        	}],
        	nav:[{
        		herfurl:"/cart",
        		title:"我的购物车",
        		content:"",
        		star:'shopping_cart',
        		iconclassName:'i-account-favor',
        		icon:'http://help.fenqile.com/res/img/m/help/i_help_service--0ec6e096ce.png'
        	},{
        		herfurl:"//mall.m.fenqile.com/app/friend/index.html",
        		title:"邀好友得返现",
        		content:"瓜分200万现金",
        		star:'invite_friend',
        		iconclassName:'i-account-favor',
        		icon:'http://cres.fenqile.cn/mobile/img/app/wallet_index/invite_ico.png'
        	},{
        		herfurl:"/exchangeRate",
        		title:"我的银行卡",
        		content:"",
        		star:'my_bank',
        		iconclassName:'i-account-favor',
        		icon:'http://cc.m.fenqile.com/res/img/v1/card/card-icon.png'
        	},{
        		hrefurl:"https://home.m.fenqile.com/index.html#/bankcard/index",
        		title:"我的预约",
        		content:"",
        		star:'my_appointment',
        		iconclassName:'i-account-favor',
        		icon:'http://m.mall.fenqile.com/res/img/app/wallet_index/i_sub.png'
        	},{
        		hrefurl:"//m.mall.fenqile.com/app/safe/index.html",
        		title:"安全中心",
        		content:"",
        		star:'safe_center',
        		iconclassName:'i-account-favor',
        		icon:'http://m.mall.fenqile.com/res/img/app/wallet_index/i_safe.png'
        	},{
        		hrefurl:"/exchangeRate",
        		title:"客服支持",
        		content:"",
        		star:'feedback',
        		iconclassName:'i-account-favor',
        		icon:'http://help.fenqile.com/res/img/m/help/i_help_service--0ec6e096ce.png'
        	}],
        	nowhtml:"",
        	orderlist:[{
        		hrefurl:"//order.m.fenqile.com/order/list.html?state_filter=unpay",
        		title:"待付款",
        		star:'UNPAY',
        		iconclassName:'i-order-notpaid',
        	},{
        		hrefurl:"//order.m.fenqile.com/order/list.html?state_filter=unapproval",
        		title:"待审核",
        		star:'UNAPPROVAL',
        		iconclassName:'i-order-check',
        	},{
        		hrefurl:"//order.m.fenqile.com/order/list.html?state_filter=unconfirm",
        		title:"待收货",
        		star:'UNDELIVERY_CONFIRM',
        		iconclassName:'i-order-receive',
        	},{
        		hrefurl:"//trade.m.fenqile.com/comment/list.html",
        		title:"待评价",
        		star:'UNEVALUATE',
        		iconclassName:'i-order-evaluate',
        	}],
        }
    }
  
    render(){
        return (
        	<div>
        	<section className="my-item">
	            <ul className="item-hd">
	            	{
	            		this.state.bill.map(function(item,idx){
			    		return <li key={idx} >
			            <Link className="justify" to={`${item.herfurl}`} title={item.title} data-fql-stat={item.star}>
			                    <i className={item.iconclassName}></i>
			                    <strong>{item.title}</strong>
			                    <span className="note">{(()=>{
			                    	if(item.content !== ""){
			                    		return item.content;
			                    	}else{
			                    		return;
			                    	}
			                    })()}</span>
			                </Link>
			            </li>
			            })
	            	}
	            </ul>
	            <ul className="item-bd bill-box hide">
	                <li>
	                    <Link to="#" className="js-bill-no-repay">
	                        <div className="info-num">
	                            <span className="">0.00</span>
	                        </div>
                            <div className="info-des">本月无账单</div>
                        </Link>
	                </li>
	                <li>
	                    <Link to="#" className="js-bill-consume-num">
	                        <div className="info-num">0</div>
	                        <div className="info-des">消费笔数</div>
	                    </Link>
	                </li>
	                <li>
	                    <Link to="#" className="js-bill-day">
                            <p className="info-num">尚未设置</p>
                            <div className="info-des">还款日</div>
	                    </Link>
	                </li>
	            </ul>
    		</section>
    		

    		<section className="my-item">
	            <ul className="item-hd">
		            {
		            	this.state.order.map(function(item,idx){
			    		return <li  key={idx}>
			            <Link className="justify" to={`${item.herfurl}`} title={item.title} data-fql-stat={item.star}>
			                    <i className={item.iconclassName}></i>
			                    <strong>{item.title}</strong>
			                    <span className="note">{(()=>{
			                    	if(item.content !== ""){
			                    		return item.content;
			                    	}else{
			                    		return;
			                    	}
			                    })()}</span>
			                </Link>
			            </li>
			            })
		            }
	            </ul>
	            <ul className="item-bd bill-box">
	            {
	            	this.state.orderlist.map(function(item,idx){
	            		return <li key={idx}> 
		                    <Link className="item-info" to={`${item.herfurl}`} data-fql-stat={item.star}>
		                        <i className={item.iconclassName}></i>
		                        <div className="info-des">{item.title}</div>
		                    </Link>
		                </li>
		            })
	            }
	            </ul>
	        </section>
	        	        
	        <section className="my-item my-item-box">
	            <ul className="item-hd">
	            	{
	            		this.state.nav.map(function(item,idx){
			    		return <li key={idx} >
			            <Link className="justify" to={`${item.herfurl}`} title={item.title} data-fql-stat={item.star} >
			                    <i className="i-account-favor" style={{backgroundImage:`url(${item.icon})`}}></i>
			                    <strong>{item.title}</strong>
			                    <span className="note">{(()=>{
			                    	if(item.content !== ""){
			                    		return item.content;
			                    	}else{
			                    		return;
			                    	}
			                    })()}</span>
			                </Link>
			            </li>
			            })
	            	}
	            </ul>
	        </section>
	    </div>
        )
    }
    // js
}

export default XmineTab;
