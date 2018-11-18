import React, { Component } from "react";

// 页面组件 容器组件

class recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song_list:[]
        }
    }
    loadMore() {
        React.axios.get("recommend.json").then((response) => {
            this.setState({
                song_list: this.state.song_list.concat(response.data.result_rows)
            })
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return ( 
           <section className="spacing">
                <div className="title-wrap">
                    <p className="detail-title">为你推荐</p>
                </div>
                <ul className="shop-two-list js-floor" id="recommend_ul">
                      {(()=>{
                        return this.state.song_list.map((item,index)=> {
                            return (
                                    <li key={index} className="shop-item">
                                      <a className="item js-recommend-sku" href="javascript:void(0)" data-guid={`${item.id}`}>
                                            <div className="item-img">
                                                <img className="imgauto" src={`${item.fe_sku_pic}`}  style={{opacity: 1}}/>
                                            </div>
                                            <p className="item-title">{item.product_name}</p>
                                            <div className="item-price">
                                                <p className="leka">
                                                    <em className="leka-price">¥{item.amount}</em>
                                                </p>
                                            <div className="price text-decoration">¥{item.mart_amount}</div>
                                           </div>
                                            <div className="item-pay">
                                                <span className="item-pay-num"><i>¥</i>{item.mon_pay}</span>
                                                <span className="item-month">{item.fq_num_str}</span>
                                            </div>
                                            <div className="item-assess">
                                                {(()=>{
                                                    if(item.op_flags.sku_label_list){
                                                        return item.op_flags.sku_label_list.map((item1, index)=> {
                                                            return (
                                                                    <span key={index} className="shop-tag">{item1.text_single}</span>
                                                                )
                                                        })
                                                    }
                                                })()}
                                            </div>
                                        </a>
                                    </li>
                                    )
                        })
                    })()}
                    
                </ul>
            </section>
        )
    }

     componentDidMount() {
        this.loadMore()
    }
}

export default recommend;