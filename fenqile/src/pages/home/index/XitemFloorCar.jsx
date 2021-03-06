import React, { Component } from "react";
import '../antd-mobile.css'
import { Tabs, Badge } from 'antd-mobile';
import Lazyload from 'r-img-lazyload';
import { Link } from "react-router-dom";
// 页面组件 容器组件

const tabs = [
    {
        title:
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx9mAG904AAApWNBHhz8528_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '1'
    },
    { title: 
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/33/39/jagHAFvrx-OANFPHAAAXlfycWT0347_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '2' },
    { title: 
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvrx-6AFRceAAAbWCOh2Mo858_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '3' },
    {
        title:
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/33/39/jagHAFvrx_eAd2UPAAAYEfc4hPU464_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '4'
    }, {
        title:
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryJaAI9alAAAYj74JlwQ602_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '5'
    }, {
        title:
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/33/39/jagHAFvryJ6AfBN_AAAWQwc1ImE292_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '6'
    }, {
        title:
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/00/CD/j6gHAFvryKWAcUXxAAAVonnLEPM285_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '7'
    }, {
        title:
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryK2AXt2uAAAbhSLCRWA595_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '8'
    }, {
        title:
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryMOAIwMmAAAXu-4OKxw875_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '9'
    }, {
        title:
            <Lazyload src="https://cimgs1.fenqile.com/ibanner2/M00/32/60/jqgHAFvryMmAN1kqAAAlLNbFB7c385_144x88.png" alt="#" className="imgauto" width="60" height="60" />
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
        // this.getRow = this.getRow.bind(this)
        this.getRowDraw = this.getRowDraw.bind(this)
    }

    loadMore() {
        React.axios.get("itemFloorCar.json").then((response) => {
                this.setState({
                    list: this.state.list.concat(response.data.data.result_rows)
                })
            
           
        }).catch(function (error) {
            console.log(error);
        });
    }
    getRowDraw(arr) {
        let data = {...arr}
        let bart= {...data.list};
        let brr = {...bart.item_list}
        if(brr.sku_list==undefined){
            return
        }
        return (
            brr.sku_list.map((item, index) => {
                return(
                        <li key={index} className="swiper-slide js-nav-sku-list-PRFL201811050042004 swiper-slide-active">
                            <Link className="item" to={`/detail/${item.sku_id}`}>
                                <div className="item-img">
                                    <Lazyload src={`${item.sku_pic[0]}`} className="imgauto" />
                                </div>
                                <div className="item-info">
                                    <div className="item-car-pay">{item.amount}</div>
                                    <div className="item-car-price">{item.mon_pay_str}</div>
                                    <div className="item-car-brand">{item.product_name}</div>
                                </div>
                            </Link>
                        </li>
                    )
                
            })
        )
    }
    render() {
         let data = {...this.state.list}
        return (
            <div>
                <div className="title-wrap">
                    <p className="detail-title">汽车分期</p>
                    <a className="title-more" href="javascript:void(0)">更多车型</a>
                </div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    swipeable={false}
                    onChange={(tab, index) => {}}
                    onTabClick={(tab, index) => {}}
                >
                {
                    (()=>{
                        return (
                                [0,1,2,3,4,5,6,7,8,9].map((item,index)=>{
                                        return(
                                                <div key={index} className="swiper-container slider-seckill js-slider-car swiper-container-horizontal swiper-container-free-mode swiper-container-android" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                                   <ul className="lists-pro swiper-wrapper " style={{'overflowX':'auto'}}>
                                                       {this.getRowDraw(data[index])}
                                                   </ul>
                                               </div>
                                            )
                                    })
                            )
                    }
                    )()
                }
               
               
                </Tabs>

            </div>
        )
    }
    componentDidMount  () {
        this.loadMore()
    }
}

export default XitemFloorCar;