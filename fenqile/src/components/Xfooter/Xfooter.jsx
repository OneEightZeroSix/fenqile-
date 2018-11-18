import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './Xfooter.css';
// 页面组件 容器组件

class Xfooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:0,
            tabs:[{
                title:"首页",
                href:"indexbody",
                dot:true,
                backgroundImage:`url(//cres.fenqile.cn/mobile/img/nav/list/consume_on.png)`,
                backgroundImage1:`url(//cres.fenqile.cn/mobile/img/nav/list/consume.png)`
            },{
                title:"分类",
                href:"classify",
                dot:false,
                backgroundImage:`url(//cres.fenqile.cn/mobile/img/nav/list/class_on.png)`,
                backgroundImage1:`url(//cres.fenqile.cn/mobile/img/nav/list/class.png)`

            },{
                title:"乐卡",
                href:"cal",
                dot:false,
                backgroundImage:`url(//cres.fenqile.cn/mobile/img/nav/list/lecard_on.png)`,
                backgroundImage1:`url(//cres.fenqile.cn/mobile/img/nav/list/lecard.png)`

            },{
                title:"信用卡",
                href:"creditCard",
                dot:false,
                backgroundImage:`url("//cres.fenqile.cn/creditcard_m/img/v2/tab/icon/creditcard_actived_s.png")`,
                backgroundImage1:`url(//cres.fenqile.cn/creditcard_m/img/v2/tab/icon/creditcard_normal_s.png)`

            },{
                title:"我的",
                href:"mine",
                dot:false,
                backgroundImage:`url(//cres.fenqile.cn/mobile/img/nav/list/mine_on.png)`,
                backgroundImage1:`url(//cres.fenqile.cn/mobile/img/nav/list/mine.png)`

            },]  
        }
    }
    
    toggleTab(index,e){
        this.setState({
            tab:index
        })
    }
    render() {
        return (
           <div className="bottompd" id="bottom_sidebar">
                <div id="mini_nav" className="nav">
                    <ul>
                        {(()=>{
                            return  this.state.tabs.map((item,index)=>{
                                return  (<li onClick={this.toggleTab.bind(this,index)} key={index}>
                                            <Link to={ {pathname:`/home/${item.href}` }}  replace style={{color: this.state.tab===index? '#3B9BFF':'#666666'}} >
                                                 <span className="" style={{backgroundImage: this.state.tab===index? `${item.backgroundImage}`:`${item.backgroundImage1}`}}></span>
                                                 {item.title}                      
                                            </Link>
                                        </li>)
                            })

                        })()}
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Xfooter;
