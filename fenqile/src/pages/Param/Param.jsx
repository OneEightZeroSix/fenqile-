import React, {
	Component
} from "react";


import Xparam from './Xparam/Xparam.jsx';
import Xheader from './Xheader/Xheader.jsx';

class Param extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<div>
            	<Xheader status="param"/>
            	<Xparam />

            </div>
		)
	}
}

export default Param;