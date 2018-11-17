import React from 'react';

// 虚拟DOM
import ReactDOM from 'react-dom';

// axios
import axios from 'axios';


import './index.css';
import * as serviceWorker from './serviceWorker';


// 路由功能
import { HashRouter as Router, Route , Redirect} from "react-router-dom";

// 状态管理
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

// 子组件 复用组件
// import App from './App';
import Home from './pages/home/home.jsx';


React.axios = axios;
// 创建仓库  试验 可删除
const store = createStore(function(state={
    name:"laoyao",
    text:"取消了",
    isShowActionSheet:false
}, action){
    const count = state.count
    switch (action.type) {
      case 'increase':
        return {
          ...state,
          count: count + 2
        }
      case 'multi':
        return Object.assign({}, state, {name: action.name});
      case 'editText':
        return {
            ...state,
            text:action.text
        }
      case 'toggleSheet':
        return {
            ...state,
            isShowActionSheet:action.isShowActionSheet
        }
      default:
        return state
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/home/" component={Home} />
            </div>
        </Router>
    </Provider>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
