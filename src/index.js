import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 路由功能
import {
	HashRouter as Router,
	Route,
	Redirect
} from "react-router-dom";

// 状态管理
import {
	Provider,
	connect
} from 'react-redux';
import {
	createStore
} from 'redux';
import {
	Tabs,
	WhiteSpace,
	Badge
} from 'antd-mobile';
import '../node_modules/antd-mobile/dist/antd-mobile.css';


// 子组件 复用组件
// import App from './App';
import Home from './pages/home/home.jsx';
import Detail from './pages/Detail/Detail.jsx';


React.axios = axios;
// 创建仓库  试验 可删除
const store = createStore(function(state = {
	name: "laoyao",
	text: "取消了",
	isShowActionSheet: false,
	isShowFenqi: false,
	isShowSales: false,
	isShowSpecification: false,
	isShowAdress: false,
	currentPlan: {
		"total_capital_amount": "9199",
		"has_discount_flag": 0,
		"fq": "36期",
		"fq_num": 36,
		"sf": "零首付",
		"ratio_year": "28",
		"total_real_pay_amount": "13698.36",
		"mon_pay": "380.51",
		"total_ori_fee_amount": "4499.36",
		"total_discount_fee_amount": "0",
		"total_real_fee_amount": "4499.36"
	},
	currentSf: '',
	currentDownpayment: '',
	currentProvince: "广东",
	currentCity: "广州市",
	currentArea: "天河区",
	currentStreet: "元岗街"

}, action) {
	const count = state.count
	switch (action.type) {
		case 'increase':
			return {
				...state,
				count: count + 2
			}
		case 'multi':
			return Object.assign({}, state, {
				name: action.name
			});
		case 'editText':
			return {
				...state,
				text: action.text
			}
		case 'toggleSheet':
			return {
				...state,
				isShowActionSheet: action.isShowActionSheet
			}
		case 'toggleFenqi':
			return {
				...state,
				isShowFenqi: action.isShowFenqi
			}
		case 'toggleSales':
			return {
				...state,
				isShowSales: action.isShowSales
			}
		case 'toggleSpecification':
			return {
				...state,
				isShowSpecification: action.isShowSpecification
			}
		case 'toggleAdress':
			return {
				...state,
				isShowAdress: action.isShowAdress,
				currentProvince: action.currentProvince,
				currentCity: action.currentCity,
				currentArea: action.currentArea,
				currentStreet: action.currentStreet
			}
		case 'setCurrentDownpayment':
			return {
				...state,
				currentPlan: action.currentPlan,
				currentSf: action.currentSf,
				currentDownpayment: action.currentDownpayment
			}
		case 'setCurrentStage':
			return {
				...state,
				currentPlan: action.currentPlan,
				currentSf: action.currentFq,
				currentDownpayment: action.currentStage
			}
		default:
			return state
	}
});


ReactDOM.render(
	<Provider store = {store}>
		<Router>
			<div>
				<Route path="/home/" component={Home} />
                <Route path="/detail/" component={Detail} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();