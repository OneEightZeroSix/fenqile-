import React, { Component } from "react";
// import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import { Icon } from 'antd';
import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

const prompt = Modal.prompt;
// 页面组件 容器组件

class Lheader extends Component {
    state = {
        show: true,
        items: [
            <li key="0"><Icon type="sync" spin />支出</li>,
            <li key="1"><Icon type="sync" spin />支出</li>,
            <li key="2"><Icon type="sync" spin />支出</li>
        ],
        activeText:''
    };
    onClick = () => {
        this.setState({
            show: !this.state.show,
        });
    }

    onDig = () => {
        {  prompt('defaultValue', 'defaultValue for prompt', [
            { text: 'Cancel' },
            { text: 'Submit', onPress: value => this.onseart(value)  }
                                     
          ], 'default', '100')}
    }
    onseart(value){
        this.setState({activeText : value});
        this.onAdd(value)
    }

    onAdd = (value) => {
        let items = this.state.items;
        items.push(<li key={Date.now()}><Icon type="sync" spin />{`${value}`}</li>);
        this.setState({
            show: true,
            items,

        });
    }
    onRemove = () => {
        let items = this.state.items;
        items.splice(items.length - 1, 1);
        this.setState({
            show: true,
            items,
        });
    }
    componentWillUpdate (nextProps,nextState){
            
    }
    render() {
        return (
            <div className="code-box">
                <div className="code-box-demo">
                    <div className="queue-demo">
                        <div className="demo-content" >
                        <p className="buttons">
                            <Button type="primary" onClick={this.onClick}>切换</Button>
                            <Button onClick={this.onDig} style={{ marginLeft: 10 }}>添加</Button>
                            <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>删除</Button>
                        </p>
                            <div className="demo-thead" key="a" >
                                <ul>
                                    {/* <li />
                                    <li />
                                    <li /> */}
                                        <span style={{color:'#fff',marginLeft:'5vw',fontSize:'16px'}}>本日支出</span> 
                                           
                                </ul>
                            </div>
                            <div className="demo-tbody" key="b" >
                                <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
                                    {this.state.show ? this.state.items : null}
                                </QueueAnim>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Lheader;