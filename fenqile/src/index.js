import React from 'react';

// 虚拟DOM
import ReactDOM from 'react-dom';

// axios
import axios from 'axios';


import './index.css';
import * as serviceWorker from './serviceWorker';


// 路由功能
import { HashRouter as Router, Route , Redirect,Switch } from "react-router-dom";

// 状态管理
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

// 子组件 复用组件
// import App from './App';
import Home from './pages/home/home.jsx';
import List from './pages/list/mainList.jsx';
import Detail from './pages/Detail/Detail.jsx';
import Param from './pages/Param/Param.jsx';
import Comment from './pages/Comment/Comment.jsx';
import Mine from './pages/Mine/Mine.jsx';


React.axios = axios;
// 创建仓库  试验 可删除
const store = createStore(function(state={
    tab:0,
    isshow:false,
    calshow:false,
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
    currentStreet: "元岗街",
    nowprice:0,
    colorText:"",
    sizeText:"",
    nowpic:"",
    sliceprice:""
}, action){
    switch (action.type) {
      case 'toggleTab':
        return {
            ...state,
            tab:action.tab
        }
      case 'show':
        return {
            ...state,
            isshow:action.isshow
        }
      case 'calshow':
        return {
            ...state,
            calshow:action.calshow
        }
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
         case 'setnowprice':
            return {
                ...state,
                nowprice: action.nowprice,
                sliceprice: action.sliceprice
            }
        case 'istext':
            return {
                ...state,
               colorText: action.colorText,
                sizeText: action.sizeText,
                nowpic: action.nowpic
            }
      default:
        return state
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <Switch>
                <Route path="/home/" component={Home} />
                <Route path="/detail/" component={Detail} />
                <Route path="/param/" component={Param} /> 
                <Route path="/comment/" component={Comment} /> 
                <Route path="/mine/" component={Mine} />
                <Route path="/list" component={List}/>
                <Redirect from="/" exact to="/home/mainPage1" />
            </Switch>
        </Router>
    </Provider>
    , 
    document.getElementById('root')
);

serviceWorker.unregister();
