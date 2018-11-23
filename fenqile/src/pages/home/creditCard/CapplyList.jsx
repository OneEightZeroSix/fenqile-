import React, { Component } from "react";

// 页面组件 容器组件

class CapplyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="apply-creditcard">
                <div className="apply-list">
                    <li  href="javascript:;" className="">
                        <h2  className="tab-title">免费办卡<span  className="apply-more">查看更多<i ></i></span></h2>
                    </li>
                    <li  target="_blank" href="javascript:;">
                        <div className="creditcard-list no-border-top">
                            <div  className="card-student-tag" style={{ background: 'rgb(84, 199, 72)' }}>
                            校园学生卡<i  style={{ borderTopColor: 'rgb(84, 199, 72)', borderLeftColor: 'rgb(84, 199, 72)' }}></i>
                            </div>
                            <div  className="creditcard-bg">
                            <img src="https://cimg1.fenqile.com/product/M00/D1/48/hhoGAFox_jOAbByHAAQY04ncTec543.png" className="creditcard-img" />
                            </div>
                            <div className="creditcard-info">
                                <h3  className="creditcard-name">宇宙分期乐联名卡</h3>
                                <ul className="creditcard-ul">
                                    <li>888分期乐大礼包</li>
                                    <li>送视频会员</li>
                                </ul>
                                <a  target="_blank" href="javascript:;" className="creditcard-btn">
                                    <span >免年费</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li  target="_blank" href="javascript:;">
                        <div className="creditcard-list">
                            <div className="card-student-tag" style={{ background: 'rgb(84, 199, 72)' }}>
                            校园学生卡<i  style={{ borderTopColor: 'rgb(84, 199, 72)', borderLeftColor: 'rgb(84, 199, 72)' }}></i>
                            </div>
                            <div className="creditcard-bg">
                                <img  src="https://cimg1.fenqile.com/product3/M00/01/DD/RbQHAFrMqJ-AIkoBAAOkiBp0XAQ799.png" className="creditcard-img" />
                            </div>
                            <div className="creditcard-info">
                                <h3  className="creditcard-name">招行分期乐学生联名卡</h3>
                                <ul  className="creditcard-ul">
                                    <li >888分期乐大礼包</li>
                                    <li>首刷送599元Dickies背包</li>
                                </ul>
                                <a  target="_blank" href="javascript:;" className="creditcard-btn"><span >开卡大礼包</span></a>
                                <a  target="_blank" href="javascript:;" className="creditcard-btn"><span>双倍积分</span></a>
                            </div>
                        </div>
                    </li>
                    <li target="_blank" href="javascript:;">
                        <div className="creditcard-list">
                            <div className="creditcard-bg"><img src="https://cimg1.fenqile.com/product3/M00/01/DD/RbQHAFrMqJ-AIkoBAAOkiBp0XAQ799.png" className="creditcard-img" /></div>
                            <div  className="creditcard-info">
                                <h3  className="creditcard-name">招行分期乐白领联名卡</h3>
                                <ul  className="creditcard-ul">
                                    <li>888分期乐大礼包</li>
                                    <li >首刷送599元Dickies背包</li>
                                </ul>
                                <a  target="_blank" href="javascript:;" className="creditcard-btn"><span >开卡大礼包</span></a>
                                <a  target="_blank" href="javascript:;" className="creditcard-btn"><span >双倍积分</span></a>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        )
    }
}

export default CapplyList;