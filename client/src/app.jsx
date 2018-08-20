import React from 'react';

import { render } from 'react-dom';
import {
  Router,
  Route,
  Link,
  Switch,
	Layout,
	browserHistory,
	BrowserRouter
} from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';



import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store, {history} from './store';
import HomePage from './containers/HomePage.jsx';

class Hello extends React.Component{render(){return(<div>Hello</div>)}}
class Bye extends React.Component{render(){return(<div>Bye</div>)}}

	const router = (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					
						<Switch>
							<Route exact path="/" component={HomePage}/>
							
					</Switch>	
				</div>	
			</ConnectedRouter>  
		</Provider>
	)


render(router, document.getElementById('react-app'));