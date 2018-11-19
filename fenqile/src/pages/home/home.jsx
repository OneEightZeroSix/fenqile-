import React, { Component } from "react";
import "./global.css";
import "./index.css";
import './antd-mobile.css';
import './antd.css';
import { Route } from "react-router-dom";

// 页面组件 容器组件
import mainPage1 from './index/mainPage1.jsx';
import classify from './classify/classify.jsx';
import cal from './cal/cal.jsx';
import creditCard from './creditCard/creditCard.jsx';
import mine from './mine/mine.jsx';
import Xfooter from '../../components/Xfooter/Xfooter.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
					<Route path="/home/mainPage1" component={mainPage1} />
                    <Route path="/home/classify" component={classify} />
                    <Route path="/home/cal" component={cal} />
                    <Route path="/home/creditCard" component={creditCard} />
                    <Route path="/home/mine" component={mine} />
                 <Xfooter/>
            </div>
        )
    }
}

export default Home;
