import React, { Component } from "react";
import Xbanner  from "../home/index/Xbanner.jsx";
import Wrap  from "./floorWrap.jsx";

class phonemain extends Component {
	constructor(props){
		super(props);
		this.state = {
			Aimg:[
				`https://cimgs1.fenqile.com/ibanner2/M00/32/D1/jagHAFuhuSKARzIEAABcZtKuOug937_690x320.png`,
				`https://cimgs1.fenqile.com/ibanner2/M00/32/64/jqgHAFvuncmAaBm0AABWmI-Nx_c767_690x320.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/32/3E/jqgHAFvZcpSAWb8VAAAtXJhwcxw377_690x320.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/32/6C/jqgHAFv2qamAWyGkAABV4PDhxJU134_690x320.png`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/10/jagHAFvWqfOAENrbAABjzJFeCsw269_690x320.png`,
				`https://cimgs1.fenqile.com/ibanner2/M00/00/C9/j6gHAFvqOAOAAmZaAABHzm0vkm0893_690x320.png`,
				`https://cimgs1.fenqile.com/ibanner2/M00/32/D3/jagHAFuiGoiAfQu8AABweBb2ODE150_690x320.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/33/3C/jagHAFvuNXmAb1F_AABMeGV2kVQ817_690x320.png`,
				`https://cimgs1.fenqile.com/ibanner2/M00/32/63/jqgHAFvueMmAaIxhAABWEQFLz_o675_690x320.png`,
				`https://cimgs1.fenqile.com/ibanner2/M00/00/3B/j6gHAFt2fumANUhjAABDz4RJOhM625_690x320.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/03/5E/jqgHAFpwN66AJjA6AACUBCvKeuM274_690x320.jpg`,
				`https://cimgs1.fenqile.com/ibanner2/M00/00/08/jagHAFon3aGAai8EAABFWJafRDc689_690x320.png`,
				`https://cimgs1.fenqile.com/ibanner2/M00/32/CC/jagHAFubnayAWl1rAAB4QsUS9A8811_690x320.png`,
				`https://cimgs1.fenqile.com/ibanner2/M00/00/D6/j6gHAFvz0ymAUheGAAAtcsOwBLk803_690x320.png`
			]
		}
	}
	render(){
		return (
			<div >
				<Xbanner Aimg={this.state.Aimg}/>
				<Wrap/>
			</div>
		)
	}
}

export default phonemain;