import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import  createHashHistory  from './history';
import configureStore from './store';

const store = configureStore();
const routes = require('./routes').default;
ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={createHashHistory}>
                <Switch>{renderRoutes(routes)}</Switch>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
);


