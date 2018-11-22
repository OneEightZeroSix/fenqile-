import React, {
	Component
} from "react";

import { Tabs, WhiteSpace } from 'antd-mobile';

class XdetailProp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex:0
		}
	}

    getInitialState: function(){
    	return {currentIndex: 0}
  	},

  	getTitleItemCssClasses: function(index){
    	return index === this.state.currentIndex ? "js-product-detail-tab on" : "js-product-detail-tab";
  	},

	render() {
		return(
			{(()=>{
			    let that = this;
			    let {baseWidth} = this.props;
			    let childrenLength = this.props.children.length;
			    return (
			      <div>
			        <nav className="tab-title-items">
			          {React.Children.map(this.props.children, (element, index) => {
			            return (<div onClick={() => {this.setState({currentIndex: index})}} className={that.getTitleItemCssClasses(index)}>{element.props.name}</div>)
			          })}
			        </nav>
			        <div className="tab-content-items">
			          {React.Children.map(this.props.children, (element, index) => {
			            return (<div>{element}</div>)
			          })}  
			        </div>
			      </div>
			    )
		  	})()
		)
	}

  	
	componentDidMount() {

   	}
	
	
	
}


//ReactDOM.render(<TabExample />, XdetailProp);
export default XdetailProp;