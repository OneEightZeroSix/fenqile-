import React, { Component } from "react";
import "./home.css";
import { Route } from "react-router-dom";

// 页面组件 容器组件
import indexbody from './index/indexbody.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Route path="/home/index" component={indexbody} />
            </div>
        )
    }
}

export default Home;
