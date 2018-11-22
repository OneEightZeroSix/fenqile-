import React, { Component } from "react";


// 页面组件 容器组件

class Mcomponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className="go-top" id="go_top"></div>
                <div className="shop-num" id="page_num">
                    <dl>
                        <dt id="current_page">2</dt>
                        <dd id="total_page">2</dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default Mcomponents;