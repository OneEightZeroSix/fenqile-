import React, {
	Component
} from "react";

import "./Xtree.scss"
import "./Xtree2.scss"



class Xtree extends Component {
	render() {
		return(
			<div id="main" className="ntr">
				<div className="fruiter-main-container">
					<div id="fruiter-main" className="mobile-container" width="828" height="1472" style={{touchAction: 'none',width: '100vw',height: '100vh'}}>
						<img class="sapling" src="https://pinduoduoimg.yangkeduo.com/cartoon_activity/fruiter/youngTree_v2.png?x-oss-process=image/format,webp/quality,Q_70"/>
					</div>
					
					<div className="rain-front-container hide">
						<div className="count-down">
							<div className="icon-box">
								<div className="water-mask">
									<div className="water-box" style={{height: '100%'}}>
										<div className="water"></div>
										<div className="water-face"></div>
									</div>
								</div>		
								<img className="icon" src='https://pinduoduoimg.yangkeduo.com/cartoon_activity/fruiter/gameWaterIconEmpty.png' />
							</div>
						</div>
					</div>
					
					<div className="gain-record-bubble-wrapper">
						<img className="bg" src="//pinduoduoimg.yangkeduo.com/cartoon_activity/fruiter/recordBubblePanel.png"/>
						<div className="dynamic-info">
							<div style={{position:'absolute',top:'0',left:'0'}}>
								<li className="content-wrapper">
									<div className="text">
										<span className="text-nickname">13168893909</span>
										<span>的果树</span>
									</div>
								</li>
							</div>
						</div>	
					</div>
					
					
					
					
				</div>
			</div>
		)
	}
}

export default Xtree;