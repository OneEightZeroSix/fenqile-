import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, { Component } from "react";
import './swipeDelete.scss';
import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import { Drawer, Tabs, List, NavBar, Icon } from 'antd-mobile';
import { isNumber } from 'util';
import { Popover, Calendar, Card } from 'antd';
import zhCN from 'antd/lib/calendar/locale/zh_CN';
import './iconfont.css';

class Ltest3 extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'queue-demo',
  };

  constructor(props) {
    super(props);
    this.openIndex = null;
    this.position = {};
    this.state = {
      acitveLevel:1,
      activeClassify:'',
      food: 1,
      drink: 1,
      tra: 1,
      shopping: 1,
      ent: 1,
      housing: 1,
      threeC: 1,
      med: 1,
      misc: 1,
      visible: false,
      activeDate: '',
      open2: false,
      open3: false,
      activeText: '食品店',
      open: false,
      key: 4,
      monny: 0,
      dataArray: [
        {
          img: 'http://localhost:3000/images/settings-budget.png',
          text: '本日支出',
          price: '￥100',
          key: 0,
        }
      ],
      animation: [],
      style: [],
      isShowLevelUp:false
    };
  }

  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', backgroundColor: 'rgba(72,184,229,1)' }}>
      <p >{tab.data}</p>
    </div>);

  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener('touchend', this.onTouchEnd);
      window.addEventListener('mouseup', this.onTouchEnd);
    } else {
      window.attachEvent('ontouchend', this.onTouchEnd);
      window.attachEvent('onmouseup', this.onTouchEnd);
    }
  }



  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('touchend', this.onTouchEnd);
      window.removeEventListener('mouseup', this.onTouchEnd);
    } else {
      window.detachEvent('onresize', this.onTouchEnd);
      window.detachEvent('onmouseup', this.onTouchEnd);
    }
  }

  onClose = () => {
    this.setState({ open: false })
    let value = this.refs.value.value
    let remark = this.refs.value2.value
    if(remark==""){
      remark="支出"
    }
    localStorage.activeValue = value
    localStorage.activeRemark = remark
    let key = this.state.key
    let dataArray = this.state.dataArray;
    let activeImg = localStorage.activeImg;
    let activeText = localStorage.activeValue;
    let activeRemark = localStorage.activeRemark;
    let activeClassify = localStorage.activeClassify;
    this.setState({activeClassify: activeClassify,isShowLevelUp:true})
    let obj = {
      img: activeImg,
      text: activeRemark,
      price: activeText,
      key: key,
    }
    dataArray.push(obj);
    this.setState({ dataArray });
    key = key + 1
    this.setState({ key })
    switch (activeClassify) {
      case 'food':
        let _food = this.state.food
        _food++;
        if (_food >= 6) {
          this.setState({ food: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ food: _food,activeLevel:_food });
        }
        break;
      case 'drink':
        let _drink = this.state.drink
        _drink++;
        if (_drink >= 6) {
          this.setState({ drink: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ drink: _drink,activeLevel:_drink});
        }
        break;
      case 'tra':
        let _tra = this.state.tra
        _tra++;
        if (_tra >= 6) {
          this.setState({ tra: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ tra: _tra,activeLevel:_tra });
          localStorage.activeLevel = _tra
        }
        break;
      case 'shopping':
        let _shopping = this.state.shopping
        _shopping++;
        if (_shopping >= 6) {
          this.setState({ shopping: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ shopping: _shopping,activeLevel:_shopping });
          localStorage.activeLevel = _shopping
        }
        break;
      case 'ent':
        let _ent = this.state.ent
        _ent++;
        if (_ent >= 6) {
          this.setState({ ent: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ ent: _ent,activeLevel:_ent });
          localStorage.activeLevel = _ent
        }
        break;
      case 'housing':
        let _housing = this.state.housing
        _housing++;
        if (_housing >= 6) {
          this.setState({ housing: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ housing: _housing,activeLevel:_housing });
          localStorage.activeLevel = _housing
        }
        break;
      case 'threeC':
        let _threeC = this.state.threeC
        _threeC++;
        if (_threeC >= 6) {
          this.setState({ threeC: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ threeC: _threeC,activeLevel:_threeC });
          localStorage.activeLevel = _threeC
        }
        break;
      case 'med':
        let _med = this.state.med
        _med++;
        if (_med >= 6) {
          this.setState({ med: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ med: _med,activeLevel:_med });
          localStorage.activeLevel = _med
        }
        break;
      case 'misc':
        let _misc = this.state.misc
        _misc++;
        if (_misc >= 6) {
          this.setState({ misc: 5,activeLevel:6 });
          break;
        } else {
          this.setState({ misc: _misc,activeLevel:_misc });
          localStorage.activeLevel = _misc
        }
        break;


    }

  }

  onAdd = () => {
    this.setState({ open: true })
  }

  onCityOpen = () => {
    this.setState({ open2: true })
  }

  onCityClose = () => {
    let boo = !this.state.open2
    setTimeout(() => {
      this.setState({ open2: boo })
    }, 100);
  }

  onBuildingClose = () => {
    let boo = !this.state.open3
    setTimeout(() => {
      this.setState({ open3: boo })
    }, 100);
  }

  onDelete = () => {
    const dataArray = this.state.dataArray;
    const deleteData = dataArray.filter(item => item.key === this.openIndex)[0];
    const i = dataArray.indexOf(deleteData);
    dataArray.splice(i, 1);
    delete this.state.style[this.openIndex];
    this.openIndex = null;
    this.setState({ dataArray });
  };

  onTouchStart = (e, i) => {
    if (this.openIndex || this.openIndex === 0) {
      const animation = this.state.animation;
      animation[this.openIndex] = { x: 0, ease: 'easeOutBack' };
      this.setState({ animation }, () => {
        delete this.state.style[this.openIndex];
      });
      this.openIndex = null;
      return;
    }
    this.index = i;
    this.mouseXY = {
      startX: e.touches === undefined ? e.clientX : e.touches[0].clientX,
    };
  };

  onTouchEnd = () => {
    if (!this.mouseXY) {
      return;
    }
    const animation = this.state.animation;
    if (this.position[this.index] <= -60) {
      this.openIndex = this.index;
      animation[this.index] = { x: -60, ease: 'easeOutBack' };
    } else {
      animation[this.index] = { x: 0, ease: 'easeOutBack' };
    }

    delete this.mouseXY;
    delete this.position[this.index];
    this.index = null;
    this.setState({ animation });
  }

  onCardClose = () => {
    this.setState({
      isShowLevelUp:false
    })
  }

  onPanelChange = (value, mode) => {
    console.log(value)
    let date = value._d + ''
    let arr = date.split(' ')
    let _arr = arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3] + ' ' + arr[4]
    console.log(_arr)
    this.setState({ activeDate: _arr })
    this.refs.cal.innerHTML = _arr
    setTimeout(() => {
      this.setState({ open2: false })
    }, 200);
  }

  onTouchMove = (e) => {
    if (!this.mouseXY) {
      return;
    }
    const currentX = e.touches === undefined ? e.clientX : e.touches[0].clientX;
    let x = currentX - this.mouseXY.startX;
    x = x > 10 ? 10 + (x - 10) * 0.2 : x;
    x = x < -60 ? -60 + (x + 60) * 0.2 : x;
    this.position[this.index] = x;
    const style = this.state.style;
    style[this.index] = { transform: `translateX(${x}px)` };
    const animation = [];
    this.setState({ style, animation });
  }

  monnycont = (e) => {
    e.target.value.slice(1)
    let value = Number(e.target.value.slice(1));
    if (isNaN(value)) {
      this.setState({ monny: 0 });
    } else {
      this.setState({ monny: value });
    }
    // let numver= this.clearNoNum(value)

  }
  //  clearNoNum(value){  
  //    console.log(value)
  //   value = value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符   
  //   value = value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的   
  //   value = value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");  
  //   value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数   
  //   if(value.indexOf(".")< 0 && value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  
  //    return value= parseFloat(value);  
  //   }  
  // }


  render() {


    const tabs = [
      { classify: 'food', img: 'http://localhost:3000/images/fc-category-food.png', title: <div><img src='http://localhost:3000/images/fc-category-food.png' width='50' height='50' /><p>食物</p></div>, data: <img src='http://localhost:3000/images/builds/food-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '食品店' },
      { classify: 'drink', img: 'http://localhost:3000/images/fc-category-drink.png', title: <div><img src='http://localhost:3000/images/fc-category-drink.png' width='50' height='50' /><p>饮品</p></div>, data: <img src='http://localhost:3000/images/builds/drink-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '饮品店' },
      { classify: 'tra', img: 'http://localhost:3000/images/fc-category-traffic.png', title: <div><img src='http://localhost:3000/images/fc-category-traffic.png' width='50' height='50' /><p>交通</p></div>, data: <img src='http://localhost:3000/images/builds/tra-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '公交站' },
      { classify: 'shopping', img: 'http://localhost:3000/images/fc-category-shopping.png', title: <div><img src='http://localhost:3000/images/fc-category-shopping.png' width='50' height='50' /><p>消费</p></div>, data: <img src='http://localhost:3000/images/builds/shopping-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '百货中心' },
      { classify: 'ent', img: 'http://localhost:3000/images/fc-category-entertain.png', title: <div><img src='http://localhost:3000/images/fc-category-entertain.png' width='50' height='50' /><p>娱乐</p></div>, data: <img src='http://localhost:3000/images/builds/ent-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '游戏中心' },
      { classify: 'housing', img: 'http://localhost:3000/images/fc-category-housing.png', title: <div><img src='http://localhost:3000/images/fc-category-housing.png' width='50' height='50' /><p>居家</p></div>, data: <img src='http://localhost:3000/images/builds/house-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '住所' },
      { classify: 'threeC', img: 'http://localhost:3000/images/fc-category-threec.png', title: <div><img src='http://localhost:3000/images/fc-category-threec.png' width='50' height='50' /><p>3C</p></div>, data: <img src='http://localhost:3000/images/builds/threec-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '电器店' },
      { classify: 'med', img: 'http://localhost:3000/images/fc-category-medical.png', title: <div><img src='http://localhost:3000/images/fc-category-medical.png' width='50' height='50' /><p>医药</p></div>, data: <img src='http://localhost:3000/images/builds/med-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '医院' },
      { classify: 'misc', img: 'http://localhost:3000/images/fc-category-misc.png', title: <div><img src='http://localhost:3000/images/fc-category-misc.png' width='50' height='50' /><p>其他</p></div>, data: <img src='http://localhost:3000/images/builds/misc-1.png' width='160px' style={{ position: "absolute", transform: 'translate(-50%, -11%)' }} />, name: '杂货店' },
    ];

    const sidebar = (<div style={{ position: 'relative', zIndex: '10' }}>
      <p style={{ color: '#FFF', fontSize: '18px', display: 'block', position: 'absolute', left: '36%', top: '3%', zIndex: '10' }}></p>
      <p style={{ fontSize: '21px', textAlign: 'center', color: '#FFF', display: 'block', background: 'rgba(255,255,255,.3)', borderRadius: '25px', width: '30%', position: 'absolute', top: '10%', left: '36%', zIndex: '10' }}>{this.state.activeText}</p>
      <Tabs tabs={tabs}
        onChange={(tab, index) => {
          this.setState({ activeText: tab.name })
          localStorage.activeText = tab.name;
          localStorage.activeImg = tab.img;
          localStorage.activeClassify = tab.classify;
        }}
        useOnPan={false}
        swipeable={false}
        prerenderingSiblingsNumber={10}
        tabBarPosition='bottom' tabBarUnderlineStyle={{ display: 'none' }} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={9} />}>
        {this.renderContent}
      </Tabs>
      <span ref="cal" onClick={this.onCityClose.bind(this)} style={{ textAlign: 'center', display: 'block', background: '#fff', paddingLeft: '5vw', fontSize: '16px', width: '100%', height: '4vh' }}>请选择日期</span>
      <input placeholder="开始记账" ref="value" onChange={this.monnycont.bind(this)} value={`￥${this.state.monny}`} type="text" style={{ paddingLeft: '5vw', fontWeight: 'bold', fontSize: '20px', width: '100%', height: '8vh', border: 'none' }} />
      <input placeholder="备注" ref="value2" type="text" style={{ paddingLeft: '5vw', fontWeight: 'bold', fontSize: '20px', width: '100%', height: '8vh', border: 'none' }} />
      <p className="buttons">
        <Button onClick={this.onClose}>确定</Button>
      </p>
    </div>);

    const sidebar2 = (
      <div style={{ width: 400, border: '1px solid #d9d9d9', borderRadius: 4, background: '#FFF' }}>
        <Calendar fullscreen={false} onSelect={this.onPanelChange.bind(this)} locale={zhCN} />
      </div>
    );

    const sidebar3 = (
      <div style={{ width: '100vw', height: '70vh', background: 'skyblue', paddingTop: '5vh', paddingLeft: '7vw' }}>
        <div style={{ height: '70vh', position: 'relative', background: 'url(http://localhost:3000/images/builds/mainground.png)no-repeat' }}>
          <img style={{ position: 'absolute', bottom: '44vh', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-food${this.state.food}.png`} alt="" />
          <img style={{ position: 'absolute', bottom: '44vh', left: '28.5vw', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-drink${this.state.drink}.png`} width='120' alt="" />
          <img style={{ position: 'absolute', bottom: '44.5vh', left: '58vw', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-traffic${this.state.tra}.png`} width='120' alt="" />
          <img style={{ position: 'absolute', bottom: '28vh', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-shopping${this.state.shopping}.png`} width='120' alt="" />
          <img style={{ position: 'absolute', bottom: '28vh', left: '29vw', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-entertain${this.state.ent}.png`} width='120' alt="" />
          <img style={{ position: 'absolute', bottom: '27.5vh', left: '58vw', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-housing${this.state.housing}.png`} width='120' alt="" />
          <img style={{ position: 'absolute', bottom: '13vh', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-threec${this.state.threeC}.png`} width='120' alt="" />
          <img style={{ position: 'absolute', bottom: '13vh', left: '29vw', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-medical${this.state.med}.png`} width='120' alt="" />
          <img style={{ position: 'absolute', bottom: '13vh', left: '58vw', width: '28vw', height: '28vh' }} src={`http://localhost:3000/images/builds/prefix-misc${this.state.misc}.png`} width='120' alt="" />
        </div>
      </div>
    );

    const liChildren = this.state.dataArray.map((item) => {
      const { img, text, key, price, classify } = item;
      return (<li
        key={key}
        onMouseMove={this.onTouchMove}
        onTouchMove={this.onTouchMove}
      >
        <div className={`${this.props.className}-delete`}>
          <a onClick={(e) => { this.onDelete(e); }}>删除</a>
        </div>
        {/* {(()=>{
           localStorage.activeClassify = classify
        })()} */}
        <TweenOne
          className={`${this.props.className}-content`}
          onTouchStart={e => this.onTouchStart(e, key)}
          onMouseDown={e => this.onTouchStart(e, key)}
          onTouchEnd={this.onTouchEnd}
          onMouseUp={this.onTouchEnd}
          animation={this.state.animation[key]}
          style={this.state.style[key]}
        >
          <div className={`${this.props.className}-img`}>
            <img src={img} width="44" height="44" onDragStart={e => e.preventDefault()} />
          </div>
          <p style={{ width: '70vw', fontSize: '18px' }}><span>{text}</span><span style={{ float: 'right', color: '#AAA', fontSize: '16px' }}>{price}</span></p>
        </TweenOne>
      </li>);
    });
    return (<div className="rab" style={{ position: "absolute", width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className={`${this.props.className}-wrapper`} style={{ position: 'relative', zIndex: '1' }}>
        <div className={this.props.className}>
          <div className={`${this.props.className}-header`}>
            <i />
            <span style={{ fontSize: '20px' }}>账单</span>
            {/* <span onClick={this.onCityOpen} style={{marginLeft:'2vw',float:'right',fontSize:'20px',marginRight:'5vw'}}>日历</span> */}
          </div>
          <p className="buttons">
            <Button onClick={this.onAdd}>添加</Button>
          </p>
          <QueueAnim
            component="ul"
            animConfig={[
              { opacity: [1, 0], translateY: [0, 30] },
              { height: 0 },
            ]}
            ease={['easeOutQuart', 'easeInOutQuart']}
            duration={[550, 450]}
            interval={150}
          >
            {liChildren}
          </QueueAnim>
        </div>
      </div>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight, marginBottom: '40px' }}
        position={'bottom'}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 20 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
      </Drawer>
      <Drawer
        className="my-city"
        style={{ minHeight: document.documentElement.clientHeight }}
        position={'top'}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 20 }}
        sidebar={sidebar2}
        open={this.state.open2}
        onOpenChange={this.onOpenChange}
      >
      </Drawer>
      <Drawer
        className="my-building"
        style={{ minHeight: document.documentElement.clientHeight }}
        position={'top'}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 20 }}
        sidebar={sidebar3}
        open={this.state.open3}
        onOpenChange={this.onOpenChange}
      >
      </Drawer>
      <div onClick={this.onBuildingClose} style={{ position: 'absolute', top: '79%', right: '2%', zIndex: '2' }}>
        <img src='http://localhost:3000/images/settings-lang.png' width='50' height='50' />
      </div>
      {/* <div style={{ position: 'absolute', top: '70%', right: '2%', zIndex: '2', transform: 'rotate(45deg)' }}>
        <img src='http://localhost:3000/images/vg_close.png' width='50' height='50' />
      </div> */}

      <div ref="card" onClick={this.onCardClose} className={this.state.isShowLevelUp?"mask-wrap":"mask-wrap hide"}>
      <div className="mask">
      <Card
        title=" "
        style={{ width: 300, position: 'absolute', top: '30%', left: '14%', zIndex: '9' }}
      >
        <p></p>
        {(()=>{
          console.log(this.state.activeLevel)
          if(this.state.activeLevel>=6){
              return(<div>
              <img style={{marginLeft:'15vw'}} src={`http://localhost:3000/images/builds/prefix-${this.state.activeClassify}${this.state.activeLevel*1-1}.png`} width='150' alt="" />
                      <p style={{marginLeft:'10vw',fontSize:'18px',fontWeight:'bold'}}>建筑物已到达最高等级！</p>
                      </div>
              )
          }else{
            return(
              <div>
                 <img src={`http://localhost:3000/images/builds/prefix-${this.state.activeClassify}${this.state.activeLevel*1-1}.png`} width='100' alt="" />
            <img src="http://localhost:3000/images/arrow.png" alt="" width='50' style={{transform:`translate(0,-5vh)`}}/>
            <img src={`http://localhost:3000/images/builds/prefix-${this.state.activeClassify}${this.state.activeLevel*1}.png`} width='100' alt="" />
              <p style={{marginLeft:'10vw',fontSize:'18px',fontWeight:'bold'}}>建筑物已到达{this.state.activeLevel*1}级！</p> 
              </div>
            )
          }
        })()}
       
      </Card>
      </div> 
      </div>
      
    </div>);
  }
}


export default Ltest3;