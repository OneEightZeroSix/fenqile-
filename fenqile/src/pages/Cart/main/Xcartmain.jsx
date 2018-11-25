import React, { Component } from "react";

import Xmainbottom from '../../home/index/indexpage/recommend.jsx'
import Xmaincenter from './Xmaincenter.jsx'
import Xmaintop from './Xmaintop.jsx'

class Cartmain extends Component {
	render() {
		return (
			<main className="weex-list weex-list-wrapper weex-ct scroller-content">
				<Xmaintop/>
				<Xmaincenter/>
				<Xmainbottom/>
			</main>
		)
	}
}

export default Cartmain;