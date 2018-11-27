import React, { Component } from "react";
import {Provider, connect} from 'react-redux';


import Xpersonal from './Xmine/Xpersonal.jsx';

class personal extends Component {
    constructor(props){
        super(props);
        this.props = props;
         this.state = {
        }
    }
    // html
    render(){
        return (
        	<Xpersonal />
        )
    }
    // js
}

export default personal;