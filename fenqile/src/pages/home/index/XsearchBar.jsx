import React, { Component } from "react";
import { Route } from "react-router-dom";
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

// 页面组件 容器组件


class XsearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
 					        <SearchBar placeholder="搜索" />
                 
            </div>
              
        )
    }
}
export default XsearchBar;