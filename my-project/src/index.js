import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from "antd";
import vi_VN from "antd/lib/locale/vi_VN";
import appReducers from './reducers';
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancer(applyMiddleware(thunk))
);


const { PUBLIC_URL } = process.env;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={vi_VN}>
    <App store={store} basename={PUBLIC_URL} />
  </ConfigProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
