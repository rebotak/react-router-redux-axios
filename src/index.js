import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import Store, { history } from './store';
import { ConnectedRouter } from 'react-router-redux';


render(
	<Provider store={Store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
