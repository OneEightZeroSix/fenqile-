import React, { Component } from "react";

import XimgList from './XimgList.jsx'
import Xcarousel from './Xcarousel.jsx'
import Xbanner from './Xbanner.jsx'
import XitemFloor from './XitemFloor.jsx'
import XitemFloorCar from './XitemFloorCar.jsx'
import XitemFloorMobile from './XitemFloorMobile.jsx'
import QueueAnim from 'rc-queue-anim';

// 页面组件 容器组件
import Mappege from './indexpage/mappege.jsx';
import Choiceness from './indexpage/choiceness.jsx';
import Gift from './indexpage/gift.jsx';
import Recommend from './indexpage/recommend.jsx';

class mainPage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
            
        return (
            <div>
                <QueueAnim className="demo-content"
                          animConfig={[
                            { opacity: [1, 0], translateY: [0, 50] },
                            { opacity: [1, 0], translateY: [0, -50] }
                          ]}>

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
                 <Choiceness/>
                  <Mappege />
                  <Gift/>
                  <Recommend/>
                </QueueAnim>
            </div>
        )
    }
}

export default mainPage1;
