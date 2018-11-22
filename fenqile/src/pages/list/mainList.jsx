import React, { Component } from "react";
import Mheader from './Mheader.jsx';
import Mlist from './Mlist.jsx';
import Mcomponents from './Mcomponents.jsx';
import Incal from './incal.jsx';
// import './incal.scss';


// 页面组件 容器组件

class mainList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="a">
                <Mheader/> 
                <Incal/>
                <Mlist/>
                <Mcomponents/> 
            </div>
        )
    }
}

export default mainList;
