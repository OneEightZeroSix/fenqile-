import React, { Component } from "react";

class floorWrap extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:
				[
					{
						name:`一加6T`,
						img:`https://cimgs1.fenqile.com/ibanner2/M00/33/13/jagHAFvX4nGAETJqAABphSkxeOg801_750x750.jpg`,
						iar:[`全面屏`,`光感屏幕`,`骁龙845`],
						price:3299,
						monthPrice:136.46
					},
					{
						name:`iPhone XR`,
						img:`https://cimgs1.fenqile.com/ibanner2/M00/33/01/jagHAFvOvx6AXgeqAACIbkXA-nI720_750x750.jpg`,
						iar:[`全面屏`,`光感屏幕`,`骁龙845`],
						price:3299,
						monthPrice:136.46
					},
					{
						name:`一加6T`,
						img:`https://cimgs1.fenqile.com/ibanner2/M00/33/01/jagHAFvOvx6AXgeqAACIbkXA-nI720_750x750.jpg`,
						iar:[`全面屏`,`光感屏幕`,`骁龙845`],
						price:3299,
						monthPrice:136.46
					},
					{
						name:`一加6T`,
						img:`https://cimgs1.fenqile.com/ibanner2/M00/33/13/jagHAFvX4nGAETJqAABphSkxeOg801_750x750.jpg`,
						iar:[`全面屏`,`光感屏幕`,`骁龙845`],
						price:3299,
						monthPrice:136.46
					},
					{
						name:`一加6T`,
						img:`https://cimgs1.fenqile.com/ibanner2/M00/33/13/jagHAFvX4nGAETJqAABphSkxeOg801_750x750.jpg`,
						iar:[`全面屏`,`光感屏幕`,`骁龙845`],
						price:3299,
						monthPrice:136.46
					},
					{
						name:`一加6T`,
						img:`https://cimgs1.fenqile.com/ibanner2/M00/33/13/jagHAFvX4nGAETJqAABphSkxeOg801_750x750.jpg`,
						iar:[`全面屏`,`光感屏幕`,`骁龙845`],
						price:3299,
						monthPrice:136.46
					}
				]
			
		}
	}
	render(){
		return (
			<section className="floor-wrap" >
				<div className="floor-title">热销手机</div>
				<ul className="hot-sale clear js-need-handle js-floor">
					{(()=>{
						return this.state.data.map((item, index)=> {
							return (
									<li className={index%2==0? "clear shop-right":"clear shop-left"}>
								        <a>
								            <div className="shop-img">
								                <img className="imgauto" src={item.img} alt="#"   style={{opacity: '1'}}/>
								            </div>
								            <div className="shop-detail" style={{backgroundColor: '#fff5f8'}}>
								                <h3>{item.name}</h3>
								                <div className="shop-tip">
								                    {(()=>{
								                    		item.iar.map((item, index)=> {
								                    			return (
																		<i>{item}</i>
								                    				)
								                    		})
								                    })()}
								                </div>
								                <p className="shop-price">¥{item.price}</p>
								                <p className="shop-month-price">月供 ¥ {item.monthPrice}起</p>
								            </div>
								        </a>
								    </li>	
								)
						})
					})()}
				    
				    <li className="clear shop-right">
				        <a>
				            <div className="shop-img">
				                <img className="imgauto" src="https://cimgs1.fenqile.com/ibanner2/M00/33/01/jagHAFvOvx6AXgeqAACIbkXA-nI720_750x750.jpg" alt="#" style={{opacity: '1'}}/>
				            </div>
				            <div className="shop-detail" style={{backgroundColor: '#fff5f8'}}>
				                <h3>iPhone XR</h3>
				                <div className="shop-tip">
				                    <i>抢购</i>
				                    <i>6期免息</i>
				                    <i>全面屏</i>
				                </div>
				                <p className="shop-price">¥ 6299</p>
				                <p className="shop-month-price">月供 ¥ 260.55起</p>
				            </div>
				        </a>
				    </li>
				</ul>
			</section>
		)
	}
}

export default floorWrap;