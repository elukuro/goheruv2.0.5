import './style/app.scss'
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import Promise from 'redux-promise';
import reducers from './reducers/';
const createStoreWithMiddleware=applyMiddleware(Promise)(createStore);
import App from './component/app';
import Notes from './component/notes';
import Detail from './component/detail';
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div className="body-wrapper">
				<Switch>
					<Route path="/notes/:id" component={Detail}/>
					<Route path="/notes" component={Notes}/>	
					<Route path="/" component={App}/>	
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	,document.getElementById('root')
)

