import React, { Component } from "react";
import "./Home.css";
import { Route } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Route path="/home/wechat" component={Wechat} />
                <Route path="/home/contact" component={Contact} />
                <Route path="/home/research" component={Research} />
                <Route path="/home/mine" component={Mine} />
                <Xactionsheet />
                <Xfooter />
            </div>
        )
    }
}

export default Home;
