import React, { Component } from "react";
import {Provider, connect} from 'react-redux';

import XmineHead from './Xmine/XmineHead.jsx';
import XmineTab from './Xmine/XmineTab.jsx';
import XmineFoot from './Xmine/XmineFoot.jsx';
import Xfooter from '../../components/Xfooter/Xfooter.jsx';

class Mine extends Component {
    constructor(props){
        super(props);
        this.props = props;
         this.state = {
            props:this.props.location.pathname,
            pathname: 4 ,
        }
       switch(this.state.props){
            case "/home/mainPage1" :
                this.state.pathname=0;
                this.props.toggleTab(0)
                break;
            case "/home/classify" :
                this.state.pathname=1;
                this.props.toggleTab(1)
             break;
             case "/home/cal" :
                this.state.pathname=2;
                this.props.toggleTab(2)
             break;
             case "/home/creditCard" :
                this.state.pathname=3;
                this.props.toggleTab(3)
             break;
             case "/mine/" :
                this.state.pathname=4;
                this.props.toggleTab(4)
             break;
             default :
                this.state.pathname=0;
                this.props.toggleTab(0)
        }
    }
    // html
    render(){
        return (
        	<div className="account-body" style={{height:"100%"}}>
            	<XmineHead />
            	<XmineTab />
            	<XmineFoot />
                <Xfooter pathname={this.state.pathname}/>
            </div>
        )
    }
    // js
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
         toggleTab(index){
            console.log(index)
                dispatch({
                    type:"toggleTab",
                    tab:index
                })
        }
    }
}) (Mine);
