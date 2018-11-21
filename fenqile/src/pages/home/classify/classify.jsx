import React, { Component } from "react";
import "./classify.css"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
// 页面组件 容器组件
const tabs = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
    { title: 'Third Tab', sub: '4' },
    { title: 'Third Tab', sub: '5' },
    { title: 'Third Tab', sub: '6' },
    { title: 'Third Tab', sub: '7' },
    { title: 'Third Tab', sub: '8' },
    { title: 'Third Tab', sub: '9' },
    { title: 'Third Tab', sub: '10' },
    { title: 'Third Tab', sub: '11' },
    { title: 'Third Tab', sub: '12' },
    { title: 'First Tab', sub: '13' },
    { title: 'Second Tab', sub: '14' },
    { title: 'Third Tab', sub: '15' },
    { title: 'Third Tab', sub: '16' },
    { title: 'Third Tab', sub: '17' },
    { title: 'Third Tab', sub: '18' },
    { title: 'Third Tab', sub: '19' },
    { title: 'Third Tab', sub: '20' },
    { title: 'Third Tab', sub: '21' },
    { title: 'Third Tab', sub: '22' },
    { title: 'Third Tab', sub: '23' },
    { title: 'Third Tab', sub: '24' },

];

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
        React.axios.get("/api").then((response) => {
            console.log(response)
                // this.setState({
                //     list: this.state.list.concat(response.data.data.result_rows)
                // })
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="main-wrap">
                <Tabs tabPosition={'left'} size={'small'} tabBarStyle={{'.ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar .ant-tabs-tab': 'text-align: center;'}}>
                    {(()=>{
                           return( this.state.tabs.map((item, index)=> {
                            return (
                                 <TabPane tab={item} key={index}>
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
        )
    }
     componentDidMount  () {
        this.loadMore()
    }
}

export default classify;
