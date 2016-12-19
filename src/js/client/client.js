import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, 
		browserHistory, Link} from "react-router";

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Layout from "../shared/components/Layout";
import Help from "../shared/components/Help/Help";
import routes from "../shared/routes"
import allReducer from "../shared/Reducers/AllReducers";


const app = document.getElementById('app');

const initialState = window.__REDUX_STATE__
const store = createStore(allReducer,initialState);
// console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
   		<Router history={browserHistory} routes={routes} />
  	</Provider>
	, app);
