import React, { Component } from "react";


// 页面组件 容器组件

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
                    <a href="javascript:;" className="g-return" id="global_header_url"></a>
                    <div className="search-wrap">
                        <i className="iconfont wf-new-search"></i>
                        <div className="search-inner">
                            <form action="" id="search_form">
                                <input type="text" className="search-text" name="w" id="search_keyword" value="" placeholder="电脑12期免息 每满1000减100" />
                            </form>
                        </div>
                        <i className="delete-txt-icon hide js-clear"></i>
                    </div>
                    <a href="javascript:;" className="delete-text js-search-entering js-search-related hide" id="cancel_search" data-fql-stat="BTN_BACK">取消</a>
                    <a href="javascript:;" className="nav-icon-two js-search-related" id="switch_col" data-col="1"></a>
                </div>
                <ul className="search-list-nav" id="nav_tab">
                    <li className="js-nav-tab js-sort on" data-sort-field="default" data-fql-stat="BTN_SORT_DEFAULT">
                        <a href="javascript:;">综合</a>
                    </li>

                    <li className="js-nav-tab js-sort" data-sort-field="sku_sell_num" data-fql-stat="BTN_SORT_SELL_NUM">
                        <a href="javascript:;">销量</a>
                    </li>

                    <li className="js-nav-tab js-sort" data-sort-field="amount" data-fql-stat="BTN_SORT_PRICE">
                        <a href="javascript:;">
                            价格
                                    <span className="arrow-icon">
                                        <i className="up js-sort-amount"></i>
                                        <i className="down js-sort-amount"></i>
                                    </span>
                        </a>
                    </li>
                    <li className="js-nav-tab" id="filter_product" data-fql-stat="BTN_SHOW_FILTER">
                        <a href="javascript:;">筛选</a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Mheader;