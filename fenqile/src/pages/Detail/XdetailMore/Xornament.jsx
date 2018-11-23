import React, {
	Component
}
from "react";

import { Link } from "react-router-dom";
import "./Xdetail.css";
import Swiper from 'swiper/dist/js/swiper.js'
import axios from 'axios';


class Xornament  extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			goodOrnament: [],
			goods:[]
		}
	}
	loadMore() {
		React.axios.get("getProductModelInfo.json").then((response) => {
			var allitem = response.data.data.result_rows[4];
			this.setState({
				goodOrnament: allitem,
				goods:allitem.obj_list

			})
		}).catch(function(error) {
			console.log(error);
		})
	}

	render() {
		return(
			<section className="fitting-info">
            <Link className="floor-head js-data-report" data-hottag="LINK_ALL_ACCESSORIES_" to="#" data-href={this.state.goodOrnament.url}>
                <h2 className="floor-title">{this.state.goodOrnament.title}</h2>
                <span className="floor-link">{this.state.goodOrnament.url_name}</span>
            </Link>
            <div className="tab-bd js-swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container" id="accessories_wrapper">
                <ul className="comm-list swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)'}}>
                    {
                    	this.state.goods.map(function(zitem,zidx){
                    		return(<li className="swiper-slide swiper-slide-active" key={zidx}>
		                        <Link to="#"  data-href={zitem.obj_url} className="js-data-report" data-hottag="LINK_ACCESSORIES_0">
		                            <div className="comm-img">
		                                <img src={zitem.obj_pic} alt="" className="imgauto" />
		                            </div>
		                            <p className="comm-name">{zitem.obj_name}</p>
		                        </Link>
		                    </li>
		                   )
                    	})
                    }
                    
                </ul>
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

export default Xornament;