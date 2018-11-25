import React, {
	Component
} from "react";
import {createHashHistory} from 'history';


const history = createHashHistory();

class XexchangeRateHeader extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:"汇率换算"
		}
	}
	render(){
		return (
			<div id="global_header_top" className="headerpt">
			    <div className="header-wrap headerpt-fix" id="header_wrap">
			        <div id="global_header" className="header header-not-fix ">
			            <a onClick={history.goBack} className="g-back " id="global_header_url"></a>
			            <h1 id="global_header_title">{this.state.title}</h1>
					</div>
			    </div>
			</div>
		)
	}
}

export default XexchangeRateHeader;