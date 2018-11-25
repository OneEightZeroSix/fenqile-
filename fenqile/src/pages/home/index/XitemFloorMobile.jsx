import React, { Component } from "react";
import { Tabs, Badge } from 'antd-mobile';
import Lazyload from 'r-img-lazyload';
import { Link } from "react-router-dom";
// 页面组件 容器组件
const tabs = [
    {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/53/jagHAFpwEj6AX0f2AAAEjHriZFM467_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '1'
    },
    { title: 
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/54/jagHAFpwE1eAfSzNAAAHkVbybW0189_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '2' 
    },
    { title: 
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/44/jqgHAFpwExOAdXZeAAAR4YRWnzU901_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '3' 
    },
    {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/43/jqgHAFpwEoCAaZzWAAAWATS_Ruo610_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '4'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/53/jagHAFpwErCAZRVkAAAMmFPbILk093_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '5'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/53/jagHAFpwEs2AFIzDAAAKfSKE7IA339_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '6'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/53/jagHAFpwEv6ASPpHAAAK7aZu96U906_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '7'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/43/jqgHAFpwEpmAPDblAAAEKJE48jM822_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '8'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/44/jqgHAFpwEy-AYt94AAAMM_m6VpU538_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '9'
    }, {
        title:
            <img src="https://cimgs1.fenqile.com/ibanner2/M00/03/44/jqgHAFpwE0WAPV_3AAAJJ144GZQ327_144x88.png" alt="#" className="imgauto" width="60" height="60" />
        , sub: '10'
    }
];

class XitemFloorMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	list:[]
        }
        this.getRowDraw = this.getRowDraw.bind(this)
    }
     loadMore() {
        React.axios.get("phone.json").then((response) => {
                this.setState({
                    list: this.state.list.concat(response.data.result_rows)
                })
        }).catch(function (error) {
            console.log(error);
        });
    }
      getRowDraw(arr) {
      	 if(arr==undefined){
	            return
	        }
        let data = {...arr}
        let bart= {...data.floor_list};
        let brr = {...bart[0].item_list}
        let crr=[];
        for(var key in brr){
           crr.push(brr[key])
        }
        return (
          crr.map((item, index) => {
                return(
                       <li key={index} className="js-nav-sku-list-PRFL201801300030002">
								<Link className="item" to={`/detail/${item.id}`}>
									<div className="item-img">
										<img src={`${item.fe_sku_pic}`} alt="#" className="imgauto" />
									</div>
									<div className="item-info">
										<div className="info-top">
											<h2 className="item-title">{item.sku_list[0].product_name}</h2>
											<div className="item-des">
											{(()=>{
												return(
													item.front_tab_list.map((item1, index)=> {
														return (
																<span key={index}>{item1}</span>
															)
													})
													)
											})()}
											</div>
										</div>
										<div className="item-price">
											<p className="leka">
												<em className="leka-price">¥{item.sku_list[0].amount}</em>
											</p>
											<div className="price text-decoration">¥{item.sku_list[0].mart_amount}</div>
										</div>
										<div className="item-pay">
											<span>
			                                    <i>¥</i>{item.sku_list[0].mon_pay}
			                                </span>{item.sku_list[0].fq_num_str}
										</div>
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
                <section className="spacing">
					<div className="title-wrap">
						<p className="detail-title">精品分期</p>
					</div>
				  	<Tabs tabs={tabs}
				        initialPage={0}
				        onChange={(tab, index) => {}}
				        onTabClick={(tab, index) => {}}
				    >
				     {
	                    (()=>{
		                        return (
		                                [0,1,2,3,4,5,6,7,8,9].map((item,index)=>{
		                                        return(
		                                                 <ul key={index} className="lists-pro-brand js-nav-body-PRFL201801300030002">
															{this.getRowDraw(data[index])}
														</ul>
		                                            )
		                                    })
		                            )
		                    }
	                    )()
	                }
				    </Tabs>
				</section>
            </div>
        )
    }
     componentDidMount  () {
        this.loadMore()
    }
}

export default XitemFloorMobile;