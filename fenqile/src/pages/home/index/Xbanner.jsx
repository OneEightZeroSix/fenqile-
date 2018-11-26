import React, { Component } from "react";
import { Link } from "react-router-dom";
// 页面组件 容器组件

class Xbanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Aimg:[
                `https://cimgs1.fenqile.com/ibanner2/M00/00/CF/j6gHAFvtRuqACyVYAABaI9uOK04562_344x144.png`,
                `https://cimgs1.fenqile.com/ibanner2/M00/32/54/jqgHAFvmT6mAIPpKAABNR0cU0MI497_344x144.png`,
                `https://cimgs1.fenqile.com/ibanner2/M00/00/D1/j6gHAFvulRSAARpxAABoPVKj-6I274_344x144.png`,
                `https://cimgs1.fenqile.com/ibanner2/M00/00/7F/j6gHAFu-swqADKt5AABZacdWe_M471_344x144.png`
            ]
        }
    }
    render() {
        return (
            <div>
                <section className="banner-wrap">
                    <ul className="banner-two clear js-need-handle">
                    {(()=>{
                        if(this.props.Aimg){
                            return this.props.Aimg.map((item, index)=> {
                                return (
                                        <li key={index}>
                                            <Link to={`/phone`}>
                                                <img className="imgauto" src={item} alt="#" />
                                            </Link>
                                        </li>
                                    )
                            })
                        }else{
                            return this.state.Aimg.map((item, index)=> {
                                return (
                                        <li key={index}>
                                            <Link to={`/phone`}>
                                                <img className="imgauto" src={item} alt="#" />
                                            </Link>
                                        </li>
                                    )
                            })
                        }
                    })()}
                    </ul>
                </section>
            </div>
        )
    }
}

export default Xbanner;