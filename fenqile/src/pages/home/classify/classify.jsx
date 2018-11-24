import React, { Component } from "react";
import "./classify.scss"
import { Tabs } from 'antd-mobile';
// 页面组件 容器组件

class classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            tabs : [
            {title:'推荐'},
            {title:'手机'},
            {title:'电脑'},
            {title:'充值'},
            {title:'平板数码'},
            {title:'旅游/票务'},
            {title:'运动户外'},
            {title:'名表'},
            {title:'美妆'},
            {title:'时尚鞋服'},
            {title:'家电'},
            {title:'珠宝首饰'},
            {title:'箱包奢品'},
            {title:'乐器'},
            {title:'食品保健'},
            {title:'礼品'},
            {title:'教育'},
            {title:'汽车'},
            {title:'租房'}]
        }
        this.changeTabPosition = (tabPosition) => {
            this.setState({ tabPosition });
          }
    }
    loadMore() {
        React.axios.get("classify0.json").then((response) => {
                this.setState({
                    list: this.state.list.concat(response.data.result_rows)
                })
        }).catch(function (error) {
            console.log(error);
        });
    }
    header(item){
        return  (item.fe_pic_url? <div key={0}  className="channel-banner">
                            <a href="javascript:void(0)">
                            <img src={`${item.fe_pic_url}`} className="imgauto" style={{opacity: 1}}/>
                            </a>
                        </div>:"")
    }
    itemTitle(item){
        let html = [];
        let arr= item;
        for (let i = 0; i <arr.length; i++) {
            html.push(
                     <li key={i}>
                        <a  href="javascript:void">
                            <img src={`${arr[i].fe_pic_url}`} className="imgauto" width="52" height="52" style={{opacity: 1}}/>
                            <p>{arr[i].name}</p>
                        </a>
                    </li>
                )
        }
        return html
    }
    itemlab(arr){
        let xhtml = [];
        for(let i=1;i<arr.length;i++){
                xhtml.push(<section key={i} className="category-floor">
                            <div className="floor-title">
                                <p className="item-title">{arr[i].name}</p>
                            </div>
                            <ul className="floor-nav-three">
                                {this.itemTitle(arr[i].item_list)}
                            </ul>
                        </section>)   
        }
        return xhtml
    }
    render() {
        return (
        	<div className="cc">
            <div className="main-wrap">
                    
                    <Tabs  tabs={this.state.tabs} tabBarPosition={'left'} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />} swipeable={false} tabDirection={'vertical'}  >
                        {(()=>{
                               return( this.state.tabs.map((item, index)=> {
                                return (
                                        <div  key={index} className="nav-channel" id="sub_category_list">
                                             {(()=>{
                                                 let cti = this.state.list;
                                                if(cti.length==0){
                                                    return
                                                }
                                                let titi = cti[0];
                                                let cc = titi[`floor_list${index}`]
                                                for(let key in cc){
                                                    if(key==0){
                                                     return   this.header(cc[key])
                                                    }
                                                }
                                               
                                            })()}  
                                            {(()=>{
                                            
                                                 let cti = this.state.list;
                                                    if(cti.length==0){
                                                        return
                                                    }
                                                 let titi = cti[0];
                                                 let cc =  titi[`floor_list${index}`]
                                                return  this.itemlab(cc) 
                                            })()}
                                            </div>
                                    )
                            }))
                        })()}
                    </Tabs>
               
            </div>
           	</div>
        )
    }
     componentDidMount  () {
        this.loadMore()
    }
}

export default classify;
