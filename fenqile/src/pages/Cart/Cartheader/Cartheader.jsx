import React, { Component } from "react";
import {createHashHistory} from 'history';
import {Provider, connect} from 'react-redux';

const history = createHashHistory();

class Cartheader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowCancel:false
		}
	}
	show(){
		let bol=this.state.isShowCancel
		this.setState({isShowCancel:!bol})
		this.props.qtyshow(!bol)
	}
	render() {
		return (
				<div className=" weex-ct weex-div">
				    <div className=" weex-ct weex-div app-web-header-place"></div>
				    <div className=" weex-ct weex-div app-web-header">
				        <div onClick={history.goBack} className="header-left weex-ct weex-div">
				            <div  className="header-left-btn weex-ct weex-div"><i  className="g-back"></i></div>
				        </div>
				        <p className="header-title weex-el weex-text">购物车</p>
				        <div className="header-right weex-ct weex-div">
				            <div className="header-right-btn weex-ct weex-div">
				                <p onClick={this.show.bind(this)} className="g-right weex-el weex-text">编辑</p>
				            </div>
				        </div>
				    </div>
				</div>
		)
	}
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
        qtyshow(bol){
			  dispatch({
                type:"qtyshow",
                qtyshow:bol
            })
		}
    }
})(Cartheader);