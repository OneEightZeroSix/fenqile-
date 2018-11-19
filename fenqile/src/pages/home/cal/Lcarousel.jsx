import React, { Component } from "react";
import { Carousel } from 'antd';
import './Lcarousel.css'

// 页面组件 容器组件

class Lcarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
        <div id="Lcarousel_container">
            <Carousel autoplay>
                <div>
                    <div style={{textAlign:'center',boxSizing:'border-box', marginLeft: '1.6vw', width: '415px', height: '415px',paddingTop:'60px', background: 'url(https://cimg1.fenqile.com/ibanner2/M00/03/8A/jagHAFpwYE2AAyk4AANixPGbA-M464.png) no-repeat', backgroundSize: 'contain' }}>
                    <p data-v-977cce4a="" weex-type="text" class="weex-text weex-el login-large-title" style={{marginBottom:'7.728px', fontSize:'22.08px', color:'rgb(57, 64, 80)'}}>-  乐卡·是一张分期消费卡  -</p>
                    <p data-v-977cce4a="" weex-type="text" class="weex-text weex-el login-large-sub-title" style={{marginBottom:'5.52px',fontSize:'15.456px',color:'rgb(117, 124, 142)'}}>购物／借款／还信用卡</p>
                    </div>
                </div>
                <div>
                    <div style={{paddingTop:'60px',textAlign:'center',boxSizing:'border-box', marginLeft: '1.6vw', width: '415px', height: '415px', background: 'url(https://cimg1.fenqile.com/ibanner2/M00/00/A0/jagHAFpm9eKAdBGdAAIYMeGTRbo890.png) no-repeat', backgroundSize: 'contain' }}>
                    <p data-v-977cce4a="" weex-type="text" class="weex-text weex-el login-large-title" style={{marginBottom:'7.728px', fontSize:'22.08px', color:'rgb(57, 64, 80)'}}>-  分期购物 精选好货  -</p>
                    <p data-v-977cce4a="" weex-type="text" class="weex-text weex-el login-large-sub-title" style={{marginBottom:'5.52px',fontSize:'15.456px',color:'rgb(117, 124, 142)'}}>正品保障 新人领￥1200礼券</p>
                    </div>
                </div>
                <div>
                    <div style={{ paddingTop:'60px',textAlign:'center',boxSizing:'border-box',marginLeft: '1.6vw', width: '415px', height: '415px', background: 'url(https://cimg1.fenqile.com/ibanner2/M00/00/A0/jagHAFpm9fCAdijtAANftDA-XGg878.png) no-repeat', backgroundSize: 'contain' }}>
                    <p data-v-977cce4a="" weex-type="text" class="weex-text weex-el login-large-title" style={{marginBottom:'7.728px', fontSize:'22.08px', color:'rgb(57, 64, 80)'}}>-  分期借款 极速到账  -</p>
                    <p data-v-977cce4a="" weex-type="text" class="weex-text weex-el login-large-sub-title" style={{marginBottom:'5.52px',fontSize:'15.456px',color:'rgb(117, 124, 142)'}}>支持提前还免服务费</p>
                    </div>
                </div>
                <div>
                    <div style={{paddingTop:'60px',textAlign:'center',boxSizing:'border-box', marginLeft: '1.6vw', width: '415px', height: '415px', background: 'url(https://cimg1.fenqile.com/ibanner2/M00/00/A0/jagHAFpm9a-AOkLgAAGqmmQTNFA402.png) no-repeat', backgroundSize: 'contain' }}>
                    <p data-v-977cce4a="" weex-type="text" class="weex-text weex-el login-large-title" style={{marginBottom:'7.728px', fontSize:'22.08px', color:'rgb(57, 64, 80)'}}>-  分期还信用卡  -</p>
                    <p data-v-977cce4a="" weex-type="text" class="weex-text weex-el login-large-sub-title" style={{marginBottom:'5.52px',fontSize:'15.456px',color:'rgb(117, 124, 142)'}}>支持全国33家银行 比银行省30%</p>
                    </div>
                </div>
            </Carousel>
            <p data-v-977cce4a="" weex-type="text" className="weex-text weex-el login-large-btn" bubble="true" style={{position:'absolute', left:'26.496px', bottom:'40vh', width:'361.008px', height:'52.992px', lineHeight:'52.992px',fontSize:'17.664px',color:'rgb(255, 255, 255)',backgroundColor:'rgb(68, 160, 255)', borderColor:'rgb(4, 135, 227)',borderStyle:'solid',borderWidth:'0.5px',borderRadius:'4.416px',textAlign:'center'}}>登录/注册</p>
        </div>
        )
    }
}

export default Lcarousel;