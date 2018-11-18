import React, { Component } from "react";
import Swiper from "../../../../node_modules/swiper/dist/js/swiper.js";
import "../../../../node_modules/swiper/dist/css/swiper.css";


// 页面组件 容器组件

class XitemFloor extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
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
				<a className="item" href="https://hui.m.fenqile.com?sku_id=MES201706291091813&amp;index=1">
					<div className="item-img">
						<img src="https://cimgs1.fenqile.com/product3/M00/91/97/RrQHAFvaV5SACPrjAAItPY1kHsA959_156x156.jpg" className="imgauto"/>
					</div>
					<div className="item-info">
						<div className="item-pay">
							<span><i>¥</i>59.9</span>
						</div>
						<div className="item-price">¥525</div>
					</div>
					<div className="pro-tag">超级秒杀</div>
				</a>
			</li>
			<li className="swiper-slide swiper-slide-next">
				<a className="item" href="https://hui.m.fenqile.com?sku_id=MES201802111669292&amp;index=2">
					<div className="item-img">
						<img src="https://cimgs1.fenqile.com/product3/M00/91/7A/RrQHAFvZUPCAXOkkAANsbVLRFA8245_156x156.jpg" className="imgauto"/>
					</div>
					<div className="item-info">
						<div className="item-pay">
							<span><i>¥</i>299</span>
						</div>
						<div className="item-price">¥549</div>
					</div>
				</a>
			</li>
			<li className="swiper-slide">
				<a className="item" href="https://hui.m.fenqile.com?sku_id=S201810310021691&amp;index=3">
					<div className="item-img">
						<img src="https://cimgs1.fenqile.com/product3/M00/91/C1/RbQHAFvZCvaAFe9mAAKfI3zVWps820_156x156.jpg" className="imgauto"/>
					</div>
					<div className="item-info">
						<div className="item-pay">
							<span><i>¥</i>3298</span>
						</div>
						<div className="item-price">¥3498</div>
					</div>
				</a>
			</li>
			<li className="swiper-slide">
				<a className="item" href="https://hui.m.fenqile.com?sku_id=MES201811132526280&amp;index=4">
					<div className="item-img">
						<img src="https://cimgs1.fenqile.com/product3/M00/82/BB/R7QHAFvqNxiAfGguAAEq5Vf-xSI150_156x156.jpg" className="imgauto"/>
					</div>
					<div className="item-info">
						<div className="item-pay">
							<span><i>¥</i>2499</span>
						</div>
						<div className="item-price">¥2599</div>
					</div>
				</a>
			</li>
			<li className="swiper-slide">
				<a className="item" href="https://hui.m.fenqile.com?sku_id=MES201712261565286&amp;index=5">
					<div className="item-img">
						<img src="//cres2.fenqile.cn/fenqile_m/img/default_bg--6e6b27f0fc.png" className="imgauto"/>
					</div>
					<div className="item-info">
						<div className="item-pay">
							<span><i>¥</i>119</span>
						</div>
						<div className="item-price">¥169</div>
					</div>
				</a>
			</li>
			<li className="swiper-slide">
				<a className="item" href="https://hui.m.fenqile.com?sku_id=MES201808232203591&amp;index=6">
					<div className="item-img">
						<img src="//cres2.fenqile.cn/fenqile_m/img/default_bg--6e6b27f0fc.png" className="imgauto"/>
					</div>
					<div className="item-info">
						<div className="item-pay">
							<span><i>¥</i>59</span>
						</div>
						<div className="item-price">¥498</div>
					</div>
				</a>
			</li>
			<li className="swiper-slide">
				<a className="item" href="https://hui.m.fenqile.com?sku_id=MES201810302443363&amp;index=7">
					<div className="item-img">
						<img src="//cres2.fenqile.cn/fenqile_m/img/default_bg--6e6b27f0fc.png" className="imgauto"/>
					</div>
					<div className="item-info">
						<div className="item-pay">
							<span><i>¥</i>73.9</span>
						</div>
						<div className="item-price">¥85</div>
					</div>
				</a>
			</li>
			<li className="swiper-slide">
				<a className="item" href="https://hui.m.fenqile.com?sku_id=MES201810212403805&amp;index=8">
					<div className="item-img">
						<img src="//cres2.fenqile.cn/fenqile_m/img/default_bg--6e6b27f0fc.png" className="imgauto"/>
					</div>
					<div className="item-info">
						<div className="item-pay">
							<span><i>¥</i>199</span>
						</div>
						<div className="item-price">¥299</div>
					</div>
				</a>
			</li>
			<li className="swiper-slide more-seckill">
				<a className="more-link" href="https://hui.m.fenqile.com">
					<div className="more-txt">
						<span>MORE</span> 查看更多
					</div>
				</a>
			</li>
		</ul>
	</div>
</section>
            </div>
        )
    }
}

export default XitemFloor;