import React, {
	Component
} from "react";
import XexchangeRateHeader from './XexchangeRateHeader/XexchangeRateHeader';
import XexchangeRateMain from './XexchangeRateMain/XexchangeRateMain';


import "../../assets/global.css"

import "./ExchangeRate.css"
class ExchangeRate extends Component {
	render() {
		return (
			<div>
				<XexchangeRateHeader />
				<XexchangeRateMain />
			</div>
		)
	}
}

export default ExchangeRate;