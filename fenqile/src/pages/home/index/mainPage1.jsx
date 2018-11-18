import React, { Component } from "react";
import XsearchBar from './XsearchBar.jsx'
import XimgList from './XimgList.jsx'
import Xcarousel from './Xcarousel.jsx'
import Xbanner from './Xbanner.jsx'
import XitemFloor from './XitemFloor.jsx'
import XitemFloorCar from './XitemFloorCar.jsx'
import XitemFloorMobile from './XitemFloorMobile.jsx'


// 页面组件 容器组件

class mainPage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <XsearchBar />
                <a href="javascript:void(0)" className="tips-wrap">
                        <p>乐卡额度最高50000元</p>
                        <div className="tips-handle">立即开通<i className="iconfont wf-arrow-down"></i></div>
                </a>
                <XimgList />
                <Xcarousel/>
                <Xbanner/>
                <XitemFloor/>
                <XitemFloorCar/>
                <XitemFloorMobile/>
              
            </div>
        )
    }
}

export default mainPage1;
