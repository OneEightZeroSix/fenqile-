import React, { Component } from "react";

// 虚拟DOM
import ReactDOM from 'react-dom';

// axios
import axios from 'axios';


import './index.css';
import * as serviceWorker from './serviceWorker';


// 路由功能
import { HashRouter , Route , Redirect,Switch,withRouter } from  "react-router-dom";
import {createHashHistory} from 'history';
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
import Login from './pages/Login/Login.jsx';
import Registe from './pages/Registe/Registe.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Phone from './pages/phone/phone.jsx';
import Personal from './pages/Mine/personal.jsx';
import ExchangeRate from './pages/ExchangeRate/ExchangeRate.jsx';

import House from './pages/House/House.jsx';
import Tree from './pages/Tree/Tree.jsx';

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
    sliceprice:"",
    holdingAbbreviate: 'USD',
    exchangeAbbreviate: 'CNY',
    qty:'1',
    qtyshow:false
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
        case 'postAbbreviate':
            return {
                ...state,
                holdingAbbreviate: action.holdingAbbreviate
            }
        case 'postAbbreviate2':
            return {
                ...state,
                exchangeAbbreviate: action.exchangeAbbreviate
            }
        case 'qty':
            return {
                ...state,
                qty: action.qty
            }
        case 'qtyshow':
            return {
                ...state,
                qtyshow: action.qtyshow
            }

      default:
        return state
    }
});


class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);

const history = createHashHistory();
ReactDOM.render(
    
        <TransitionGroup>
            <CSSTransition
              appear={true}
              classNames="appAppear"
              timeout={500}
            >
                <Provider store={store}>
                    <HashRouter history={history}>
                                <div>
                                    <Route history={history}  render={({ location }) => (
                                        <ScrollToTop location={location}>
                                                <div style={{position: 'absolute',width:'100%',height:'100%'}}>
                                                    <Switch location={location}>
                                                            <Route  path="/home/" component={Home} />
                                                            <Route  path="/detail/" component={Detail} />
                                                            <Route  path="/param/" component={Param} /> 
                                                            <Route  path="/comment/" component={Comment} /> 
                                                            <Route  path="/mine/" component={Mine} />
                                                            <Route  path="/list" component={List}/>
                                                            <Route  history={history}  path="/login" component={Login}/>
                                                            <Route  history={history} path="/registe" component={Registe}/>
                                                            <Route  path="/phone" component={Phone}/>
                                                            <Route path="/exchangeRate" component={ExchangeRate}/>
                                                            <Route path="/cart/" component={Cart}/>
                                                            <Route path="/personal/" component={Personal}/>
                                                            <Redirect history={history} from="/" exact to="/home/mainPage1" />
                                                        </Switch> 
                                                </div>
                                        </ScrollToTop>
                                    )}/>
                                </div>
                    </HashRouter>
                </Provider>
            </CSSTransition>
        </TransitionGroup>
    
    
    , 
    document.getElementById('root')
);

serviceWorker.unregister();
