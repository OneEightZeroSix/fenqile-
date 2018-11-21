import React, { Component } from "react";
import Lheader from './Lheader.jsx';
import Lcarousel from './Lcarousel.jsx';
import Lad from './Lad.jsx';
import Lsev from './Lsev.jsx';
import Lrights from './Lrights.jsx';
import Lbottom from './Lbottom.jsx';
import Ltest from './Ltest.jsx';
// import './cal.css';

// 页面组件 容器组件

class cal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
        <div>
            <div>
                {/* <Lheader/>
                <Lcarousel/>
                <Lad/>
                <Lsev/>
                <Lrights/>
                <Lbottom/> */}
                <Ltest/>
            </div>
        </div>
        )
    }
}

export default cal;
