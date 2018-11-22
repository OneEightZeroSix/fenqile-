import React, {
    Component
} from "react";

import XmineHead from './Xmine/XmineHead.jsx';
import XmineTab from './Xmine/XmineTab.jsx';
import XmineFoot from './Xmine/XmineFoot.jsx';

class Mine extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
        }
    }
    // html
    render(){
        return (
        	<div className="account-body">
            	<XmineHead />
            	<XmineTab />
            	<XmineFoot />
            </div>
        )
    }
    // js
}

export default Mine;
