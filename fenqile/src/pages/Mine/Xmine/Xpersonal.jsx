import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookie from "../../../lib/cookie.js"

import qs from 'qs';



import "./Xpersonal.css"



class Xpersonal extends Component {
    constructor(props){
        super(props);
        this.props = props;
         this.state = {
         	userinfor:'',
            usertouxiang:'',
            hasImage:false
        }

    }

    getUser(){
		var allinfor = Cookie.getCookie("userinformation") || [];
		if(typeof allinfor == "string") {
			allinfor = JSON.parse(allinfor);
		}
		if(allinfor.length==0){
			this.setState({
				userinfor:'',
			})
		}else{
			console.log(allinfor)
			var nowphone = allinfor[0].phonenumber;
			this.setState({
				userinfor:nowphone
			})
			
		}
		
	}
    postImg(){
        var touxianglist = document.querySelector('.touxianglist');
        var touxiang = document.querySelector(".touxiang")
        
        var files = touxiang.files[0];
        var reader = new FileReader();
        var img = document.getElementById("userpic");
        reader.readAsDataURL(files);
            reader.onload = function(e) {
                img.src = this.result;
            }
            this.setState({
            	usertouxiang : img.src
            })
            
        var datar = new FormData();
        datar.append('userimg', files);       
        if (files.type.indexOf('image') === 0) {       
            if (files.size >= 512000) {
                
                alert("该文件"+files.name+"过大，请上传小于500kb图片");
            }else{
                // var zz = {
                //       'userimg': datar,
                //     };
                React.axios.post("http://localhost:12345/files/touxiang",datar,{
                    headers: {
                            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                })
                .then((response) => {
                    this.setState({
                        usertouxiang:response.data
                    })
                    this.updateUser(); 
                })
                .catch(function(error) {
                    console.log(error);
                })
            }
        }else{
            alert("该文件"+files.name+"不是图片");
        }
        
    }
    updateUser(){
        var zz = qs.stringify({
              'userimg': this.state.usertouxiang,
              'phonenumber': this.state.userinfor,
            });
        React.axios.post("http://localhost:12345/login/updateuser",zz,{
            headers: {
                    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                }
        })
        .then((response) => {
//          this.setState({
//              usertouxiang:response.data.userimg
//          })
			console.log(this.state.usertouxiang);
            var totalinfor = Cookie.getCookie("userinformation");
            totalinfor[0].userimg = response.data.userimg
            console.log(totalinfor,8888)
            Cookie.setCookie("userinformation",totalinfor);
        })
        .catch(function(error) {
            console.log(error);
        })
    }
   





    // html
    render(){
        return (
        	<div className="personal">
            	<div id="global_header_top" className="headerpt">
    			    <div className="header-wrap headerpt-fix" id="header_wrap">
    			        <div id="global_header" className="header header-not-fix ">
    			            <Link to="/mine" className="g-back " id="global_header_url" ></Link>
    			            <h1 id="global_header_title">我的资料</h1>
    			            <Link to="//item.m.fenqile.com/cart/index.html?show_title_return=1" className="g-right g-cart-r hide" id="g_right_cart">
    			                <i className="i-jiantouo-right">
    			                    <em id="g_cart_count" className="hide">0</em>
    			                </i>
    			            </Link>
    		            </div>
    		        </div>
    			</div>
    			<section className="list-container">
                    <ul className="base-info-list">
                        <li className="base-info-item">
                            <span className="base-info-title">个人头像</span> 
                                <span className="base-info-tip">
                                    <img src={this.state.hasImage?"":'https://cres2.fenqile.cn/home_m/online/img/cc66e33f6b05c0ad30d9fe31b4040fc8.png'} className="user-avatar" id="userpic" /> 
                                    <svg viewBox="0 0 1024 1024" className="i-jiantouo-right" style={{stroke: 'rgb(185, 189, 198)', fill: 'rgb(185, 189, 198)'}}>
                                        <path></path>
                                    </svg>
                                </span> 
                            <form className="image-clip-wrap touxianglist" ref="imgbox">
                                 <input type="file" accept="image/*" name="userimg" onChange={this.postImg.bind(this)} ref="imgone" className='touxiang'/>
                            </form>
                        </li> 
                        <li className="base-info-item">
                            <span className="base-info-title">收货地址</span> 
                            <svg viewBox="0 0 1024 1024" className="i-jiantouo-right" style={{stroke: 'rgb(185, 189, 198)', fill: 'rgb(185, 189, 198)'}}>
                                <path></path>
                            </svg>
                        </li> 
                        <li className="base-info-item">
                            <span className="base-info-title">手机号</span> 
                            <span className="base-info-tip"><span className="light-gray">{this.state.userinfor}</span> 
                            <svg viewBox="0 0 1024 1024" className="i-jiantouo-right" style={{stroke: 'rgb(185, 189, 198)', fill: 'rgb(185, 189, 198)'}}>
                            <path></path>
                            </svg>
                            </span>
                        </li> 
                        <li className="base-info-item">
                            <span className="base-info-title">银行卡</span> 
                            <svg viewBox="0 0 1024 1024" className="i-jiantouo-right" style={{stroke: 'rgb(185, 189, 198)', fill: 'rgb(185, 189, 198)'}}>
                                <path></path>
                            </svg>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
    componentDidMount(){
        this.getUser();
        this.updateUser();
    }


}

export default Xpersonal;
