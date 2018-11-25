import React, {
	Component
} from "react";

import { Link } from "react-router-dom";


class XhouseHeader extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		 };
	}

	render() {
		return(
			<div>
				<div id="global_header_top" className="headerpt">
			    <div className="header-wrap headerpt-fix" id="header_wrap">
			        <div id="global_header" className="header header-not-fix ">
			            <Link to="/detail" className="g-back " id="global_header_url" ></Link>
			            <span style={{fontSize:'16px',color:'#3b9bff',lineHeight: '40px',position: 'absolute',left: '30px'}}>返回</span>
			            <h1 id="global_header_title">房贷计算</h1>
                        <div className="g-right-w">
    						<span className="g-right" id="g_right_ico">利润表</span>
		                </div> 
		            </div>
		        </div>
		        </div>
			</div>
    	)
  	}
}


export default XhouseHeader;
	