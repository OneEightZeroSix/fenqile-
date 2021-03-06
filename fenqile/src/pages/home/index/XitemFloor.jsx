import React, { Component } from "react";
import CountDown from 'ant-design-pro/lib/CountDown';


import { Link } from "react-router-dom";
const targetTime = new Date().getTime() + 390000;

// 页面组件 容器组件

class XitemFloor extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
                 <section className="spacing" id="floor__wrap">
					<div className="title-wrap">
						<div className="detail-title">乐疯抢</div>
						<div className="time-wrap js-floor js-count-down-PRFL201710240024504" id="floor__title_wrap" style={{marginLeft: '33vw'}}>
							<span className="time-tip">距离本场结束</span>
							<span className="time-hour" role="timer">01</span> :
							<span className="time-min" role="timer">23</span> :
							<span className="time-sec" role="timer">48</span>
						</div>
					</div>
					<div style={{overflow:'auto'}} className="swiper-container slider-seckill js-floor js-slider-PRFL201710240024504 swiper-container-horizontal swiper-container-free-mode" id="floor__sku_wrap">
						<ul className="lists-pro swiper-wrapper">
							<li className="swiper-slide swiper-slide-active">
								<Link className="item" to={`/detail/`}>
									<div className="item-img">
										<img src="https://cimgs1.fenqile.com/product3/M00/91/97/RrQHAFvaV5SACPrjAAItPY1kHsA959_156x156.jpg" alt="#" className="imgauto"/>
									</div>
									<div className="item-info">
										<div className="item-pay">
											<span><i>¥</i>59.9</span>
										</div>
										<div className="item-price">¥525</div>
									</div>
									<div className="pro-tag">超级秒杀</div>
								</Link>
							</li>
							<li className="swiper-slide swiper-slide-next">
								<Link className="item" to={`/detail/`}>
									<div className="item-img">
										<img src="https://cimgs1.fenqile.com/product3/M00/91/7A/RrQHAFvZUPCAXOkkAANsbVLRFA8245_156x156.jpg" alt="#" className="imgauto"/>
									</div>
									<div className="item-info">
										<div className="item-pay">
											<span><i>¥</i>299</span>
										</div>
										<div className="item-price">¥549</div>
									</div>
								</Link>
							</li>
							<li className="swiper-slide">
								<Link className="item" to={`/detail/`}>
									<div className="item-img">
										<img src="https://cimgs1.fenqile.com/product3/M00/91/C1/RbQHAFvZCvaAFe9mAAKfI3zVWps820_156x156.jpg" alt="#" className="imgauto"/>
									</div>
									<div className="item-info">
										<div className="item-pay">
											<span><i>¥</i>3298</span>
										</div>
										<div className="item-price">¥3498</div>
									</div>
								</Link>
							</li>
							<li className="swiper-slide">
								<Link className="item" to={`/detail/`}>
									<div className="item-img">
										<img src="https://cimgs1.fenqile.com/product3/M00/82/BB/R7QHAFvqNxiAfGguAAEq5Vf-xSI150_156x156.jpg" alt="#" className="imgauto"/>
									</div>
									<div className="item-info">
										<div className="item-pay">
											<span><i>¥</i>2499</span>
										</div>
										<div className="item-price">¥2599</div>
									</div>
								</Link>
							</li>
							<li className="swiper-slide">
								<Link className="item" to={`/detail/`}>
									<div className="item-img">
										<img src="//cres2.fenqile.cn/fenqile_m/img/default_bg--6e6b27f0fc.png" alt="#" className="imgauto"/>
									</div>
									<div className="item-info">
										<div className="item-pay">
											<span><i>¥</i>119</span>
										</div>
										<div className="item-price">¥169</div>
									</div>
								</Link>
							</li>
							<li className="swiper-slide">
								<Link className="item" to={`/detail/`}>
									<div className="item-img">
										<img src="//cres2.fenqile.cn/fenqile_m/img/default_bg--6e6b27f0fc.png" alt="#" className="imgauto"/>
									</div>
									<div className="item-info">
										<div className="item-pay">
											<span><i>¥</i>59</span>
										</div>
										<div className="item-price">¥498</div>
									</div>
								</Link>
							</li>
							<li className="swiper-slide">
								<Link className="item" to={`/detail/`}>
									<div className="item-img">
										<img src="//cres2.fenqile.cn/fenqile_m/img/default_bg--6e6b27f0fc.png" alt="#" className="imgauto"/>
									</div>
									<div className="item-info">
										<div className="item-pay">
											<span><i>¥</i>73.9</span>
										</div>
										<div className="item-price">¥85</div>
									</div>
								</Link>
							</li>
							<li className="swiper-slide">
								<Link className="item" to={`/detail/`}>
									<div className="item-img">
										<img src="//cres2.fenqile.cn/fenqile_m/img/default_bg--6e6b27f0fc.png" alt="#" className="imgauto"/>
									</div>
									<div className="item-info">
										<div className="item-pay">
											<span><i>¥</i>199</span>
										</div>
										<div className="item-price">¥299</div>
									</div>
								</Link>
							</li>
							<li className="swiper-slide more-seckill">
								<Link className="more-link" to={`/list`}>
									<div className="more-txt">
										<span>MORE</span> 查看更多
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</section>
        )
    }
}

export default XitemFloor;
