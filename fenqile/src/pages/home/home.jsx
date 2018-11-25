import React, { Component } from "react";
// import "./search.css";
import "./global.css";
import "./index.css";
// import "./app.css";
import './antd-mobile.css';
import './antd.css';
import { Route } from "react-router-dom";
import {Provider, connect} from 'react-redux';
import {createHashHistory} from 'history';


// 页面组件 容器组件
import XsearchBar from './index/XsearchBar.jsx'
import mainPage1 from './index/mainPage1.jsx';
import classify from './classify/classify.jsx';
import cal from './cal/cal.jsx';
import creditCard from './creditCard/creditCard.jsx';
import Xfooter from '../../components/Xfooter/Xfooter.jsx';

const history = createHashHistory();
class Home extends Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.state = {
            props:props.location.pathname,
        }
       switch(this.state.props){
            case "/home/mainPage1" :
                this.props.toggleTab(0)
                break;
            case "/home/classify" :
                this.props.toggleTab(1)
             break;
             case "/home/cal" :
                this.props.toggleTab(2)
             break;
             case "/home/creditCard" :
                this.props.toggleTab(3)
             break;
             case "/mine" :
                this.props.toggleTab(4)
             break;
             default :
                this.props.toggleTab(0)
        }
    }
    render() {
        return (
            <div>
                     {this.props.tab<=1? <XsearchBar  />:<div></div>}
                     
					<Route history={history} path="/home/mainPage1" component={mainPage1} />
                    <Route history={history} path="/home/classify" component={classify} />
                    <Route history={history} path="/home/cal" component={cal} />
                    <Route history={history} path="/home/creditCard" component={creditCard} />
                    
                    <Xfooter/>
            </div>
        )
    }
    
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
         toggleTab(index){
                dispatch({
                    type:"toggleTab",
                    tab:index
                })
        }
    }
})(Home);
