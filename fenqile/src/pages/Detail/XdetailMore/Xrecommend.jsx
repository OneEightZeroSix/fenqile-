import React, {
	Component
}
from "react";

import { Tabs, WhiteSpace} from 'antd-mobile';
import { Link } from "react-router-dom";


import "./Xdetail.css";

class Xrecommend  extends Component {
	constructor(props) {
		super(props);
		this.state = {
			suggestGood: [],
			classify:[{
				title:"为你推荐",
				idx:0
			},{
				title:"为你推荐",
				idx:1
			}]
		}
	}

	recommendGood() {
		React.axios.get("getRecommendInfo.json").then((response) => {
			this.setState({
				suggestGood: response.data.data.result_rows
			})
		}).catch(function(error) {
			console.log(error);
		})
	}

	render() {
		return(
			<div>
			    <Tabs tabs={this.state.classify} initialPage={0} onChange={(tab, index) => { console.log('onChange', index, tab); }} onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
			      <div data-index="0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' ,width: '100%'}}>

                        <ul className = "lists-pro-three" > 
                            {
                                this.state.suggestGood.map((item,idx)=>{
                                    return < li key={idx}>
                                        <Link to={`/detail`} className = "js-data-report item" data-hottag = "LINK_RECOMMEND_SKU_0_" > 
                                            <div className = "item-img" > 
                                                <img className = "imgauto" src ={item.sku_pic[0]} alt = "" /> 
                                            </div> 
                                            <p className = "item-title" >{item.product_name}</p> 
                                            <div className = "item-info" > 
                                                <div className = "off-tag-wp" >
                                                    {
                                                        item.op_flags.sku_label_list.map(function(litem,lidx){
                                                            return <span className = "off-tag" key={lidx}>{litem.text_single}</span>
                                                        })
                                                    }
                                                </div> 
                                                <div className = "item-price-wrap" > 
                                                    <span className = "item-price" > ¥{item.show_amount}</span> 
                                                </div> 
                                                <div className = "item-pay" > 
                                                    <span className = "item-pay-num" ><i> ¥ </i>{item.mon_pay}</span > 
                                                    <span className = "item-month" > {item.fq_num_str} </span> 
                                                </div> 
                                            </div>
                                        </Link> 
                                    </li>
                                })
                           	}
                        </ul> 
                   
			      </div>
			      <div data-index="1"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' ,width: '100%'}}>
                        <ul className = "lists-pro-three" > 
                            {
                                this.state.suggestGood.map((item,idx)=>{
                                    return <li key={idx}>
                                        <Link to={`/detail`} className = "js-data-report item" data-hottag = "LINK_RECOMMEND_SKU_0_" > 
                                            <div className = "item-img" > 
                                                <img className = "imgauto" src ={item.sku_pic[0]} alt = "" /> 
                                            </div> 
                                            <p className = "item-title" >{item.product_name}</p> 
                                            <div className = "item-info" > 
                                                <div className = "off-tag-wp" >
                                                    {
                                                        item.op_flags.sku_label_list.map(function(litem,lidx){
                                                            return <span className = "off-tag" key={lidx}>{litem.text_single}</span>
                                                        })
                                                    }
                                                </div> 
                                                <div className = "item-price-wrap" > 
                                                    <span className = "item-price" > ¥{item.show_amount}</span> 
                                                </div> 
                                                <div className = "item-pay" > 
                                                    <span className = "item-pay-num" ><i> ¥ </i>{item.mon_pay}</span> 
                                                    <span className = "item-month" > {item.fq_num_str} </span> 
                                                </div> 
                                            </div>
                                        </Link> 
                                    </li>
                                })
                           	}
                        </ul> 
			      </div>
			    </Tabs>
			    <WhiteSpace/>
			 </div>
		)
	}
	componentDidMount() {
		this.recommendGood()
	}
}
export default Xrecommend;