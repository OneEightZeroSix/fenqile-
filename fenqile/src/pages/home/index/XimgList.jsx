import React, { Component } from "react";


// 页面组件 容器组件

class XimgList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <ul className="index-nav clear js-change-background js-need-handle">
                    <li>
                        <a href="javascript:void(0)" >
                            <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner/M00/02/C1/wicJAFny8-eAa3Q2AAAcNlcTUS4928_96x96.png" alt="#" style={{opacity: 1}} />
                            <span className="js-change-font-color">新人红包</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner/M00/02/DA/wScJAFnvBBaAZuaOAAAfIF0CH8U533_96x96.png" alt="#" style={{opacity: 1}} />
                            <span className="js-change-font-color">取现</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" >
                            <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner/M00/02/DA/wScJAFnvBCaAfgzfAAAh5elPn_c863_96x96.png" alt="#" style={{opacity: 1}} />
                            <span className="js-change-font-color">乐花借款</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" >
                            <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner/M00/02/B3/wicJAFnvBDqAF7gCAAAaz3hmlmI290_96x96.png" alt="#" style={{opacity: 1}} />
                            <span className="js-change-font-color">乐还款</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" >
                            <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner/M00/02/B3/wicJAFnvBE-AUniGAAAiogTEaHo835_96x96.png" alt="#" style={{opacity: 1}} />
                            <span className="js-change-font-color">娱乐充值</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default XimgList;