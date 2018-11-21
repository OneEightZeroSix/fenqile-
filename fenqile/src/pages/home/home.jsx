import React, { Component } from "react";
// import "./search.css";
import "./global.css";
import "./index.css";
import "./app.css";
import './antd-mobile.css';
import './antd.css';
import { Route } from "react-router-dom";
import {Provider, connect} from 'react-redux';

// 页面组件 容器组件
import XsearchBar from './index/XsearchBar.jsx'
import mainPage1 from './index/mainPage1.jsx';
import classify from './classify/classify.jsx';
import cal from './cal/cal.jsx';
import creditCard from './creditCard/creditCard.jsx';
import mine from './mine/mine.jsx';
import Xfooter from '../../components/Xfooter/Xfooter.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.state = {
            props:props.location.pathname,
            pathname: 0 ,
        }
       switch(this.state.props){
            case "/home/mainPage1" :
                this.state.pathname=0;
                this.props.toggleTab(0)
                break;
            case "/home/classify" :
                this.state.pathname=1;
                this.props.toggleTab(1)
             break;
             case "/home/cal" :
                this.state.pathname=2;
                this.props.toggleTab(2)
             break;
             case "/home/creditCard" :
                this.state.pathname=3;
                this.props.toggleTab(3)
             break;
             case "/home/mine" :
                this.state.pathname=4;
                this.props.toggleTab(4)
             break;
             default :
                this.state.pathname=0;
                this.props.toggleTab(0)
        }
    }
    render() {
        return (
            <div>
                    {this.props.tab<=1? <XsearchBar  />:<div></div>}
					<Route path="/home/mainPage1" component={mainPage1} />
                    <Route path="/home/classify" component={classify} />
                    <Route path="/home/cal" component={cal} />
                    <Route path="/home/creditCard" component={creditCard} />
                    <Route path="/home/mine" component={mine} />
                    <Xfooter pathname={this.state.pathname}/>
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
