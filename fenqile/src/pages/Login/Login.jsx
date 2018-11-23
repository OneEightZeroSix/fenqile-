import React, {
    Component
} from "react";


import Xlogin from './Xlogin/Xlogin.jsx';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            	<Xlogin />
            </div>
        )
    }
}

export default Login;