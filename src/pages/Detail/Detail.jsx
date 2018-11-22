import React, {
	Component
} from "react";
import XdetailHeader from './XdetailHeader/XdetailHeader';
import XdetailMain from './XdetailMain/XdetailMain';
import Xornament from './XdetailMore/Xornament.jsx';
import Xcomment from './XdetailMore/Xcomment.jsx';
import Xrecommend from './XdetailMore/Xrecommend.jsx';
import Xdetail from './XdetailMore/Xdetail.jsx';
import Xcover from './Xcover/Xcover.jsx';
import Xfooter from './Xfooter/Xfooter.jsx';

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
				<Xornament />
           		<Xcomment/>
           		<Xrecommend />
                <Xdetail />
                <Xcover />
                <Xfooter />
			</div>
		)
	}
}

export default Detail;