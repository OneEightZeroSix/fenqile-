import React, { Component } from "react";
import "./global.css";
import "./index.css";
import './antd-mobile.css';
import './antd.css';
import { Route } from "react-router-dom";

// 页面组件 容器组件
import mainPage1 from './index/mainPage1.jsx';

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
            </div>
        )
    }
}

export default Home;
