import React, {
	Component
} from "react";

import { Link } from "react-router-dom";
import axios from 'axios';
import { Radio } from 'antd';


import "./Xhouse.scss"


class XhouseHeader extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
		    show: false,
		    entered: false,
		 };
	}

	render() {
		return(
			<div className="allmain">
				<div>
			      <Radio.Group defaultValue="a" buttonStyle="solid">
			        <Radio.Button value="a">等额本息</Radio.Button>
			        <Radio.Button value="b">等额本金</Radio.Button>
			      </Radio.Group>
			    </div>
			    <div className="monthpay">
			    	<p>每月月供参考(元)</p>
			    	<p>0.00</p>
			    </div>
				<div className="newmonthpay">
			    	<div className="money">
				    	<p>支付利息(元)</p>
				    	<p>0.00</p>
			    	</div>
			    	<div className="money">
				    	<p>还款总额</p>
				    	<p>0.00</p>
			    	</div>
			    </div>
			
			</div>
    	)
  	}
}


export default XhouseHeader;
	