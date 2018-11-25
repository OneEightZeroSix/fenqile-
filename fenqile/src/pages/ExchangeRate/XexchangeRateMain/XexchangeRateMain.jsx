import React, {
	Component
} from "react";
import XexchangeCurrency from './XexchangeCurrency';
import XholdingCurrency from './XholdingCurrency';
import { Provider, connect } from 'react-redux';
import { Alert } from 'antd';


function toExchangeCurrency(holdingSum,rate) {
	return holdingSum*rate
}

function toHoldingCurrency(exchangeSum,rate) {
	return exchangeSum/rate
}	
function tryConvert(currencySum,rate, convert) {
  	const input = parseFloat(currencySum);
		if (Number.isNaN(input)) {
    	return '';
  	}
  	const output = convert(input,rate);
  	const rounded = Math.round(output * 1000) / 1000;
 	return rounded;
}

class XexchangeRateMain extends Component {
	constructor(props){
		super(props);
		this.state = {
			currencySum: '', 
			rate:'',
			updateTime : '',
			requestStatus : '',
			status: 'holdingCurrency'
		}
	}
	handleHoldingChange(currencySum,rate,updateTime,requestStatus) {
		this.setState({
			status: 'holdingCurrency', 
			currencySum,
			rate,
			updateTime,
			requestStatus
		});
	}

	handleExchangeChange(currencySum,rate,updateTime,requestStatus) {
		this.setState({
			status: 'exchangeCurrency', 
			currencySum,
			rate,
			updateTime,
			requestStatus
		});
	}
	checkRequestStatus(){
		var successTip = document.getElementsByClassName('ant-alert-success')[0];
		var warningTip = document.getElementsByClassName('ant-alert-warning')[0];
		if(this.state.requestStatus==='0'){
			successTip.style.display = 'none';
			warningTip.style.display = 'block';
		}else if(this.state.requestStatus==='1'){
			successTip.style.display = 'block';
			warningTip.style.display = 'none';
		}
	}
	render() {
	 	const status = this.state.status;
		const currencySum = this.state.currencySum;
		const rate = this.state.rate;
		const updateTime = this.state.updateTime;
		const requestStatus = this.state.requestStatus;
    	const exchangeSum = status === 'holdingCurrency' ? tryConvert(currencySum,rate, toExchangeCurrency) : currencySum;
    	const holdingSum = status === 'exchangeCurrency' ? tryConvert(currencySum,rate, toHoldingCurrency) : currencySum;
		return (
			<div id="exchangeMain">
				<Alert message={'上次更新：'+updateTime} type="success" showIcon style={{marginTop:'2px'}} />
				<Alert message="本时段查询次数已用完，请稍后再试" type="warning" showIcon style={{marginTop:'2px'}} />
				<XholdingCurrency sum={this.handleHoldingChange.bind(this)} currencySum={holdingSum} status="holdingCurrency"  />
				<XexchangeCurrency sum={this.handleExchangeChange.bind(this)} currencySum={exchangeSum} status="exchangeCurrency" />
			</div>
		)
	}
	componentDidUpdate (prevProps,prevState) {
		console.log(prevState)
		this.checkRequestStatus()
		
   	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		
	}
}) (XexchangeRateMain);