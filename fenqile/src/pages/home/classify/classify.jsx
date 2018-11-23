import React, { Component } from "react";
import "./classify.scss"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
// 页面组件 容器组件

class classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            tabs : ['推荐','手机','电脑','充值','平板数码','旅游/票务','运动户外','名表','美妆','时尚鞋服','家电','珠宝首饰','箱包奢品','乐器','食品保健','礼品','教育','汽车','租房']
        }
        this.changeTabPosition = (tabPosition) => {
            this.setState({ tabPosition });
          }
    }
    loadMore() {
        React.axios.get("classify0.json").then((response) => {
            console.log(response.data.result_rows)
                this.setState({
                    list: this.state.list.concat(response.data.result_rows)
                })
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
        	<div className="cc">
            <div className="main-wrap">
                
                    <Tabs tabPosition={'left'} size={'small'} useOnPan={true} >
                        {(()=>{
                               return( this.state.tabs.map((item, index)=> {
                                return (
                                     <TabPane tab={item} key={index}  onTabClick={(tab, index) => { console.log('onTabClick', index, tab)}}>
                                            <div className="nav-channel" id="sub_category_list">
                                                <div className="channel-banner">
                                                    <a href="javascript:void(0)">
                                                    <img src="https://cimg1.fenqile.com/ibanner2/M00/33/34/jagHAFvpIHiAG-P5AAB6SgRMbGY218.jpg"  className="imgauto" style={{opacity: 1}}/>
                                                    </a>
                                                </div>
                                                <section className="category-floor">
                                                    <div className="floor-title">
                                                        <p className="item-title">数码畅销榜</p>
                                                    </div>
                                                    <ul className="floor-nav-three">
                                                    <li>
                                                        <a href="javascript:void">
                                                        <img src="https://cimg1.fenqile.com/ibanner2/M00/00/28/jagHAFow1eCAMFZaAAAOhQ3etoE844.png" className="imgauto" width="52" height="52" style={{opacity: 1}}/>
                                                        <p>苹果</p>
                                                        </a>
                                                    </li>
                                                    </ul>
                                                </section>
                                            </div>
                                     </TabPane>
                                    )
                            }))
                        })()
                        }
                     
                    </Tabs>
               
            </div>
           	</div>
        )
    }
     componentDidMount  () {
        this.loadMore()
    }
}

export default classify;
