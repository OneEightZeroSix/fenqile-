import React, {
	Component
}
from "react";


import { Link } from "react-router-dom";
import { Tabs, WhiteSpace} from 'antd-mobile';


class Xparam extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [{
				title: "规格参数",
				sub: 0
			}, {
				title: "包装售后",
				sub: 1
			}, {
				title: "资质保障",
				sub: 2
			}],

		}
	}
	render() {
		return(
			<div>
			    <Tabs tabs={this.state.tabs} initialPage={0} onChange={(tab, index) => { console.log('onChange', index, tab); }} onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
				    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
				        暂无数据
				    </div>
				   	<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
				        暂无数据
				    </div>
				    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
				        < div id = "packing_list_aftersale" data-index = "2" style = {{width: '375px', left: '-750px', transitionDuration: '400ms', transform: 'translate(0px, 0px) translateZ(0px)'}} >
						    <Link data-fql-stat = "AD_PUT_ADP201706280059001_AD201706280067013" to = "#" className = "js-detail-bottom-ad js-lazyload-wrap img-margin" > 
						    	< img className = "imgauto" src = "https://cimg1.fenqile.com/ibanner/M00/01/5C/wycJAFlThoyAX3hNAAG5meGDE-A925.jpg" data-original = "https://cimg1.fenqile.com/ibanner/M00/01/5C/wycJAFlThoyAX3hNAAG5meGDE-A925.jpg" alt = "" style = {{display: 'block', opacity: '1', background: 'url(&quot;&quot;)'}} /> 
						    </Link>
						< /div>
				    </div>
			    </Tabs>
			    <WhiteSpace />
			 </div>
		)
	}
	componentDidMount() {

	}
}
export default Xparam;