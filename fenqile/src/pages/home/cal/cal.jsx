import React, { Component } from "react";
import Lheader from './Lheader.jsx';
import Lcarousel from './Lcarousel.jsx';
import Lad from './Lad.jsx';
import Lsev from './Lsev.jsx';
import Lrights from './Lrights.jsx';
import Lbottom from './Lbottom.jsx';
import Ltest from './Ltest.jsx';
import Ltest2 from './Ltest2.jsx';
import './animate.css';
import Ltest3 from './Ltest3.jsx';
// import './cal.css';


// 页面组件 容器组件
import {Provider, connect} from 'react-redux';
class cal extends Component {
    constructor(props) {
        super(props);
         this.props=props;
        this.state = {
           
        }
    }
   
    render() {
        return (
        // <div>
        //     <div>
        //         {/* <Lheader/>
        //         <Lcarousel/>
        //         <Lad/>
        //         <Lsev/>
        //         <Lrights/>
        //         <Lbottom/> */}
                 <Ltest3/>
                // <Ltest3/>
        //     </div>
        // </div>
           
        )
    }
  
}

export default cal;
