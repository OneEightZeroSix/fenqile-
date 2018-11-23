import React, { Component } from "react";
import { Carousel } from 'antd';

// 页面组件 容器组件

class Ccarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div  className="tag-bank">
                <Carousel>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: '2vh' }}>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/pingan_icon.png" width="40" height="40" alt="平安银行" className="tag-img swiper-lazy" />
                            <h3>平安银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/cib_icon.png" width="40" height="40" alt="兴业银行" className="tag-img swiper-lazy" />
                            <h3>兴业银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/ccb_icon.png" width="40" height="40" alt="建设银行" className="tag-img swiper-lazy" />
                            <h3>建设银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/ecitic_icon.png" width="40" height="40" alt="中信银行" className="tag-img swiper-lazy" />
                            <h3>中信银行</h3></a>
                    </div>
                </div>

                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: '2vh' }}>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/huaxia_bank_icon.png" width="40" height="40" alt="平安银行" className="tag-img swiper-lazy" />
                            <h3>华夏银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/gdb_icon.png" width="40" height="40" alt="兴业银行" className="tag-img swiper-lazy" />
                            <h3>广发银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/boco_icon.png" width="40" height="40" alt="建设银行" className="tag-img swiper-lazy" />
                            <h3>交通银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/spdb_icon.png" width="40" height="40" alt="中信银行" className="tag-img swiper-lazy" />
                            <h3>浦发银行</h3></a>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: '2vh' }}>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/boc_icon.png" width="40" height="40" alt="平安银行" className="tag-img swiper-lazy" />
                            <h3>中国银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/icbc_icon.png" width="40" height="40" alt="兴业银行" className="tag-img swiper-lazy" />
                            <h3>工商银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/bank_of_shanghai_icon.png" width="40" height="40" alt="建设银行" className="tag-img swiper-lazy" />
                            <h3>上海银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/cmbc_icon.png" width="40" height="40" alt="中信银行" className="tag-img swiper-lazy" />
                            <h3>民生银行</h3></a>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: '2vh' }}>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/cebb_icon.png" width="40" height="40" alt="平安银行" className="tag-img swiper-lazy" />
                            <h3>广大银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/citi_icon.png" width="40" height="40" alt="兴业银行" className="tag-img swiper-lazy" />
                            <h3>花旗银行</h3></a>
                        <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/cmb_icon.png" width="40" height="40" alt="建设银行" className="tag-img swiper-lazy" />
                            <h3>招商银行</h3></a>
                            <a href="javascript:void(0)" className="tag-link"><img style={{ transform: 'Translate(20%,0%)',visibility:'hidden' }} src="https://cres1.fenqile.cn/creditcard_m/img/v1/banks/ccb_icon.png" width="40" height="40" alt="建设银行" className="tag-img swiper-lazy" />
                            <h3> </h3></a>
                    </div>
                </div>
            </Carousel>
            </div>
        )
    }
}

export default Ccarousel;