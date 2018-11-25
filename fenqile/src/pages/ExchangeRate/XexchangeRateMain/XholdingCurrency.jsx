import React, {
	Component
} from "react";
import { Provider, connect } from 'react-redux';


import {
	Menu,
	ActivityIndicator,
	NavBar
} from 'antd-mobile';


class XholdingCurrency extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			initData: '',
			show: false,
			currentValue:'5',
			currentCurrency:'美元',
			currentAbbreviate:'USD',
			currentCurrencyImgPos:'0px -80px',
			currencySum:100,
			rate:'',
			requestStatus:'1'
		};
	}
	onChange = (value) => {
		let label = '';
		
		this.state.initData.forEach((dataItem) => {
			if (dataItem.value === value[0]) {
				label = dataItem.label;
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
		
	}
	exchangeCurrency(){
		
		var holdingAbbreviate = this.state.currentAbbreviate
		var exchangeAbbreviate = this.props.exchangeAbbreviate
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
		if(this.props.status==='holdingCurrency'){
			var holdingCurrency = document.getElementById('holdingCurrency');
			var holdingCurrencyChild= holdingCurrency.firstElementChild;
			if(holdingCurrencyChild.className==='single-menu-active'){
				var line = holdingCurrency.getElementsByClassName('am-list-line');
				var content = holdingCurrency.getElementsByClassName('am-list-content')
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
			<div id="holdingCurrency" className="currency" style={{backgroundColor: '#fff'}}>
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
		            	type="text" placeholder={this.state.currencySum} value={this.props.currencySum} onChange={this.inputCurrency.bind(this)} />
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
	componentDidMount () {
		this.exchangeCurrency();
	}
}



export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		postAbbreviate(holdingAbbreviate){
			dispatch({
				type:"postAbbreviate",
				holdingAbbreviate:holdingAbbreviate
			})
		}
	}
})(XholdingCurrency);
