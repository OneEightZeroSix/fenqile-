import React, { Component } from "react";
// import { Tabs } from 'antd-mobile';
import '../antd-mobile.css'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

// 页面组件 容器组件

const tabs = [
    {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '1'
    },
    { title: <img src="https://cimgs1.fenqile.com/ibanner2/M00/33/39/jagHAFvrx-OANFPHAAAXlfycWT0347_144x88.png" alt="#" className="imgauto" width="60" height="60" />, sub: '2' },
    { title: <img src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx-6AFRceAAAbWCOh2Mo858_144x88.png" alt="#" className="imgauto" width="60" height="60" />, sub: '3' },
    {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/33/39/jagHAFvrx_eAd2UPAAAYEfc4hPU464_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '4'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryJaAI9alAAAYj74JlwQ602_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '5'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/33/39/jagHAFvryJ6AfBN_AAAWQwc1ImE292_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '6'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvryKWAcUXxAAAVonnLEPM285_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '7'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryK2AXt2uAAAbhSLCRWA595_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '8'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryMOAIwMmAAAXu-4OKxw875_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '9'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryMmAN1kqAAAlLNbFB7c385_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '10'
    }
];

class XitemFloorCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _change: 1,
            list: [],
        }
    }

    loadMore() {
        React.axios.get("itemFloorCar.json").then((response) => {
            console.log(response.data.data.result_rows);
            this.setState({
                list: this.state.list.concat(response.data.data.result_rows)
            })
        }).catch(function (error) {
            console.log(error);
        });
    }
    // getRowDraw() {
    //     return (
    //         this.state.list.map((item, index) => {
    //             <li className="swiper-slide js-nav-sku-list-PRFL201811050042004 swiper-slide-active">
    //                 <a className="item" href="https://channel.m.fenqile.com/car/confirm.html?si=1798&amp;mi=118428">
    //                     <div className="item-img">
    //                         <img src={`${item.floor_list["0"].item_list["0"].sku_list.sku_pic}`} className="imgauto" />
    //                     </div>
    //                     <div className="item-info">
    //                         <div className="item-car-pay">首付0.87万</div>
    //                         <div className="item-car-price">月供2226元</div>
    //                         <div className="item-car-brand">POLO</div>
    //                     </div>
    //                 </a>
    //             </li>
    //         })

    //     )
    // }

    callback(key) {
        console.log(key);
        this.setState({ _change: key })
    }
    render() {
        return (
            <div>
                <div className="title-wrap">
                    <p className="detail-title">汽车分期</p>
                    <a className="title-more" href="https://channel.m.fenqile.com/car/index.html">更多车型</a>
                </div>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div className="swiper-container slider-seckill js-slider-car swiper-container-horizontal swiper-container-free-mode swiper-container-android" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <ul className="lists-pro swiper-wrapper js-nav-body-PRFL201811050042004">
                            {this.getRowDraw}
                        </ul>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of fourth tab
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of fifth tab
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of sixth tab
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of seventh tab
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of eighth tab
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of ninth tab
              </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of tenth tab
              </div>
                </Tabs>
                {/* <WhiteSpace /> */}
            </div>
        )
    }

    componentDidMount() {
        this.loadMore()
    }
}

export default XitemFloorCar;