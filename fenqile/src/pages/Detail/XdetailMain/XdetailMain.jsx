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
			
		}
	}
	render(){
		return (
            <article id="content_container">
            	<XdetailMainPic />
            	<XdetailMainFenqi />
            	<XdetailMainSpecification />
            	<XdetailMainSales />
            	<XdetailMainAdress />
            </article>
		)
	}
}

export default XdetailMain;