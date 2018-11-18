import React, { Component } from "react";

// 页面组件 容器组件

class gift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gift: {
                Aimg: [`https://cimgs1.fenqile.com/ibanner2/M00/31/FB/jagHAFr6zkqAYPQRAACXkYNA-TE971_164x248.jpg`, `https://cimgs1.fenqile.com/ibanner2/M00/31/FB/jagHAFr6zluAb1M4AACD67G3dmU674_164x248.jpg`, `https://cimgs1.fenqile.com/ibanner2/M00/31/FB/jagHAFr6zlSAU7rKAACLyE8n8ic561_164x248.jpg`, `https://cimgs1.fenqile.com/ibanner/M00/03/15/wScJAFn7BhKAWfNZAAA6mLRAgMA105_164x248.jpg`],
                list: [{
                    name: "IUOC爱优士电子吸烟器",
                    des: "传统卷烟加热不燃烧、降焦减害，无需IQOS烟弹",
                    id: "MES201804171820972",
                    price: "37.19",
                    like: "358",
                    sales: "27",
                    Image: `https://cimgs1.fenqile.com/ibanner2/M00/32/08/jagHAFsD7MGANIapAAH2GUmqMlY054_280x280.jpg`
                },{
                    name: "GOC IN C 摇滚熊充电宝创意公仔小熊移动电源",
                    des: "一起感受摇滚的电力吧",
                    id: "MES201804171820972",
                    price: "13.57",
                    like: "808",
                    sales: "43",
                    Image: `https://cimgs1.fenqile.com/ibanner2/M00/00/50/jqgHAFpCKomATzzkAACdDF83M7o677_280x280.jpg`
                }]
            }

        }
    }

    render() {
        return ( 
            <div>
                 <section className="spacing js-need-handle">
                <div className="title-wrap">
                    <p className="detail-title">送个好礼物</p>
                </div>
                <ul className="gift-four">
                    {(()=>{
                        return this.state.gift.Aimg.map((item,index)=> {
                            return (<li key={index}>
                                        <a href="javascript:void(0)" >
                                            <img className="imgauto" src={`${item}`}  style={{opacity: 1}}/>
                                        </a>
                                    </li>
                                    )
                        })
                    })()}
                    
                </ul>
                <ul className="lists-gifts">
                     {(()=>{
                        return this.state.gift.list.map((item,index)=> {
                            return ( 
                                    <li key={index}>
                                        <a className="item" href="javascript:void(0)" >
                                            <div className="item-img">
                                            <img src={`${item.Image}`}  className="imgauto" style={{opacity: 1}}/>
                                            </div>
                                            <div className="item-info">
                                                <div className="info-top">
                                                    <h2 className="item-title">{item.name}</h2>
                                                    <p className="item-des">{item.des}</p>
                                                </div>
                                                <div className="item-pay"><span><i>¥</i>{item.price}</span>x36期</div>
                                                <div className="item-bottom">
                                                        <div className="item-love">
                                                            <i className="i-like"></i>
                                                            <p className="num-love">{item.like}人喜欢</p>
                                                        </div>
                                                        <div className="num-sales">已售{item.sales}件</div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                        })
                    })()}
                </ul>
                <a href="javascript:void(0)" className="more"> 查看更多 </a>
            </section>
            <section className="hot-classNamees spacing">
                <div className="title-wrap">
                    <p className="detail-title">乐信公益</p>
                </div>
                <section className="banner-wrap">
                    <ul className="banner-three clear js-need-handle">
                        <li>
                            <a href="javascript:void(0)" >
                                <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/5B/jqgHAFvpOU-AWjvNAAAuEss-iLg041_436x352.jpg" className="imgauto" style={{opacity: 1}}/>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" >
                                <img src="https://cimgs1.fenqile.com/ibanner2/M00/00/10/j6gHAFtMclaAM2s7AABXZ0m--nI193_436x352.jpg"  className="imgauto" style={{opacity: 1}}/>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/13/jagHAFsLwVSAc8VDAAAmgDW-lqc031_436x352.png" className="imgauto" style={{opacity: 1}}/>
                            </a>
                        </li>
                    </ul>
                </section>
            </section>
         </div>
          
        )
    }
}

export default gift;