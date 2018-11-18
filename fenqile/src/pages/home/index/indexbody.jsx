import React, { Component } from "react";

// 页面组件 容器组件
import Mappege from './indexpage/mappege.jsx';
import Choiceness from './indexpage/choiceness.jsx';
import Gift from './indexpage/gift.jsx';
import Recommend from './indexpage/recommend.jsx';

class indexbody extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                  <Choiceness/>
                  <Mappege />
                  <Gift/>
                  <Recommend/>
            </div>
              
        )
    }
}

export default indexbody;
