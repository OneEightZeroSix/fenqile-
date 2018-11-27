import React, {
    Component
} from "react";
import {createHashHistory} from 'history';

import Xlogin from './Xlogin/Xlogin.jsx';
const history = createHashHistory();



class Login extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
        	<Xlogin history={history} />
        )
    }
}

export default Login;