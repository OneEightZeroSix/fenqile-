import React, {
	Component
} from "react";
import { Provider, connect } from 'react-redux';

import {
	Menu,
	ActivityIndicator,
	NavBar
} from 'antd-mobile';


class XexchangeCurrency extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			initData: '',
			show: false,
			currentValue:'1',
			currentCurrency:'人民币',
			currentAbbreviate:'CNY',
			currentCurrencyImgPos:'0px 0px',
			currencySum:100,
			rate:'',
			updateTime:'',
			requestStatus:'1'
		};
	}
	onChange = (value) => {
		let label = '';
			
		this.state.initData.forEach((dataItem) => {
			if (dataItem.value === value[0]) {
				console.log(value[0]);
				label = dataItem.label;
				this.props.sum(this.state.currencySum,this.state.rate)
				this.setState({
					currentValue:dataItem.value,
					currentCurrency:dataItem.label,
					currentAbbreviate:dataItem.abbreviate,
					currentCurrencyImgPos:dataItem.currency_img_pos,
				});
				if (dataItem.children && value[1]) {
					dataItem.children.forEach((cItem) => {
						if (cItem.value === value[1]) {
							label += ` ${cItem.label}`;
						}
					});
				}
			}
		});
		console.log(label);
	}
	handleClick = (e) => {
		e.preventDefault(); // Fix event propagation on Android
		this.setState({
			show: !this.state.show,
		});
		// mock for async data loading
		if (!this.state.initData) {
			console.log(this.props.status)
			React.axios.get("currency.json")
	        .then((response) => {
	        	console.log(response.data);
	        	this.exchangeCurrency();
	            setTimeout(() => {
					this.setState({
						initData: response.data,
					});
					if(this.state.initData){
						this.currencyList()
					}
				}, 500);
	        })
	        .catch(function (error) {
	            console.log(error);
	        });
		}
		this.exchangeCurrency()
		// var activeMenu = document.getElementsByClassName('single-menu-active');
		// console.log(activeMenu.length);
		// console.log(activeMenu[0].parentElement.id);

		
		// 	if(activeMenu[0].parentElement.id=="holdingCurrency"){
		// 		console.log(activeMenu[0].className);
		// 		activeMenu[0].classList.remove("single-menu-active");
		// 	} 
		
		
		
	}
	exchangeCurrency(){
		var exchangeAbbreviate = this.state.currentAbbreviate
		var holdingAbbreviate = this.props.holdingAbbreviate
		React.axios.get("http://localhost:12345/rate/exchange/?scur="+holdingAbbreviate+"&tcur="+exchangeAbbreviate)
	        .then((response) => {
	        	console.log(response);
	            if(response.data.success==='1'){
					this.setState({
						rate : response.data.result.rate,
						updateTime : response.data.result.update
					});
	            }
				this.setState({
					requestStatus : response.data.success
				});
	           
	        })
	        .catch(function (error) {
	            console.log(error);
	        });
	}
	onMaskClick = () => {
		this.setState({
			show: false
		});
	}
	currencyList(){
		if(this.props.status==='exchangeCurrency'){
			var exchangeCurrency = document.getElementById('exchangeCurrency');
			var exchangeCurrencyChild= exchangeCurrency.firstElementChild;
			if(exchangeCurrencyChild.className==='single-menu-active'){
				var line = exchangeCurrency.getElementsByClassName('am-list-line');
				var content = exchangeCurrency.getElementsByClassName('am-list-content')
				
				for(var i=0;i<line.length;i++){
					var flagBox=document.createElement('span');
					var abbreviateBox=document.createElement('span');
					var flagPosition="url(./flag.fw.png) no-repeat "+this.state.initData[i].currency_img_pos;
				    flagBox.style.background = flagPosition;
				    abbreviateBox.innerHTML = this.state.initData[i].abbreviate;
					line[i].insertBefore(flagBox,content[i]);
					content[i].appendChild(abbreviateBox);
				}
			}
		}
		
	}
	inputCurrency(e){
		this.setState({
			currencySum:e.target.value
		});
		this.props.sum(e.target.value,this.state.rate,this.state.updateTime,this.state.requestStatus)
	}

	render() {
		const {
			initData,
			show
		} = this.state;
		const menuEl = (
			<Menu className="single-foo-menu" data={initData} value={[this.state.currentValue]} level={1} onChange={this.onChange} height={document.documentElement.clientHeight * 0.6} />
		);
		const loadingEl = (
			<div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center'}}>
        		<ActivityIndicator size="large" />
      		</div>
		);
		return (
			<div id="exchangeCurrency" className="currency" style={{backgroundColor: '#fff'}}>
			<div className={show ? 'single-menu-active' : ''} style={{position:'relative',borderBottom: '1px solid #E5E8ED',margin: '0 15px'}}>
	        	<div>
		          	<NavBar
		            	leftContent=""
		            	mode="light"
		            	onLeftClick={this.handleClick}
		            	className="single-top-nav-bar"
		          	>
		          	<div style={{position:'absolute',left:0,fontSize: '16px'}}>
		          		<img style={{width:'30px',height:'20px',marginRight:'5px',background:`url(./flag.fw.png) no-repeat ${this.state.currentCurrencyImgPos}`,borderRadius:'5px'}} />
		          		<span style={{color:'#108ee9'}}>{this.state.currentCurrency}</span> <span style={{color:'#a1a5b1',fontSize: '14px'}}>{this.state.currentAbbreviate}</span> <span style={{fontSize: '14px',display: 'inline-block',content: ' ',width: '8px',height: '8px',borderStyle: 'solid',transform: 'rotate(-135deg)',borderColor: '#a1a5b1',borderWidth: '0 0 1px 1px'}}></span>
		            </div>	
		            	<input style={{color: '#394050',fontSize: '16px',appearance: 'none',width: '100%',width: '60%',marginLeft:'30%',padding: '2px 0',border: '0',backgroundColor: 'transparent',lineHeight: 1,boxsizing: 'border-box',direction: 'rtl'}} 
		            	type="text" placeholder={this.props.currencySum} onChange={this.inputCurrency.bind(this)} value={this.props.currencySum} />
		          	</NavBar>
	        	</div>
        		{show ? initData ? menuEl : loadingEl : null}
        		{show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      		</div>
      		</div>
		);
	}
	componentDidUpdate (prevProps,prevState) {
		if(prevState.show===false){
			this.currencyList()
		}
		if(prevState.currentAbbreviate!=this.state.currentAbbreviate){
			this.exchangeCurrency();
		}
		if(prevState.rate!=this.state.rate){
			this.props.sum(prevState.currencySum,this.state.rate,this.state.updateTime,this.state.requestStatus)
   		}

   	}
   	componentWillUpdate (nextProps,nextState) {
   		this.props.postAbbreviate(nextState.currentAbbreviate)
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		postAbbreviate(exchangeAbbreviate){
			dispatch({
				type:"postAbbreviate2",
				exchangeAbbreviate:exchangeAbbreviate
			})
		}
	}
})(XexchangeCurrency);