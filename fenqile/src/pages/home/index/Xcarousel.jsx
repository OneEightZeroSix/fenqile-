import React, { Component } from "react";
import { Carousel } from 'antd';


// 页面组件 容器组件

class Xcarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                "https://cimgs1.fenqile.com/ibanner2/M00/32/62/jqgHAFvtJWKARFpqAAFMSkSIjQw068_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/33/11/jagHAFvW1-SAdDktAAEIS3DNsJw684_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/33/3D/jagHAFvuYSWAQJ3_AADXFrxuvK0961_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/00/C7/j6gHAFvpHuWAOsYnAADe5zZp0iw820_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/32/64/jqgHAFvue_WAfLnYAAJM6re-ens133_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/00/D1/j6gHAFvuigGAJVQTAAGDkgJ0uZQ583_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/32/62/jqgHAFvtjoGAOZo-AADAwMFI3cE720_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/32/49/jqgHAFvf-g2AcEmsAADawiRxOvQ022_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/32/62/jqgHAFvtJWKARFpqAAFMSkSIjQw068_750x320.jpg",
                "https://cimgs1.fenqile.com/ibanner2/M00/33/11/jagHAFvW1-SAdDktAAEIS3DNsJw684_750x320.jpg"
            ]
        }
    }
    render() {
        return (
            <div>
                <Carousel autoplay>
                {(()=>{
                    if(this.props.list){
                     return  this.props.list.map((item, index)=> {
                            return (
                                    <div key={index} className="swiper-slide swiper-slide-duplicate" style={{width:'414px'}}>
                                        <a href="javascript:void(0)">
                                            <img src={`${item}`} alt="#" className="imgauto" />
                                        </a>
                                    </div>
                                )
                        })
                    }else{
                         return  this.state.list.map((item, index)=> {
                            return (
                                    <div key={index} className="swiper-slide swiper-slide-duplicate" style={{width:'414px'}}>
                                        <a href="javascript:void(0)">
                                            <img src={`${item}`} alt="#" className="imgauto" />
                                        </a>
                                    </div>
                                )
                        })
                    }
                })()}
                    
                    
                </Carousel>
            </div>
        )
    }
}

export default Xcarousel;