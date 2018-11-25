import React, {
    Component
} from "react";


import Xregiste from './Xregiste/Xregiste.jsx';


class Registe extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            	<Xregiste />
            </div>
        )
    }
}

export default Registe;