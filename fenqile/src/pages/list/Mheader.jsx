import React, { Component } from "react";
import {Provider, connect} from 'react-redux';

// 页面组件 容器组件
import {createHashHistory} from 'history';


const history = createHashHistory();
class Mheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="header-top-spacing js-top-wrapper" id="search_header">
            <div className="header">
                <div className="search-header" id="search_wrap">
                    <a onClick={history.goBack} className="g-return" id="global_header_url"></a>
                    <div className="search-wrap">
                        <i className="iconfont wf-new-search"></i>
                        <div className="search-inner">
                            <form action="" id="search_form">
                                <input type="text" className="search-text" name="w" id="search_keyword"  placeholder="电脑12期免息 每满1000减100" />
                            </form>
                        </div>
                        <i className="delete-txt-icon hide js-clear"></i>
                    </div>
                    <a href="javascript:void(0)" className="delete-text js-search-entering js-search-related hide" id="cancel_search" >取消</a>
                    <a href="javascript:void(0)" className="nav-icon-two js-search-related" id="switch_col"></a>
                </div>
                <ul className="search-list-nav" id="nav_tab">
                    <li className="js-nav-tab js-sort on" >
                        <a href="javascript:void(0)">综合</a>
                    </li>

                    <li className="js-nav-tab js-sort" >
                        <a href="javascript:void(0);">销量</a>
                    </li>

                    <li className="js-nav-tab js-sort">
                        <a href="javascript:void(0)">
                            价格
                                    <span className="arrow-icon">
                                        <i className="up js-sort-amount"></i>
                                        <i className="down js-sort-amount"></i>
                                    </span>
                        </a>
                    </li>
                    <li className="js-nav-tab" id="filter_product" >
                        <a href="javascript:void(0)" onClick={this.props.incalshow.bind(this,true)}>筛选</a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
        incalshow(bol){
            dispatch({
                    type:"calshow",
                    calshow:bol
                })
        }
    }
}) (Mheader);