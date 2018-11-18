import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Carousel } from 'antd';


// 页面组件 容器组件

class Xcarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div className="swiper-slide swiper-slide-duplicate" style="width: 414px;">
                        <a href="https://item.m.fenqile.com/shop/activity/7979.html">
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/62/jqgHAFvtJWKARFpqAAFMSkSIjQw068_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide" style="width: 414px;">
                        <a href="https://action.fenqile.com/VlVdTUlUVFxFSVZQWUZM/index.html?source=jvwuba" className="js-expose-item">
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/33/11/jagHAFvW1-SAdDktAAEIS3DNsJw684_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide" style="width: 414px;">
                        <a href="https://sale.fenqile.com/VlVdTUlUVFlFSVZRXEFJ/index.html">
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/33/3D/jagHAFvuYSWAQJ3_AADXFrxuvK0961_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide swiper-slide-prev" style="width: 414px;">
                        <a href="https://sale.fenqile.com/VlVdTUhRV19FSVVXXEdJ/index.html?is_auto=1" className="js-expose-item">
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/00/C7/j6gHAFvpHuWAOsYnAADe5zZp0iw820_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active" style="width: 414px;">
                        <a href="https://item.fenqile.com/MES201810022344037.html?sk=x21" className="js-expose-item" >
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/64/jqgHAFvue_WAfLnYAAJM6re-ens133_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide swiper-slide-next" style="width: 414px;">
                        <a href="https://sale.fenqile.com/VlVdTUhVVVRFSFxcWUBN/index.html?" className="js-expose-item">
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/00/D1/j6gHAFvuigGAJVQTAAGDkgJ0uZQ583_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide" style="width: 414px;">
                        <a href="https://sale.fenqile.com/VlVdTUlVVFlFSVZQXEBB/index.html?is_auto=1" className="js-expose-item" >
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/62/jqgHAFvtjoGAOZo-AADAwMFI3cE720_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide" style="width: 414px;">
                        <a href="https://vip.sale.fenqile.com/vip_week/index.html" className="js-expose-item" >
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/49/jqgHAFvf-g2AcEmsAADawiRxOvQ022_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide" style="width: 414px;">
                        <a href="https://item.m.fenqile.com/shop/activity/7979.html" className="js-expose-item">
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/32/62/jqgHAFvtJWKARFpqAAFMSkSIjQw068_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                    <div className="swiper-slide swiper-slide-duplicate" style="width: 414px;">
                        <a href="https://action.fenqile.com/VlVdTUlUVFxFSVZQWUZM/index.html?source=jvwuba" className="js-expose-item">
                            <img src="https://cimgs1.fenqile.com/ibanner2/M00/33/11/jagHAFvW1-SAdDktAAEIS3DNsJw684_750x320.jpg" alt="" className="imgauto" />
                        </a>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Xcarousel;