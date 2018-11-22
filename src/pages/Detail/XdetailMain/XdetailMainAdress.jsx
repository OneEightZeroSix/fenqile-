import React, {
	Component
} from "react";
import {Provider,connect} from 'react-redux';


class XdetailMainAdress extends Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			provinces:[],
			areas:[],
			cities:[],
			streets:[],
			addressTab:0,
			addressTabs:[
				{currentTab:"请选择"},
				{currentTab:"请选择"},
				{currentTab:"请选择"},
				{currentTab:"请选择"}
			],
			isShowAreas:false,
			isShowStreets:false,
			isShowCities:false,
			isShowProvinces:true,
			currentProvince: " ",
			currentCity: " ",
			currentArea: " ",
			currentStreet: " "
		}
	}

	loadMore() {
		this.setState({
			addressTab:0
		})
        console.log(this)
        React.axios.get("provinces.json")
        .then((response) => {
            
            this.setState({
                provinces: this.state.provinces.concat(response.data)
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    setCurrentTab(index){
    	console.log(index)
    	let isShowAreas=false;
		let	isShowStreets=false;
		let	isShowCities=false;
		let	isShowProvinces=false;
    	switch (index) {
			case 0:
				isShowAreas=false;
				isShowStreets=false;
				isShowCities=false;
				isShowProvinces=true;
				break;
			case 1:
				isShowAreas=false;
				isShowStreets=false;
				isShowCities=true;
				isShowProvinces=false;
				break;
			case 2:
				isShowAreas=true;
				isShowStreets=false;
				isShowCities=false;
				isShowProvinces=false;
			
				break;
			case 3:
				isShowAreas=false;
				isShowStreets=true;
				isShowCities=false;
				isShowProvinces=false;

				break;
		}
		this.setState({
      		addressTab: index,
      		isShowAreas:isShowAreas,
			isShowStreets:isShowStreets,
			isShowCities:isShowCities,
			isShowProvinces:isShowProvinces
    	})
  
	}
	setCurrentProvinces(index,currentProvince){
		document.getElementById("citiesList").innerHTML=""
		console.log(currentProvince)
		let addressTabs=this.state.addressTabs
		addressTabs[0].currentTab=currentProvince.name
		this.setState({
      		addressTabs: addressTabs,
      		addressTab:1
    	})
    	React.axios.get("cities.json")
        .then((response) => {
            console.log(response.data)
            let citiesArr = response.data;
            let cities = citiesArr.filter((x) => x.provinceCode === currentProvince.code)
            localStorage.currentProvince=this.state.currentProvince
            console.log(cities)
            this.setState({
                cities: this.state.cities.concat(cities),
                isShowCities:true,
                isShowProvinces:false,
                currentProvince:currentProvince.name
            })
        })
        .catch(function (error) {
            console.log(error);
        });
  
	}
	setCurrentCities(index,currentCity){
		document.getElementById("areasList").innerHTML=""
		console.log(currentCity)
		let addressTabs=this.state.addressTabs
		addressTabs[1].currentTab=currentCity.name
		this.setState({
      		addressTabs: addressTabs,
      		addressTab:2
    	})
    	React.axios.get("areas.json")
        .then((response) => {
            console.log(response.data)
            let areasArr = response.data;
            let areas = areasArr.filter((x) => x.cityCode === currentCity.code)
            localStorage.currentCity=this.state.currentCity
            console.log(areas)
            this.setState({
                areas: this.state.areas.concat(areas),
                isShowAreas:true,
                isShowProvinces:false,
                isShowCities:false,
                currentCity:currentCity.name
            })
        })
        .catch(function (error) {
            console.log(error);
        });
  
	}
	setCurrentArea(index,currentArea){
		document.getElementById("streetsList").innerHTML=""
		console.log(currentArea)
		let addressTabs=this.state.addressTabs
		addressTabs[2].currentTab=currentArea.name
		this.setState({
      		addressTabs: addressTabs,
      		addressTab:3
    	})
    	React.axios.get("streets.json")
        .then((response) => {
            console.log(response)
            let streetsArr = response.data;
            let streets = streetsArr.filter((x) => x.areaCode === currentArea.code)
            localStorage.currentArea=this.state.currentArea
            console.log(streets)
            this.setState({
                streets: this.state.streets.concat(streets),
                isShowStreets:true,
                isShowAreas:false,
                isShowProvinces:false,
                isShowCities:false,
                currentArea:currentArea.name
            })
        })
        .catch(function (error) {
            console.log(error);
        });
  
	}
	setCurrentStreet(index,currentStreet){

		document.getElementById("citiesList").innerHTML=""
		document.getElementById("areasList").innerHTML=""
		document.getElementById("streetsList").innerHTML=""
		console.log(currentStreet)
		localStorage.currentStreet=this.state.currentStreet
		this.setState({
      		addressTabs: [
      			{currentTab:"请选择"},
				{currentTab:"请选择"},
				{currentTab:"请选择"},
				{currentTab:"请选择"}
			],
      		addressTab:0,
      		isShowAreas:false,
			isShowStreets:false,
			isShowCities:false,
			isShowProvinces:true,
			currentStreet:currentStreet.name
    	})
    	this.props.toggleAdress(this.state.currentProvince,this.state.currentCity,this.state.currentArea,currentStreet.name);
    
	}
	toggleA(){
		this.setState({
			addressTabs: [
      			{currentTab:"请选择"},
				{currentTab:"请选择"},
				{currentTab:"请选择"},
				{currentTab:"请选择"}
			],
			addressTab:0,
			isShowAreas:false,
			isShowStreets:false,
			isShowCities:false,
			isShowProvinces:true,
		})
		this.props.toggleA()
	}
	render(){
		return (
            <div className="side-slide option-slide" id="address_wrap_1542716711769a307947744020106600">
				<div id="fragment_box_154271671176915009_layer" className={this.props.isShowAdress? "js-g-fragment-layer fui-mask-fadein":"js-g-fragment-layer hide"} style={{width: '100%'}}>
				
					<div onClick={this.toggleA.bind(this)} className="fui-mask"></div>
					<div  id="fragment_box_154271671176915009_content" className="js-g-fragment-content  fui-f-ov" style={{height: '525px'}}>
			
							<div className="pop-b-con pop-address-con js-popup-body">
								<div className="p-slide db v js-address-select js-address-select-all">
									<div className="p-s-distribute">
										<h3>送至</h3>
										<div className="select-area">
											{(()=>{
												
						                        return this.state.addressTabs.map((item,index)=>{
						                            return (
														<a onClick={this.setCurrentTab.bind(this,index)} key={index} href="javascript:;" className={this.state.addressTab === index? "js-address-top on":"js-address-top"} data-type="1">{item.currentTab}</a>
						                            )
						                        })
					                    	})()} 
										</div>
									</div>
									<div className="main-bd">
										<ul id="provincesList" className={this.state.isShowProvinces?"js-address-list":"js-address-list hide"} data-type="1">
										{(()=>{
					                        return this.state.provinces.map((item,index)=>{
					                            return (
													<li onClick={this.setCurrentProvinces.bind(this,index,item)} key={index} className="js-address-item" data-id={item.code} data-name={item.name} data-type="1"><span className="area">{item.name}</span></li>
					                            )
					                        })
					                    })()}  
										</ul>
										<ul id="citiesList" className={this.state.isShowCities?"js-address-list":"js-address-list hide"} data-type="2">
										{(()=>{
											
					                        return this.state.cities.map((item,index)=>{
					                            return (
													<li onClick={this.setCurrentCities.bind(this,index,item)} key={index} className="js-address-item" data-id={item.code} data-name={item.name} data-type="2"><span className="area">{item.name}</span></li>
					                            )
					                        })
					                    })()}  
											
										
										</ul>
										<ul id="areasList" className={this.state.isShowAreas?"js-address-list":"js-address-list hide"} data-type="3">
											{(()=>{
						                        return this.state.areas.map((item,index)=>{
						                            return (
														<li onClick={this.setCurrentArea.bind(this,index,item)} key={index} className="js-address-item" data-id={item.code} data-name={item.name} data-type="3"><span className="area">{item.name}</span></li>
						                            )
						                        })
					                    	})()}  
										</ul>
										<ul id="streetsList" className={this.state.isShowStreets?"js-address-list":"js-address-list hide"} data-type="4">
											{(()=>{
						                        return this.state.streets.map((item,index)=>{
						                            return (
														<li onClick={this.setCurrentStreet.bind(this,index,item)} key={index} className="js-address-item" data-id={item.code} data-name={item.name} data-type="4"><span className="area">{item.name}</span></li>
						                            )
						                        })
					                    	})()}  
											
										</ul>
									</div>
								</div>
								<div className="p-slide db v js-address-select js-address-select-user hide">
									<div className="p-s-distribute">
										<h3>送至</h3>
									</div>
									<div className="main-bd">
										<ul className="js-address-list">
											<li className="link" id="select_other"><a className="javascript:;"><span className="area">选择其他地址</span></a></li>
										</ul>
									</div>
									<div className="p-btn"><a className="js-address-confirm" href="javascript:;">确定</a></div>
								</div>
							</div>
						
					</div>
				</div>
			</div>
		)
	}
	componentDidMount() {
        this.loadMore()
    }

	
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		toggleAdress(currentProvince,currentCity,currentArea,currentStreet){
			dispatch({
				type:"toggleAdress",
				isShowAdress:false,
				currentProvince:currentProvince,
				currentCity:currentCity,
				currentArea:currentArea,
				currentStreet:currentStreet
			})
		},
		toggleA(){
			let arr = localStorage.text.split(" ");
			dispatch({
				type:"toggleAdress",
				isShowAdress:false,
				currentProvince:arr[0],
				currentCity:arr[1],
				currentArea:arr[2],
				currentStreet:arr[3]
			})
		}
	}
})(XdetailMainAdress);