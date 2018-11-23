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
			imgHeight: '180px',
			news: [],
			result: []
		}
	}

	getGood() {
		React.axios.get("goods.json").then((response) => {
			console.log(response.data)
			var newgoods = response.data;
			var j = 0;
			var res = [];
			var cos = [];
			for(var i = 0; i < newgoods.length; i += 3) {
				res.push(newgoods.slice(i, i + 3));
				cos.push(j);
				j++;
			}
			this.setState({
				goods: res,
				news: cos
			})
			console.log(this.state.goods)
			return this.state.result
		}).catch(function(error) {
			console.log(error);
		})
	}

	render() {
		return(
		    <section className="my-item like-item-box" id="newgoodslist" style={{height:'220px'}}>
                <Carousel autoplay effect="fade" beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)} style={{height:'180px', marginBottom: '50px',background:'#fff',width:'100%',position:'absolute',left:'0'}}>
                {this.state.goods.map((item,idx)=>{
                    return (
                        <ul className = "part-ul js-banner-item" key={idx} data-index ={idx} style = {{width: '100%', left: '-375px'}} >
                        {
                            item.map(function(item1,number){
                                return (
                                    <li style={{width: '33.3%',marginTop: '5px',display: 'inline-block',padding:'15px'}} key={number} >
                                        <Link to ="item1.href" title = {item1.title} data-fql-stat = "GUESSYOULIKE.MES201604210068519" data-fql-ftag = "MOBILE.ACCOUNT.GUESSYOULIKE.MES201604210068519"style={{width:'100%',padding:'0'}}>
                                            <div className = "like-pic" > 
                                                <img alt="" src = {item1.img} className = "imgauto" />
                                            </div> 
                                            <h4 style={{textAlign:'center',marginBottom:'5px'}}> {item1.title} </h4> 
                                            <div className = "part-price" style={{background: '#fe4979', color: '#fff', fontSize: '1rem',whiteSpace: 'nowrap',textAlign:'center'}}>月供：¥{item1.price}</div>
                                        </Link>
                                    </li>
                                 )
                            })
                        }
                        </ul>
                    )
                })}
           	 	</Carousel>
        	</section>
		)

	}
	componentDidMount() {
		setTimeout(() => {
			this.getGood()
			this.setState({
				news: this.state.goods
			});
		}, 100);
	}

}

export default XmainFoot;