import React, {
    Component
} from "react";


import Xlogin from './Xlogin/Xlogin.jsx';
//import { TransitionGroup, CSSTransition } from "react-transition-group";




class Login extends Component {
    constructor(props) {
        super(props);
//      this.state= { 
//      	in: true ,
//      	isShow:true
//      };
    }
//  setShow(){
//  	console.log(123456)
//  	this.setState({
//      	isShowJia:false
//     	})
//  }
    
    render() {
        return (
        	<Xlogin />
//          <TransitionGroup>
//				 <CSSTransition
//			      appear={true}
//			      classNames="appAppear"
//			      timeout={500}>
//			      <Xlogin />
//			    </CSSTransition>
//	        </TransitionGroup>
        )
    }
}

export default Login;