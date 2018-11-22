import React, { Component } from "react";
import 'ant-design-pro/dist/ant-design-pro.css';
import { Pie, yuan } from 'ant-design-pro/lib/Charts';
import { WaterWave } from 'ant-design-pro/lib/Charts';

const salesPieData = [
    {
        x: '家用电器',
        y: 4544,
    },
    {
        x: '食用酒水',
        y: 3321,
    },
    {
        x: '个护健康',
        y: 3113,
    },
    {
        x: '服饰箱包',
        y: 2341,
    },
    {
        x: '母婴产品',
        y: 1231,
    },
    {
        x: '其他',
        y: 1231,
    },
];

// 页面组件 容器组件

class Ltest extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>

            
            <Pie
                hasLegend
                title="销售额"
                subTitle="销售额"
                total={() => (
                    <span
                        dangerouslySetInnerHTML={{
                            __html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))
                        }}
                    />
                )}
                data={salesPieData}
                valueFormat={val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
                height={294}
            />
            <WaterWave
      height={161}
      title="补贴资金剩余"
      percent={40}
    />
            </div>
        )
    }
}

export default Ltest;