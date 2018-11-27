import React, {
    Component
} from "react";
import {createHashHistory} from 'history';

import Xregiste from './Xregiste/Xregiste.jsx';
const history = createHashHistory();

class Registe extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            	<Xregiste  history={history}/>
            </div>
        )
    }

}

export default Registe;