import React, { Component } from "react";
import Cheader from "./Cheader.jsx";
import Clogin from './Clogin.jsx';
import Crepayment from './Crepayment.jsx';
import CapplyList from './CapplyList.jsx';
import Ctags from './Ctags.jsx';
import Ccarousel from './Ccarousel.jsx';
import "./creditCard.scss"
// 页面组件 容器组件

class creditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="r">
                <Cheader />
                <Clogin />
                <Crepayment />
                <CapplyList />
                <h2  className="tab-title progress-title">办卡进度<span  className="apply-more progress-icon"><em ></em><i ></i></span></h2>
                <Ctags/>
                <Ccarousel/>
            </div>
        )
    }
}

export default creditCard;
