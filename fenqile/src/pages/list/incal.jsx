import React, { Component } from "react";
import "./incal.scss"
import {Provider, connect} from 'react-redux';
// 页面组件 容器组件

class incal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listshow:false,
            list:[],
            textlist:[]
        }
    }
    loadMore() {
        React.axios.get("list.json").then((response) => {
                this.setState({
                    list: this.state.list.concat(response.data.data.result_rows)
                })
        }).catch(function (error) {
            console.log(error);
        });
    }
    
    listshow(){
        this.setState({
            listshow: !this.state.listshow
        })
    }
    // 遍历生成第一页a选项
   onlist(obj){
     let balist = [];
     for(var key in obj){
        balist.push(
            <div key={key} className={key>2? 'more-title':''}><a onClick={this.oncli.bind(this)} href="javascript:;" className="list-title js-filter-item ">{obj[key].name}</a></div> 
            )
     }
        return balist;
   }
   // 第二页选项
   onlist1(obj){
     let delist = [];
     for(var key in obj){
        delist.push( <a  onClick={this.haslist.bind(this)} key={key} href="javascript:;" className="list-title js-filter-item ">{obj[key].name}</a>)
     }
        return delist;
   }
   // 展开关闭其中一项
   dbli(e){
    e.stopPropagation();
    e.preventDefault();
       let b = e.target.parentElement;
       while(b){
            if(b.classList.contains("js-second-filter-item-list")){
               b.classList.contains("classify-list")? b.classList.remove("classify-list"):b.classList.add("classify-list")
                return
            }
            b=b.parentElement;
       }
    }
    // 里层展开关闭
    deli(e){
    e.stopPropagation();
    e.preventDefault();
       let b = e.target.parentElement;
       while(b){
            if(b.classList.contains("js-first-filter-item-list")){
               b.classList.contains("list-wrap")? b.classList.remove("list-wrap"):b.classList.add("list-wrap")
                return
            }
            b=b.parentElement;
       }
    }
    // 第一次选中
    oncli(e){
         e.stopPropagation();
         e.preventDefault();
         let delist = e.target.parentElement.parentElement.parentElement.querySelectorAll('a');
         for (let i = 0; i < delist.length; i++) {
             delist[i].classList.remove("on")
         }
         let buff = e.target.parentElement.parentElement.previousSibling.lastChild.lastChild;
         e.target.classList.contains("on")?  e.target.classList.remove("on"):e.target.classList.add("on");
         e.target.classList.contains("on")? buff.innerText=e.target.innerText:buff.innerText ="";
    }
    // 里层选中
    haslist(e){
        e.stopPropagation();
         e.preventDefault();
          let delist = e.target.parentElement.childNodes;
         for (let i = 0; i < delist.length; i++) {
             delist[i].classList.remove("on")
         }
         this.refs.down.lastChild.firstChild.lastChild.lastChild.innerText=e.target.innerText;
         e.target.parentElement.previousSibling.lastChild.lastChild.innerText=e.target.innerText;
         e.target.classList.contains("on")?  e.target.classList.remove("on"):e.target.classList.add("on");
         this.listshow();
    }
    // 重置
    init(){
        let intarr=document.querySelectorAll(".list-title");
        let intcrr=document.querySelectorAll(".js-second-filter-item-list");
        let intbrr=document.querySelectorAll(".js-filter-selected-text")
        let intdrr=document.querySelectorAll(".js-second-filter-selected")
        console.log(intarr)
        for (let i = 0; i < intarr.length; i++) {
             intarr[i].classList.remove("on");
         }
         for (let i = 0; i < intbrr.length; i++) {
             intbrr[i].innerText="";
         }
          for (let i = 0; i < intcrr.length; i++) {
             intcrr[i].classList.remove("classify-list");
         }
          for (let i = 0; i < intdrr.length; i++) {
             intdrr[i].innerText="";
         }
         this.props.incalshow(false)
          this.setState({
                textlist: []
            })
    }
    // 确认
    isOK(){
        let intarr=document.querySelectorAll(".js-filter-selected-text");
        let num=[]
        for (let i = 0; i < intarr.length; i++) {
            if (intarr[i].innerText!="") {
                num.push(intarr[i].innerText)
            }
        }
        this.props.incalshow(false)
         this.setState({
                textlist: num
            })
       
    }
    render() {
        return (
            <section className="side-slide option-slide a" id="filtrate_wrap">
                <div  className={this.props.calshow? "js-g-fragment-layer":"js-g-fragment-layer hide"} style={{width: '100%'}}>
                    <div onClick={this.props.incalshow.bind(this,false)} className="fui-mask js-mask"></div>
                    <div  className="js-g-fragment-content  fui-f-ov" style={{height: '693px'}}>
                        <div className="choose-list">
                            <ul className="item-list" >
                            {(()=>{
                                return (
                                        this.state.list.map((item, index)=> {
                                            return (
                                                <li key={index} ref={index==0? "down":false} onClick={this.deli.bind(this)} className={index>0? "js-first-filter-item-list":"arrow-right-link"}>
                                                    <dl>
                                                        <dt className="js-filter-type">
                                                        {index==0?
                                                            <a onClick={this.listshow.bind(this)} href="javascript:;" className="list-title">
                                                                <span>{item.attr_descp}</span>
                                                                <span className="js-filter-selected-text"></span>
                                                            </a>
                                                            :
                                                            <a href="javascript:;"  className="list-title">
                                                                <span>{item.attr_descp}</span>
                                                                <span className="js-filter-selected-text"></span>
                                                            </a>}
                                                        </dt>
                                                        <dd className="clear js-brand-wrap">
                                                            {
                                                                index>0? this.onlist(item.attr_info): false
                                                            }
                                                        </dd>
                                                    </dl>
                                                </li>
                                                )
                                        })
                                    )
                            })()}
                                <div className={this.state.listshow? "choose-list show-left js-filter-type-list":"choose-list show-left hide js-filter-type-list"}>
                                    <div onClick={this.listshow.bind(this)} className="all-classify">
                                        <i className="g-return js-filter-type-list-back"></i>
                                        <p>类目</p>
                                    </div>
                                    <ul className="classify-list-wrap" >
                                       {(()=>{
                                        let data= {...this.state.list[0]}
                                        let obj = data.attr_info
                                        if(data==undefined){
                                            return
                                             }
                                              let balist1 = [];
                                             for(var key in obj){
                                                balist1.push(  <li key={key} onClick={this.dbli.bind(this)} className="js-second-filter-item-list ">
                                                            <dl>
                                                                <dt className="js-filter-type">
                                                                    <a href="javascript:;" className="list-title">
                                                                        <span>{obj[key].name}</span>
                                                                        <span className="js-second-filter-selected js-second-filter-selected-0-0"></span>
                                                                    </a>
                                                                </dt>
                                                                <dd>
                                                                    { this.onlist1(obj[key].sub_attrs) }
                                                                </dd>
                                                            </dl>
                                                        </li>)
                                             }
                                                return balist1;
                                       })()}
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        <div className="list-btn">
                            <a href="javascript:;" onClick={this.init.bind(this)} className="reset-btn" id="filter_reset">重置</a>
                            <a href="javascript:;" onClick={this.isOK.bind(this)}  className="confirm-btn" id="filter_confirm">确定</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    componentDidMount  () {
        this.loadMore();

        
    }
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
        incalshow(bol){
            dispatch({
                    type:"calshow",
                    calshow:bol
                })
        },
         toggleTab(index){
                dispatch({
                    type:"toggleTab",
                    tab:index
                })
        }
    }
})(incal);
