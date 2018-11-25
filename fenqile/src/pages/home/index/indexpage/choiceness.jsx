import React, { Component } from "react";
import { Link } from "react-router-dom";
// 页面组件 容器组件

class choiceness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Aimg: [`https://cimgs1.fenqile.com/ibanner2/M00/00/3D/j6gHAFt7heiAcEPyAAAacRx0gGQ549_436x352.png`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/32/EF/jagHAFvAT0OAMQV2AABU5szmtis813_436x352.jpg`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/32/52/jqgHAFvlAVmAJNWhAABBJMM_OIw112_436x352.jpg`, 
                    `https://cimgs1.fenqile.com/ibanner2/M00/33/2C/jagHAFvlAaCAIs9MAABT1ymsiTE639_436x352.jpg`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/00/C4/j6gHAFvm40OAFwdiAAAp3eVgmtQ920_436x352.png`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/2C/E1/jagHAFrKwxGAcIAJAAAY5hqcV9s445_436x352.png`
                    ],
            Bimg:[`https://cimgs1.fenqile.com/ibanner2/M00/32/64/jqgHAFvunn6ASL56AAA4olfOEhU520_344x144.jpg`,
                    `https://cimgs1.fenqile.com/ibanner/M00/02/DE/wScJAFnwQ4CAY-QOAAAgHVLg4f4564_344x144.png`,
                    `https://cimgs1.fenqile.com/ibanner/M00/02/DE/wScJAFnwQ4WAKzgEAAAcfT-tSz4161_344x144.png`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/32/53/jqgHAFvlSfiAIyh-AABUITZuoC4387_344x144.png`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/19/ED/jagHAFqcyVSACUy0AAAh5JrGCYA356_344x144.jpg`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/00/38/jqgHAFo3fRKAGnqGAABIs0BxFbQ116_344x144.png`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/32/DA/jagHAFurTn6AbnnfAABY4_8khhY197_344x144.png`,
                    `https://cimgs1.fenqile.com/ibanner2/M00/00/98/j6gHAFvP5eKANsBxAAAvKBMUdjg432_344x144.jpg`
                    ],
        }
    }

    render() {
        return ( 
            <div>
                <section className="hot-classNamees spacing">
                    <div className="title-wrap">
                        <p className="detail-title">精选品牌</p>
                    </div>
                    <section className="banner-wrap">
                        <ul className="banner-three clear js-need-handle">
                            {(()=>{
                                return (
                                        this.state.Aimg.map((item,index)=> {
                                            return (
                                                    <li key={index}>
                                                        <Link to={`/list`}>
                                                            <img src={`${item}`} className="imgauto" alt="#" style={{opacity: 1}}/>
                                                        </Link>
                                                    </li>
                                                )
                                        })
                                                    
                                    )
                            })()}                            
                        </ul>
                    </section>
                </section>
                <section className="hot-market spacing">
                    <div className="title-wrap">
                        <p className="detail-title">逛一逛</p>
                    </div>
                    <ul className="banner-two clear js-need-handle">
                        {(()=>{
                                return (
                                        this.state.Bimg.map((item,index)=> {
                                            return (
                                                    <li key={index}>
                                                        <Link  to={`/list`} >
                                                            <img src={`${item}`} className="imgauto" alt="#" style={{opacity: 1}}/>
                                                        </Link>
                                                    </li>
                                                )
                                        })
                                                    
                                    )
                            })()}
                    </ul>
                </section>
            </div>
        )
    }
}

export default choiceness;