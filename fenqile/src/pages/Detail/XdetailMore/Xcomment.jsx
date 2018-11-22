import React, {
	Component
}
from "react";

import { Link } from "react-router-dom";
import "./Xdetail.css";
import Swiper from 'swiper/dist/js/swiper.js'
import axios from 'axios';
import { connect } from 'react-redux';


class Xcomment  extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		console.log(this.props.toggleSheet)
		this.state = {
			userComment: [],
			userImpormation: [],
			commentPic: [],
			otherInformation: [],
		}
	}
	loadMore() {
		React.axios.get("getProductModelInfo.json").then((response) => {
			var allitem = response.data.data;
			this.setState({
				otherInformation: allitem.result_rows[3],
				userComment: allitem.result_rows[1],
				userImpormation: allitem.result_rows[1].obj_list_custom[0],
				commentPic: allitem.result_rows[1].obj_list_custom[0].image_list
			})
		}).catch(function(error) {
			console.log(error);
		})
	}

	render() {
		var newthis = this;
		return(
			<section className="assessment">
	                <div className="floor-head ">
	                    <h2 className="floor-title">{this.state.userComment.title}</h2>
	                    <Link className="floor-link js-data-report"  to={`${this.state.userComment.url}`}>{this.state.userComment.url_name}</Link>
	                </div>
	                <div className="assess-list">
	                    <ul>  
	                        <li>
	                            <div className="user">
	                                <div className="user-pic">
	                                    <img className="imgauto" src={this.state.userImpormation.icon} alt=""/>
	                                </div>
	                                <span className="name">{this.state.userImpormation.first_name}</span>
	                                <div className="ass-star">
	                                    <span style={{
	                                        width:"100%"
	                                    }}></span>
	                                </div>
	                            </div>
	                            <div className="ass-detail">{this.state.userImpormation.comment}</div>
	                            <div className="ass-images js-comment-images swiper-container-horizontal swiper-container-free-mode swiper-container">
	                                <ul className="img-wrap swiper-wrapper"> 
		                                {
		                                	this.state.commentPic.map(function(item,idx){
		                                		return <li className="img-piece swiper-slide js-comment-img-item swiper-slide-active" data-comment-index={idx} data-img-index={idx} key={idx} onClick={newthis.props.toggleSheet.bind(this)}>
		                                        	<img className="imgauto" src={item.split("?")[0]} alt=""/>
		                                    	</li>
		                                	})
		                                }
	                                </ul>
	                            </div>
	                        </li>
	                    </ul>
	                </div>          
		            <div className="comment-hd comment-btm">
		                <p className="t1">{this.state.otherInformation.title}</p>
		                <Link className="t2 js-data-report" data-hottag="LINK_advice_" to={`${this.state.otherInformation.url}`}>{this.state.otherInformation.url_name}</Link>
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