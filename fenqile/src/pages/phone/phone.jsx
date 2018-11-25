import React, { Component } from "react";
import Xcarousel  from "../home/index/Xcarousel.jsx";
import Main  from "./phonemain.jsx";
import "./phone.scss"

class phone extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:"商品详情",
			list:[
				`https://cimgs1.fenqile.com/ibanner2/M00/33/3D/jagHAFvueeKAJts5AADf779YB1U775_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/48/jagHAFv4AmKAcnoiAADAAy1K3ws914_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/46/jagHAFv2kCmAD1WvAAGWrxok5J8503_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvr5HGAZhzxAAFDQPyGVkU513_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/3D/jagHAFvue_WACi-qAAEtkGtCCRU460_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/00/AD/j6gHAFvZcgGAcZ1jAAE3qyP0ZEg471_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/0D/jagHAFvT-MKAAs60AAG_7CDr1oM518_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/3D/jagHAFvueq-ABt6dAAFEHvqNAi4442_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/31/EF/jqgHAFuXv4WAUbgCAAEw3Igt_bU124_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/3D/jagHAFvueeKAJts5AADf779YB1U775_1500x800.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/48/jagHAFv4AmKAcnoiAADAAy1K3ws914_1500x800.jpg`
			
			]
		}
	}
	render(){
		return (
			<div className="abd" >
				<div id="global_header" className="header">
				    <a href="###" className="g-back" id="global_header_url"></a>
				    <h1 id="global_header_title">手机</h1>
				    <a  className="g-right g-cart-r hide" id="g_right_cart">
		                <i className="i-cart">
		                    <em id="g_cart_count" className="hide">0</em>
		                </i>
		            </a>
				</div>
				<div className="swiper-container topsad">
					<Xcarousel list={this.state.list}/>
				</div>
				<Main/>
			</div>
		)
	}
}

export default phone;