import React, {
	Component
} from "react";

import { Progress } from 'antd';

import "./Xtree.scss"
import "./Xtree2.scss"
import "./Xtree3.scss"
import "./loading.scss"




class Xtree extends Component {
	constructor(props) {
        super(props);
   }
	getProgress(){
		var pro = this.refs.progress
		setInterval(function(e){
		      if(pro.value!=100){
		      	pro.value += 5; 
		      }else{
		      	window.location.href = "http://localhost:3000/#/tree/content"
		      }
		},100);
	}
		
	render() {
		return(
			<div className='ntr' style={{height:'100vh',width:'100vw',background:'#Fff'}}>
    			<div id="loading-welcome" style={{position:'fixed',top:'40%',margin:'auto',left:'0',right:'0',textAlign:'center'}}>
					<div className="tree-loading">
			            <div className="tree-leaf tree-leaf-5 show-at-50"></div>
			            <div className="tree-apple tree-apple-4 show-at-75"></div>
			            <div className="tree-branch"></div>
			            <div className="tree-branch tree-branch-right"></div>
			            <div className="tree-trunk"></div>
			            <div className="tree-leaf tree-leaf-4 show-at-50"></div>
			            <div className="tree-leaf tree-leaf-3 show-at-25"></div>
			            <div className="tree-apple tree-apple-2 show-at-75"></div>
			            <div className="tree-leaf tree-leaf-2"></div>
			            <div className="tree-leaf tree-leaf-1"></div>
			            <div className="tree-leaf tree-leaf-0"></div>
			            <div className="tree-apple show-at-75"></div>
			            <div className="tree-apple tree-apple-3 show-at-75"></div>
		        	</div>
					<div id="welcome-text" style={{position:'absolute',top:'100px',left:'0',right:'0',margin:'5px auto',fontSize:'0.16rem',textAlign:'center',color:'#0F4107',fontWeight:'500'}}>
						<progress max="100" value="0" id="pg" ref="progress" style={{width:'300px',backgroundColor:'#58bc58'}}></progress>
					</div>
					<span style={{position:'absolute',bottom:'100px',bottom: '-150px',left: '50%',transform: 'translate(-50%,-50%)'}}>正在进入果园</span>
				</div>
			</div>
		)
	}
	componentDidMount() {	
        this.getProgress()
   }	
}

export default Xtree;