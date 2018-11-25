import React, { Component } from "react";


// 页面组件 容器组件

class Mcomponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    goTop(){
       
        var timer = setInterval(function(){
             let el = document.querySelector(".am-list-view-scrollview")
            var currentTop = el.scrollTop;
            var speed = -Math.floor((currentTop-0)/5);
            currentTop += speed;
            el.scrollTop=currentTop
            if(currentTop<=5){
                clearInterval(timer);
            }
        },30)
    }
    render() {
        return (
            <div>
                <div onClick={this.goTop.bind(this)} className="go-top" id="go_top"></div>
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