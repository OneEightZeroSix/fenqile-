import React, { Component } from "react";

// 页面组件 容器组件

class Xbanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <section className="banner-wrap">
                    <ul className="banner-two clear js-need-handle">
                        <li>
                            <a href="javascript:void(0)">
                                <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner2/M00/00/CF/j6gHAFvtRuqACyVYAABaI9uOK04562_344x144.png" alt="#" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner2/M00/32/54/jqgHAFvmT6mAIPpKAABNR0cU0MI497_344x144.png" alt="#" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner2/M00/00/D1/j6gHAFvulRSAARpxAABoPVKj-6I274_344x144.png" alt="#" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner2/M00/00/7F/j6gHAFu-swqADKt5AABZacdWe_M471_344x144.png" alt="#" />
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Xbanner;