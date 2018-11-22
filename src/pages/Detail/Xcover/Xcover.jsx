import React, {
	Component
} from "react";

import { connect } from 'react-redux';
import { Tabs, WhiteSpace} from 'antd-mobile';



class Xcover extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			goodsPic:[],
			nowcomment:"",
			nowidx:1,
		}
	}
	loadMore() {
		React.axios.get("getProductModelInfo.json").then((response) => {
			var allitem = response.data.data;
			this.setState({
				goodsPic: allitem.result_rows[1].obj_list_custom[0].image_list,
				nowcomment:allitem.result_rows[1].obj_list_custom[0].comment
			})
		}).catch(function(error) {
			console.log(error);
		})
	}
	
	render() {     	
		return(
            <div id="big_pic_popup" className="big-popup" id="androidActionsheet" style={{
                opacity: 1,
                display: this.props.isShowActionSheet ? 'block' : 'none'}}>
		            <div className="header comment-header js-comment-popup-img-mask" style={{position:'fixed',top:'0',left:'0',zIndex:'1200'}}>
				        <a onClick={this.props.toggleSheet.bind(this)} className="g-back" id="go_back"></a>
				        <h1><span className="js-img-index">{this.state.nowidx}</span>/{this.state.goodsPic.length}</h1>
				    </div>
	
				    <div className="pop-slide-box" id="comment_img_list" style={{visibility: 'visible'}}>
				    <Tabs tabs={this.state.goodsPic} initialPage={0} tabBarPosition="false" style={{width: '1875px'}}   onChange={(tabs, index) => { console.log('onChange', index, tabs);
					    this.setState({
					    	nowidx:index+1
					    })
				    }}>
					        {
					        	this.state.goodsPic.map(function(item,idx){
					    			return <span data-index="0" key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
						                	<img src={`${item.split("?")[0]}`} alt=""/>
						            		</span>
					          	})
					        }
				    </Tabs>
				        <div className="content-move assessment js-comment-content">
				            <div className="ass-star"><span style={{width: '100%'}}></span></div>
				            <div className="comment">
				                {this.state.nowcomment}
				            </div>
				        </div>
				    </div>
    			<WhiteSpace />
		    </div>

		)
	}
	componentDidMount() {	
		this.loadMore();
   	}
	
	
	
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        toggleSheet(){
            dispatch({
                type:"toggleSheet",
                isShowActionSheet:false
            })
        }
    }
})(Xcover);
