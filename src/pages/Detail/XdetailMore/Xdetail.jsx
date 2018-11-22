import React, {
	Component
} from "react";

import { Link } from "react-router-dom";
import "./Xdetail.css";
import axios from 'axios';


class Xdetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goodsDetail:""
		}
	}
	
	getgoodDeatil(){
		React.axios.get("product_introduction.json").then((response) => {
            this.setState({
				goodsDetail:response.data.html
            }) 
            return response.data.html
    	}).catch(function (error) {
	        console.log(error);
	    })
	}
	
	render() {
		return(
			<div id="content_container" >
				                
				{/*规格参数&&包装售后&&资质保障*/}
				<ul className="pro-info">
		            <li>
		                <Link to="param" className="wrap-hot-sale js-data-report" data-hottag="LINK_SKU_PARAMETER_5_" id="sku_parameter_wrap">
		                    <div className="fx1 db">
		                        <div className="form-text fx1">
		                            <p className="txt-hide f14">规格参数/包装售后/资质保证</p>
		                        </div>
		                    </div>
		                </Link>
		            </li>
		        </ul>		
		        
		        
		        {/*商品详情*/}
				<div id="product_introduction_wrap">
                    {(()=>{
                    	return <div dangerouslySetInnerHTML={{ __html:this.state.goodsDetail}}></div>
                    })()}
    			</div>
    		</div>
		)
	}
	componentDidMount() {	
        this.getgoodDeatil()
   	}
	
	
	
}

export default Xdetail;