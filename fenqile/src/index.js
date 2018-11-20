import React from 'react';

// 虚拟DOM
import ReactDOM from 'react-dom';

// axios
import axios from 'axios';


import './index.css';
import * as serviceWorker from './serviceWorker';


// 路由功能
import { HashRouter as Router, Route , Redirect,Switch } from "react-router-dom";

// 状态管理
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

// 子组件 复用组件
// import App from './App';
import Home from './pages/home/home.jsx';


React.axios = axios;
// 创建仓库  试验 可删除
const store = createStore(function(state={
    tab:0,
}, action){
    switch (action.type) {
      case 'toggleTab':
        return {
            ...state,
            tab:action.tab
        }
      default:
        return state
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <Switch>
                <Route path="/home/" component={Home} />
                <Redirect from="/" exact to="/home/mainPage1" />
            </Switch>
        </Router>
    </Provider>
    , 
    document.getElementById('root')
);

serviceWorker.unregister();
