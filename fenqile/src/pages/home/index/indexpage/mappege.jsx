import React, { Component } from "react";

// 页面组件 容器组件

class mappege extends Component {
    constructor(props) {
        super(props);
        this.state = {
             libox:{
                    Aimg:`https://cimgs1.fenqile.com/product3/M00/94/D3/RbQHAFvqjEWAUHRkAALG7vxdPvE934_750x240.jpg`,
                     list:[{
                        name:"首页",
                        id:"MES201804171820972",
                        tag:["免息","券"],
                        price:"¥629",
                        itemPay:"26.02",
                        Image:`https://cimgs1.fenqile.com/product3/M00/03/12/RrQHAFrVpBaAKAyWAATV4n89dmw928_170x170.jpg`
                    },{
                        name:"分类",
                        id:"MES201803221740618",
                        tag:["免息","满减"],
                        price:"¥359",
                        itemPay:"14.85",
                        Image:`https://cimgs1.fenqile.com/product/M00/E4/DF/hhoGAFqzdw2AI-WKAAOSv90Uydg779_170x170.jpg`
                    },{
                        name:"乐卡",
                        id:"MES201804041779742",
                        tag:["免息","满减"],
                        price:"¥299",
                        itemPay:"12.37",
                        Image:`https://cimgs1.fenqile.com/product3/M00/00/A5/RrQHAFrEcDyANlyUAAJvPR1B1hw472_170x170.jpg`
                    }] 
             }
            
        }
    }

    render() {
        return (
            <section className="spacing js-need-handle">
                <div className="title-wrap">
                    <p className="detail-title">大牌特卖</p>
                    <a className="title-more" href="javascript:void(0)" >更多大牌</a>
                </div>
                <div className="sale-wrap">
                    <a href="javascript:void(0)"  className="sale-brand">
                        <img className="imgauto" alt="#" src={`${this.state.libox.Aimg}`} style={{opacity: 1}}/>
                        <div className="active-time"> 距离结束还剩<span  >1</span>天  </div>
                    </a>
                    <ul className="lists-pro-three">
                    {(()=>{
                            return this.state.libox.list.map((item,index)=>{
                                return (
                                        <li key={index} data-guid={`${item.id}`}>
                                            <a className="item" href="javascript:void(0)">
                                              <div className="item-img">
                                                <img className="imgauto" alt="#" src={item.Image}/>
                                              </div>
                                              <div className="item-info">
                                                <div className="off-tag-wp">
                                               {
                                               　　 item.tag.map(function(item1, index) {
                                                   　　return (<span  key={index} className="shop-tag">{item1}</span>);
                                                　　})
                                            　　}
                                                 </div>
                                                <p className="leka">
                                                  <em className="leka-price">{item.price}</em></p>
                                                <div className="item-pay">
                                                  <span className="item-pay-num">
                                                    <i>¥</i>{item.itemPay}</span>
                                                  <span className="item-month">x36期</span>
                                                </div>
                                              </div>
                                            </a>
                                        </li>
                                    )
                            })
                     })()}
                    </ul>
                </div>
                <a href="javascript:void(0)" id="_more_url" className="more"> 查看更多</a>
            </section>
        )
    }
}

export default mappege;
