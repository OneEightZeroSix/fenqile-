import React, { Component } from "react";
import "./home.css";
import "./index.css";
import { Route } from "react-router-dom";

// 页面组件 容器组件
import indexbody from './index/indexbody.jsx';
import classify from './classify/classify.jsx';
import cal from './cal/cal.jsx';
import creditCard from './creditCard/creditCard.jsx';
import mine from './mine/mine.jsx';
import Xfooter from '../../components/Xfooter/Xfooter.jsx';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                    <Route path="/home/indexbody" component={indexbody} />
                    <Route path="/home/classify" component={classify} />
                    <Route path="/home/cal" component={cal} />
                    <Route path="/home/creditCard" component={creditCard} />
                    <Route path="/home/mine" component={mine} />
                 <Xfooter/>
            </div>
        )
    }
}

export default home;
