import React, { Component } from "react";
import { Tabs, Select } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

// 页面组件 容器组件
const tabs = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
    { title: 'Third Tab', sub: '4' },
    { title: 'Third Tab', sub: '5' },
    { title: 'Third Tab', sub: '6' },
    { title: 'Third Tab', sub: '7' },
    { title: 'Third Tab', sub: '8' },
    { title: 'Third Tab', sub: '9' },
    { title: 'Third Tab', sub: '10' },
    { title: 'Third Tab', sub: '11' },
    { title: 'Third Tab', sub: '12' },
    { title: 'First Tab', sub: '13' },
    { title: 'Second Tab', sub: '14' },
    { title: 'Third Tab', sub: '15' },
    { title: 'Third Tab', sub: '16' },
    { title: 'Third Tab', sub: '17' },
    { title: 'Third Tab', sub: '18' },
    { title: 'Third Tab', sub: '19' },
    { title: 'Third Tab', sub: '20' },
    { title: 'Third Tab', sub: '21' },
    { title: 'Third Tab', sub: '22' },
    { title: 'Third Tab', sub: '23' },
    { title: 'Third Tab', sub: '24' },

];

class classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'top'
        }
        this.changeTabPosition = (tabPosition) => {
            this.setState({ tabPosition });
          }
    }
    render() {
        return (
            <div>
        <div style={{ marginBottom: 16 }}>
          Tab position：
          <Select value={this.state.tabPosition} onChange={this.changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select>
        </div>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
          <TabPane tab="Tab 4" key="4">Content of Tab 4</TabPane>
          <TabPane tab="Tab 5" key="5">Content of Tab 5</TabPane>
          <TabPane tab="Tab 6" key="6">Content of Tab 6</TabPane>
          <TabPane tab="Tab 7" key="7">Content of Tab 7</TabPane>
          <TabPane tab="Tab 8" key="8">Content of Tab 8</TabPane>
          <TabPane tab="Tab 9" key="9">Content of Tab 9</TabPane>
          <TabPane tab="Tab 10" key="10">Content of Tab 10</TabPane>
          <TabPane tab="Tab 11" key="11">Content of Tab 11</TabPane>
          <TabPane tab="Tab 12" key="12">Content of Tab 12</TabPane>
          <TabPane tab="Tab 13" key="13">Content of Tab 1</TabPane>
          <TabPane tab="Tab 14" key="14">Content of Tab 2</TabPane>
          <TabPane tab="Tab 15" key="15">Content of Tab 3</TabPane>
          <TabPane tab="Tab 16" key="16">Content of Tab 4</TabPane>
          <TabPane tab="Tab 17" key="17">Content of Tab 5</TabPane>
          <TabPane tab="Tab 18" key="18">Content of Tab 6</TabPane>
          <TabPane tab="Tab 19" key="19">Content of Tab 7</TabPane>
          <TabPane tab="Tab 20" key="20">Content of Tab 8</TabPane>
          <TabPane tab="Tab 21" key="21">Content of Tab 9</TabPane>
          <TabPane tab="Tab 22" key="22">Content of Tab 10</TabPane>
          <TabPane tab="Tab 23" key="23">Content of Tab 11</TabPane>
          <TabPane tab="Tab 24" key="24">Content of Tab 12</TabPane>
        </Tabs>
      </div>
        )
    }
}

export default classify;
