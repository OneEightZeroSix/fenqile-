import React, {
	Component
} from "react";

import { Link } from "react-router-dom";
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import Transition from 'react-transition-group/Transition';


import XhouseHeader from"./Xhouse/XhouseHeader"
import XhouseMain from"./Xhouse/XhouseMain"
import XhouseFoot from"./Xhouse/XhouseFoot"


class Xtest extends Component {
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
			<div className="newhouse">
				<XhouseHeader />
				<XhouseMain />
				<XhouseHeader />
			</div>
    	)
  	}
}


export default Xtest;
	