import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import Lazyload from 'r-img-lazyload';
import { Link } from "react-router-dom";

const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
}

class Mlist extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
        };
    }

    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }
    componentWillUnmount(){
         document.body.style.overflow = 'auto';
    }
    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(genData()),
                height: hei,
                refreshing: false,
                isLoading: false,
            });
        }, 1500);
    }
    
    onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true });
        // simulate initial Ajax
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                refreshing: false,
                isLoading: false,
            });
        }, 600);
    };
//当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold时调用
    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = [...this.rData, ...genData(++pageIndex)];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    };

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID}
                    style={{
                        padding: '0 15px',
                        backgroundColor: 'white',
                    }}
                >
                    <ul className="shop-list" id="sku_list">
                        <li className="shop-item js-sku-item">
                            <Link to={`/detail/`}>
                                <div className="item-img" style={{background:'url(https://cres.fenqile.com/res/mobile/res/img/app/imgbg.png) no-repeat',backgroundPositionX:'40%',backgroundPositionY:'30%'}}>
                                        <Lazyload throttleWait='5000' className="imgauto" src="https://cimg1.fenqile.com/product3/M00/0B/DF/RrQHAFsPs22AckAwAAIpuE0kkMg901.jpg" />
                                </div>
                                <div className="item-detail">
                                    <div className="item-top">
                                        <p className="item-txt">
                                            小米8 全网通4G手机
				</p>
                                        <div className="item-label js-sku-tag">
                                            <span>黑色</span>
                                            <span>6GB+64GB</span>
                                        </div>
                                    </div>
                                    <div className="item-price">
                                        <div className="price-all">
                                            <span>¥2499</span>
                                        </div>
                                        <div className="price-detail">
                                            <p className="month-price">
                                                <span className="price"><em>￥</em>103.37</span> x36期
					</p>
                                        </div>
                                        <div className="item-assess">
                                            <div className="own-shop-tag" >自营</div>
                                            <div className="shop-tag js-sku-label">
                                                免息
					</div>
                                            <div className="comment-tag js-comment-detail">2168条评价</div>
                                            <div className="good-comment-tag">97%好评</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        };
        return (<div>
                <ListView
                    key={this.state.useBodyScroll ? '0' : '1'}
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderHeader={() => <span></span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    renderRow={row}
                    renderSeparator={separator}
                    useBodyScroll={this.state.useBodyScroll}
                    style={this.state.useBodyScroll ? {} : {
                        height: this.state.height,
                        border: '1px solid #ddd',
                        margin: '5px 0',
                    }}
                    pullToRefresh={<PullToRefresh
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />}
                    onEndReached={this.onEndReached}
                    pageSize={5}
                />
            </div>);
    }
}

export default Mlist;