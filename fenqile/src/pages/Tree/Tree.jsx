import React, {
	Component
} from "react";

import Xtree from './Xtree/Xtree';
import Xtreelogin from './Xtree/Xtreelogin';
import { Route } from "react-router-dom";



class Tree extends Component {
	constructor(props) {
        super(props);
        this.state = {
        }
    }
	render() {
		return (
			<div id="fruiter">
			 	<Route path="/tree/wait" component={Xtreelogin} />
	            <Route path="/tree/content" component={Xtree} />
			</div>
		)
	}
}

export default Tree;