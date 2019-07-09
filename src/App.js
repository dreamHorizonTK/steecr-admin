import React, { Component } from 'react';
import { Provider} from 'react-redux';
import {
    HashRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Login from './page/login/login.js';
import Default from './page/default/default';
import Authority from './router/authority';

import store from './store/store';

export default class App extends Component {

    render() {
        return (
            <Provider store={ store }>
                <HashRouter>
                    <Switch>
                        {/* <Redirect exact from='/' to='/login' /> */}
                        <Route path='/login' component={ Login }></Route>
                        <Authority path='/' component={ Default } />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}
