import React, {
	Component
} from "react";

import { Link } from "react-router-dom";
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';

import "./Xmine.css";
import "./Xmine2.css";

class XmainFoot extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			goods: [],
			imgHeight:'180px',
			news:[],
			result:[]
		}
	}
	
	getGood() {
		React.axios.get("phone.json").then((response) => {
			var newgoods = response.data.result_rows;
			var j = 0;
			var res = [];
			var cos = [];
			for(var i = 0; i < newgoods.length; i += 3) {
				res.push(newgoods.slice(i, i + 3));
				cos.push(j);
				j++;
			}
			this.setState({
				goods:res,
				news:cos
			})
			console.log(this.state.goods)
			return this.state.result
		}).catch(function(error) {
			console.log(error);
		})
	}

	render() {
		return(
			<div id="newgoodslist">
				<WingBlank>
		        <Carousel autoplay={true} infinite beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)} afterChange={index => console.log('slide to', index)} style={{height:'180px', marginBottom: '50px',background:'#fff',width:'100%',position:'absolute',left:'0'	}}>
	        		{this.state.goods.map((item,idx)=>{
        				return (
        					<ul className = "part-ul js-banner-item" key={idx} data-index = "1" style = {{width: '100%', left: '-375px', transitionDuration: '400ms', transform: 'translate(0px, 0px) translateZ(0px)'}} >
        					{
        						item.map(function(item1,number){
	                                return (
	                                    <li style={{width: '28%',marginTop: '5px',display: 'inline-block',padding:'10px'}} key={number} >
                                            <Link to ="#" title = {item1.name} data-fql-stat = "GUESSYOULIKE.MES201604210068519" data-fql-ftag = "MOBILE.ACCOUNT.GUESSYOULIKE.MES201604210068519">
                                                <div className = "like-pic" > 
                                                    <img alt="" src = "https://cimgs1.fenqile.com/product/M00/23/3E/hRoGAFhCdsWAL2BOAAVsLa3Ty4M830_180x180.jpg" className = "imgauto" />
                                                </div> 
                                                <h4 style={{textAlign:'center',marginBottom:'5px'}}> {item1.name} </h4> 
                                                <div className = "part-price" style={{background: '#fe4979', color: '#fff', fontSize: '1rem',whiteSpace: 'nowrap',textAlign:'center'}}>月供：¥ x36 </div>
                                            </Link>
                                    	</li>
	                                 )
	                            })
        					}
        					</ul>
        				)
			        })}
		        </Carousel>
		      	</WingBlank>
			</div>
		)

	}
	componentDidMount () {
		setTimeout(() => {
		this.getGood()
	      this.setState({
	        news: this.state.goods
	      });
	    }, 100);
	}

}

export default XmainFoot;