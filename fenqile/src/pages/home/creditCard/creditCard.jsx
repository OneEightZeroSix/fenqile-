import React, { Component } from "react";
import Cheader from "./Cheader.jsx";
import Clogin from './Clogin.jsx';
import Crepayment from './Crepayment.jsx';
import CapplyList from './CapplyList.jsx';
import Ctags from './Ctags.jsx'

// 页面组件 容器组件

class creditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                信用卡
                <Cheader />
                <Clogin />
                <Crepayment />
                <CapplyList />
                <h2 data-v-6e6ed897="" class="tab-title progress-title">办卡进度<span data-v-6e6ed897="" class="apply-more progress-icon"><em data-v-6e6ed897=""></em><i data-v-6e6ed897=""></i></span></h2>
                <Ctags/>
            </div>
        )
    }
}

export default creditCard;
