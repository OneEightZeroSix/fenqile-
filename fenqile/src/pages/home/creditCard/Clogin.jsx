import React, { Component } from "react";

// 页面组件 容器组件

class Clogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div data-v-572d5f58="" data-v-20cba867="" className="card">
                <div data-v-572d5f58="" id="cardSwiper" className="swiper-container swiper-container-horizontal">
                    <div data-v-572d5f58="" className="swiper-wrapper">
                        <div data-v-572d5f58="" className="swiper-slide swiper-slide-active" style={{width:"398px"}}>
                            <div data-v-572d5f58="" className="card-add">
                                <a data-v-572d5f58="" href="javascript:void(0)"><img data-v-572d5f58="" src="//cres2.fenqile.cn/creditcard_m/img/v2/tab/card/add_card_bg--95bfd1807d.png" className="card-detail-bg" /></a>
                                <h3 data-v-572d5f58="" className="card-title">用乐卡还信用卡</h3>
                                <p data-v-572d5f58="" className="card-text">信用卡额度立即恢复 轻松不逾期</p>
                                <a data-v-572d5f58="" href="javascript:void(0)" className="add-card-btn">登录/注册</a>
                            </div>
                        </div>
                    </div>
                    <div data-v-572d5f58="" slot="pagination" className="swiper-pagination swiper-pagination-card"></div>
                </div>
            </div>
        )
    }
}

export default Clogin;