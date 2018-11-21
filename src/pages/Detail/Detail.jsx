import React, {
	Component
} from "react";
import XdetailHeader from './XdetailHeader/XdetailHeader';
import XdetailMain from './XdetailMain/XdetailMain';
import "../../assets/global.css"
import "../../assets/fee.css"
import '../../../node_modules/antd-mobile/dist/antd-mobile.css';
import "./Detail.css"
class Detail extends Component {
	render() {
		return (
			<div>
				<XdetailHeader />
				<XdetailMain />

			</div>
		)
	}
}

export default Detail;