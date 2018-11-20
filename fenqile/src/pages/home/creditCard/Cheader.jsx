import React, { Component } from "react";

// 页面组件 容器组件

class Cheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
                <div className="app-header-placeholder">
                    <div className="app-header">
                        <div className="app-header-main">
                            <div className="app-header-left-placeholder"></div>
                            <h1 className="app-header-title">信用卡</h1>
                            <a href="#" className="app-header-right">
                            </a>
                        </div>
                        <div className="app-header-line"></div>
                    </div>
                </div>
        )
    }
}

export default Cheader;