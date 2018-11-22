import React, {
	Component
}
from "react";

import { Link } from "react-router-dom";
import "./Xallcomment.css";
import Swiper from 'swiper/dist/js/swiper.js'
import axios from 'axios';
import { connect } from 'react-redux';
import { Spin, Icon } from 'antd-mobile';
import { RefreshControl, ListView } from 'antd-mobile';


class Xcomment  extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		console.log(this.props.toggleSheet)
		this.state = {
			allcount:[],
			allcomment:[], 
			finished: false,   //是否全部加载完毕
            isFoot: true,   //阻止用户频繁上拉调接口
            page : 1,      //分页页码                           
	        val : '',         //搜索框的值
	        page_size : 10,  //每页显示个数 
	        startx:0,           //触摸起始点x轴坐标
	        starty:0,          //触摸起始点y轴坐标 
	        product_id:"P201801130392335",
	        content:"上拉加载更多",
	        nav:0
		}
	}
	 //接触屏幕
    touchStart(e) {
        this.startx = e.touches[0].pageX;
        this.starty = e.touches[0].pageY;
    }
    //离开屏幕
    touchEnd(e) {
        let endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        let direction = this.getDirection(this.startx, this.starty, endx, endy);
        switch (direction) {
            case 0:
                console.log("未滑动！");
                break;
            case 1:
                console.log("向上！");
                var newpage = this.state.page;
                newpage++;
                this.setState({
					page:newpage,
					content:"加载中"
				})
                this.loadMore();
                break;
            case 2:
                console.log("向下！");
                break;
            case 3:
                console.log("向左！");
                break;
            case 4:
                console.log("向右！");
                break;
            default:
        }
    }
    //触摸点和离开点连线与[x轴角度][3]
    getAngle(angx,angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    }
    
    getDirection(startx, starty, endx, endy) {
        let angx = endx - startx;
        let angy = endy - starty;
        let result = 0;
         //如果滑动距离太短
         if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
        let angle = this.getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
        return result;
    }
	loadMore() {
		React.axios.get("getProductCommentList.json",{
			params:{
				limit:this.state.page_size,
				offset:0,
				page:this.state.page,
				product_id:this.state.product_id
			}
		}).then((response) => {
			if(this.state.page>1){
				var sallitem = this.state.allcomment;
				for(var i=0;i<this.state.page;i++){
					for(var i=0;i<10*this.state.page;i++){
						sallitem.push(this.state.allcomment[i]);
					}
				}
				console.log(sallitem)
				this.setState({
					allcomment:sallitem,
					content:"上拉加载更多"
				})
			}else{
				var allitem = response.data.data;
				console.log(allitem.result_rows);
				this.setState({
					allcount:allitem,
					allcomment:allitem.result_rows
				})
				localStorage.setItem('comment',this.state.allcomment);
				console.log(localStorage.getItem("comment"));
			}
		}).catch(function(error) {
			console.log(error);
		})
	}
	changenav(num){
		this.setState({
			nav:num
		})
		if(num === 1){
			React.axios.get("getProductCommentList.json",{
				params:{
					limit:this.state.page_size,
					offset:0,
					page:this.state.page,
					product_id:this.state.product_id
				}
			}).then((response) => {
				var allcomment = response.data.data.result_rows;
				console.log(allcomment)
				var newarr = [];
				for(var i=0;i<allcomment.length;i++){
					var hasimg = allcomment[i].image_list;
					console.log(hasimg);
						if(hasimg.length!==0){
							console.log(allcomment[i],6666)
							newarr.push(allcomment[i]) 
						}
				}
				this.setState({
					allcomment:newarr
				})
			}).catch(function(error){
				console.log(error);
			})
		}else{
			var a3 = localStorage.getItem('comment');//获取a的值
			console.log(a3);
			this.setState({
				allcomment:a3
			})
		}
	}

	render() {
		return(
			<section className="assessment" id="page_content" onTouchStart={this.touchStart.bind(this)} onTouchEnd={this.touchEnd.bind(this)}>
	            <div className="ass-hd">
	                <ul className="clear">
	                    <li>
	                        <a className={this.state.nav===0?"on js-comment-filter":"js-comment-filter"} onClick={()=>{{
	                        	this.changenav(0)
	                        }}} data-only-image="0">全部({this.state.allcount.comment_num})</a>
	                    </li>
                        <li>
                            <a className={this.state.nav===1?"on js-comment-filter":"js-comment-filter"} onClick={()=>{
                            	this.changenav(1)
                            }} data-only-image="1">有图({this.state.allcount.comment_num_img})</a>
                        </li>
	                </ul>
	            </div>
	            <div className="assess-list" id="comment_list_wrap">
			        <ul id="comment_list">
			        {
		        		this.state.allcomment.map(function(citem,cidx){
			        		return (
			        			<li key={cidx}>
							        <div className="ass-user">
							            <div className="pic"></div>
							            <div className="name">
							                <div className="db">
							                    <p>{citem.first_name}</p>
							                </div>
							                <p className="date">{citem.create_time}</p>
							            </div>
							            <div className="ass-star">
							                <span style={{width: '100%'}}></span>
							            </div>
							        </div>
							        <div className="ass-detail ass-detail-unfold">{citem.comment}</div>
							            <div className="ass-img swiper-container-horizontal swiper-container-free-mode swiper-container">
							                <ul className="swiper-wrapper">
							                {
							                	citem.image_list.map(function(zitem,zidx){
							                		return <li key={zidx} className="swiper-slide swiper-slide-active" style={{width: '76px', marginRight: '8px'}}>
							                            <span className="js-comment-img" data-img-index="0" data-comment-index="citem.index" style={{backgroundImage:`url(${zitem})`}}></span>
							                        </li>
							                	})
							                }
							                </ul>
							            </div>
							        <div className="ass-style">{citem.sku_attrs}</div>
						    	</li>
						    )
			        	})
			        }
					</ul>
					<div style={{textAlign:'center',lineHeight:'20px'}} refs='more'>{this.state.content}</div>
			    </div>
			</section>
		)
	}
	componentDidMount() {
		var mySwiper = new Swiper('.swiper-container', {
			slidesPerView: 3,
			spaceBetween: 20
		})
		this.loadMore()
	}
}
//export default Xcomment;

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        toggleSheet(){
            dispatch({
                type:"toggleSheet",
                isShowActionSheet:true
            })
        }
    }
})(Xcomment);