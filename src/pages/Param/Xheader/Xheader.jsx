import React, {
	Component
} from "react";
import { Link } from "react-router-dom";
import "./Xheader.css";



class Xheader extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}
	
	render() {
		return(
			<div id="global_header_top" className="headerpt">
			    <div className="header-wrap headerpt-fix" id="header_wrap">
			        <div id="global_header" className="header header-not-fix ">
			            <Link to="/detail" className="g-back " id="global_header_url" ></Link>
			            <h1 id="global_header_title">{
			            	(()=>{
			            		if(this.props.status==="detail"){
			            			return "商品详情";
			            		}else if(this.props.status==="param"){
			            			return "苹果（Apple）iPhone XS Max双卡双待全网通国行正品";
			            		}else if(this.props.status==="comment"){
			            			return "商品评价";
			            		}
			            	})()
			            }</h1>
			            <Link to="//item.m.fenqile.com/cart/index.html?show_title_return=1" className="g-right g-cart-r hide" id="g_right_cart">
			                <i className="i-cart">
			                    <em id="g_cart_count" className="hide">0</em>
			                </i>
			            </Link>
                        <div className="g-right-w">
    						<span className="g-right" id="g_right_ico">{
    							(()=>{
				            		if(this.props.status==="detail"){
				            			return <i className='item-icons i-home'></i>;
				            		}else if(this.props.status==="param"||"comment"){
				            			return;
				            		}
				            	})()
    						}</span>
		                </div> 
		            </div>
		        </div>
			</div>
		)
	}
	componentDidMount() {

   	}
	
	
	
}

export default Xheader;