import React, {
	Component
} from "react";

import { Link } from "react-router-dom";

import XhouseHeader from"./Xhouse/XhouseHeader.jsx"
import XhouseMain from"./Xhouse/XhouseMain.jsx"
import XhouseFoot from"./Xhouse/XhouseFoot.jsx"


class House extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
		    show: false,
		    entered: false,
		 };
	}

	render() {
		const { show } = this.state;
		return(
			<div className="newhouse" style={{height:'100vh',background:'#fff',width:'100vw'}}>
				<XhouseHeader />
				<XhouseMain />
				<XhouseFoot />
			</div>
    	)
  	}
}


export default House;
	