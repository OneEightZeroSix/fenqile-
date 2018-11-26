import React, {
    Component
}
from "react";


import {Link} from "react-router-dom";

import  { Picker,List } from 'antd-mobile';



class XhouseFoot extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isShowType: true,
            fordetail:'等额本息还款详情',
            allcontent:[{
                title: "贷款类型",
                content: '商业贷款',
                hasIcon: true
            }, {
                title: "贷款金额(万)",
                content: '',
                hasIcon: false
            }, {
                title: "期限(年)",
                content: '5',
                hasIcon: true
            }, {
                title: "利率(%)",
                content: '4.75',
                hasIcon: true
            }],
            typeMenucount:[{
                label:'商业贷款',
                value: "商业贷款"
            }, {
                label:"公积金贷款",
                value: "公积金贷款"
            }, {
                label:'组合贷款',
                title: "组合贷款"
            }],
            nowtype:'商业贷款',
            
            needTime:[5, 10, 15, 20, 25, 30],
            nowrate:[{
                title: "基准利率",
                rate: 1
                }, {
                    title: "7折利率",
                    rate: 0.7
                }, {
                    title: "8折利率",
                    rate: 0.8
                }, {
                    title: "8.3折利率",
                    rate: 0.83
                }, {
                    title: "8.5折利率",
                    rate: 0.85
                }, {
                    title: "8.8折利率",
                    rate: 0.88
                }, {
                    title: "9折利率",
                    rate: 0.9
                }, {
                    title: "9.5折利率",
                    rate: 0.95
                }, {
                    title: "1.05倍利率",
                    rate: 1.05
                }, {
                    title: "1.1倍利率",
                    rate: 1.1
                }, {
                    title: "1.2倍利率",
                    rate: 1.2
                }, {
                    title: "1.3倍利率",
                    rate: 1.3
                }, {
                    title: "1.4倍利率",
                    rate: 1.4
                }
            ]
        }
    }
    onChange(e){
        console.log(e)
    }
    onScrollChange(e){
        console.log(e)
    }
    render() {
        var newthis = this;
        return( 
            <div> 
                <div style = {{fontSize: '16px',width: '100vw'}} > 
                    <p style={{height: '30px',lineHeight: '30px',background:'#eaf4fe',color: '#747a7a',textAlign: 'center'}}>
                        {this.state.fordetail} 
                    < /p> 
                    {
                        this.state.allcontent.map(function(zitem, zidx) {
                        return <div className = "kinds" key={zidx} style = {{height: '50px',position: 'relative',lineHeight: '50px',paddingRight: '20px',marginLeft: '10px',borderBottom: '1px solid #e0e0e0'}}> 
                            < span style = {{float: 'left'}} > {zitem.title} < /span> 
                            {
                                (() => {
                                    if (zitem.content === "") {
                                        return <input type = "number"
                                        placeholder = "请输入金额"
                                        className = "inputmoney" / >
                                    } else {
                                        return <span style = {{float: 'right',paddingRight: '30px'}} > 
                                        {
                                            zitem.content
                                        } 
                                        < /span>
                                    }
                                })()
                            } 
                            {
                                (() => {
                                    if (zitem.hasIcon) {
                                        return <i style = {{float: 'right',display: 'inline-block'}}
                                        className = "i-jiantouo-right" > < /i>
                                    } else {
                                        return;
                                    }
                                })()
                            } 
                            < /div>
                        })
                    } 
                < /div>    
            < /div>
        )
    }
}
export default XhouseFoot;