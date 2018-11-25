import React, { Component } from "react";

import "./cart.scss"
import Cartbottom from './Cartbottom/Cartbottom.jsx'
import Cartheader from './Cartheader/Cartheader.jsx'
import Cartmain from './main/Xcartmain.jsx'

class Cart extends Component {
	render() {
		return (
			<div className="cart">
				<Cartheader/>
				<Cartmain/>
				<Cartbottom/>
			</div>
		)
	}
}

export default Cart;