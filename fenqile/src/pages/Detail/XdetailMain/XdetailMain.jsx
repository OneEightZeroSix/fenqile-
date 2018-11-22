import React, {
	Component
} from "react";
import XdetailMainPic from './XdetailMainPic';
import XdetailMainFenqi from './XdetailMainFenqi';
import XdetailMainSpecification from './XdetailMainSpecification';
import XdetailMainSales from './XdetailMainSales';
import XdetailMainAdress from './XdetailMainAdress';
import "../../../assets/fragment.css"

class XdetailMain extends Component {
	constructor(props){
		super(props);
		this.state = {
			tabs:[
			  	{ 
			  		title: <img src="https://cimg1.fenqile.com/product3/M00/23/8B/R7QHAFuZjKaAR1r7AAD6SRDtLYA535.jpg" alt="" className="imgauto" />,
			  		price:9918,
			  		imgSrc:"https://cimg1.fenqile.com/product3/M00/23/8C/R7QHAFuZjOWAUA0gAAD6SRDtLYA789.jpg"
	  		 	},
			  	{ 
			  		title: <img src="https://cimg1.fenqile.com/product3/M00/35/13/RrQHAFuZjKuAPXN2AAD5rlh2Nms887.jpg" alt="" className="imgauto" />,
			  		price:9919,
			  		imgSrc:"https://cimg1.fenqile.com/product3/M00/35/14/RrQHAFuZjOmAXefiAAD5rlh2Nms545.jpg"
	  		 	},
			  	{ 
			  		title: <img src="https://cimg1.fenqile.com/product3/M00/23/8B/R7QHAFuZjK6AFFkeAAETEvXkxVU884.jpg" alt="" className="imgauto" />,
			  		price:9917,
			  		imgSrc:"https://cimg1.fenqile.com/product3/M00/35/14/RrQHAFuZjOyAKpJ9AAETEvXkxVU996.jpg"
	  		 	}
			]
		}
	}
	render(){
		return (
            <article id="content_container">
            	<XdetailMainPic />
            	<XdetailMainFenqi />
            	<XdetailMainSpecification  />
            	<XdetailMainSales />
            	<XdetailMainAdress />
            </article>
		)
	}
}

export default XdetailMain;