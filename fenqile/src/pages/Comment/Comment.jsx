import React, {
    Component
} from "react";


import Xheader from '../Param/Xheader/Xheader.jsx';
import Xallcomment from './Xallcomment/Xallcomment.jsx';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            	<Xheader status="comment"/>
            	<Xallcomment />
            </div>
        )
    }
}

export default Detail;